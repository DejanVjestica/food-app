import React, { useContext, useState } from 'react'

// components
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

// styles
import styles from './MealItemForm.module.scss'

// context
import { CartContext } from '../../../context/Cart/cart-context'

// types
import { MealItemType } from '../../../types/cart.types'

type MealItemFormProps = {
	item: MealItemType
}

export const MealItemForm = ({ item }: MealItemFormProps) => {
	// States
	const [inputValue, setInputValue] = useState<string>('1')
	// Context
	const { addItem } = useContext(CartContext)

	// check if the input is valid
	const enteredAmountIsValid = inputValue.trim() !== '' && parseInt(inputValue) > 0

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!enteredAmountIsValid) return

		const addedQuantity = inputValue
		const quantity = +addedQuantity

		const newItem = {
			...item,
			quantity
		}

		addItem(newItem)
	}

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const disableSubmitButton = !enteredAmountIsValid ? styles.disabled : ''

	return (
		<form className={[styles.form, disableSubmitButton].join(' ')} onSubmit={submitHandler}>
			<Input
				type="number"
				step="1"
				defaultValue={inputValue}
				label="Amount"
				id="cart"
				onChange={onChangeHandler}
			/>
			{!enteredAmountIsValid && <p className={styles.error}>Please enter a valid amount</p>}
			<Button type="submit" variant='primary'>+ Add to cart</Button>
		</form>
	)
}
