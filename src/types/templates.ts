import React from "react";
import { CTAAction, SectionIntroProps } from "@/types/common";
import {
  FeatureCardProps,
  FAQCardProps,
  ResourceCardItem,
  SupportCard,
  LongFormBodySection,
  CaseStudyOutcomeItem,
  CaseStudyMetricItem,
} from "@/types/cards";

export type ProductDetailTemplateProps = {
  activeNavLabel?: string;
  eyebrow: string;
  title: string;
  text: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  disclosure?: string;
  heroRightContent?: React.ReactNode;
  valueIntro: SectionIntroProps;
  capabilities: FeatureCardProps[];
  workflowIntro: SectionIntroProps;
  workflowCards: FeatureCardProps[];
  faqIntro: SectionIntroProps;
  faqs: FAQCardProps[];
  ctaBand: {
    eyebrow: string;
    title: string;
    text: string;
    primaryAction: CTAAction;
    secondaryAction?: CTAAction;
  };
};

export type SolutionDetailTemplateProps = {
  activeNavLabel?: string;
  eyebrow: string;
  title: string;
  text: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  disclosure?: string;
  heroRightContent?: React.ReactNode;
  challengeIntro: SectionIntroProps;
  challengeCards: FeatureCardProps[];
  solutionIntro: SectionIntroProps;
  solutionCards: FeatureCardProps[];
  outcomesIntro: SectionIntroProps;
  outcomeCards: FeatureCardProps[];
  ctaBand: {
    eyebrow: string;
    title: string;
    text: string;
    primaryAction: CTAAction;
    secondaryAction?: CTAAction;
  };
};

export type ResourceIndexTemplateProps = {
  activeNavLabel?: string;
  eyebrow: string;
  title: string;
  text: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  disclosure?: string;
  heroRightContent?: React.ReactNode;
  featuredIntro: SectionIntroProps;
  featuredItem: ResourceCardItem;
  gridIntro: SectionIntroProps;
  gridItems: ResourceCardItem[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: {
    eyebrow: string;
    title: string;
    text: string;
    primaryAction: CTAAction;
    secondaryAction?: CTAAction;
  };
};

export type BlogPostTemplateProps = {
  activeNavLabel?: string;
  eyebrow: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  readTime: string;
  heroRightContent?: React.ReactNode;
  bodySections: LongFormBodySection[];
  relatedItems: ResourceCardItem[];
  ctaBand: {
    eyebrow: string;
    title: string;
    text: string;
    primaryAction: CTAAction;
    secondaryAction?: CTAAction;
  };
};

export type SupportPageTemplateProps = {
  activeNavLabel?: string;
  eyebrow: string;
  title: string;
  text: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  disclosure?: string;
  heroRightContent?: React.ReactNode;
  framingIntro: SectionIntroProps;
  framingCards: FeatureCardProps[];
  contentIntro: SectionIntroProps;
  contentCards: SupportCard[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: {
    eyebrow: string;
    title: string;
    text: string;
    primaryAction: CTAAction;
    secondaryAction?: CTAAction;
  };
};

export type CaseStudyTemplateProps = {
  activeNavLabel?: string;
  eyebrow: string;
  title: string;
  description: string;
  companyLabel: string;
  industryLabel: string;
  heroRightContent?: React.ReactNode;
  summaryMetrics: CaseStudyMetricItem[];
  narrativeSections: LongFormBodySection[];
  outcomes: CaseStudyOutcomeItem[];
  relatedItems: ResourceCardItem[];
  ctaBand: {
    eyebrow: string;
    title: string;
    text: string;
    primaryAction: CTAAction;
    secondaryAction?: CTAAction;
  };
};
