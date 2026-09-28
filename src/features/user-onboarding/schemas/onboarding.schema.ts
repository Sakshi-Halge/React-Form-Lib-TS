import { z } from 'zod'
import { phoneRegex } from '@/utils/formRegex'
import {
  GENDER_OPTIONS,
  NATIONALITY_OPTIONS,
} from '../constants/onboarding.constants'

const genderValues = GENDER_OPTIONS.map((option) => option.value) as [string, ...string[]]
const nationalityValues = NATIONALITY_OPTIONS.map((option) => option.value) as [string, ...string[]]


export const PersonalInfoValues = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name is too long'),
  lastName: z
    .string()  
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name is too long'),
  dateOfBirth: z
    .string()
    .trim()
    .min(1, 'Date of birth is required')
    .refine((value) => {
      if (!value) return false
      const date = new Date(value)
      return !Number.isNaN(date.getTime()) && date <= new Date()
    }, 'Date of birth must be a valid past date'),
  gender: z.enum(genderValues, {
    message: 'Please select a valid gender',
  }).optional(),
  nationality: z.enum(nationalityValues, {
    message: 'Please select a valid nationality',
  }),
})

export const ProfessionalInfoValues = z.object({
  jobTitle: z
    .string()
    .trim()
    .min(2, 'Job title is required')
    .max(100, 'Job title is too long'),
  companyName: z
    .string()
    .trim()
    .min(2, 'Company name is required')
    .max(100, 'Company name is too long'),
  industry: z
    .string()
    .trim()
    .min(2, 'Industry is required')
    .max(80, 'Industry is too long'),
  yearsOfExperience: z
    .number()
    .int('Experience must be a whole number')
    .min(0, 'Experience cannot be negative')
    .max(60, 'Experience seems too high'),
  employmentType: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'], {
    message: 'Please select a valid employment type',
  }),
  department: z.string().trim().min(2, 'Department is required').optional(),
})

export const ContactInfoValues = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .regex(phoneRegex, 'Please enter a valid phone number'),
  addressLine1: z.string().trim().min(5, 'Street address is required').max(200),
  addressLine2: z.string().trim().max(200).optional(),
  city: z.string().trim().min(2, 'City is required').max(100),
  state: z.string().trim().min(2, 'State is required').max(100),
  postalCode: z.string().trim().min(3, 'Postal code is required').max(20),
  country: z.string().trim().min(2, 'Country is required').max(100),
})

export const OnboardingRegistrationValues = z.object({
  personalInfo: PersonalInfoValues,
  professionalInfo: ProfessionalInfoValues,
  contactInfo: ContactInfoValues,
})

export type PersonalInfoSchema = z.infer<typeof PersonalInfoValues>
export type ProfessionalInfoSchema = z.infer<typeof ProfessionalInfoValues>
export type ContactInfoSchema = z.infer<typeof ContactInfoValues>
export type OnboardingRegistrationSchema = z.infer<typeof OnboardingRegistrationValues>
