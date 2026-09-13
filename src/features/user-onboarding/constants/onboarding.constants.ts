import { type MultiStepItem } from "@components/MultiStep" 

export const ONBOARDING_STEPS = [
    {
    id: 'personal',
    label: 'Personal Information',
  },
  {
    id: 'professional',
    label: 'Professional Information',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
] as const satisfies readonly MultiStepItem[];

export type OnboardingStepId =
  (typeof ONBOARDING_STEPS)[number]['id']