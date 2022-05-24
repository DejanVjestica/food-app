import React from 'react'

// components
import { MealItem } from './MealItem/MealItem'

// styles
import styles from './AvailableMeals.module.scss'

// data
import Meals from './Meals.data.json'

export const AvailableMeals = () => {
	const meals = Meals.map((meal) => <MealItem key={meal.id} meal={meal} />)

	return (
		<section className={styles['available-meals']}>
			<ul className={styles['available-meals__list']}>{meals}</ul>
		</section>
	)
}
