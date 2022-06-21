/* eslint-disable no-tabs */
import React, { useEffect } from 'react'

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
	const { label, useInputConfig, retrieveValues, ...newProps } = props

	const {
		value,
		hasError,
		onChangeHandler,
		onBlurHandler,
		resetState

	} = useInput(useInputConfig as UseInputConfigType)

	// Effects
	useEffect(() => {
		if (!retrieveValues) return
		retrieveValues({ value, hasError, resetState })
	}, [retrieveValues, value, hasError])

	return (
		<div className={styles.input__wrapper}>
			{label && <label htmlFor={newProps.id}>{label}</label>}
			<input {...newProps} onChange={onChangeHandler} onBlur={onBlurHandler} />
			{hasError && <p className={styles.error}>{useInputConfig.errorText}</p>}
		</div>
	)
}
