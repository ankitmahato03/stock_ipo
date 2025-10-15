"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACCORDIAN_ITEMS } from "@/lib/constant";
import React from "react";

export const IPOAccordion: React.FC = () => {
  return (
    <section className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 my-8 w-full max-w-5xl mx-auto">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="space-y-4"
      >
        {ACCORDIAN_ITEMS.map(({ value, title, content }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-lg sm:text-xl font-semibold">
              {title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 text-muted-foreground leading-relaxed">
              {content.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
