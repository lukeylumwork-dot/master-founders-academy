import { Check, PlayCircle, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "Full library of pre-recorded training modules",
  "Decision making, storytelling, and negotiation",
  "Practical problem-solving frameworks",
  "Downloadable worksheets and templates",
  "New modules added quarterly",
  "Access to the Reflections archive",
];

const outcomes = [
  {
    icon: PlayCircle,
    title: "Learn at your pace",
    description: "Structured modules you can revisit whenever you need them—no cohort schedule to follow",
  },
  {
    icon: FileText,
    title: "Built from real scenarios",
    description: "Every lesson grounded in actual decisions founders face, not abstract business theory",
  },
  {
    icon: Lightbulb,
    title: "Principle-led thinking",
    description: "Develop lasting mental models rather than tactics that expire with the next trend",
  },
];

const EducationPricing = () => {
  return (
    <section id="education-pricing" className="py-section bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Foundational Education
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            The fundamentals that actually matter
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Structured, principle-led training on the skills most founders learn the hard way: clear thinking, honest communication, and sound decision making.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Pricing Card */}
          <div className="bg-background border border-border p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Annual access</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl lg:text-6xl text-foreground">£495</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                or £49/month — cancel anytime
              </p>
            </div>

            <div className="h-px bg-border mb-8" />

            <div className="mb-8">
              <p className="font-medium text-foreground mb-4">What's included</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <Button variant="accent" size="lg" className="w-full justify-center">
                Start learning today
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Instant access. No application required.
              </p>
            </div>
          </div>

          {/* Value Positioning */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                The training no one gives you before you start.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most founders learn decision making, negotiation, and storytelling through trial and error. This library gives you the principles early—so you can make better calls from day one, and revisit them as your context changes.
              </p>
            </div>

            <div className="space-y-6">
              {outcomes.map((outcome) => (
                <div key={outcome.title} className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-sm shrink-0">
                    <outcome.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{outcome.title}</p>
                    <p className="text-sm text-muted-foreground">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 p-6 border-l-2 border-accent">
              <p className="font-serif text-lg text-foreground italic mb-2">
                "I wish I'd had this before my first board meeting. The negotiation module alone changed how I approach every conversation."
              </p>
              <p className="text-sm text-muted-foreground">
                — Pre-seed founder, 6 months in
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Who this is for:</span> First-time and early-stage founders building their toolkit. Also valuable as a refresher for experienced operators who want structured thinking frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPricing;
