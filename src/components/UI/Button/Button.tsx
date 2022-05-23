import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
} & Omit<React.ComponentProps<'button'>, 'children'>

export const Button = (props: ButtonProps) => {
	return <button {...props}>{props.children}</button>
}
