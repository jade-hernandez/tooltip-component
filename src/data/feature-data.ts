export interface FeatureItem {
  content: string;
  className?: string;
}

// Basic plan features
export const basicFeatures: FeatureItem[] = [
  { content: "Standard quality images" },
  { content: "Limited to personal use" },
  { content: "Email support" }
];

// Standard plan features
export const standardFeatures: FeatureItem[] = [
  { content: "Expanded library with more diverse abstract images" },
  { content: "High-resolution images available" },
  { content: "Suitable for commercial use" },
  { content: "Priority email support" },
  { content: "Advanced analytics" }
];

// Premium plan features
export const premiumFeatures: FeatureItem[] = [
  { content: "Full access to the entire image library, including exclusive content" },
  { content: "Highest quality images, including premium collections" },
  { content: "Commercial and resale rights" },
  { content: "Dedicated customer support line" },
  { content: "24/7 support response time" },
  { content: "Advanced analytics and insights" }
];