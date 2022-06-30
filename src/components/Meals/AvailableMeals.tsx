import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import { MealItem } from './MealItem/MealItem'

// styles
import styles from './AvailableMeals.module.scss'

// firebase
import { getDatabase, ref as databaseRef } from 'firebase/database'
import { useObject } from 'react-firebase-hooks/database'

// types
import { MealItemType } from '../../types/cart.types'

export const AvailableMeals = () => {
	// get params from url
	const params = useParams()
	const id = params.id
	// get meals from firebase
	const dbRef = databaseRef(getDatabase(), 'restaurants/info/shops/' + id + '/menu')
	const [snapshot] = useObject(dbRef)
	const menu: MealItemType[] = snapshot?.val()
	// state
	const [meals, setMeals] = useState<JSX.Element[]>([])

	useEffect(() => {
		if (!menu) return
		const menuItems = menu.map((meal: MealItemType, index) => {
			const newMeal = {
				...meal,
				id: Math.floor(Math.random() * Date.now())
			}
			return <MealItem key={index} meal={newMeal} />
		})
		setMeals(menuItems)
	}
	, [snapshot])

	return (
		<article className={styles['available-meals']}>
			<ul className={styles['available-meals__list']}>{meals}</ul>
		</article>
	)
}
