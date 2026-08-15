import { Code2, Palette, Cpu, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    body: "Modern responsive websites and web applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    body: "Clean, intuitive, user-centered interfaces.",
  },
  {
    icon: Cpu,
    title: "Digital Solutions",
    body: "Technology solutions designed around real business needs.",
  },
];

export function Services() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 size-[26rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div ref={head.ref} className={`${head.className} max-w-2xl`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Focused engagements that take an idea from concept to a working product.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: typeof Code2;
  title: string;
  body: string;
  index: number;
}) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`${className} flex flex-col rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface-strong hover:shadow-[var(--shadow-card)]`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)]">
        <Icon className="size-5 text-primary-foreground" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <button
        type="button"
        onClick={() => scrollToSection("contact")}
        className="group mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-surface-strong"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
