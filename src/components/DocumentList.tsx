"use client";
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { IoIosDocument } from "react-icons/io";
import { useState } from "react";

const tags = Array.from({ length: 10 }).map(
  (_, i, a) => `business inst${a.length - i}.pdf`
);

export function DocumentList() {
  const [query, setQuery] = useState("");
  return (
    <ScrollArea className="h-72 w-full rounded-sm mb-12">
      <div className=" bg-white pb24 sticky top-0">
        <input
          className=" bg-lowwhite h-8 px-5 pr-10 w-72 rounded-sm text-sm focus:outline-none mb-4 "
          placeholder="Type here to search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="p-4">
        {/* <h4 className="mb-6 text-sm font-medium leading-none">
          Your documents
        </h4> */}
        {tags
          .filter((asd) => asd.toLowerCase().includes(query))
          .map((tag) => (
            <>
              <div key={tag} className="text-sm flex items-center">
                <IoIosDocument size={20} /> {tag}
              </div>
              <Separator className="my-2" />
            </>
          ))}
      </div>
    </ScrollArea>
  );
}

export default DocumentList;
