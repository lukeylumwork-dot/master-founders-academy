import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Education", href: "#education-pricing" },
  { label: "Academy", href: "#academy-pricing" },
  { label: "Reflections", href: "#reflections" },
  { label: "Conversations", href: "#conversations" },
  { label: "About", href: "#about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-xl lg:text-2xl tracking-tight text-foreground hover:text-accent transition-colors duration-300"
          >
            Master Founders Academy
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="editorial-link text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="accent" size="sm" asChild>
              <a href="#education-pricing">Begin Learning</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="section-container py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="block py-2 text-lg font-serif text-foreground hover:text-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-border">
                <Button variant="accent" className="w-full justify-center" asChild>
                  <a href="#education-pricing" onClick={() => setIsMenuOpen(false)}>Begin Learning</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
