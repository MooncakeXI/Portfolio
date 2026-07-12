import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { education } from "@/data/portfolio";

export function Education() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="Education" />

        <div
          ref={ref}
          className="relative border-l border-border md:ml-12 pl-6 md:pl-10 space-y-12"
        >
          {education.map((item, index) => (
            <div
              key={item.school + "-" + index}
              className={`reveal reveal-delay-${index + 1} relative group`}
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary">
                <GraduationCap className="h-4 w-4" />
              </div>

              {/* Card Container */}
              <div className="glow-surface relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
                {/* Top primary gradient accent, brightens on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.degree}
                    </h3>
                    {item.major && (
                      <p className="flex items-center gap-1.5 font-mono text-sm text-primary mt-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {item.major}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground bg-secondary/80 px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-foreground/90 mb-2">
                  {item.school}
                </h4>

                {item.details && (
                  <p className="text-sm leading-relaxed text-muted-foreground border-l-2 border-border pl-3 mt-3">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
