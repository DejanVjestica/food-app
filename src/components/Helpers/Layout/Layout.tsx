import React from 'react'

// Styles
import styles from './Layout.module.scss'

// Types
type LayoutProps = {
	children: React.ReactNode
	variant?: 'sidebarLeft' | 'sidebarRight' | 'default'
}

export const Layout = ({ children, variant }: LayoutProps) => {
	const className = [styles.default, styles[`${variant}`]].join(' ')
	return (
		<main className={className}>
			{children}
		</main>
	)
}
