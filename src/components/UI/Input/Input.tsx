import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	id?: string
}

export const Input = (props: InputProps) => {
	const { label, ...newProps } = props
	return (
		<>
			<label htmlFor={newProps.id}>{label}</label>
			<input {...newProps} />
		</>
	)
}
