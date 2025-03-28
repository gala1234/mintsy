"use client";

import React from "react";
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
  colors = ["#7a6ff0", "#ffb8b1", "#e4d7f5", "#a8e6cf"],
  duration = 30,
}) => {
  // Split text into words
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
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
          {i !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

export default ColorHead;
