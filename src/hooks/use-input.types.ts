export type UseInputConfigType = {
	defaultValue?: string
	checkTouch?: boolean
	errorText?: string
	validationHandler: (value: string) => boolean
}

export type UseInputReturnType = {
	value: string,
	hasError:boolean,
	resetState: () => void,
	onChangeHandler:(event: React.ChangeEvent<HTMLInputElement>) => void,
	onBlurHandler:(event: React.FocusEvent<HTMLInputElement>) => void
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
