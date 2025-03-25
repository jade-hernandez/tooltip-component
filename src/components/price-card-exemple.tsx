import { basicFeatures, premiumFeatures, standardFeatures } from "data/feature-data";
import { PriceCard } from "./ui/price-card";

interface IPriceCardProps {
  title: string;
  description: string;
  price: string;
  features: { content: string; className?: string }[];
  isFeatured?: boolean;
  headingText?: string;
  variant?: "default" | "highlighted";
  buttonVariant?: "primary" | "secondary" | "tertiary" | "linkColor" | "linkGray" | "destructive";
}

// Define pricing plan configurations
const pricingPlans: IPriceCardProps[] = [
  {
    title: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    price: "9.99",
    features: basicFeatures,
    buttonVariant: "secondary"
  },
  {
    title: "Standard Plan",
    description: "Next-level Integrations, priced economically",
    price: "19.99",
    features: standardFeatures,
    isFeatured: true,
    headingText: "Most Popular",
    variant: "highlighted"
  },
  {
    title: "Premium Plan",
    description: "Experience limitless living for power users",
    price: "29.99",
    features: premiumFeatures,
    buttonVariant: "secondary"
  }
];

export const PriceCardExample = () => {
  return (
    <div className='flex flex-col justify-center gap-6 md:flex-row'>
      {pricingPlans.map((plan, index) => (
        <PriceCard
          key={index}
          {...plan}
        />
      ))}
    </div>
  );
};
