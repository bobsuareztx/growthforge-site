export type Plan = {
  name: string;
  audience: string;
  price: string;
  billingNote: string;
  description: string;
  features: string[];
  primaryCta: string;
  secondaryCta?: string;
  highlighted?: boolean;
};
