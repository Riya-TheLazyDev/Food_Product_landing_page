import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How many bottles do I get each month?",
      answer: "You can choose between 3, 6, or 12 bottle shipments depending on your selected club tier and preference."
    },
    {
      question: "Can I change my plan?",
      answer: "Absolutely. You can log into your account at any time to upgrade, downgrade, or pause your membership completely hassle-free."
    },
    {
      question: "How do you source your wine?",
      answer: "We source exclusively from independent producers who follow organic, low-intervention practices to ensure high-vibration wines."
    },
    {
      question: "How does delivery work?",
      answer: "We ship directly to your door in climate-controlled packaging. You'll receive a tracking number as soon as your box ships."
    },
    {
      question: "Can I gift a club membership?",
      answer: "Yes, you can easily set up a prepaid 3, 6, or 12-month membership as a gift during the checkout process."
    },
    {
      question: "Why natural wine?",
      answer: "Natural wine is better for the environment and better for you. It's made without synthetic pesticides, herbicides, or artificial additives."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background-main">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-12 text-center">
          Frequently asked
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-serif text-lg py-5 border-t border-border">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
