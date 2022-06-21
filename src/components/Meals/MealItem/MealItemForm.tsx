import React, { useContext, useState } from 'react'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

// components
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

// styles
import styles from './MealItemForm.module.scss'

// context
import { CartContext } from '../../../context/Cart/cart-context'

// types
import { MealItemType } from '../../../types/cart.types'
import { UseInputConfigType, retrieveValuesParams } from '../../../hooks/use-input.types'

type MealItemFormProps = {
	item: MealItemType
}

export const MealItemForm = ({ item }: MealItemFormProps) => {
	// Context
	const { addItem } = useContext(CartContext)

	// State
	const [quantity, setQuantity] = useState('1')
	const [hasError, setHasError] = useState(false)

	const quantityValidationHandler = (value: string) => value.trim() !== '' && parseInt(value) < 1

	const quantityConfig: UseInputConfigType = {
		defaultValue: '1',
		checkTouch: false,
		errorText: 'Please add a valid quantity',
		validationHandler: quantityValidationHandler
	}

	let resetUseInputState: () => void

	const useInputQuantityData = ({ value, hasError, resetState }: retrieveValuesParams) => {
		if (value) setQuantity(value)
		setHasError(hasError)
		resetUseInputState = resetState
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (hasError) return

		const addedQuantity = quantity
		const newQuantity = +addedQuantity

		const newItem = {
			...item,
			quantity: newQuantity
		}

		addItem(newItem)
		resetUseInputState()
	}

	const disableSubmitButton = hasError ? styles.disabled : ''

	return (
		<form className={[styles.form, disableSubmitButton].join(' ')} onSubmit={submitHandler}>
			<Input
				type="number"
				step="1"
				value={quantity}
				id={item.id.toString()}
				useInputConfig={quantityConfig}
				retrieveValues={useInputQuantityData}
			/>
			<Button type="submit" variant='icon'>
				<FontAwesomeIcon icon={faAdd} />
			</Button>
		</form>
	)
}
