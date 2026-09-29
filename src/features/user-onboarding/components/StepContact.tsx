import { useFormContext } from 'react-hook-form'
import type { OnboardingRegistrationFormValuesType } from '../schemas/onboarding.schema'
import Box from '@mui/material/Box'

const StepContact = () => {
  const { register, formState: { errors } } = useFormContext<OnboardingRegistrationFormValuesType>()

  return (
    <div>
      <Box sx={{ marginTop: '16px' }}>
        <input type="email" placeholder="Email" {...register('contactInfo.email')} />
        {errors.contactInfo?.email && <span>{errors.contactInfo.email.message}</span>}
      </Box>
      <Box>
        <input type="tel" placeholder="Phone" {...register('contactInfo.phone')} />
        {errors.contactInfo?.phone && <span>{errors.contactInfo.phone.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="Address Line 1" {...register('contactInfo.addressLine1')} />
        {errors.contactInfo?.addressLine1 && <span>{errors.contactInfo.addressLine1.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="Address Line 2 (Optional)" {...register('contactInfo.addressLine2')} />
        {errors.contactInfo?.addressLine2 && <span>{errors.contactInfo.addressLine2.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="City" {...register('contactInfo.city')} />
        {errors.contactInfo?.city && <span>{errors.contactInfo.city.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="State" {...register('contactInfo.state')} />
        {errors.contactInfo?.state && <span>{errors.contactInfo.state.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="Postal Code" {...register('contactInfo.postalCode')} />
        {errors.contactInfo?.postalCode && <span>{errors.contactInfo.postalCode.message}</span>}
      </Box>
      <Box>
        <input type="text" placeholder="Country" {...register('contactInfo.country')} />
        {errors.contactInfo?.country && <span>{errors.contactInfo.country.message}</span>}
      </Box>
    </div>
  )
}

export default StepContact