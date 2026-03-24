import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

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
