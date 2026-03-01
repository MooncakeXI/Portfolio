import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { useMagnetic } from '@/hooks/use-magnetic'

const roles = ['software developer.', 'full-stack engineer.', 'open-source contributor.', 'problem solver.']

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1))
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          setText(currentWord.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export function Hero() {
  const [visible, setVisible] = useState(false)
  const typedText = useTypewriter(roles)
  const btnMagnetic = useMagnetic<HTMLAnchorElement>(0.2)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Floating gradient orbs that move with mouse */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[120px] transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[100px] transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * 1}px, ${mousePos.y * 1}px)` }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(oklch(0.52 0.14 175) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Staggered entrance */}
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <p className="mb-4 font-mono text-sm text-primary">Hi, my name is</p>
        </div>

        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <h1 className="mb-2 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance">John Doe.</span>
          </h1>
        </div>

        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-muted-foreground md:text-4xl lg:text-5xl">
            <span className="text-pretty">
              {"I'm a "}
              <span className="text-gradient">{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
            </span>
          </h2>
        </div>

        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground">
            I specialize in building exceptional digital experiences. Currently
            focused on crafting accessible, performant, and beautifully
            designed applications.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-center gap-5">
            <a
              ref={btnMagnetic.ref}
              onMouseMove={btnMagnetic.handleMouseMove}
              onMouseLeave={btnMagnetic.handleMouseLeave}
              href="#contact"
              data-magnetic
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary px-7 py-3 font-mono text-sm text-primary transition-colors duration-300 hover:text-primary-foreground"
            >
              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative">Get In Touch</span>
            </a>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={link.label}
                  data-magnetic
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-all duration-700 hover:text-primary ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </a>
    </section>
  )
}
