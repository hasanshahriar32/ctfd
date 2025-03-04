import Link from "next/link"
import { Terminal, Shield, Flag, Code, ChevronRight, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HackingAnimation } from "@/components/hacking-animation"
import { TerminalEffect } from "@/components/terminal-effect"
import { BlogPreview } from "@/components/blog-preview"
import { AnnouncementCard } from "@/components/announcement-card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              CTF<span className="text-primary">_PARADOX</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#blogs" className="text-sm hover:text-primary transition-colors">
              Blogs
            </Link>
            <Link href="#announcements" className="text-sm hover:text-primary transition-colors">
              Announcements
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <HackingAnimation />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-text">Capture The Flag</h1>
            <TerminalEffect
              text="Welcome to the ultimate CTF resource. Learn, compete, and PARADOX the art of cybersecurity."
              className="text-xl md:text-2xl mb-8 text-muted-foreground"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Latest Challenges</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Read Blog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-primary">&gt;</span> About CTF_PARADOX
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <Terminal className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Learn</h3>
              <p className="text-muted-foreground">
                Comprehensive guides, tutorials, and walkthroughs for CTF challenges of all difficulty levels.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Practice</h3>
              <p className="text-muted-foreground">
                Sharpen your skills with our collection of practice challenges, from web exploitation to cryptography.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <Flag className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Compete</h3>
              <p className="text-muted-foreground">
                Stay updated on upcoming CTF competitions and join our community to form teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blogs" className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">
              <span className="text-primary">&gt;</span> Latest Blog Posts
            </h2>
            <Link href="/blog" className="flex items-center text-primary hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPreview
              title="Web Exploitation Basics"
              excerpt="Learn the fundamentals of web exploitation techniques used in CTF challenges."
              date="May 15, 2023"
              category="Web"
              slug="/blog/web-exploitation-basics"
            />
            <BlogPreview
              title="Cryptography Challenges Walkthrough"
              excerpt="A step-by-step guide to solving common cryptography challenges in CTFs."
              date="April 28, 2023"
              category="Crypto"
              slug="/blog/crypto-walkthrough"
            />
            <BlogPreview
              title="Reverse Engineering Tools"
              excerpt="Essential tools every reverse engineer should have in their arsenal for CTF competitions."
              date="April 10, 2023"
              category="Reverse"
              slug="/blog/reverse-engineering-tools"
            />
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-primary">&gt;</span> CTF Announcements
          </h2>
          <div className="space-y-6">
            <AnnouncementCard
              title="HackTheBox CTF 2023"
              date="June 15-17, 2023"
              description="Join us for the annual HackTheBox CTF competition. Form your teams and register now!"
              link="#"
            />
            <AnnouncementCard
              title="Weekly Challenge: Buffer Overflow"
              date="Starting May 22, 2023"
              description="Test your skills with our new weekly challenge focusing on buffer overflow vulnerabilities."
              link="#"
            />
            <AnnouncementCard
              title="CTF Workshop: Forensics Deep Dive"
              date="May 30, 2023"
              description="Online workshop covering advanced forensics techniques for CTF competitions."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-muted border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Subscribe to our newsletter for the latest CTF announcements, blog posts, and exclusive tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">
                  CTF<span className="text-primary">_PARADOX</span>
                </span>
              </Link>
              <p className="text-muted-foreground mt-2">PARADOXing the art of Capture The Flag</p>
            </div>
            <div className="flex gap-8">
              <div>
                <h3 className="font-bold mb-3">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Connect</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} CTF_PARADOX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

