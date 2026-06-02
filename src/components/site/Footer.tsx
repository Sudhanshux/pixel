import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import logo from "@/assets/bytingo-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold">
            <img src={logo} alt="Bytingo logo" width={28} height={28} className="size-7 rounded-md" loading="lazy" />
            Bytingo<span className="text-primary">.</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">© {new Date().getFullYear()} Bytingo — Crafted with care for ambitious brands.</p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="font-display text-foreground">Contact</div>
          <a href="mailto:contact.bytingo@gmail.com" className="flex items-center gap-2 hover:text-foreground"><Mail className="size-4" /> contact.bytingo@gmail.com</a>
          <a href="tel:+919821019954" className="flex items-center gap-2 hover:text-foreground"><Phone className="size-4" /> +91 98210 19954</a>
        </div>
        <div className="flex items-start gap-3 text-muted-foreground md:justify-end">
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-foreground"><Twitter className="size-4" /></a>
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground"><Github className="size-4" /></a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Linkedin className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}
