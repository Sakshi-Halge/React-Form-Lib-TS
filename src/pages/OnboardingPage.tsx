import UserOnboardingWizard from '@features/user-onboarding'
import Box from '@mui/material/Box'
import { OnboardingPageContainerStyles } from './onboardingPageStyles';

const OnboardingPage = () => {
  return (
    <Box sx={OnboardingPageContainerStyles}>
        <h3>User Onboarding Form</h3>
        <UserOnboardingWizard />
    </Box>
  )
}

export default OnboardingPage