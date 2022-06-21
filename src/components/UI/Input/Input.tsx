/* eslint-disable no-tabs */
import React, { useEffect, useState } from 'react'

// custom hooks
import { useInput } from '../../../hooks/use-input'

// types
import { UseInputConfigType, retrieveValuesParams } from '../../../hooks/use-input.types'

// Styles
import styles from './Input.module.scss'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string,
	retrieveValues: ({ value, hasError, resetState }:retrieveValuesParams) => void,
	useInputConfig: UseInputConfigType
}

export const Input = (props: InputProps) => {
	// Props
	const { label, useInputConfig, retrieveValues, ...newProps } = props

	// State
	const [errorText, setErrorText] = useState(useInputConfig.defaultValue)

	// Custom hook
	const {
		value,
		hasError,
		newErrorText,
		onChangeHandler,
		onBlurHandler,
		resetState

	} = useInput(useInputConfig as UseInputConfigType)

	// Effects
	let newErrorMessage
	useEffect(() => {
		if (!retrieveValues) return
		retrieveValues({ value, hasError, resetState })

		newErrorMessage = newErrorText !== '' ? newErrorText : useInputConfig.errorText
		setErrorText(newErrorMessage)
	}, [retrieveValues, value, hasError, newErrorText])

	return (
		<div className={styles.input__wrapper}>
			{label && <label htmlFor={newProps.id}>{label}</label>}
			<input {...newProps} onChange={onChangeHandler} onBlur={onBlurHandler} value={value} />
			{hasError && <p className={styles.error}>{errorText}</p>}
		</div>
	)
}
