import React from 'react'
import './styles.css'

export const metadata = {
  title: 'CTF Writeups',
  description: 'Detailed writeups and walkthroughs for Capture The Flag challenges',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
