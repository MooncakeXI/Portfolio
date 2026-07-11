import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useMagnetic } from "@/hooks/use-magnetic";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const {
    elementRef: btnRef,
    handleMouseMove: btnMouseMove,
    handleMouseLeave: btnMouseLeave,
  } = useMagnetic<HTMLAnchorElement>(0.15);

  return (
    <section id="contact" className="px-6 py-28">
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        <p className="reveal mb-4 font-mono text-sm text-primary">
          05. What's Next?
        </p>
        <h2 className="reveal reveal-delay-1 mb-6 text-4xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">Get In Touch</span>
        </h2>
        <p className="reveal reveal-delay-2 mb-10 leading-relaxed text-muted-foreground">
          I'm currently open to new opportunities and my inbox is always open.
          Whether you have a question, a project idea, or just want to say hi --
          I'll do my best to get back to you!
        </p>
        <div className="reveal reveal-delay-3">
          <a
            ref={btnRef}
            onMouseMove={btnMouseMove}
            onMouseLeave={btnMouseLeave}
            href={`mailto:${personalInfo.email}`}
            data-magnetic
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary px-10 py-4 font-mono text-sm text-primary transition-colors duration-300 hover:text-primary-foreground"
          >
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative">Say Hello</span>
          </a>
        </div>
      </div>
    </section>
  );
}
