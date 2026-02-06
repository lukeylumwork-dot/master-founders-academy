import { BookOpen, GraduationCap, Mic, Users } from "lucide-react";

const pillars = [
  {
    id: "education",
    icon: BookOpen,
    title: "Foundational Education",
    subtitle: "Principle-led learning",
    description: "Structured, classroom-style training on the fundamentals that matter: decision making, storytelling, negotiation, and practical problem solving. Built from real scenarios, not abstract theory.",
    topics: ["Founder decision making", "Narrative & storytelling", "Negotiation frameworks", "Problem solving methods"],
  },
  {
    id: "academy",
    icon: GraduationCap,
    title: "Advanced Founder Academy",
    subtitle: "For later-stage founders",
    description: "A selective programme for founders navigating the complexities beyond Seed and Series A. Organisational design, strategic trade-offs, and second-order thinking for scaled leadership.",
    topics: ["Scaling complexity", "Organisational design", "Strategic trade-offs", "Second-order effects"],
  },
  {
    id: "reflections",
    icon: Mic,
    title: "Reflections",
    subtitle: "Short-form thinking",
    description: "Informal, human reflections recorded between meetings and while walking. Thoughts on the day-to-day reality of building—honest, unpolished, and far from the performative founder culture.",
    topics: ["Lived experience", "Honest observations", "Quiet insights", "Real moments"],
  },
  {
    id: "conversations",
    icon: Users,
    title: "Founder Conversations",
    subtitle: "Multiple perspectives",
    description: "Ongoing dialogues with founders working through live challenges. Sometimes with Andy and Chris from ReelFlow. Designed to surface new insight through varied viewpoints rather than prescriptive advice.",
    topics: ["Live challenges", "Work in progress", "Collaborative thinking", "Real decisions"],
  },
];

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
                  {String(index + 1).padStart(2, '0')}
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
