import React from 'react'

// components
import { Img } from '../../UI/Img/Img'
import { MealItemForm } from './MealItemForm'

// styles
import styles from './MealItem.module.scss'

// types
import { MealItemType } from '../../../types/cart.types'

type MealItemProps = {
	meal: MealItemType
}

export const MealItem = (props: MealItemProps) => {
	const price = `€${props.meal.price.toFixed(2)}`

	return (
		<li className={styles['meal-item__list-item']}>
			<div className={styles['meal-item__image']}>
				<Img src={props.meal.image.src} alt={props.meal.image.alt} srcSet={props.meal.image.srcSet} />
			</div>
			<div className={styles['meal-item__content']}>
				<h3>{props.meal.name}</h3>
				<p className={styles['meal-item__description']}>{props.meal.description}</p>
				<p className={styles['meal-item__price']}>
					<strong>Price:</strong> {price}
				</p>
			</div>
			<MealItemForm item={props.meal}></MealItemForm>
		</li>
	)
}
