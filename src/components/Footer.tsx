import { personalInfo } from "@/data/portfolio";
import { socialIconMap } from "@/lib/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {personalInfo.socialLinks.map((link) => {
            const IconComponent = socialIconMap[link.platform];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="-m-3.5 rounded-full p-3.5 text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <IconComponent className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
