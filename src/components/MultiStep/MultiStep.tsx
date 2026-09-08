import { type MultiStepProps } from './multiStep.types'
/* MUI imports */
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

const MultiStep = ( { activeStepIndex, steps } : MultiStepProps) => {

  return (
    <Box>
      <Stepper>
        {
          steps.map((step, index) => (
            <Step key={`{step.label}-${index}`} active={index === activeStepIndex}>
              <StepButton>{step.label}</StepButton>
            </Step>
          ))
        }
      </Stepper>
    </Box>
  )
}

export default MultiStep