"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ColorHeadProps {
  text: string;
  className?: string;
  colors?: string[];
  duration?: number;
}

const ColorHead: React.FC<ColorHeadProps> = ({
  text,
  className = "",
  colors = ["#7a6ff0", "#111827", "#8347d1"],
  duration = 30,
}) => {
  // Split text into words
  const words = text.split(" ");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Only start animations when component is mounted and visible
  useEffect(() => {
    // Small delay to ensure other critical content loads first
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={className}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          {shouldAnimate ? (
            <motion.span
              animate={{
                color: colors,
              }}
              transition={{
                color: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: duration,
                  ease: "easeInOut",
                },
              }}
            >
              {word}
            </motion.span>
          ) : (
            <span style={{ color: colors[0] }}>{word}</span>
          )}
          {i !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

export default ColorHead;
