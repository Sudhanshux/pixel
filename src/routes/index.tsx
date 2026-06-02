import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyMe } from "@/components/site/WhyMe";
import { Portfolio } from "@/components/site/Portfolio";
import { Results } from "@/components/site/Results";
import { Process } from "@/components/site/Process";
import { Stack } from "@/components/site/Stack";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bytingo — Website, Mobile App & SEO Development Agency India" },
      { name: "description", content: "Bytingo builds high-converting websites, Android apps, web applications, SEO, AI automations & e-commerce for ambitious brands across India and worldwide." },
      { name: "keywords", content: "website development India, mobile app development, Android APK development, SEO services India, web applications, custom software development, UI/UX design, AI automation, e-commerce development, freelance developer India, Bytingo" },
      { property: "og:title", content: "Bytingo — Websites, Mobile Apps & SEO that grow business" },
      { property: "og:description", content: "Custom websites, Android apps, SEO and AI automations for startups and growing brands in India." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bytingo — Websites, Mobile Apps & SEO" },
      { name: "twitter:description", content: "High-performance websites, Android apps, SEO and AI automations." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Bytingo",
          description: "Website, mobile app and SEO development agency based in India.",
          email: "contact.bytingo@gmail.com",
          telephone: "+91-98210-19954",
          areaServed: ["IN", "Worldwide"],
          address: { "@type": "PostalAddress", addressCountry: "IN" },
          sameAs: [],
          makesOffer: [
            "Website Development",
            "Web Applications",
            "Mobile App Development",
            "Android APK Development",
            "SEO Services",
            "Custom Software Development",
            "UI/UX Design",
            "AI Automation",
            "E-commerce Development",
          ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <Results />
      <WhyMe />
      <Portfolio />
      <Process />
      <Stack />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
