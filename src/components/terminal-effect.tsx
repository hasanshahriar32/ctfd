"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TerminalEffectProps {
  text: string
  className?: string
  typingSpeed?: number
  cursorBlinkSpeed?: number
}

export function TerminalEffect({ text, className, typingSpeed = 50, cursorBlinkSpeed = 500 }: TerminalEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
      }
    }
  }, [displayedText, text, isTyping, typingSpeed])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, cursorBlinkSpeed)
    return () => clearInterval(interval)
  }, [cursorBlinkSpeed])

  return (
    <div className={cn("font-mono", className)}>
      {displayedText}
      {showCursor && <span className="text-primary">_</span>}
    </div>
  )
}

