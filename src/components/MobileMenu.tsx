import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { SECTIONS, type SectionId } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  active: SectionId;
  onNavigate: (id: string) => void;
};

export const MobileMenu = forwardRef<HTMLDivElement, Props>(function MobileMenu(
  { open, active, onNavigate },
  ref,
) {
  return (
    <div
      ref={ref}
      id="mobile-menu"
      className={cn(
        "mx-4 mb-4 origin-top overflow-hidden rounded-3xl transition-all duration-300 ease-out lg:hidden",
        open
          ? "pointer-events-auto max-h-[32rem] translate-y-0 opacity-100"
          : "pointer-events-none max-h-0 -translate-y-2 opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="glass rounded-3xl bg-background/80 p-3 shadow-[var(--shadow-card)]">
        <ul className="flex flex-col">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                tabIndex={open ? 0 : -1}
                aria-current={active === section.id ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(section.id);
                }}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors duration-200 hover:bg-surface-strong",
                  active === section.id
                    ? "bg-surface text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {section.label}
                {active === section.id && (
                  <span className="h-1.5 w-6 rounded-full bg-[image:var(--gradient-brand)]" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          onClick={() => onNavigate("contact")}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-5 py-3.5 text-base font-semibold text-primary-foreground"
        >
          Get Started
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
});
