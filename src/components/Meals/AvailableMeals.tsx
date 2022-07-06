import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { FirestoreContext } from '../../context/Firestore/firestore-context'

// components
import { MealItem } from './MealItem/MealItem'
import { Layout } from '../Helpers/Layout/Layout'
import { Spinner } from '../UI/Spinner/Spinner'

// styles
import styles from './AvailableMeals.module.scss'

// types
import { MealItemType } from '../../types/cart.types'

export const AvailableMeals = () => {
	// context
	const { restaurantsList, loading } = useContext(FirestoreContext)
	// state
	const [meals, setMeals] = useState<JSX.Element[]>([])
	// get params from url
	const params = useParams()
	const restaurantId = parseInt(params.id as string)

	useEffect(() => {
		if (!restaurantsList || !restaurantsList[restaurantId]) return

		const menu = restaurantsList[restaurantId].menu
		const menuItems = menu.map((meal: MealItemType, index) => {
			const newMeal = {
				...meal,
				id: Math.floor(Math.random() * Date.now())
			}
			return <MealItem key={index} meal={newMeal} />
		})
		setMeals(menuItems)
	}
	, [restaurantsList])

	return (
		<Layout>
			<article className={styles['available-meals']}>
				{loading && <Spinner></Spinner>}
				<ul className={styles['available-meals__list']}>{meals}</ul>
			</article>
		</Layout>
	)
}
