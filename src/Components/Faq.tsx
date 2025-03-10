import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Define the type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Define props type for the Faq component
interface FaqProps {
  qna: FAQItem[];
}

export default function Faq({ qna }: FaqProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10" id="faq">
      <h1 className="text-5xl text-center mb-6 font-bold">FAQs</h1>
      <Accordion type="single" collapsible className="w-full max-w-2xl">
        {qna.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

