import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./Services";
import niftyImg from "@/assets/project-nifty.png";
import medstockImg from "@/assets/project-medstock.png";
import hrmsImg from "@/assets/project-hrms.png";

const projects = [
  {
    title: "Nifty Scanner — Real-time NIFTY 50 Analysis",
    industry: "Fintech · Stock Market",
    tech: ["React", "Spring Boot", "MongoDB", "Redis", "Vercel"],
    result: "Live NSE pattern detection",
    image: niftyImg,
    href: "https://nifty-scanner.vercel.app",
  },
  {
    title: "MedStock — Pharmacy Inventory System",
    industry: "Healthcare · Pharmacy",
    tech: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
    result: "436+ medicines tracked",
    image: medstockImg,
    href: "#contact",
  },
  {
    title: "HRMS Portal — Enterprise HR Suite",
    industry: "Enterprise · HR",
    tech: ["Java", "Spring Boot", "MongoDB", "React", "AWS"],
    result: "284 employees managed",
    image: hrmsImg,
    href: "#contact",
  },
];


export function Portfolio() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Selected work"
          title="Built to perform — measured by results."
          desc="A glimpse at recent projects across web, mobile, fintech, healthcare and AI."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl glass-strong">
              <div className="relative aspect-[16/10] overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}

                <div className="absolute inset-0 flex items-end p-6">
                  <span className="rounded-full glass px-3 py-1 text-xs text-foreground">
                    {p.industry}
                  </span>
                </div>
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-primary-foreground">
                    {p.result}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={p.href ?? "#contact"}
                  target={p.href?.startsWith("http") ? "_blank" : undefined}
                  rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full glass px-3 py-2 text-xs font-medium transition-all hover:bg-white/10"
                >
                  {p.href?.startsWith("http") ? "Live demo" : "Enquire"} <ExternalLink className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
