import React from 'react'

import styles from './AvailableMeals.module.scss'
import Meals from './Meals.data.json'

import { MealItem } from './MealItem/MealItem'

export const AvailableMeals = () => {
	const meals = Meals.map((meal) => <MealItem key={meal.id} meal={meal} />)

	return (
		<section className={styles['available-meals']}>
			<ul className={styles['available-meals__list']}>{meals}</ul>
		</section>
	)
}
