'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Helper functions for getting and setting cookies
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

const setCookie = (name: string, value: string, days: number) => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000) // Set expiration in days
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/`
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    // Check for stored cookie or system preference
    const storedTheme = getCookie('payload-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (storedTheme === 'light') {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    } else if (storedTheme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else if (systemPrefersDark) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      setCookie('payload-theme', 'dark', 365) // Set cookie for 1 year
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      setCookie('payload-theme', 'light', 365) // Set cookie for 1 year
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  )
}
