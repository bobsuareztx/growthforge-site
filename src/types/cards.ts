import React from "react";

export type FeatureCardProps = {
  title: string;
  text: string;
};

export type FAQCardProps = {
  question: string;
  answer: string;
};

export type ResourceCardItem = {
  tag?: string;
  title: string;
  text: string;
  ctaLabel?: string;
  href?: string;
  meta?: React.ReactNode;
};

export type SupportCard = {
  tag?: string;
  title: string;
  text: string;
  ctaLabel?: string;
  href?: string;
};

export type StepItem = {
  title: string;
  text: string;
};

export type TeamCardItem = {
  title: string;
  text: string;
};

export type PrincipleCardItem = {
  title: string;
  text: string;
};

export type LongFormBodySection = {
  heading: string;
  paragraphs: string[];
};

export type CaseStudyOutcomeItem = {
  title: string;
  text: string;
};

export type CaseStudyMetricItem = {
  label: string;
  value: string;
};
