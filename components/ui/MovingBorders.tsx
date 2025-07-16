"use client";

import React, { useRef, useCallback, useMemo } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 2000,
  className,
  ...otherProps
}: ButtonProps) {
  const borderRadiusStyle = useMemo(() => ({
    borderRadius: borderRadius,
  }), [borderRadius]);

  const innerBorderRadius = useMemo(() => 
    `calc(${borderRadius} * 0.96)`, [borderRadius]
  );

  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={borderRadiusStyle}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: innerBorderRadius }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-80 bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased transition-all duration-200 hover:bg-slate-800/[0.8]",
          className
        )}
        style={{ borderRadius: innerBorderRadius }}
      >
        {children}
      </div>
    </Component>
  );
}

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  // Memoize the animation callback for better performance
  const animate = useCallback((time: number) => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  }, [duration, progress]);

  useAnimationFrame(animate);

  // Optimize transforms with better error handling
  const x = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    try {
      return path.getPointAtLength(val).x;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    try {
      return path.getPointAtLength(val).y;
    } catch {
      return 0;
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};