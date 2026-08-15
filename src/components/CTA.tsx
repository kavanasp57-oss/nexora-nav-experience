import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { useReveal } from "@/hooks/use-reveal";

export function CTA() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`${className} relative overflow-hidden rounded-[2rem] glass px-6 py-14 text-center shadow-[var(--shadow-card)] sm:px-12 sm:py-20`}
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Let's turn your next idea into a digital experience that makes an impact.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
