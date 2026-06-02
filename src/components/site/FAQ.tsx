import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./Services";

const faqs = [
  { q: "How long does a website take?", a: "Most marketing sites ship in 2–4 weeks. Web apps and mobile apps typically run 6–12 weeks depending on scope." },
  { q: "Do you handle SEO too?", a: "Yes — every site is built SEO-first, and I offer ongoing SEO retainers for keyword growth, technical fixes, and content strategy." },
  { q: "Can you build Android apps?", a: "Absolutely. I deliver production Android APKs, plus cross-platform builds when iOS is needed." },
  { q: "What does it cost?", a: "Pricing depends on scope. Share your project on the contact form and you'll get a transparent quote within 24 hours." },
  { q: "Do you offer maintenance?", a: "Yes — monthly care plans cover updates, backups, security, performance, and a fixed pool of dev hours." },
  { q: "Will I own the code?", a: "100%. You get full source code, repos, and credentials on delivery — no lock-in, ever." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="FAQ" title="Questions, answered." />
        <div className="mt-12 rounded-2xl glass p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-4 text-left font-display text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
