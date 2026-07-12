import { ExternalLink, Github, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SectionHeading } from "./section-heading";
import { featuredProjects, certificates } from "@/data/portfolio";

function CertificateCard({
  certificate,
  index,
}: {
  certificate: (typeof certificates)[0];
  index: number;
}) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} glow-surface group relative flex flex-col rounded-lg border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30`}
    >
      <div className="relative">
        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
          <Award className="h-5 w-5 text-primary" />
        </div>
        <h4 className="mb-1 font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
          {certificate.title}
        </h4>
        <p className="mb-3 font-mono text-xs text-primary">
          {certificate.issuer} · {certificate.period}
        </p>
        {certificate.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {certificate.description}
          </p>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const featuredRef = useScrollReveal<HTMLDivElement>();
  const otherRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="Projects" />

        {/* Featured projects */}
        <div ref={featuredRef} className="space-y-24">
          {featuredProjects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal group relative flex flex-col gap-6 md:flex-row md:items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Project visual */}
              <div className="flex-1">
                <div className="glow-surface relative overflow-hidden rounded-[1.75rem] bg-card shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex aspect-video items-center justify-center bg-gradient-to-br ${project.color || "from-primary/5 to-primary/15"}`}
                    >
                      <span className="font-mono text-6xl font-black text-primary/15 transition-all duration-500 group-hover:text-primary/30 group-hover:scale-110">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project info */}
              <div
                className={`flex-1 ${i % 2 !== 0 ? "md:text-left" : "md:text-right"}`}
              >
                <p className="mb-1 font-mono text-sm text-primary">
                  Featured Project
                </p>
                <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <div className="mb-4 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                  {project.description}
                </div>
                <ul
                  className={`mb-4 flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground ${
                    i % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-secondary px-2.5 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex items-center gap-3 ${
                    i % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      data-magnetic
                      className="text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live`}
                      data-magnetic
                      className="text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other certificates */}
        <div ref={otherRef} className="mt-28">
          <h3 className="reveal mb-10 text-center text-xl font-bold text-foreground">
            Other Certificates
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
