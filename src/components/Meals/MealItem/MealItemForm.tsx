import React, { useContext, useRef } from 'react'

// components
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

// styles
import styles from './MealItemForm.module.scss'

// context
import { CartContext } from '../../../context/Cart/cart-context'

// types
import { MealItemType, MealItemExtendedType } from '../../../types/cart.types'

type MealItemFormProps = {
	meal: MealItemType
}

export const MealItemForm = ({ meal }: MealItemFormProps) => {
	const { addItem } = useContext(CartContext)
	const quantityRef = useRef<HTMLInputElement>(null)

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const quantity = +quantityRef.current!.value

		const newMeal: MealItemExtendedType = {
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
