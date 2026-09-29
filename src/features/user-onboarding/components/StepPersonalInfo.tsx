//RHF imports
import { useFormContext } from 'react-hook-form'
//Form types/schemas imports
import type { OnboardingRegistrationFormValuesType } from '../schemas/onboarding.schema';
//MUI imports
import Box from '@mui/material/Box'

const StepPersonalInfo = () => {

  const { register, formState: { errors} } = useFormContext<OnboardingRegistrationFormValuesType>();

  return (
    <div>
      <Box sx={{ marginTop: '16px' }}>
        <input type="text" placeholder="First Name" {...register('personalInfo.firstName')} />
        {errors.personalInfo?.firstName && <span>{errors.personalInfo.firstName.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="Last Name" {...register('personalInfo.lastName')} />
        {errors.personalInfo?.lastName && <span>{errors.personalInfo.lastName.message}</span>}
      </Box>
      <Box>
        <input type="date" placeholder="Date of Birth" {...register('personalInfo.dateOfBirth')} />
        {errors.personalInfo?.dateOfBirth && <span>{errors.personalInfo.dateOfBirth.message}</span>}
      </Box>
    </div>
  )
}

export default StepPersonalInfo