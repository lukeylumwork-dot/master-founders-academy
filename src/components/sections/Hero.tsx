import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 lg:pb-24">
      <div className="section-container">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="fade-in text-sm font-medium tracking-widest uppercase text-accent mb-6">
            For SaaS Founders
          </p>

          {/* Main Headline */}
          <h1 className="fade-in fade-in-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground text-balance">
            Clear thinking for the founders building what's next
          </h1>

          {/* Subheadline */}
          <p className="fade-in fade-in-delay-2 mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Practical education, honest reflections, and real conversations—grounded in the lived experience of building and scaling a SaaS company. No hype. No quick fixes. Just substance.
          </p>

          {/* Subtle CTA */}
          <div className="fade-in fade-in-delay-3 mt-12 flex items-center gap-6">
            <a 
              href="#pillars"
              className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-300"
            >
              <span className="font-medium">Explore the library</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Editorial accent line */}
        <div className="fade-in fade-in-delay-4 mt-20 lg:mt-32 flex items-center gap-4">
          <div className="h-px w-16 bg-accent" />
          <p className="text-sm text-muted-foreground italic font-serif">
            From Seed to Series B and beyond
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
