import { cn } from "@/lib/utils";

export interface PriceCardProps {
  price: number;
  currency: "$" | "€";
  duration: "month" | "year";
  subText?: string;
  className?: string;
}

const PricingCard: React.FC<PriceCardProps> = ({
  price,
  currency,
  duration,
  subText,
  className,
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-baseline">
        <span className="text-5xl font-semibold text-neutral-900">
          {currency}{price.toFixed(2)}
        </span>
        <span className=" text-base text-neutral-900">
          / {duration}
        </span>
      </div>
      {subText && (
        <span className="text-base text-neutral-900">
          {subText}
        </span>
      )}
    </div>
  );
};

export { PricingCard };
