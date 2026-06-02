import { SectionHeader } from "./Services";

const groups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express"] },
  { label: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { label: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
  { label: "SEO & Analytics", items: ["Google Analytics", "Search Console", "Technical SEO"] },
];

export function Stack() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Technology stack" title="Built on tools enterprises trust." />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((g) => (
            <div key={g.label} className="rounded-2xl glass p-5">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
                {g.label}
              </div>
              <ul className="space-y-2 text-sm">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground/90">
                    <span className="size-1.5 rounded-full bg-gradient-brand" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
