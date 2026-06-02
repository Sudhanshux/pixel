import {
  Globe, Search, Smartphone, Bot, ShoppingBag, Wrench, ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Conversion-focused business sites, landing pages, portfolios, and custom web apps.",
    features: ["Business websites", "Landing pages", "E-commerce stores", "Custom web apps"],
  },
  {
    icon: Search,
    title: "SEO & Growth",
    desc: "Rank higher on Google with technical, on-page, and local SEO that actually moves traffic.",
    features: ["Local SEO", "Technical SEO", "Keyword research", "On-page optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Production-ready Android APKs and cross-platform apps built for real businesses.",
    features: ["Android APK", "Booking apps", "E-commerce apps", "Custom solutions"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Chatbots, workflow automation, and AI integrations that save hours every week.",
    features: ["AI chatbots", "Workflow automation", "Process optimization", "API integrations"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Fast, beautiful storefronts with payments, inventory, and analytics ready to scale.",
    features: ["Shopify & custom", "Payment gateways", "Inventory sync", "Conversion CRO"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Keep your site secure, fast, and updated with ongoing care plans and 24/7 monitoring.",
    features: ["Security updates", "Performance tuning", "Backups", "Priority support"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="What I build"
          title="Everything you need to grow online."
          desc="A complete digital toolkit — designed, built, and maintained by one focused team."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:ring-brand"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />

              <div className="relative">
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground glow">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

                <ul className="mt-5 space-y-2 text-sm">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5"
                >
                  Start a project <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, desc, center = true,
}: { eyebrow: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground ${center ? "mx-auto" : ""}`}>
        <span className="size-1.5 rounded-full bg-primary animate-pulse-ring" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}
