"use client";

import { Tooltip } from "./tooltip-forced-visible";

export default function TooltipExercise() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[calc(100vh-32px)]">
      <Tooltip content="This is a tooltip" />
    </div >
  );
}