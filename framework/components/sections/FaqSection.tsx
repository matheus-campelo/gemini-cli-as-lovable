import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  description: string;
  faqs: Faq[];
}

export default function FaqSection({ title, description, faqs }: FaqProps) {
  return (
    <div className="container py-12 md:py-24 max-w-3xl mx-auto">
      <div className="text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-muted-foreground mt-2">{description}</p>
      </div>
      <Accordion type="single" collapsible className="w-full mt-8">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}