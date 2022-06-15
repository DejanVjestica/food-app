import React, { useState } from 'react'

export type UseInputConfigType = {
	defaultValue?: string
	checkTouch?: boolean
	validationHandler: (value: string) => boolean
}

type useInputReturnType = {
	value: string,
	hasError:boolean,
	resetState: () => void,
	onChangeHandler:(event: React.ChangeEvent<HTMLInputElement>) => void,
	onBlurHandler:(event: React.FocusEvent<HTMLInputElement>) => void
}

export const useInput = ({ defaultValue = '', checkTouch, validationHandler }: UseInputConfigType) => {
	// States
	const [enteredValue, setEnteredValue] = useState<string>(defaultValue || '')
	const [isTouched, setIsTouched] = useState<boolean>(false)

	const valueIsValid = validationHandler(enteredValue)

	let hasError
	if (checkTouch) {
		hasError = !valueIsValid && isTouched
	} else {
		hasError = !valueIsValid
	}

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredValue(event.target.value)
	}

	const onBlurHandler = () => {
		if (!checkTouch) return
		setIsTouched(true)
	}

	const resetState = () => {
		setEnteredValue(defaultValue)
		console.log('resetState', enteredValue)
		if (!checkTouch) return
		setIsTouched(false)
	}

	return {
		value: enteredValue,
		hasError,
		onChangeHandler,
		onBlurHandler,
		resetState
	} as useInputReturnType
}
