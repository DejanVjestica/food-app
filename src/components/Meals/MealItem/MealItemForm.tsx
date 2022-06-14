import React, { useContext, useRef, useState } from 'react'

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
	const [isValid, setIsValid] = useState<boolean>(true)
	const [inputValue, setInputValue] = useState<string>('1')
	const { addItem } = useContext(CartContext)
	const quantityRef = useRef<HTMLInputElement>(null)

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const addedQuantity = quantityRef.current!.value
		const quantity = +addedQuantity

		if (addedQuantity.trim().length === 0 || quantity <= 0) {
			setIsValid(false)
			return
		} else {
			setIsValid(true)
		}

		const newItem = {
			...item,
			quantity
		}

		addItem(newItem)
	}

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={quantityRef}
				type="number"
				min="1"
				max="5"
				step="1"
				defaultValue={inputValue}
				label="Amount"
				id="cart"
				onChange={onChangeHandler}
			/>
			{!isValid && <p className={styles.error}>Please enter a valid amount</p>}
			<Button type="submit" variant='primary'>+ Add to cart</Button>
		</form>
	)
}
