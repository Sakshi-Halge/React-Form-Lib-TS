import { z } from 'zod'

const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/

export const PersonalInfoSchema = z.object({
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
  gender: z.string().trim().min(1, 'Please select a gender').optional(),
  nationality: z.string().trim().min(2, 'Nationality is required').optional(),
})

export const ProfessionalInfoSchema = z.object({
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
  yearsOfExperience: z.coerce
    .number()
    .int('Experience must be a whole number')
    .min(0, 'Experience cannot be negative')
    .max(60, 'Experience seems too high'),
  employmentType: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'], {
    message: 'Please select a valid employment type',
  }),
  department: z.string().trim().min(2, 'Department is required').optional(),
})

export const ContactInfoSchema = z.object({
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

export const OnboardingRegistrationSchema = z.object({
  personalInfo: PersonalInfoSchema,
  professionalInfo: ProfessionalInfoSchema,
  contactInfo: ContactInfoSchema,
})

export type PersonalInfoValues = z.infer<typeof PersonalInfoSchema>
export type ProfessionalInfoValues = z.infer<typeof ProfessionalInfoSchema>
export type ContactInfoValues = z.infer<typeof ContactInfoSchema>
export type OnboardingRegistrationValues = z.infer<typeof OnboardingRegistrationSchema>
