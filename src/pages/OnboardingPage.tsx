import UserOnboardingWizard from '@features/user-onboarding'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { OnboardingPageContainerStyles, OnboardingPageTitleStyles } from './onboardingPageStyles';

const OnboardingPage = () => {
  return (
    <Box sx={OnboardingPageContainerStyles}>
      <Typography component="h1" sx={OnboardingPageTitleStyles}>User Onboarding Form</Typography>
        <UserOnboardingWizard />
    </Box>
  )
}

export default OnboardingPage