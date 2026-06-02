import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./Services";

const plans = [
  {
    name: "Starter",
    tagline: "For solo founders & local businesses",
    features: ["Up to 5 pages", "Mobile-responsive design", "Basic on-page SEO", "Contact form", "1 round of revisions", "30 days support"],
    cta: "Start small",
  },
  {
    name: "Business",
    tagline: "For growing brands ready to scale",
    features: ["Up to 15 pages", "Custom CMS / blog", "Advanced SEO + GA4", "Lead capture + CRM", "Performance optimization", "60 days support"],
    cta: "Most chosen",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For ambitious products & platforms",
    features: ["Custom web/app build", "Mobile app (Android/iOS)", "AI automations", "Dedicated architecture", "CI/CD + cloud setup", "Ongoing care plan"],
    cta: "Talk to me",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent plans. Real partnerships."
          desc="Every project is scoped to your goals. Reach out for a custom quote."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                p.popular
                  ? "glass-strong ring-brand"
                  : "glass"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-primary-foreground">
                  <Sparkles className="mr-1 inline size-3" />
                  Most popular
                </div>
              )}
              <div>
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="mt-6 font-display text-3xl font-semibold">
                <span className="text-gradient">Custom</span>
                <span className="block text-sm font-normal text-muted-foreground">Contact for pricing</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.popular ? "hero" : "glass"} className="mt-8 w-full">
                <a href="#contact">{p.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
