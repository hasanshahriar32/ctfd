import Link from 'next/link'
import { Terminal, Flag, Shield, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="ctf-landing">
      <header>
        <nav>
          <Link href="/" className="logo">
            <Terminal className="icon" />
            CTF Writeups
          </Link>
          <div className="nav-links">
            <Link href="#">Home</Link>
            <Link href="#">Writeups</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Master the Art of CTF</h1>
          <p>Detailed writeups and walkthroughs for Capture The Flag challenges</p>
          <button className="cta-button">Explore Writeups</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <Flag className="icon" />
            <h2>Latest Challenges</h2>
            <p>Stay up-to-date with the most recent CTF challenges and their solutions.</p>
          </div>
          <div className="feature-card">
            <Shield className="icon" />
            <h2>Learn Techniques</h2>
            <p>Discover new hacking techniques and improve your cybersecurity skills.</p>
          </div>
          <div className="feature-card">
            <Code className="icon" />
            <h2>Share Knowledge</h2>
            <p>Contribute your own writeups and help grow the CTF community.</p>
          </div>
        </section>

        <section className="featured-writeup">
          <h2>Featured Writeup</h2>
          <div className="writeup-card">
            <h3>HackTheBox: Cyber Apocalypse 2023</h3>
            <p>
              A comprehensive walkthrough of the latest HackTheBox CTF event, including web
              exploitation, cryptography, and reverse engineering challenges.
            </p>
            <button className="secondary-button">Read Writeup</button>
          </div>
        </section>

        <section className="community">
          <h2>Join Our Community</h2>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button className="cta-button">Subscribe</button>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} CTF Writeups. All rights reserved.</p>
        <div className="footer-links">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </footer>
    </div>
  )
}
