import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const pricingVariants = cva("", {
  variants: {
    variant: {
      default: "text-neutral-900",
      highlighted: "text-indigo-700"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

type TCurrency = "$" | "€";
type TBillingCycle = "month" | "year";
type TVariant = "default" | "highlighted";

export interface IPricingProps extends React.HTMLAttributes<HTMLDivElement> {
  price: string;
  currency?: TCurrency;
  billingCycle?: TBillingCycle;
  subText?: string;
  variant?: TVariant;
}

const Pricing = ({
  price,
  currency = "$",
  billingCycle = "month",
  subText,
  variant = "default",
  className,
  ...props
}: IPricingProps) => {
  const priceAsNumber = Number(price);

  const currencyMap = {
    $: "en-US",
    "€": "fr-FR"
  };

  const formattedPrice = new Intl.NumberFormat(currencyMap[currency], {
    style: "currency",
    currency: currency === "$" ? "USD" : "EUR"
  }).format(priceAsNumber);

  return (
    <div
      className={cn("flex flex-col", className)}
      {...props}
    >
      <div className='flex items-baseline'>
        <span className={cn("text-5xl font-semibold", pricingVariants({ variant }))}>
          {formattedPrice}
        </span>
        <span className={cn("text-base", pricingVariants({ variant }), "ml-1")}>
          / {billingCycle}
        </span>
      </div>
      {subText && <span className='mt-1 text-base text-neutral-600'>{subText}</span>}
    </div>
  );
};

export { Pricing };
