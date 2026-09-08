import { lazy } from 'react';
import MultiStep from '@components/MultiStep'
import Container from '@mui/material/Container'
import { ONBOARDING_STEPS, type OnboardingStepId } from './constants/onboarding.constants'
import { useMultiStep } from '@components/MultiStep'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { OnboardingWizardContainerStyles, OnboardingWizardControlsStyles } from './userOnboardingStyles';

/*Onboarding steps components mapping */
const STEP_COMPONENTS: Record<OnboardingStepId, React.LazyExoticComponent<React.FC>> = {
  personal: lazy(() => import('./components/StepPersonalInfo')),
  professional: lazy(() => import('./components/StepProfessionalInfo')),
  contact: lazy(() => import('./components/StepContact')),
}

const UserOnboardingWizard = () => {

  const { activeStepIndex, goToNextStep, goToPreviousStep } = useMultiStep();

  const isFirstStep = activeStepIndex === 0;
  const isLastStep = activeStepIndex === ONBOARDING_STEPS.length - 1;
  const ActiveComponent = STEP_COMPONENTS[ONBOARDING_STEPS[activeStepIndex].id];

  const OnclickPrev = () => {
    if(!isFirstStep) {
      goToPreviousStep();
    }
  };

  const OnclickNext = () => {
    if(!isLastStep) {
      goToNextStep();
    }
  };

  return (
    <Container sx={OnboardingWizardContainerStyles}>
        <MultiStep activeStepIndex={activeStepIndex} steps={ONBOARDING_STEPS} />
        <ActiveComponent />
        <Box sx={OnboardingWizardControlsStyles}>
            <Button onClick={OnclickPrev} variant="outlined">
                Previous
            </Button>
            <Button onClick={OnclickNext} variant="contained">
                Next
            </Button>
        </Box>
    </Container>
  )
}

export default UserOnboardingWizard