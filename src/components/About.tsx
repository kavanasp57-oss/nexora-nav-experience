import { ArrowDown, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const stages = ["Design", "Develop", "Deploy", "Grow"];
const points = [
  "A small, senior team working closely with every client.",
  "Design and engineering handled as one continuous craft.",
  "Products built to stay maintainable long after launch.",
];

export function About() {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div ref={left.ref} className={left.className}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About NEXORA</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We believe great digital products combine thoughtful design, reliable technology, and
            meaningful user experiences.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            NEXORA is a fictional product studio created for this project. The idea is simple:
            treat every interface as a product surface that should feel obvious to use, load fast
            on any device, and stay easy to extend as the roadmap grows.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div ref={right.ref} className={right.className}>
          <div className="rounded-3xl glass p-7 shadow-[var(--shadow-card)] sm:p-9">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-muted-foreground">
              How value compounds
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              {stages.map((stage, i) => (
                <div key={stage} className="flex w-full flex-col items-center gap-3">
                  <div className="w-full rounded-2xl bg-surface px-5 py-4 text-center font-display text-sm font-semibold tracking-[0.24em] uppercase">
                    {stage}
                  </div>
                  {i < stages.length - 1 && (
                    <ArrowDown className="size-4 text-accent" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
