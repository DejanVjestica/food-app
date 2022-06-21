export type UseInputConfigType = {
	defaultValue?: string
	checkTouch?: boolean
	errorText?: string
	validationHandler: (value: string) => boolean
	generateNewErrorText?: (value: string) => string
}

export type UseInputReturnType = {
	value: string,
	hasError:boolean,
	errorText: string,
	newErrorText: string,
	resetState: () => void,
	onChangeHandler:(event: React.ChangeEvent<HTMLInputElement>) => void,
	onBlurHandler:(event: React.FocusEvent<HTMLInputElement>) => void
}

export type retrieveValuesParams = {
	value?: string | undefined
	hasError: boolean
	resetState: () => void
}

export type UseInputStateType = {
	value: string,
	isTouched: boolean
}

type UseInputChangeAction = {
	type: 'CHANGE',
	value: string
}

type UseInputBlurAction = {
	type: 'BLUR'
}

type UseInputResetAction = {
	type: 'RESET',
	value: string
}

export type UseInputReducerAction = UseInputChangeAction | UseInputBlurAction | UseInputResetAction
