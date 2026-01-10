## ASCII video files

The v5 ASCII player reads pixels from a **local mp4** served by this app (it can’t read pixels directly from a YouTube iframe due to browser security restrictions).

### Play the requested YouTube video as ASCII

- **Download the YouTube video locally** (for personal use / where you have rights).
- **Save it as** `public/videos/Gbqa9n1XOes.mp4`
- **Start the app** and open `v5` → press `V`.

Example (if you have `yt-dlp` installed):

```bash
yt-dlp -f "bv*+ba/b" --merge-output-format mp4 -o "public/videos/Gbqa9n1XOes.mp4" "https://www.youtube.com/watch?v=Gbqa9n1XOes"
```
