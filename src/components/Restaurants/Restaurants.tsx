import React, { useContext } from 'react'

// components
import { Spinner } from '../UI/Spinner/Spinner'
import { RestaurantsItem } from './RestaurantsItem'
import { Layout } from '../Helpers/Layout/Layout'
import { Sidebar } from '../LayoutElements/Sidebar/Sidebar'

// contexts
import { FirestoreContext } from '../../context/Firestore/firestore-context'

// styles
import styles from './Restaurants.module.scss'

// types
import { RestaurantType } from '../../types/restaurant.types'

export const Restaurants = () => {
	// Context
	const { restaurantsList, loading } = useContext(FirestoreContext)

	const restaurants = restaurantsList?.map((restaurant: RestaurantType, index) => {
		return (
			<RestaurantsItem key={index} restaurant={restaurant} id={index}></RestaurantsItem>
		)
	})

	return (
		<Layout variant='sidebarLeft'>
			<Sidebar />
			<article className={styles.restaurants}>
				{loading && <Spinner></Spinner>}
				{!loading && restaurantsList && <ul className={styles.restaurants__list}>
					{restaurants}
				</ul>}
			</article>
		</ Layout>
	)
}
