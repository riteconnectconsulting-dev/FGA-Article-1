import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F6d9a87deca784f62bd00462b023bb1a9%2F7a794daf8d624b55848638ad5083f0cf?format=webp&width=800&height=1200";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Client Success", href: "#client-success" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-blue-100 bg-white transition-shadow", scrolled && "shadow-md")}>
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="Federal Government Advisors" className="h-12 w-auto object-contain md:h-16" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-semibold text-navy transition-colors hover:text-red-600">
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden bg-red-600 font-semibold text-white hover:bg-red-700 md:inline-flex">
          <a href="#contact">Work With FGA</a>
        </Button>
        <button aria-label="Toggle menu" className="text-navy md:hidden" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-blue-100 bg-white md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-sm font-semibold text-navy hover:bg-blue-50 hover:text-red-600">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full bg-red-600 font-semibold text-white hover:bg-red-700">Work With FGA</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
