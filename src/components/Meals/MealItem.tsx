import React from 'react'

import styles from './MealItem.module.scss'

import { Img } from '../UI/Img/Img'

type MealItemType = {
	id: number
	name: string
	price: string
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
	return (
		<li className={styles['meal-item__list-item']}>
			<div className={styles['meal-item__image']}>
				<Img src={props.meal.image.src} alt={props.meal.image.alt} srcSet={props.meal.image.srcSet} />
			</div>
			<div className={styles['meal-item__content']}>
				<h3>{props.meal.name}</h3>
				<p className={styles['meal-item__description']}>{props.meal.description}</p>
				<p className={styles['meal-item__price']}>
					<strong>Price:</strong> {props.meal.price}
				</p>
				<button>Add to Cart</button>
			</div>
		</li>
	)
}
