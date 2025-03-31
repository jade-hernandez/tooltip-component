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

export type TCurrency = "$" | "€";
export type TBillingCycle = "monthly" | "annually";
export type TVariant = "default" | "highlighted";

export interface IPricingProps extends React.HTMLAttributes<HTMLDivElement> {
  pricing: string[];
  currency?: TCurrency;
  billingCycle?: TBillingCycle;
  variant?: TVariant;
}

const Pricing = ({
  pricing,
  currency = "$",
  billingCycle = "monthly",
  variant = "default",
  className,
  ...props
}: IPricingProps) => {
  const montlyPricing = Number(pricing[0]);
  const annuallyPricing = Number(pricing[1]);
  const annuallyPricingAsMonth = Math.round(annuallyPricing * 12);

  const currencyMap = {
    $: "en-US",
    "€": "fr-FR"
  };

  const formattedPrice = new Intl.NumberFormat(currencyMap[currency], {
    style: "currency",
    currency: currency === "$" ? "USD" : "EUR"
  }).format(billingCycle === "monthly" ? montlyPricing : annuallyPricing);


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
          / month
        </span>
      </div>
      <div>
        <span className='mt-1 text-base text-neutral-600'>Billed {billingCycle}</span>
        {billingCycle === "annually" && (
          <span className='mt-1 text-base text-neutral-600'>{" "}({currency}{annuallyPricingAsMonth})</span>
        )}
      </div>
    </div>
  );
};

export { Pricing };
