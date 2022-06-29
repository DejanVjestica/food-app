import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import { Spinner } from '../UI/Spinner/Spinner'
import { RestaurantsItem } from './RestaurantsItem'

// styles
import styles from './Restaurants.module.scss'

// types
import { RestaurantType } from '../../types/restaurant.types'

// firebase
import { getDatabase, ref as databaseRef } from 'firebase/database'
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'
import { useList } from 'react-firebase-hooks/database'

export const Restaurants = () => {
	const dbRef = databaseRef(getDatabase(), 'restaurants/info/shops')
	const storage = getStorage()

	// state
	const [snapshots, loading] = useList(dbRef)
	const restaurantsList = snapshots?.map(snapshot => snapshot.val())

	const restaurants = restaurantsList?.map((restaurant: RestaurantType, index) => {
		const imagePath = `restaurants/${restaurant.cover}`

		const getImageUrl: () => void = () => {
			getDownloadURL(storageRef(storage, imagePath)).then(url => {
				const img = document.getElementById(`${restaurant.name}`)
				img?.setAttribute('src', url)
			}).catch(err => console.log(err))
		}
		getImageUrl()

		return (
			<RestaurantsItem key={index} restaurant={restaurant} id={index}></RestaurantsItem>
		)
	})

	return (
		<article className={styles.restaurants}>
			{loading && <Spinner></Spinner>}
			{!loading && restaurants && <h4>Order from {restaurants.length} restaurants</h4>}
			{!loading && restaurants && <ul className={styles.restaurants__list}>
				{restaurants}
			</ul>}
			<Outlet />
		</article>
	)
}
