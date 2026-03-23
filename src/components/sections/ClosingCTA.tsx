import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingCTA = () => {
  return (
    <section className="py-section">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
            Begin Your Journey
          </p>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            A long-term companion, not a quick fix
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're navigating your first major decision or scaling past Series A, 
            the library is here when you need it. Start wherever makes sense for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="xl" className="group" asChild>
              <a href="#education-pricing">
                Explore Foundational Education
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            
            <a 
              href="#reflections" 
              className="editorial-link text-muted-foreground hover:text-foreground font-medium py-4"
            >
              Or start with a reflection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
