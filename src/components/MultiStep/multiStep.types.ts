export type MultiStepItem = {
    id: string,
    label: string
}

export type MultiStepProps = {
    activeStepIndex: number
    steps: MultiStepItem[]
}