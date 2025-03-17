import { cn } from "@/lib/utils";


export interface PriceCardProps {
  price: number;
  currency: "$" | "€";
  duration: "month" | "year";
  subText?: string;
  isHighlighted?: boolean;
  className?: string;
}

const PricingCard: React.FC<PriceCardProps> = ({
  price,
  currency,
  duration,
  subText,
  isHighlighted = false,
  className,
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-baseline">
        <span className={cn("text-5xl font-semibold text-neutral-900", isHighlighted && "text-indigo-700")}>
          {currency}{price.toFixed(2)}
        </span>
        <span className={cn("text-base text-neutral-900", isHighlighted && "text-indigo-700")}>
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
    </div >
  );
};

export { PricingCard };
