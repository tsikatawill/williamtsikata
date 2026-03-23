"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const Akpe = () => {
  return (
    <Tooltip>
      <TooltipTrigger className="italic underline underline-offset-4">
        Akpe!
      </TooltipTrigger>
      <TooltipContent>
        <div>
          <p className="font-semibold">Akpe</p>
          <p>Ewe expression that means "Thank You"</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
