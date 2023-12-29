// Accordian.js

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import accordionData from "../../public/datalist";

const Accordian = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-[290px] sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto mb-24"
      >
        {accordionData.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="my-1">
            <AccordionTrigger className="uppercase bg-paragrapgh text-left text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] my-2 px-4 text-accentsme font-bold font-montserrat  hover:no-underline hover:text-accentsmehover hover:scale-105 m-0">
              {item.header}
            </AccordionTrigger>
            <AccordionContent className="text-[16px] tracking-wide leading-relaxed p-3 bg-lowwhite border-4 border-paragrapgh text-paralight">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
