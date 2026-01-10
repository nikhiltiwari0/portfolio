import React, { useEffect, useMemo, useRef, useState } from "react";

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

export default function AsciiVideoPlayer({
  videos = [],
  cols = 100,
  rows = 40,
  fps = 12,
  charset = " .,:;irsXA253hMHGS#9B&@",
  invert = false,
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [ascii, setAscii] = useState("");
  const [error, setError] = useState("");

  const chars = useMemo(() => charset.split(""), [charset]);
  const currentVideo = videos[currentIdx] || null;

  // Reset state when video changes
  useEffect(() => {
    setIsReady(false);
    setIsPlaying(false);
    setAscii("");
    setError("");
    // Don't reset muted - keep it global across all videos
  }, [currentIdx]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;

    const onLoaded = () => {
      setIsReady(true);
      // Autoplay muted video (allowed by browsers)
      v.play().catch(() => {});
    };
    const onError = () => setError("failed to load");
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      // Auto-advance to next video
      if (currentIdx < videos.length - 1) {
        setCurrentIdx((i) => i + 1);
      } else {
        setCurrentIdx(0); // loop back
      }
    };

    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("error", onError);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("error", onError);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, [currentIdx, videos.length]);

  // Sync muted state with video element
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const v = videoRef.current;
    const c = canvasRef.current;
    if (!v || !c) return undefined;

    const ctx = c.getContext("2d", { willReadFrequently: true });
    if (!ctx) return undefined;

    const frameInterval = 1000 / Math.max(1, fps);

    const tick = (ts) => {
      rafRef.current = window.requestAnimationFrame(tick);

      // Render frames even when paused (to show current frame)
      if (ts - lastTsRef.current < frameInterval && isPlaying) return;
      if (isPlaying) lastTsRef.current = ts;

      const vw = v.videoWidth || 0;
      const vh = v.videoHeight || 0;
      if (!vw || !vh) return;

      c.width = cols;
      c.height = rows;

      ctx.drawImage(v, 0, 0, cols, rows);
      const img = ctx.getImageData(0, 0, cols, rows);
      const data = img.data;

      let out = "";
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const i = (y * cols + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3] / 255;

          let lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
          lum *= a;
          if (invert) lum = 1 - lum;

          const idx = clamp(Math.floor(lum * (chars.length - 1)), 0, chars.length - 1);
          out += chars[idx];
        }
        out += "\n";
      }

      setAscii(out);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, [chars, cols, rows, fps, invert, isPlaying]);

  if (!currentVideo) {
    return (
      <div className="border border-white/15 bg-black/60 p-4 text-xs text-white/50">
        no videos available
      </div>
    );
  }

  return (
    <div className="border border-white/15 bg-black/60">
      <div className="border-b border-white/10 px-4 py-2 text-xs text-white/60 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span>ascii_player (few of my fav songs/snippets rn)</span>
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="text-white/60 hover:text-white transition-colors"
            title={isMuted ? "unmute" : "mute"}
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
        <span className="text-white/40">
          {currentVideo.label} ({currentIdx + 1}/{videos.length})
        </span>
      </div>

      <div className="p-3 space-y-3">
        {/* Video selector */}
        <div className="flex flex-wrap gap-1 text-xs">
          {videos.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setCurrentIdx(i)}
              className={`px-2 py-1 border transition-colors ${
                i === currentIdx
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/15 text-white/60 hover:bg-white/5"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            className="border border-white/15 px-2 py-1 hover:bg-white/10"
            onClick={() => videoRef.current?.play()}
            disabled={!isReady}
          >
            [play]
          </button>
          <button
            type="button"
            className="border border-white/15 px-2 py-1 hover:bg-white/10"
            onClick={() => videoRef.current?.pause()}
            disabled={!isReady}
          >
            [pause]
          </button>
          <button
            type="button"
            className="border border-white/15 px-2 py-1 hover:bg-white/10"
            onClick={() => {
              if (currentIdx > 0) setCurrentIdx((i) => i - 1);
            }}
          >
            [prev]
          </button>
          <button
            type="button"
            className="border border-white/15 px-2 py-1 hover:bg-white/10"
            onClick={() => {
              if (currentIdx < videos.length - 1) setCurrentIdx((i) => i + 1);
            }}
          >
            [next]
          </button>
          <span className="ml-auto text-white/50">
            {error || (isReady ? (isPlaying ? "playing" : "paused") : "loading…")}
          </span>
        </div>

        {/* Hidden video and canvas */}
        <video
          ref={videoRef}
          src={currentVideo.file}
          playsInline
          muted={isMuted}
          autoPlay
          className="hidden"
        />
        <canvas ref={canvasRef} className="hidden" />

        {/* ASCII output */}
        <pre className="text-[7px] leading-[7px] sm:text-[8px] sm:leading-[8px] whitespace-pre text-white/80 overflow-x-auto overflow-y-hidden select-none">
          {ascii || (isReady ? "[loading…]" : "[loading…]")}
        </pre>
      </div>
    </div>
  );
}
