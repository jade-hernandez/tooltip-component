import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


const priceTextVariants = cva(
  "text-5xl font-semibold",
  {
    variants: {
      variant: {
        default: "text-neutral-900",
        highlighted: "text-indigo-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const durationTextVariants = cva(
  "text-base",
  {
    variants: {
      variant: {
        default: "text-neutral-900",
        highlighted: "text-indigo-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PricingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  currency: "$" | "€";
  duration: "month" | "year";
  subText?: string;
  variant?: "default" | "highlighted";
}

const Pricing: React.FC<PricingProps> = ({
  price,
  currency,
  duration,
  subText,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-col", className)}
      {...props}
    >
      <div className="flex items-baseline">
        <span className={priceTextVariants({ variant })}>
          {currency}{price.toFixed(2)}
        </span>
        <span className={cn(durationTextVariants({ variant }), "ml-1")}>
          / {duration}
        </span>
      </div>
      {subText && (
        <span className="text-base text-neutral-600 mt-1">
          {subText}
        </span>
      )}
    </div>
  );
};

export { Pricing };
