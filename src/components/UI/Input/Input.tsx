/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
	const { label, ...newProps } = props

	return (
		<>
			{label && <label htmlFor={newProps.id}>{label}</label>}
			<input ref={ref} {...newProps} />
		</>
	)
})
