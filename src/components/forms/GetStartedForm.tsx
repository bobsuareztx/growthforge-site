"use client";

import React, { useMemo, useState } from "react";
import { GetStartedFormErrors, GetStartedFormValues, GetStartedMode } from "@/types/forms";
import { getStartedFormCopy, teamSizeOptions, useCaseOptions } from "@/data/forms/getStartedForm";
import GetStartedModeToggle from "@/components/forms/GetStartedModeToggle";

const initialValues: GetStartedFormValues = {
  mode: "start_free",
  firstName: "",
  lastName: "",
  workEmail: "",
  company: "",
  teamSize: "",
  useCase: "",
  demoGoal: "",
};

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function validate(values: GetStartedFormValues): GetStartedFormErrors {
  const errors: GetStartedFormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!values.workEmail.trim() || !isValidEmail(values.workEmail)) errors.workEmail = "Please enter a valid work email.";
  if (!values.company.trim()) errors.company = "Please enter your company.";
  if (!values.teamSize) errors.teamSize = "Please choose your team size.";
  if (!values.useCase) errors.useCase = "Please select your team or use case.";
  if (values.mode === "book_demo" && !values.demoGoal.trim()) errors.demoGoal = "Please tell us what you’d like to see.";
  return errors;
}

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; mode: GetStartedMode }
  | { status: "error"; message: string };

export default function GetStartedForm() {
  const [values, setValues] = useState<GetStartedFormValues>(initialValues);
  const [errors, setErrors] = useState<GetStartedFormErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  const modeDescription = useMemo(() => getStartedFormCopy.modeDescriptions[values.mode], [values.mode]);

  function setField<K extends keyof GetStartedFormValues>(field: K, nextValue: GetStartedFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: nextValue }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleModeChange(mode: GetStartedMode) {
    setValues((prev) => ({ ...prev, mode, demoGoal: mode === "book_demo" ? prev.demoGoal : "" }));
    setErrors((prev) => ({ ...prev, demoGoal: undefined }));
    setSubmission({ status: "idle" });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmission({ status: "submitting" });
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmission({ status: "success", mode: values.mode });
  }

  if (submission.status === "success") {
    const success = getStartedFormCopy.successMessages[submission.mode];
    return (
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8" role="status">
        <div className="text-2xl font-semibold tracking-tight text-slate-950">{success.title}</div>
        <p className="mt-3 text-sm leading-7 text-slate-700">{success.description}</p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="text-2xl font-semibold tracking-tight text-slate-950">{getStartedFormCopy.title}</div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{getStartedFormCopy.description}</p>
      <div className="mt-6">
        <GetStartedModeToggle value={values.mode} onChange={handleModeChange} />
        <p className="mt-3 text-sm text-slate-600">{modeDescription}</p>
      </div>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" value={values.firstName} onChange={(value) => setField("firstName", value)} error={errors.firstName} autoComplete="given-name" fieldId="first-name" />
          <Field label="Last name" value={values.lastName} onChange={(value) => setField("lastName", value)} error={errors.lastName} autoComplete="family-name" fieldId="last-name" />
        </div>
        <Field label="Work email" type="email" value={values.workEmail} onChange={(value) => setField("workEmail", value)} error={errors.workEmail} autoComplete="email" fieldId="work-email" />
        <Field label="Company" value={values.company} onChange={(value) => setField("company", value)} error={errors.company} autoComplete="organization" fieldId="company" />
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField label="Team size" value={values.teamSize} onChange={(value) => setField("teamSize", value as GetStartedFormValues["teamSize"])} error={errors.teamSize} options={teamSizeOptions} fieldId="team-size" />
          <SelectField label="Team or primary use case" value={values.useCase} onChange={(value) => setField("useCase", value as GetStartedFormValues["useCase"])} error={errors.useCase} options={useCaseOptions} fieldId="use-case" />
        </div>
        {values.mode === "book_demo" ? <TextAreaField label="What would you like to see?" value={values.demoGoal} onChange={(value) => setField("demoGoal", value)} error={errors.demoGoal} fieldId="demo-goal" /> : null}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button type="submit" disabled={submission.status === "submitting"} className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            {submission.status === "submitting" ? "Submitting..." : getStartedFormCopy.submitLabels[values.mode]}
          </button>
          <p className="text-xs text-slate-500">Starter implementation with realistic UX and validation.</p>
        </div>
      </form>
    </div>
  );
}

type FieldProps = { label: string; value: string; onChange: (value: string) => void; error?: string; type?: string; autoComplete?: string; fieldId: string; };
function Field({ label, value, onChange, error, type = "text", autoComplete, fieldId }: FieldProps) {
  const errorId = `${fieldId}-error`;
  return (
    <label className="block" htmlFor={fieldId}>
      <div className="mb-2 text-sm font-medium text-slate-800">{label}</div>
      <input id={fieldId} type={type} value={value} autoComplete={autoComplete} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${error ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-slate-400"}`} />
      {error ? <div id={errorId} className="mt-2 text-xs text-red-600">{error}</div> : null}
    </label>
  );
}

type SelectFieldProps = { label: string; value: string; onChange: (value: string) => void; error?: string; options: Array<{ label: string; value: string }>; fieldId: string; };
function SelectField({ label, value, onChange, error, options, fieldId }: SelectFieldProps) {
  const errorId = `${fieldId}-error`;
  return (
    <label className="block" htmlFor={fieldId}>
      <div className="mb-2 text-sm font-medium text-slate-800">{label}</div>
      <select id={fieldId} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${error ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-slate-400"}`}>
        <option value="">Select one</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
      {error ? <div id={errorId} className="mt-2 text-xs text-red-600">{error}</div> : null}
    </label>
  );
}

type TextAreaFieldProps = { label: string; value: string; onChange: (value: string) => void; error?: string; fieldId: string; };
function TextAreaField({ label, value, onChange, error, fieldId }: TextAreaFieldProps) {
  const errorId = `${fieldId}-error`;
  return (
    <label className="block" htmlFor={fieldId}>
      <div className="mb-2 text-sm font-medium text-slate-800">{label}</div>
      <textarea id={fieldId} value={value} onChange={(event) => onChange(event.target.value)} rows={4} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${error ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-slate-400"}`} />
      {error ? <div id={errorId} className="mt-2 text-xs text-red-600">{error}</div> : null}
    </label>
  );
}
