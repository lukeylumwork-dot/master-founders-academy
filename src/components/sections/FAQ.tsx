import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the difference between Foundational Education and the Academy?",
    answer:
      "Foundational Education is a self-paced library of training modules covering core skills like decision making, negotiation, and storytelling. The Academy is a selective, cohort-based programme with live sessions, peer learning, and 1:1 advisory—designed for founders who've found traction and are scaling.",
  },
  {
    question: "Can I upgrade from Education to the Academy later?",
    answer:
      "Absolutely. Many Academy participants start with the Education library. If you apply and are accepted into the Academy, your Education subscription will be rolled into your Academy access at no extra cost.",
  },
  {
    question: "How selective is the Academy?",
    answer:
      "Each cohort is limited to 12 founders. We look for people who are past initial product-market fit (typically Seed to Series A), have a team of 10–50, and are genuinely committed to reflective leadership. We review applications monthly.",
  },
  {
    question: "What format are the Education modules?",
    answer:
      "A mix of video lessons, written frameworks, and downloadable worksheets. Each module is designed to be completed in 30–45 minutes, with practical exercises you can apply immediately. New modules are added quarterly.",
  },
  {
    question: "Is there a free trial or money-back guarantee?",
    answer:
      "We don't offer a free trial, but the Education tier comes with a 30-day satisfaction guarantee. If it's not right for you, we'll refund your payment in full—no questions asked.",
  },
  {
    question: "How much time commitment does the Academy require?",
    answer:
      "Plan for roughly 4–6 hours per month: one live session (90 minutes), preparation work, and community participation. Quarterly 1:1 calls are scheduled at your convenience. It's designed to fit around the demands of running a company.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-section bg-card">
      <div className="section-container">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Things founders ask before joining
          </h2>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-accent transition-colors py-6 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
