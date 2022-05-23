import React, { useContext, useRef } from 'react'

import styles from './MealItemForm.module.scss'

import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

// context
import { CartContext } from '../../../context/Cart/cart-context'

type MealItemFormProps = {
	meal: {
		id: number
		name: string
		price: number
	}
}

export const MealItemForm = ({ meal }: MealItemFormProps) => {
	const { addItem } = useContext(CartContext)
	const quantityRef = useRef<HTMLInputElement>()

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const quantity = parseInt(quantityRef.current!.value as string, 10)

		const newMeal = {
			...meal,
			quantity
		}

		addItem(newMeal)
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input ref={quantityRef} type="number" min="1" max="5" step="1" value="1" label="Amount" id="cart" />
			<Button type="submit">+ Add to cart</Button>
		</form>
	)
}
