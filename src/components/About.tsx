import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useRef, useCallback } from "react";
import { SectionHeading } from "./section-heading";
import { personalInfo, skills } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

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
      <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] border-2 border-primary/30 transition-all duration-300 group-hover:-bottom-2 group-hover:-right-2" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-lg">
        <img
          src={profileImg}
          alt={personalInfo.name}
          className="aspect-square w-full object-cover"
        />
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

            {/* Tech badges */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-2.5 pt-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 font-mono text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-sm"
                >
                  <span className="text-[10px] text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                    ▹
                  </span>
                  <span>{skill.name}</span>
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
