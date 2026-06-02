import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { SectionHeader } from "./Services";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Let's talk"
              title="Let's build something amazing."
              center={false}
            />
            <p className="mt-4 text-muted-foreground">
              Tell me about your project — I respond within 24 hours with a clear plan,
              timeline, and quote. No fluff.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg glass"><Mail className="size-4 text-primary" /></span>
                <a href="mailto:contact.bytingo@gmail.com" className="hover:text-foreground">contact.bytingo@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg glass"><MessageCircle className="size-4 text-primary" /></span>
                <a href="tel:+919821019954" className="hover:text-foreground">+91 98210 19954</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg glass"><MapPin className="size-4 text-primary" /></span>
                Remote · India / Worldwide
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl glass-strong p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" id="name"><Input id="name" required placeholder="Jane Doe" /></Field>
              <Field label="Email" id="email"><Input id="email" type="email" required placeholder="jane@company.com" /></Field>
              <Field label="Phone" id="phone"><Input id="phone" type="tel" placeholder="+91 99999 99999" /></Field>
              <Field label="Business name" id="business"><Input id="business" placeholder="Acme Inc." /></Field>

              <Field label="Service required" id="service">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    {["Website Development","SEO & Growth","Mobile App","AI Automation","E-commerce","Maintenance"].map(s=>(
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Project budget" id="budget">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Estimated budget" /></SelectTrigger>
                  <SelectContent>
                    {["Under ₹50k","₹50k – ₹2L","₹2L – ₹5L","₹5L – ₹15L","₹15L+"].map(s=>(
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Project description" id="desc">
                <Textarea id="desc" required rows={5} placeholder="Tell me about your goals, audience, and timeline…" />
              </Field>
            </div>

            <Button type="submit" variant="hero" size="lg" disabled={submitting} className="mt-6 w-full sm:w-auto">
              {submitting ? "Sending…" : "Let's build something amazing"}
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
