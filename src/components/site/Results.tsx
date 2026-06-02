import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { v: 50, suffix: "+", label: "Projects delivered" },
  { v: 95, suffix: "%", label: "Client satisfaction" },
  { v: 100, suffix: "K+", label: "Visitors generated" },
  { v: 12, suffix: "+", label: "Industries served" },
  { v: 24, suffix: "/7", label: "Priority support" },
];

export function Results() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 size-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  <span className="text-gradient">
                    <AnimatedCounter to={s.v} />
                    {s.suffix}
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
