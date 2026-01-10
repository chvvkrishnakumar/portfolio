
import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore: React.FC<SparklesProps> = ({
  id: _id,
  className,
  background = "#0d1117",
  particleSize: _particleSize = 0.6,
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#ffffff",
  particleDensity = 120,
}) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          duration: Math.random() * 3 + 2,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [particleDensity, maxSize, minSize, speed])

  return (
    <div className={className} style={{ background }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor,
          }}
          animate={{
            x: [0, particle.speedX * 100, 0],
            y: [0, particle.speedY * 100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
