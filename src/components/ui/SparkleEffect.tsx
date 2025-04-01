"use client";

import React, { useState, useEffect } from "react";

interface SparkleEffectProps {
  count?: number;
}

const SparkleEffect: React.FC<SparkleEffectProps> = ({ count = 3 }) => {
  const [sparkles, setSparkles] = useState<
    { id: number; top: string; left: string; delay: string }[]
  >([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: count }).map((_, index) => ({
      id: index,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setSparkles(newSparkles);
  }, [count]);

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
          }}
        />
      ))}
    </>
  );
};

export default SparkleEffect;
