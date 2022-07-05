/* eslint-disable no-tabs */
import React, { useContext } from 'react'

// context
import { FirestoreContext } from '../../../context/Firestore/firestore-context'

// components
import { Tags } from '../../UI/Tags/Tags'

// styles
import styles from './Sidebar.module.scss'

type SidebarProps = {
	children?: React.ReactNode;
};

export const Sidebar = (props: SidebarProps) => {
	// Context
	const { restaurantsList, tagList } = useContext(FirestoreContext)

	return (
		<aside className={styles.sidebar}>
			{!restaurantsList && !tagList && <p>There is no restaurants</p>}
			{restaurantsList && <p>{restaurantsList.length} Restaurants</p>}
			{tagList &&
				<Tags variant='sidebar'></Tags>
			}
			{props.children}
		</aside>
	)
}
