/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
	const { label, ...newProps } = props

	const [value, setValue] = useState('1')

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<>
			<label htmlFor={newProps.id}>{label}</label>
			<input ref={ref} {...newProps} value={value} onChange={onChangeHandler} />
		</>
	)
})
