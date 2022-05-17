import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
	return <button {...props}>{props.children}</button>
}
