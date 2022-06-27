import React from 'react'

// components
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
import { Img } from '../UI/Img/Img'
import { ListItem } from '../UI/ListItem/ListItem'
import { Button } from '../UI/Button/Button'

// styles
import styles from './Restaurants.module.scss'

// firebase
import { getDatabase, ref as databaseRef } from 'firebase/database'
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'
import { useList } from 'react-firebase-hooks/database'

export const Restaurants = (): JSX.Element => {
	const dbRef = databaseRef(getDatabase(), 'restaurants')
	const storage = getStorage()

	// state
	const [snapshots] = useList(dbRef)
	const restaurantsList = snapshots?.map(snapshot => snapshot.val())

	const restaurants = restaurantsList?.map((restaurant) => {
		const imagePath = `restaurants/${restaurant.cover}`

		const getImageUrl: () => void = () => {
			getDownloadURL(storageRef(storage, imagePath)).then(url => {
				const img = document.getElementById(`${restaurant.name}`)
				img?.setAttribute('src', url)
			})
		}
		getImageUrl()

		return (
			<ListItem className={styles['restaurant-item']} key={restaurant.name}>
				<Img id={restaurant.name} alt={restaurant.name} />
				<Wrapper as="div" >
					<h3>{restaurant.name}</h3>
					<p>{restaurant.shortDesription}</p>
				</Wrapper>
			</ListItem>
		)
	})

	return (
		<div className={styles.restaurants}>
			<ul className={styles['restaurants-list']}>
				{restaurants}
			</ul>
		</div>
	)
}
