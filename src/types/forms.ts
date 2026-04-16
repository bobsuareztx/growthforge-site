export type GetStartedMode = "start_free" | "book_demo";

export type TeamSizeOption =
  | "1-10"
  | "11-50"
  | "51-200"
  | "201-500"
  | "500+";

export type UseCaseOption =
  | "marketing_team"
  | "sales_team"
  | "revenue_operations"
  | "startup_smb"
  | "leadership_executive"
  | "other";

export type GetStartedFormValues = {
  mode: GetStartedMode;
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  teamSize: TeamSizeOption | "";
  useCase: UseCaseOption | "";
  demoGoal: string;
};

export type GetStartedFormErrors = Partial<Record<keyof GetStartedFormValues, string>>;

export type SelectOption<T extends string = string> = {
  label: string;
  value: T;
};
