import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bytingo-logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold" aria-label="Bytingo home">
          <img src={logo} alt="Bytingo logo" width={32} height={32} className="size-8 rounded-lg" />
          <span>Bytingo<span className="text-primary">.</span></span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid size-9 place-items-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl glass-strong p-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild variant="hero" className="w-full">
                <a href="#contact" onClick={() => setOpen(false)}>Get in touch</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
