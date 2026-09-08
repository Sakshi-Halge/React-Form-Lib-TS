import { useState } from 'react'

const useMultiStep = () => {
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const goToNextStep = () => {
        setActiveStepIndex((prevIndex) => prevIndex + 1);
    }

    const goToPreviousStep = () => {
        setActiveStepIndex((prevIndex) => prevIndex - 1);
    }

    return {
        activeStepIndex,
        goToNextStep,
        goToPreviousStep
    }
}

export default useMultiStep;