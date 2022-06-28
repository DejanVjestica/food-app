import React, { useReducer, useState, useEffect } from 'react'

// Types
import { UseInputConfigType, UseInputReturnType, UseInputReducerAction, UseInputStateType } from '../types/use-input.types'

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

export const useInput = ({ defaultValue = '', checkTouch, validationHandler, errorText, generateNewErrorText }: UseInputConfigType) => {
	// Reducer
	const [state, action] = useReducer(useInputReducer, { value: defaultValue, isTouched: false })
	// State
	const [newErrorText, setNewErrorText] = useState('')
	const valueIsValid = validationHandler(state.value)
	// Effects
	let errorTexttest
	useEffect(() => {
		if (generateNewErrorText) {
			errorTexttest = generateNewErrorText(state.value)
			setNewErrorText(errorTexttest)
		}
	}, [state.value])

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
		errorText,
		newErrorText,
		onChangeHandler,
		onBlurHandler,
		resetState
	} as UseInputReturnType
}
