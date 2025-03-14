import { PricingCard } from "./ui/pricing-card";

export const PriceCardExample: React.FC = () => {
  return (
    <div className="p-6 border rounded-md shadow-sm max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>

      <PricingCard
        price={29.99}
        currency="$"
        duration="month"
        subText="Billed monthly"
      />
    </div>
  );
};