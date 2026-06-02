import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-orb.jpg";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground animate-fade-up">
            <Sparkles className="size-3.5 text-primary" />
            <span>Available for new projects — Q2 2026</span>
          </div>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            Transform your business with{" "}
            <span className="text-gradient">high-performance websites</span>, SEO &amp; mobile apps.
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            I help startups, local businesses, and growing brands increase sales, generate leads,
            and scale online — through modern websites, powerful SEO, and custom mobile applications.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild variant="hero" size="lg">
              <a href="#contact">
                Get free consultation <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#work">
                <PlayCircle className="size-4" /> View portfolio
              </a>
            </Button>
          </div>
        </div>

        <div
          className="relative mx-auto mt-16 max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative overflow-hidden rounded-3xl glass-strong p-2">
            <div className="absolute -inset-px rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="Abstract neural network visualization"
              width={1920}
              height={1080}
              className="relative w-full rounded-2xl object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { v: 50, suffix: "+", label: "Projects delivered" },
                { v: 95, suffix: "%", label: "Client satisfaction" },
                { v: 100, suffix: "K+", label: "Visitors generated" },
                { v: 24, suffix: "/7", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl px-4 py-3 text-left">
                  <div className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    <AnimatedCounter to={s.v} />
                    {s.suffix}
                  </div>
                  <div className="text-[11px] text-muted-foreground sm:text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground/70">
          <span>Trusted stack</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Spring Boot</span>
          <span>AWS</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}
