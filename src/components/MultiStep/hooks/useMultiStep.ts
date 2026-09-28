import { useState } from 'react'
import type { MultiStepItem } from '../multiStep.types';

const useMultiStep = ({ steps } : { steps: readonly MultiStepItem[] }) => {
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const isFirstStep = activeStepIndex === 0;
    const isLastStep = activeStepIndex === steps.length - 1;

    const goToNextStep = () => {
        if (activeStepIndex < steps.length - 1) {
            setActiveStepIndex((prevIndex) => prevIndex + 1);
        }
    }

    const goToPreviousStep = () => {
        if (activeStepIndex > 0) {
            setActiveStepIndex((prevIndex) => prevIndex - 1);
        }
    }

    return {
        activeStepIndex,
        isFirstStep,
        isLastStep,
        goToNextStep,
        goToPreviousStep
    }
}

export default useMultiStep;