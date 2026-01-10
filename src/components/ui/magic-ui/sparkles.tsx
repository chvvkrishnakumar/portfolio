
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface SparklesProps {
  className?: string
  size?: "sm" | "md" | "lg"
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
  color?: string
}

export default function Sparkles({
  className = "",
  size = "md",
  density = "medium",
  speed = "medium",
  color = "#8b5cf6",
}: SparklesProps) {
  const [sparkles, setSparkles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      delay: number
    }>
  >([])

  const sizeMap = { sm: 2, md: 4, lg: 6 }
  const densityMap = { low: 15, medium: 25, high: 40 }
  const speedMap = { slow: 4, medium: 2.5, fast: 1.5 }

  useEffect(() => {
    const sparkleCount = densityMap[density]
    const sparkleSize = sizeMap[size]

    const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: sparkleSize + Math.random() * sparkleSize,
      delay: Math.random() * 2,
    }))

    setSparkles(newSparkles)
  }, [density, size])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: color,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: speedMap[speed],
            repeat: Number.POSITIVE_INFINITY,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
