import { useEffect, useRef, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { SECTIONS, scrollToSection, type SectionId } from "@/lib/scroll";
import { useActiveSection, useScrolled } from "@/hooks/use-active-section";
import { MobileMenu } from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(50);
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (id: SectionId | string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl shadow-[var(--shadow-nav)]"
          : "border-b border-transparent bg-background/10 backdrop-blur-[2px]",
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-300 ease-out sm:px-8 lg:grid-cols-[auto_1fr_auto]",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex min-w-0 items-center gap-2.5"
          aria-label="NEXORA home"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/20 ring-1 ring-primary/40">
            <Sparkles className="size-4 text-accent" aria-hidden="true" />
          </span>
          <span className="truncate font-display text-lg font-bold tracking-[0.2em]">NEXORA</span>
        </a>

        <ul className="hidden justify-center gap-9 lg:flex">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active === section.id ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go(section.id);
                }}
                className={cn(
                  "nav-link text-sm tracking-wide",
                  active === section.id && "nav-link-active",
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => go("contact")}
            className="hidden rounded-full bg-[image:var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Get Started
          </button>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-xl glass text-foreground transition-colors duration-200 hover:bg-surface-strong lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <MobileMenu ref={panelRef} open={open} active={active} onNavigate={go} />
    </header>
  );
}
