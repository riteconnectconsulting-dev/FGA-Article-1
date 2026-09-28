import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Client Success", href: "#client-success" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="container flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/50 bg-navy text-sm font-extrabold tracking-tight text-gold">
              FGA
            </span>
            <span className="text-sm font-bold tracking-wide text-white">
              Federal Government Advisors
            </span>
          </Link>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
            FGA Powered by GOVConnect
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Government contracting consulting and proposal development
            support for businesses pursuing federal opportunities.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <Button
            asChild
            className="bg-gold text-navy-dark font-semibold hover:bg-gold-light"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Federal Government Advisors |
            FGA Powered by GOVConnect. All rights reserved.
          </p>
          <p>Government contract awards are determined solely by federal agencies.</p>
        </div>
      </div>
    </footer>
  );
}
