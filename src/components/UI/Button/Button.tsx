import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode,
	variant?: 'primary' | 'secondary' | 'icon' | 'simple'
} & Omit<React.ComponentProps<'button'>, 'children'>

export const Button = (props: ButtonProps) => {
	const { variant } = props

	return <button className={[styles.default, styles[`${variant}`]].join(' ')} {...props}>{props.children}</button>
}
