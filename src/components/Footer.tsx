import { Github, Linkedin, Twitter, Dribbble, Sparkles } from "lucide-react";
import { SECTIONS, scrollToSection } from "@/lib/scroll";

const socials = [
  { icon: Twitter, label: "NEXORA on X" },
  { icon: Linkedin, label: "NEXORA on LinkedIn" },
  { icon: Github, label: "NEXORA on GitHub" },
  { icon: Dribbble, label: "NEXORA on Dribbble" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-primary/20 ring-1 ring-primary/40">
                <Sparkles className="size-4 text-accent" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold tracking-[0.2em]">NEXORA</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Build. Innovate. Transform.</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold">Navigation</h2>
            <ul className="mt-4 space-y-2.5">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold">Follow</h2>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#home"
                    aria-label={label}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("home");
                    }}
                    className="grid size-10 place-items-center rounded-xl glass transition-colors duration-200 hover:bg-surface-strong"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Social links are decorative placeholders.
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 NEXORA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
