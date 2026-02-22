import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if the target or any of its parents are interactive
            const target = e.target;
            const isInteractive =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovering(isInteractive);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 mix-blend-difference"
            style={{ zIndex: 999999 }}
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: isHovering ? 1.5 : 1,
                rotate: isHovering ? -45 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.5,
            }}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-colors duration-300 ${isHovering ? "text-neutral-400" : "text-white"}`}
            >
                <path
                    d="M2 2L12 28L16 16L28 12L2 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    );
};

export default CustomCursor;
