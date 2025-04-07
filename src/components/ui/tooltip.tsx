import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { useState, ReactNode, forwardRef } from "react";

// Define variants for the tooltip container
const tooltipVariants = cva(
  "absolute z-10 px-3 py-2 rounded-lg text-sm whitespace-nowrap",
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2"
      },
      variant: {
        default: "bg-neutral-950 text-white"
      }
    },
    defaultVariants: {
      position: "bottom",
      variant: "default"
    }
  }
);

// Define variants for the tooltip arrow
const arrowVariants = cva(
  "absolute border-4 border-transparent",
  {
    variants: {
      position: {
        top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-950",
        right: "right-full top-1/2 -translate-y-1/2 border-r-neutral-950",
        bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-950",
        left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-950"
      }
    },
    defaultVariants: {
      position: "bottom"
    }
  }
);

export interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  content: ReactNode;
  children: ReactNode;
  className?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, position, variant, className }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}

        {isVisible && (
          <div className={cn(tooltipVariants({ position, variant }), className)}>
            {content}
            {/* Arrow pointing to the trigger element */}
            <div className={arrowVariants({ position })} />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };