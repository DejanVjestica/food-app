/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

// Styles
import styles from './Input.module.scss'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
	const { label, ...newProps } = props

	return (
		<div className={styles.input__wrapper}>
			{label && <label htmlFor={newProps.id}>{label}</label>}
			<input ref={ref} {...newProps} />
		</div>
	)
})
