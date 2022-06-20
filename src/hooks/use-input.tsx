import React, { useReducer, useEffect } from 'react'

// Types
import { UseInputConfigType, UseInputReturnType, UseInputReducerAction, UseInputStateType } from './use-input.types'

const initialState = {
	value: '',
	isTouched: false
}

const useInputReducer = (prewState: UseInputStateType, action: UseInputReducerAction) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				value: action.value,
				isTouched: true
			}
		case 'BLUR':
			return {
				value: prewState.value,
				isTouched: true
			}
		case 'RESET':
			return {
				value: action.value,
				isTouched: false
			}
		default:
			return initialState
	}
}

export const useInput = ({ defaultValue = '', checkTouch, validationHandler }: UseInputConfigType) => {
	// Reducer
	const [state, action] = useReducer(useInputReducer, { value: defaultValue, isTouched: false })

	const valueIsValid = validationHandler(state.value)

	let hasError
	if (checkTouch) {
		hasError = !valueIsValid && state.isTouched
	} else {
		hasError = valueIsValid
	}

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		action({ type: 'CHANGE', value: event.target.value })
	}

	const onBlurHandler = () => {
		if (!checkTouch) return
		action({ type: 'BLUR' })
	}

	const resetState = () => {
		action({ type: 'RESET', value: defaultValue })
	}

	return {
		value: state.value,
		hasError,
		onChangeHandler,
		onBlurHandler,
		resetState
	} as UseInputReturnType
}
