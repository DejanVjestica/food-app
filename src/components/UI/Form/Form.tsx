import React from 'react'

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
	children: React.ReactNode
} & Omit<React.ComponentProps<'form'>, 'children'>

export const Form = ({ children }: FormProps) => {
	return <form>{children}</form>
}
