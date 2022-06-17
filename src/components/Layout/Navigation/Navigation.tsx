import React, { useContext } from 'react'

// components
import { ListItem } from '../../UI/ListItem/ListItem'
import { Button } from '../../UI/Button/Button'

// styles
import styles from './Navigation.module.scss'

// context
import { UserContext } from '../../../context/User/user-context'

type NavigationProps = {
	variant: 'header' | 'footer'
}

export const Navigation = ({ variant }: NavigationProps) => {
	const { openUserModal } = useContext(UserContext)

	const NavItems = [
		{
			id: 2,
			text: 'Restaurant',
			onClickHandler: () => {
				console.log('Restaurant')
			}
		},
		{
			id: 3,
			text: 'Login',
			onClickHandler: openUserModal
		}
	]
	const items = NavItems.map(({ id, text, onClickHandler }) => (
		<ListItem key={id}>
			<Button variant='simple' modifier='is-color-white' onClick={onClickHandler}><span>{text}</span></Button>
		</ListItem>
	))

	return (
		<nav className={[styles.navigation__default, styles[`navigation__${variant}`]].join(' ')}>
			<ul className={styles.navigation__list}>
				{items}
			</ul>
		</nav>
	)
}
