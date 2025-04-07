"use client";

import { Tooltip } from "./ui/tooltip";

export default function TooltipComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      {/* Basic tooltip (bottom position - default) */}
      <div>
        <Tooltip content="This is a tooltip" position="top">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Hover me
          </button>
        </Tooltip>
      </div>

      {/* Different positions examples */}
      <div className="flex gap-8">
        <Tooltip content="Right tooltip" position="right">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Right
          </button>
        </Tooltip>

        <Tooltip content="Bottom tooltip" position="bottom">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Bottom
          </button>
        </Tooltip>

        <Tooltip content="Left tooltip" position="left">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Left
          </button>
        </Tooltip>
      </div>
    </div>
  );
}