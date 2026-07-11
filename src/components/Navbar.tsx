import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 shadow-sm backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-lg font-bold text-primary transition-transform duration-300 hover:scale-105"
          data-magnetic
        >
          {personalInfo.logoText}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-colors duration-300 rounded-full ${
                  activeSection === link.href
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-mono text-[10px] text-primary mr-1">
                  0{i + 1}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <ul className="flex flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
            >
              <a
                href={link.href}
                className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                <span className="mr-2 font-mono text-sm text-primary">
                  0{i + 1}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
