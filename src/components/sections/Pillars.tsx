import { pillars } from "@/data/pillars";

const Pillars = () => {
  return (
    <section id="pillars" className="py-section bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            The Library
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Four ways to learn, reflect, and grow
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Each pillar serves a different purpose. Together, they form a companion for the long journey of building something meaningful.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className="group bg-background p-8 lg:p-10 border border-border hover:border-accent/30 transition-all duration-500"
            >
              {/* Icon & Number */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-sm">
                  <pillar.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="font-serif text-4xl text-muted-foreground/30 group-hover:text-accent/30 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-accent font-medium mb-2">{pillar.subtitle}</p>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Topics */}
                <ul className="flex flex-wrap gap-2">
                  {pillar.topics.map((topic) => (
                    <li
                      key={topic}
                      className="px-3 py-1 text-sm text-muted-foreground bg-secondary/50 rounded-sm"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover accent */}
              <div className="mt-8 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
