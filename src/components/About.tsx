import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useRef, useCallback } from "react";
import { SectionHeading } from "./section-heading";
import { personalInfo, skills } from "@/data/portfolio";

function TiltAvatar() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform =
      "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-[280px] transition-transform duration-200 ease-out"
    >
      <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-primary/30 transition-all duration-300 group-hover:-bottom-2 group-hover:-right-2" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary/5 to-primary/15">
          <div className="text-center">
            <div className="mb-3 text-6xl font-bold text-primary">
              {personalInfo.avatarInitials}
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="About Me" />

        <div ref={ref} className="grid gap-12 md:grid-cols-5">
          <div className="space-y-4 md:col-span-3">
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`reveal ${
                  index > 0 ? `reveal-delay-${index}` : ""
                } leading-relaxed text-muted-foreground`}
              >
                {paragraph}
              </p>
            ))}

            {/* Displaying skills headers */}
            <p className="reveal reveal-delay-2 leading-relaxed text-muted-foreground">
              Here are a few technologies I've been working with recently:
            </p>

            {/* Animated skill bars */}
            <div className="reveal reveal-delay-3 grid gap-3 pt-4">
              {skills.map((skill, i) => (
                <div key={skill.name} className="group flex items-center gap-4">
                  <span className="w-32 shrink-0 font-mono text-xs text-muted-foreground">
                    {skill.name}
                  </span>
                  <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${i * 80 + 400}ms`,
                      }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 group md:col-span-2">
            <TiltAvatar />
          </div>
        </div>
      </div>
    </section>
  );
}
