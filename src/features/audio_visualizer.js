"use client"
import { useEffect, useRef } from "react"

export function AudioVisualizer({ className = "" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    const bars = 12
    const values = Array(bars).fill(0)
    const maxHeight = canvas.height * 0.6

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update values
      values.forEach((_, i) => {
        values[i] += (Math.random() - 0.5) * 5
        values[i] = Math.max(10, Math.min(100, values[i]))
      })

      // Draw bars
      const barWidth = canvas.width / (bars * 2)
      values.forEach((value, i) => {
        const height = (value / 100) * maxHeight
        const x = i * (barWidth * 2) + barWidth / 2
        const y = canvas.height - height

        // Gradient
        const gradient = ctx.createLinearGradient(x, y, x, y + height)
        gradient.addColorStop(0, "rgb(251, 146, 60)")
        gradient.addColorStop(1, "rgba(251, 146, 60, 0.2)")

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth, height)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
