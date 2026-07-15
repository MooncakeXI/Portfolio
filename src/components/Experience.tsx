import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SectionHeading } from "./section-heading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="04" title="Experience" />

        <div ref={ref} className="reveal flex flex-col gap-8 md:flex-row">
          {/* Tab list */}
          <div
            className="relative flex shrink-0 md:flex-col"
            role="tablist"
            aria-label="Work experience"
          >
            <div
              className="absolute bottom-0 left-0 h-0.5 w-full bg-border md:h-full md:w-0.5"
              aria-hidden="true"
            />
            {/* Active indicator pill - vertical */}
            <div
              className="absolute hidden md:block left-0 w-0.5 bg-primary rounded-full transition-all duration-400 ease-out"
              style={{
                top: `${activeTab * (100 / experiences.length)}%`,
                height: `${100 / experiences.length}%`,
              }}
              aria-hidden="true"
            />
            {/* Active indicator pill - horizontal */}
            <div
              className="absolute md:hidden bottom-0 h-0.5 bg-primary rounded-full transition-all duration-400 ease-out"
              style={{
                left: `${activeTab * (100 / experiences.length)}%`,
                width: `${100 / experiences.length}%`,
              }}
              aria-hidden="true"
            />
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${i}`}
                className={`relative z-10 whitespace-nowrap rounded-full px-5 py-3 text-left font-mono text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  activeTab === i
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
                onClick={() => setActiveTab(i)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div className="min-h-[280px] flex-1">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                id={`panel-${i}`}
                role="tabpanel"
                hidden={activeTab !== i}
                className={activeTab === i ? "animate-fade-slide-in" : ""}
              >
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="mb-5 font-mono text-sm text-muted-foreground">
                  {exp.period}
                </p>
                <ul className="space-y-4">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mb-2 mt-6 font-mono text-xs text-muted-foreground">
                  Skills I learned:
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {exp.skillsLearned.map((skill) => (
                    <li key={skill} className="rounded-full bg-secondary px-2.5 py-1">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
