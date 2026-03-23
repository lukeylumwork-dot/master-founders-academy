import { Check, Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "12-month structured programme",
  "Monthly live sessions with peers",
  "Private community of later-stage founders",
  "1:1 advisory calls (quarterly)",
  "Full access to Foundational Education library",
  "Early access to new Reflections content",
];

const outcomes = [
  {
    icon: Users,
    title: "Peer cohort",
    description: "Join a carefully selected group of 12 founders navigating similar challenges",
  },
  {
    icon: Calendar,
    title: "Structured cadence",
    description: "Monthly themes covering scaling, org design, and strategic trade-offs",
  },
  {
    icon: BookOpen,
    title: "Applied learning",
    description: "Work through real decisions with experienced guidance, not theoretical frameworks",
  },
];

const AcademyPricing = () => {
  return (
    <section id="academy-pricing" className="py-section bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Advanced Founder Academy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            For founders ready to scale with intention
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A selective, year-long programme for founders who have found traction and are now navigating the complexities of growth. Limited to 12 participants per cohort.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Pricing Card */}
          <div className="bg-card border border-border p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Annual investment</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl lg:text-6xl text-foreground">£12,000</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                or £1,100/month for 12 months
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
                Apply for the next cohort
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Applications reviewed monthly. Join today.
              </p>
            </div>
          </div>

          {/* Value Positioning */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Not another course. A thinking partner.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The Academy isn't about consuming content. It's about having structured time and space to work through the decisions that shape your company—organisational design, strategic pivots, managing boards, and building leadership teams.
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
                "The value isn't the frameworks—it's having people who understand the weight of the decisions you're making."
              </p>
              <p className="text-sm text-muted-foreground">
                — Academy cohort member, Series A founder
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Who this is for:</span> Founders who have raised Seed or Series A, have a team of 10-50, and are navigating the shift from building product to building organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyPricing;
