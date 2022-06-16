import React from 'react'

// components
import { ListItem } from '../../UI/ListItem/ListItem'

// styles
import styles from './Navigation.module.scss'

type NavigationProps = {
	variant: 'header' | 'footer'
}

const NavItems = [
	{
		id: 1,
		link: {
			href: '#',
			title: 'Home'
		},
		text: 'Home'
	},
	{
		id: 2,
		link: {
			href: '#',
			title: 'Restaurant'
		},
		text: 'Restaurant'
	},
	{
		id: 3,
		link: {
			href: '#',
			title: 'Login'
		},
		text: 'Login'
	}
]
export const Navigation = ({ variant }: NavigationProps) => {
	const items = NavItems.map(({ link, text, id }) => (
		<ListItem key={id} link={link} text={text} />
	))

	return (
		<nav className={[styles.navigation__default, styles[`navigation__${variant}`]].join(' ')}>
			<ul className={styles.navigation__list}>
				{items}
			</ul>
		</nav>
	)
}
