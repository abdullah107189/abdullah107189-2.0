import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackgroundDemo() {
  return (
    <div className="relative flex w-full items-center justify-center bg-primary ">
      <div
        className={cn(
          "fixed top-0 inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the pcontainer to give a faded look */}

      <div className="h-screen pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
    </div>
  );
}
