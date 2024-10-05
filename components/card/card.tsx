"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CardComponentProps {
  title: string;
  description: string;
  content: any;
  footer: any;
}

export const CardComponent = ({
  title,
  description,
  content,
  footer,
}: CardComponentProps) => {
  return (
    <Card className="w-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <CardHeader>
            <AccordionTrigger>
              <CardTitle>{title}</CardTitle>
            </AccordionTrigger>
            <CardDescription className="text-xl">{description}</CardDescription>
          </CardHeader>
          <AccordionContent>
            <CardContent>
              <p>{content}</p>
            </CardContent>
            <CardFooter>
              <p>{footer}</p>
            </CardFooter>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

// function AccordionDemo() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// }
