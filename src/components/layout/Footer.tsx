import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="font-serif text-2xl tracking-tight text-foreground"
            >
              Master Founders Academy
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Practical guidance for SaaS founders, grounded in lived experience. 
              Not theory. Not motivation. Just clear thinking from someone who's been there.
            </p>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#education-pricing" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Foundational Education
                </a>
              </li>
              <li>
                <a href="#academy-pricing" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Advanced Academy
                </a>
              </li>
              <li>
                <a href="#reflections" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Reflections
                </a>
              </li>
              <li>
                <a href="#conversations" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Founder Conversations
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="mailto:hello@founderslens.com" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Master Founders Academy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground italic font-serif">
            Built from experience, not theory.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
