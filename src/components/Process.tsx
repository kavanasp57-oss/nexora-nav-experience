import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", title: "Discover", body: "Understand the problem." },
  { n: "02", title: "Design", body: "Create the right experience." },
  { n: "03", title: "Develop", body: "Build reliable technology." },
  { n: "04", title: "Deliver", body: "Launch and improve." },
];

export function Process() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="process-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div ref={head.ref} className={`${head.className} max-w-2xl`}>
          <h2 id="process-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four steps that keep every engagement predictable.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <span
            className="pointer-events-none absolute left-[1.35rem] top-2 bottom-2 w-px bg-border lg:left-0 lg:right-0 lg:top-[1.35rem] lg:bottom-auto lg:h-px lg:w-auto"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Step key={step.n} {...step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  index,
}: {
  n: string;
  title: string;
  body: string;
  index: number;
}) {
  const { ref, className } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`${className} relative flex gap-5 lg:flex-col lg:gap-0`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
        {n}
      </span>
      <div className="lg:mt-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </li>
  );
}
