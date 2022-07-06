import React, { useState, useEffect, useRef } from 'react'

// components
import { Img } from '../../UI/Img/Img'
import { MealItemForm } from './MealItemForm'
import { Spinner } from '../../UI/Spinner/Spinner'

// styles
import styles from './MealItem.module.scss'

// types
import { MealItemType } from '../../../types/cart.types'

type MealItemProps = {
	meal: MealItemType
}

export const MealItem = (props: MealItemProps) => {
	// state
	const [isLoading, setIsLoading] = useState(true)
	// ref
	const imageWrapper = useRef<HTMLDivElement>(null)
	const price = `€${props.meal.price.toFixed(2)}`

	useEffect(() => {
		const img = imageWrapper.current?.querySelector('img')
		img?.addEventListener('load', () => {
			setIsLoading(false)
		})
	}
	, [imageWrapper])

	return (
		<li className={styles['meal-item__list-item']}>
			<div ref={imageWrapper} className={styles['meal-item__image']}>
				{isLoading && <Spinner></Spinner>}
				<Img src={props.meal.image.src} alt={props.meal.image.alt} srcsetdata={props.meal.image.srcSet} />
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
