import React from 'react'

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
	children: React.ReactNode,
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void

} & Omit<React.ComponentProps<'form'>, 'children'>

export const Form = ({ children, onSubmit }: FormProps) => {
	return <form onSubmit={onSubmit}>{children}</form>
}
