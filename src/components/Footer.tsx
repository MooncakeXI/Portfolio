import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Twitter,
  external: ExternalLink,
};

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {personalInfo.socialLinks.map((link) => {
            const IconComponent = iconMap[link.platform] || ExternalLink;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                data-magnetic
                className="text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
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
