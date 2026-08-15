import { PenTool, Gauge, Layers, Smartphone } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: PenTool,
    title: "Smart Design",
    body: "Create intuitive and engaging user experiences.",
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    body: "Build responsive experiences that feel fast and smooth.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    body: "Design solutions that can grow with your needs.",
  },
  {
    icon: Smartphone,
    title: "Seamless Experience",
    body: "Deliver consistent experiences across devices.",
  },
];

export function Features() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div ref={head.ref} className={`${head.className} max-w-2xl`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to create better digital experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: typeof PenTool;
  title: string;
  body: string;
  index: number;
}) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${className} group rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface-strong hover:shadow-[var(--shadow-card)]`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="grid size-11 place-items-center rounded-2xl bg-primary/20 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/30">
        <Icon className="size-5 text-accent" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
