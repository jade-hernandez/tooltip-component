import { Button } from "./button";
import { CheckList } from "./check-list";
import { Pricing } from "./pricing";

interface PriceCardProps {
  title: string;
  description: string;
  price: number;
  features: { content: string; className?: string }[];
  showBanner?: boolean;
  bannerText?: string;
  variant?: "default" | "highlighted";
  buttonVariant?: "primary" | "secondary" | "tertiary" | "linkColor" | "linkGray" | "destructive";
}

export const PriceCard: React.FC<PriceCardProps> = ({
  title,
  description,
  price,
  features,
  showBanner = false,
  bannerText = "Most Popular",
  variant = "default",
  buttonVariant = "primary"
}) => {
  return (
    <div className="p-6 border rounded-md shadow-sm max-w-sm w-full relative bg-white ">
      {showBanner && (
        <div className="bg-indigo-100 text-indigo-700 text-center py-3 font-semibold rounded-t-lg absolute top-0 left-0 right-0">
          {bannerText}
        </div>
      )}

      {/* Add padding-top only when the banner is shown */}
      <div className={showBanner ? "pt-10" : ""}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-neutral-600 mb-6">{description}</p>

        <Pricing
          price={price}
          currency="$"
          duration="month"
          subText="Billed monthly"
          variant={variant}
        />

        <div className="mt-6">
          <CheckList items={features} />
        </div>

        <Button
          textContent="Buy now"
          variant={buttonVariant}
          size="lg"
          className="w-full text-center justify-center"
        />
      </div>
    </div>
  );
};
