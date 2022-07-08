import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

import styles from './Button.module.scss'

type BaseProps = {
	children?: React.ReactNode
	className?: string
	variant?: 'primary' | 'secondary' | 'icon' | 'simple'
	modifier?: string
}

type ButtonAsButton = BaseProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
		as?: 'button'
	}

type ButtonAsLink = BaseProps &
	Omit<LinkProps, keyof BaseProps> & {
		as: 'link'
	}

type ButtonAsExternal = BaseProps &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
		as: 'a'
	}

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink

export const Button = (props: ButtonProps): JSX.Element => {
	const className = [styles.default, styles[`${props.variant}`], styles[`${props.modifier}`]].join(' ')
	if (props.as === 'link') {
		// don't pass unnecessary props to component
		const { children, ...rest } = props
		return (
			<Link className={className} {...rest}>
				{children}
			</Link>
		)
	} else if (props.as === 'a') {
		const { children, ...rest } = props
		return (
			<a className={className} target="_blank" rel="noopener noreferrer" {...rest}>
				{children}
			</a>
		)
	} else {
		const { children, ...rest } = props
		return (
			<button className={className} {...rest}>
				{children}
			</button>
		)
	}
}
