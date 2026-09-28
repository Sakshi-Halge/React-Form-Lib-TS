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

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
] as const;

export const NATIONALITY_OPTIONS = [
  { value: 'American', label: 'American' },
  { value: 'British', label: 'British' },
  { value: 'Canadian', label: 'Canadian' },
  { value: 'Indian', label: 'Indian' },
  { value: 'Australian', label: 'Australian' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Mexican', label: 'Mexican' },
  { value: 'Nigerian', label: 'Nigerian' },
  { value: 'Other', label: 'Other' },
] as const;

export type OnboardingStepId =
  (typeof ONBOARDING_STEPS)[number]['id']