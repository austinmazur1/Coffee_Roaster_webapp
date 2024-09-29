"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
};
