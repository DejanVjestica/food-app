/* eslint-disable react/display-name */
import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string
} & React.RefAttributes<HTMLInputElement>

export const Input = forwardRef((props: InputProps, ref) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const { label, ...newProps } = props

	const [value, setValue] = useState('1')

	useImperativeHandle(ref, () => {
		return {
			value
		}
	})

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<>
			<label htmlFor={newProps.id}>{label}</label>
			<input ref={inputRef} {...newProps} value={value} onChange={onChangeHandler} />
		</>
	)
})
