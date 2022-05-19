import React from 'react'

import styles from './AvailableMeals.module.scss'
import Meals from './Meals.data.json'

import { MealItem } from './MealItem'

export const AvailableMeals = () => {
	return (
		<section className={styles['available-meals']}>
			<ul className={styles['available-meals__list']}>
				{Meals.map((meal) => {
					return <MealItem key={meal.id} meal={meal}></MealItem>
				})}
			</ul>
		</section>
	)
}
