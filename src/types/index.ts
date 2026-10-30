export type Language = "en" | "ne";

export interface ServiceItem {
  id: string;
  slug: string;
  iconName: string;
  title: {
    en: string;
    ne: string;
  };
  shortDescription: {
    en: string;
    ne: string;
  };
  fullDescription: {
    en: string;
    ne: string;
  };
  priceNote: {
    en: string;
    ne: string;
  };
  targetAudience: {
    en: string;
    ne: string;
  };
  requiredDocuments: {
    en: string[];
    ne: string[];
  };
  processSteps: {
    en: string[];
    ne: string[];
  };
  estimatedTime: {
    en: string;
    ne: string;
  };
  disclaimer?: {
    en: string;
    ne: string;
  };
  faqs: {
    question: {
      en: string;
      ne: string;
    };
    answer: {
      en: string;
      ne: string;
    };
  }[];
}

export interface NavLink {
  href: string;
  label: {
    en: string;
    ne: string;
  };
}

export interface FAQItem {
  question: {
    en: string;
    ne: string;
  };
  answer: {
    en: string;
    ne: string;
  };
  category?: string;
}

export interface HowItWorksStep {
  step: number;
  title: {
    en: string;
    ne: string;
  };
  description: {
    en: string;
    ne: string;
  };
  iconName: string;
}

export interface WhyChooseUsItem {
  title: {
    en: string;
    ne: string;
  };
  description: {
    en: string;
    ne: string;
  };
  iconName: string;
}
