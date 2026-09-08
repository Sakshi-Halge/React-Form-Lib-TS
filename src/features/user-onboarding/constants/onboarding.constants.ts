import { type MultiStepItem } from "@components/MultiStep" 

export const ONBOARDING_STEPS: MultiStepItem[] = [
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
] as const

export type OnboardingStepId =
  (typeof ONBOARDING_STEPS)[number]['id']