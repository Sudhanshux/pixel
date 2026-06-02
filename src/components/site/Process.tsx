import { SectionHeader } from "./Services";

const steps = [
  { n: "01", title: "Discovery call", desc: "We talk goals, audience, and scope. Free, no pressure." },
  { n: "02", title: "Planning & strategy", desc: "Sitemap, wireframes, SEO targets, and a clear timeline." },
  { n: "03", title: "Design & development", desc: "Beautiful UI built on production-grade code." },
  { n: "04", title: "Testing & optimization", desc: "Performance, accessibility, SEO, and analytics dialed in." },
  { n: "05", title: "Launch & growth", desc: "We ship — then keep improving with data-backed iterations." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="How we work"
          title="A clear, calm path from idea to launch."
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block" />
          <ol className="space-y-10 md:space-y-14">
            {steps.map((s, i) => (
              <li key={s.n} className="relative md:grid md:grid-cols-2 md:gap-12">
                <div className={i % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}>
                  <div className="inline-flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">{s.n}</span>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
                <div className="absolute left-1/2 hidden size-3 -translate-x-1/2 rounded-full bg-gradient-brand md:block glow" />
                <div />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
