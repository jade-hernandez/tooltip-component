import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const pricingCardVariants = cva(
  "flex flex-col",
  {
    variants: {
      variant: {
        default: "",
        highlighted: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof pricingCardVariants> {
  price: number;
  currency: "$" | "€";
  duration: "month" | "year";
  subText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  price,
  currency,
  duration,
  subText,
  variant,
  className,
  ...props
}) => {

  const priceTextColor = variant === "highlighted" ? "text-indigo-700" : "text-neutral-900";
  const durationTextColor = variant === "highlighted" ? "text-indigo-700" : "text-neutral-900";

  return (
    <div
      className={cn(pricingCardVariants({ variant }), className)}
      {...props}
    >
      <div className="flex items-baseline">
        <span className={cn("text-5xl font-semibold", priceTextColor)}>
          {currency}{price.toFixed(2)}
        </span>
        <span className={cn("text-base", durationTextColor)}>
          / {duration}
        </span>
      </div>
      {
        subText && (
          <span className="text-base text-neutral-600">
            {subText}
          </span>
        )
      }
    </div>
  );
};

export { PricingCard, pricingCardVariants };
