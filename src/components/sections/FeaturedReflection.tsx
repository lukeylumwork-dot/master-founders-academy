import { Play, Clock } from "lucide-react";

const FeaturedReflection = () => {
  return (
    <section className="py-section">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Latest Reflection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
              On the weight of quiet decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most founder content focuses on the big moments—the raise, the launch, the exit. 
              But most of building happens in the spaces between. This reflection explores the 
              small, often invisible decisions that compound over years.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min listen
              </span>
              <span>Recorded while walking</span>
            </div>

            {/* Play Button */}
            <button className="mt-8 group flex items-center gap-4 text-foreground hover:text-accent transition-colors duration-300">
              <span className="w-14 h-14 flex items-center justify-center border border-current rounded-full group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5" />
              </span>
              <span className="font-medium">Listen to this reflection</span>
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary rounded-sm overflow-hidden">
              {/* Abstract visual representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Sound wave visualization */}
                  <div className="absolute inset-0 flex items-center justify-center gap-1 px-12">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 bg-accent/30 rounded-full"
                        style={{ 
                          height: `${20 + Math.sin(i * 0.3) * 30 + Math.random() * 20}%`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote overlay */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-background p-6 lg:p-8 border border-border max-w-xs">
              <p className="font-serif text-lg italic text-foreground leading-relaxed">
                "The decisions that matter most rarely feel urgent in the moment."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReflection;
