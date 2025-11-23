"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const STAGGER = 0.035;

interface RollingTextProps {
  children: string;
  className?: string;
  center?: boolean;
}

export const RollingText: React.FC<RollingTextProps> = ({
  children,
  className,
  center = false,
}) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{ lineHeight: 1 }}
    >
      <div>
        {children.split("").map((letter, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ ease: "easeInOut", delay }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((letter, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ ease: "easeInOut", delay }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};
