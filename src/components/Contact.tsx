import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();

  const set = (key: keyof typeof values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSent(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div ref={left.ref} className={left.className}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Talk</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Tell us about the product you're planning. This form is a front-end demo — nothing is
            transmitted anywhere.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
              hello@nexora.example
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
              Remote-first studio
            </li>
          </ul>
        </div>

        <div ref={right.ref} className={right.className}>
          <form
            noValidate
            onSubmit={onSubmit}
            className="rounded-3xl glass p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <Field
              id="name"
              label="Name"
              value={values.name}
              error={errors.name}
              onChange={set("name")}
              placeholder="Ada Lovelace"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={set("email")}
              placeholder="you@company.com"
            />
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => set("message")(e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="What would you like to build?"
                className={cn(
                  "mt-2 w-full resize-y rounded-2xl border bg-surface px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-ring",
                  errors.message ? "border-destructive" : "border-border",
                )}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Send Message
              <Send className="size-4" aria-hidden="true" />
            </button>

            <p aria-live="polite" className="mt-4 min-h-5 text-sm">
              {sent && (
                <span className="inline-flex items-center gap-2 text-accent">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Thanks! Your message has been received.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="mt-5 first:mt-0">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-2 w-full rounded-2xl border bg-surface px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-ring",
          error ? "border-destructive" : "border-border",
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
