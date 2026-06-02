import { Zap, Search, Smartphone, BadgeDollarSign, Layers, LifeBuoy, Target, Cpu } from "lucide-react";
import { SectionHeader } from "./Services";

const items = [
  { icon: Zap, title: "Fast delivery", desc: "Most sites ship in 2–4 weeks." },
  { icon: Search, title: "SEO-optimized", desc: "Built to rank from day one." },
  { icon: Smartphone, title: "Mobile-first", desc: "Pixel-perfect on every device." },
  { icon: BadgeDollarSign, title: "Affordable pricing", desc: "Agency quality, fair rates." },
  { icon: Layers, title: "Scalable architecture", desc: "Production-grade stacks." },
  { icon: LifeBuoy, title: "Ongoing support", desc: "I stay after launch." },
  { icon: Target, title: "Business-focused", desc: "Outcomes over output." },
  { icon: Cpu, title: "Modern tech", desc: "React, Next.js, Spring, AWS." },
];

export function WhyMe() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Why choose me"
          title="A partner — not just a vendor."
          desc="Every decision is made with your growth in mind."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group relative bg-background p-6 transition-colors hover:bg-surface">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg glass">
                <it.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-brand transition-transform group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
