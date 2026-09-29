import { useFormContext } from 'react-hook-form'
import type { OnboardingRegistrationFormValuesType } from '../schemas/onboarding.schema'
import Box from '@mui/material/Box'

const StepProfessionalInfo = () => {
  const { register, formState: { errors } } = useFormContext<OnboardingRegistrationFormValuesType>()

  return (
    <div>
      <Box sx={{ marginTop: '16px' }}>
        <input type="text" placeholder="Job Title" {...register('professionalInfo.jobTitle')} />
        {errors.professionalInfo?.jobTitle && <span>{errors.professionalInfo.jobTitle.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="Company Name" {...register('professionalInfo.companyName')} />
        {errors.professionalInfo?.companyName && <span>{errors.professionalInfo.companyName.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="Industry" {...register('professionalInfo.industry')} />
        {errors.professionalInfo?.industry && <span>{errors.professionalInfo.industry.message}</span>}
      </Box>
      <Box>
        <input
          type="number"
          placeholder="Years of Experience"
          {...register('professionalInfo.yearsOfExperience', { valueAsNumber: true })}
        />
        {errors.professionalInfo?.yearsOfExperience && <span>{errors.professionalInfo.yearsOfExperience.message}</span>}
      </Box>
      <Box>
        <select {...register('professionalInfo.employmentType')} defaultValue="">
          <option value="" disabled>Select Employment Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
        </select>
        {errors.professionalInfo?.employmentType && <span>{errors.professionalInfo.employmentType.message}</span>}
      </Box>
      <Box>
        <input
          type="text"
          placeholder="Department (Optional)"
          {...register('professionalInfo.department', {
            setValueAs: (value: string) => value.trim() || undefined,
          })}
        />
        {errors.professionalInfo?.department && <span>{errors.professionalInfo.department.message}</span>}
      </Box>
    </div>
  )
}

export default StepProfessionalInfo