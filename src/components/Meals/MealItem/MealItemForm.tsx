import React, { useContext } from 'react'

import styles from './MealItemForm.module.scss'

import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

// context
import { CartContext } from '../../../context/cart-context'

type MealItemFormProps = {
	meal: {
		id: number
		name: string
		price: number
	}
}

export const MealItemForm = ({ meal }: MealItemFormProps) => {
	const { addItem } = useContext(CartContext)

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		addItem(meal)
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input type="number" min="1" max="5" step="1" defaultValue="1" label="Amount" id="cart" />
			<Button type="submit">+ Add to cart</Button>
		</form>
	)
}
