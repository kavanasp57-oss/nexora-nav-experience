import { ArrowRight, TrendingUp, Zap, Rocket, Gauge } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { n: "01", label: "Performance", icon: Gauge },
  { n: "02", label: "Innovation", icon: Zap },
  { n: "03", label: "Growth", icon: Rocket },
];

export function Hero() {
  const text = useReveal<HTMLDivElement>(0.05);
  const visual = useReveal<HTMLDivElement>(0.05);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-primary/25 blur-3xl glow-drift"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-accent/15 blur-3xl glow-drift"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div ref={text.ref} className={text.className}>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground">
            Build. Innovate. Transform.
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build Digital <span className="text-gradient">Experiences</span> That Matter.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We create modern digital experiences that help ambitious ideas become powerful
            products.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("features")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore Features
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-surface-strong"
            >
              Get Started
            </button>
          </div>
        </div>

        <div ref={visual.ref} className={`${visual.className} relative`}>
          <div
            className="absolute -top-6 -left-4 hidden rounded-2xl glass px-4 py-3 text-xs text-muted-foreground float-slow sm:block"
            aria-hidden="true"
          >
            <TrendingUp className="mb-1 size-4 text-accent" />
            Design signal
          </div>
          <div className="relative rounded-3xl glass p-6 shadow-[var(--shadow-card)] sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold tracking-[0.3em]">NEXORA</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="size-2 rounded-full bg-primary/70" />
                <i className="size-2 rounded-full bg-accent/70" />
                <i className="size-2 rounded-full bg-muted-foreground/50" />
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {pillars.map(({ n, label, icon: Icon }) => (
                <li
                  key={n}
                  className="flex items-center gap-4 rounded-2xl bg-surface px-4 py-3.5 transition-colors duration-200 hover:bg-surface-strong"
                >
                  <span className="font-display text-xs tracking-widest text-muted-foreground">
                    {n}
                  </span>
                  <Icon className="size-4 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-surface px-4 py-4">
                <p className="font-display text-2xl font-bold text-gradient">+42%</p>
                <p className="mt-1 text-xs text-muted-foreground">Engagement</p>
              </div>
              <div className="rounded-2xl bg-surface px-4 py-4">
                <p className="font-display text-2xl font-bold text-gradient">+68%</p>
                <p className="mt-1 text-xs text-muted-foreground">Productivity</p>
              </div>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
              Illustrative interface concept — sample figures are design placeholders, not real
              company metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
