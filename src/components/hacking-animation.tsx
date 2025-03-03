"use client"

import { useEffect, useRef } from "react"

export function HackingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

    function draw() {
      // Check if we're in dark or light mode
      const isDarkMode = document.documentElement.classList.contains("dark")

      // Set background color based on theme
      if (isDarkMode) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      } else {
        ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text color based on theme
      ctx.fillStyle = isDarkMode ? "#0f0" : "#0a7a0a"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const newColumns = Math.floor(canvas.width / fontSize)

      // Adjust drops array for new width
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = 1
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

