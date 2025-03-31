import { cn } from "@/lib/utils";
import { Button } from "./button";
import { CheckList } from "./check-list";
import { Pricing, TBillingCycle } from "./pricing";

type TVariant = "default" | "highlighted";
type TButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "linkColor"
  | "linkGray"
  | "destructive";

export interface IPriceCardProps {
  title: string;
  description: string;
  pricing: string[];
  billingCycle: TBillingCycle;
  features: { content: string; className?: string }[];
  isFeatured?: boolean;
  headingText?: string;
  variant?: TVariant;
  buttonVariant?: TButtonVariant;
}

export const PriceCard = ({
  title,
  description,
  pricing,
  billingCycle,
  features,
  isFeatured = false,
  headingText = "",
  variant = "default",
  buttonVariant = "primary"
}: IPriceCardProps) => {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-[384px] flex-col justify-between rounded-md border border-neutral-200 bg-white shadow-sm",
        isFeatured ? "border-indigo-600" : ""
      )}
    >
      {isFeatured && headingText && (
        <div className='h-fit rounded-t-lg bg-indigo-50 py-4 text-center text-xl font-semibold text-indigo-700'>
          {headingText}
        </div>
      )}

      <div className='flex h-full flex-col justify-center space-y-8 p-8'>
        <div className='flex h-full flex-col space-y-8'>
          <div className='flex flex-col space-y-2'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-neutral-600'>{description}</p>
          </div>

          <Pricing
            pricing={pricing}
            billingCycle={billingCycle}
            variant={variant}
          />

          <CheckList items={features} />
        </div>

        <Button
          textContent='Buy now'
          variant={buttonVariant}
          size='lg'
          className='mt-auto w-full justify-center text-center'
        />
      </div>
    </div>
  );
};
