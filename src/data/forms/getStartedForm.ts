import { GetStartedMode, SelectOption, TeamSizeOption, UseCaseOption } from "@/types/forms";

export const getStartedModeOptions: Array<{ label: string; value: GetStartedMode }> = [
  { label: "Start free", value: "start_free" },
  { label: "Book a demo", value: "book_demo" },
];

export const teamSizeOptions: SelectOption<TeamSizeOption>[] = [
  { label: "1–10", value: "1-10" },
  { label: "11–50", value: "11-50" },
  { label: "51–200", value: "51-200" },
  { label: "201–500", value: "201-500" },
  { label: "500+", value: "500+" },
];

export const useCaseOptions: SelectOption<UseCaseOption>[] = [
  { label: "Marketing team", value: "marketing_team" },
  { label: "Sales team", value: "sales_team" },
  { label: "Revenue operations", value: "revenue_operations" },
  { label: "Startup / SMB", value: "startup_smb" },
  { label: "Leadership / executive", value: "leadership_executive" },
  { label: "Other", value: "other" },
];

export const getStartedFormCopy = {
  title: "Choose the next step that fits your team.",
  description: "Start with a lighter self-serve path or request a guided demo.",
  modeDescriptions: {
    start_free: "Best for teams that want a practical starting point and a lighter onboarding path.",
    book_demo: "Best for teams that want a guided walkthrough and a more tailored conversation.",
  },
  submitLabels: {
    start_free: "Start free",
    book_demo: "Request demo",
  },
  successMessages: {
    start_free: {
      title: "You’re in.",
      description: "We’ll use your information to set up the best starting path for your team.",
    },
    book_demo: {
      title: "Thanks — we’ve received your request.",
      description: "A follow-up step to schedule or confirm your demo would go here.",
    },
  },
};
