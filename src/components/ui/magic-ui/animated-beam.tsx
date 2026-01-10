
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React, { forwardRef, useRef } from "react"

export interface AnimatedBeamProps {
  className?: string
  containerRef: React.RefObject<HTMLElement>
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

export const AnimatedBeam = forwardRef<SVGSVGElement, AnimatedBeamProps>(
  (
    {
      className,
      containerRef: _containerRef,
      fromRef: _fromRef,
      toRef: _toRef,
      curvature: _curvature = 0,
      reverse = false,
      duration = Math.random() * 3 + 4,
      delay = 0,
      pathColor = "gray",
      pathWidth = 2,
      pathOpacity = 0.2,
      gradientStartColor = "#8b5cf6",
      gradientStopColor = "#06b6d4",
      startXOffset: _startXOffset = 0,
      startYOffset: _startYOffset = 0,
      endXOffset: _endXOffset = 0,
      endYOffset: _endYOffset = 0,
    },
    ref,
  ) => {
    const id = React.useId()
    const pathRef = useRef<SVGPathElement>(null)

    return (
      <svg
        ref={ref}
        fill="none"
        width="100%"
        height="100%"
        className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
        viewBox="0 0 100 100"
      >
        <path
          ref={pathRef}
          d="M 10,50 Q 50,10 90,50"
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
          fill="none"
        />
        <defs>
          <linearGradient
            className={cn("transform-gpu", {
              "[animation-direction:reverse]": reverse,
            })}
            id={id}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientStartColor} stopOpacity="0" offset="0%" />
            <stop stopColor={gradientStartColor} offset="32.5%" />
            <stop stopColor={gradientStopColor} offset="67.5%" />
            <stop stopColor={gradientStopColor} stopOpacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 10,50 Q 50,10 90,50"
          stroke={`url(#${id})`}
          strokeWidth={pathWidth}
          fill="none"
          initial={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
          animate={{
            strokeDashoffset: reverse ? 1000 : -1000,
          }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </svg>
    )
  },
)

AnimatedBeam.displayName = "AnimatedBeam"
