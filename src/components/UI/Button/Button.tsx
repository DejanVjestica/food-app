import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode,
	variant?: 'primary' | 'secondary' | 'icon' | 'simple'
	modifier?: 'is-color-white',
} & Omit<React.ComponentProps<'button'>, 'children'>

export const Button = (props: ButtonProps) => {
	const { variant, modifier } = props

	return <button className={[styles.default, styles[`${variant}`], styles[`${modifier}`]].join(' ')} {...props}>{props.children}</button>
}
