//React imports
import { lazy } from 'react';
//Components imports
import MultiStep from '@components/MultiStep'
import { ONBOARDING_STEPS, type OnboardingStepId } from './constants/onboarding.constants'
//Hooks imports
import { useMultiStep } from '@components/MultiStep'
//MUI imports
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
//Styles imports
import { OnboardingWizardContainerStyles, OnboardingWizardControlsStyles } from './userOnboardingStyles';
//Hook Form imports
import { useForm } from 'react-hook-form';
//Zod imports
import { zodResolver } from '@hookform/resolvers/zod'
//Form types/schemas imports
import { OnboardingRegistrationValues, type OnboardingRegistrationSchema } from './schemas/onboarding.schema'


/*Onboarding steps components mapping */
const STEP_COMPONENTS: Record<OnboardingStepId, React.LazyExoticComponent<React.FC>> = {
  personal: lazy(() => import('./components/StepPersonalInfo')),
  professional: lazy(() => import('./components/StepProfessionalInfo')),
  contact: lazy(() => import('./components/StepContact')),
}

const UserOnboardingWizard = () => {

  const { activeStepIndex, goToNextStep, goToPreviousStep} = useMultiStep({ steps: [...ONBOARDING_STEPS] });
  const formMethods = useForm<OnboardingRegistrationSchema>({
    resolver: zodResolver(OnboardingRegistrationValues),
  });

  const { trigger, handleSubmit } = formMethods;

  const ActiveComponent = STEP_COMPONENTS[ONBOARDING_STEPS[activeStepIndex].id];

  const OnclickPrev = () => {
    goToPreviousStep();
  };

  const OnclickNext = () => {
    goToNextStep();
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