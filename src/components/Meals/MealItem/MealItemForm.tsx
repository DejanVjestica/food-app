import React, { useContext, useState } from 'react'

// components
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

// styles
import styles from './MealItemForm.module.scss'

// context
import { CartContext } from '../../../context/Cart/cart-context'

// hooks
import { useInput } from '../../../hooks/use-input'

// types
import { MealItemType } from '../../../types/cart.types'
import { UseInputConfigType } from '../../../hooks/use-input.types'

type MealItemFormProps = {
	item: MealItemType
}

export const MealItemForm = ({ item }: MealItemFormProps) => {
	// Context
	const { addItem } = useContext(CartContext)

	const quantityValidationHandler = (value: string) => value.trim() !== '' && parseInt(value) < 1

	const quantityConfig: UseInputConfigType = {
		defaultValue: '1',
		checkTouch: false,
		validationHandler: quantityValidationHandler
	}

	const {
		value: quantityValue,
		hasError: quantityError,
		onChangeHandler: onQuantityChangeHandler,
		resetState: resetQuantityState
	} = useInput(quantityConfig)

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!quantityError) return

		const addedQuantity = quantityValue
		const quantity = +addedQuantity

		const newItem = {
			...item,
			quantity
		}

		addItem(newItem)
		resetQuantityState()
	}

	const disableSubmitButton = !quantityError ? styles.disabled : ''

	return (
		<form className={[styles.form, disableSubmitButton].join(' ')} onSubmit={submitHandler}>
			<Input
				type="number"
				step="1"
				value={quantityValue}
				label="Amount"
				id="cart"
				onChange={onQuantityChangeHandler}
			/>
			{!quantityError && <p className={styles.error}>Please enter a valid amount</p>}
			<Button type="submit" variant='primary'>+ Add to cart</Button>
		</form>
	)
}
