import { standardFeatures } from "data/feature-data";
import { CheckList } from "./ui/check-list";
import { PricingCard } from "./ui/pricing-card";


export const PriceCardExample: React.FC = () => {

  return (
    <div className="p-6 border rounded-md shadow-sm max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Standard Plan</h2>

      <PricingCard
        price={29.99}
        currency="$"
        duration="month"
        subText="Billed monthly"
        variant="highlighted"
      />

      <div className="mt-6">
        <CheckList items={standardFeatures} />
      </div>
    </div>
  );
};