import React from 'react'

import styles from './MealItem.module.scss'

import { Img } from '../../UI/Img/Img'
import { MealItemForm } from './MealItemForm'

type MealItemType = {
	id: number
	name: string
	price: number
	image: {
		src: string
		alt: string
		srcSet: {
			src: string
			imageWidth: string
		}[]
	}
	description: string
}

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
			<MealItemForm></MealItemForm>
		</li>
	)
}
