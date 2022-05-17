import React from 'react'

import styles from './Button.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
	return (
		<button className={styles.button} {...props}>
			<span className={styles.button__text}>
				{props.children}
			</span>
		</button>
	)
}
