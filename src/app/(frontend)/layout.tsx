import React from 'react'
import './styles.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'CTF Writeups',
  description: 'Detailed writeups and walkthroughs for Capture The Flag challenges',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
