/* eslint-disable react/display-name */
import React, { useEffect, useState, forwardRef } from 'react'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'

// custom hooks
import { useInput } from '../../../hooks/use-input'

// types
import { UseInputConfigType, retrieveValuesParams } from '../../../types/use-input.types'

// Styles
import styles from './Input.module.scss'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string,
	retrieveValues: ({ value, hasError, resetState }:retrieveValuesParams) => void,
	useInputConfig: UseInputConfigType
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
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
			<input ref={ref} {...newProps} onChange={onChangeHandler} onBlur={onBlurHandler} value={value} />
			{hasError && <p className={styles.error}>
				<FontAwesomeIcon icon={faWarning} />
				{errorText}
			</p>}
		</div>
	)
})
