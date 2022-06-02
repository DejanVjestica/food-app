/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
	const { label, ...newProps } = props

	return (
		<>
			{label && <label htmlFor={newProps.id}>{label}</label>}
			<input ref={ref} {...newProps} onChange={props.onChangeHandler} />
		</>
	)
})
