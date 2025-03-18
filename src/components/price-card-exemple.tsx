import { basicFeatures, premiumFeatures, standardFeatures } from "data/feature-data";
import { PriceCard } from "./ui/price-card";

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

export const PriceCardExample: React.FC = () => {
  // Define pricing plan configurations
  const pricingPlans: PriceCardProps[] = [
    {
      title: "Basic Plan",
      description: "Access to a curated selection of abstract images",
      price: 9.99,
      features: basicFeatures,
      variant: "default",
      buttonVariant: "secondary"
    },
    {
      title: "Standard Plan",
      description: "Next-level Integrations, priced economically",
      price: 19.99,
      features: standardFeatures,
      showBanner: true,
      bannerText: "Most Popular",
      variant: "highlighted",
      buttonVariant: "primary"
    },
    {
      title: "Premium Plan",
      description: "Experience limitless living for power users",
      price: 29.99,
      features: premiumFeatures,
      variant: "default",
      buttonVariant: "secondary"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      {pricingPlans.map((plan, index) => (
        <PriceCard key={index} {...plan} />
      ))}
    </div>
  );
};








