import React from 'react'

import styles from './MealItemForm.module.scss'

import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

export const MealItemForm = () => {
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('Form submitted!')
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input type="number" min="1" max="5" step="1" defaultValue="1" label="Amount" id="cart" />
			<Button type="submit">+ Add to cart</Button>
		</form>
	)
}
