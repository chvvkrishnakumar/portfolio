
import type React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-border/20 stroke-1 dark:stroke-border/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
            opacity="0.5"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-spin items-center justify-center rounded-full border bg-background/10 backdrop-blur-sm [animation-delay:calc(var(--delay)*1s)] [animation-direction:reverse] [animation-duration:calc(var(--duration)*1s)] dark:bg-background/5",
          { "[animation-direction:normal]": reverse },
          className,
        )}
      >
        <div className="flex size-full transform-gpu items-center justify-center rounded-full border border-border/20 bg-background/80 backdrop-blur-sm shadow-lg dark:border-border/10 dark:bg-background/20">
          {children}
        </div>
      </div>
    </>
  )
}
