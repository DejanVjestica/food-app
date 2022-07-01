/* eslint-disable no-tabs */
import React, { useState, useContext } from 'react'

// firebase
import { writeOrder } from '../../firebase'

// context
import { CartContext } from '../../context/Cart/cart-context'

// components
import { Input } from '../UI/Input/Input'
import { Button } from '../UI/Button/Button'
import { Form } from '../UI/Form/Form'

// types
import { retrieveValuesParams } from '../../types/use-input.types'

export const CartOrderForm = () => {
	// context
	const { closeCartModal, cartItems, totalPrice, clearCart } = useContext(CartContext)

	// Refs
	const streetRef = React.createRef<HTMLInputElement>()
	const hausNummerRef = React.createRef<HTMLInputElement>()
	const nameRef = React.createRef<HTMLInputElement>()
	const emailRef = React.createRef<HTMLInputElement>()
	const telefonRef = React.createRef<HTMLInputElement>()

	// States
	const [streetHasError, setStreetHasError] = useState(true)
	const [hausNumberHasError, setHausNumberHasError] = useState(true)
	const [nameHasError, setNameHasError] = useState(true)
	const [emailHasError, setEmailHasError] = useState(true)
	const [telefonHasError, setTelefonHasError] = useState(true)
	const [formHasError, setFormHasError] = useState(false)

	// Street name input config, and dataHandler
	const streetValidationHandler = (value: string) => value.trim() !== ''

	const configStreet = {
		checkTouch: true,
		errorText: 'Street is required',
		validationHandler: streetValidationHandler
	}

	let resetUseInputStreetState: () => void
	const useInputStreetData = ({ hasError: streetError, resetState }: retrieveValuesParams) => {
		resetUseInputStreetState = resetState
		setStreetHasError(streetError)
	}
	/// /////////////////////////////////////

	// Haus number input config, and dataHandler
	const hausNumberValidationHandler = (value: string) => value.trim() !== ''

	const configHausNumber = {
		checkTouch: true,
		errorText: 'Haus Number is required',
		validationHandler: hausNumberValidationHandler
	}

	let resetUseInputHausNumberState: () => void
	const useInputHausNumberData = ({ hasError: hausNumberError, resetState }: retrieveValuesParams) => {
		resetUseInputHausNumberState = resetState
		setHausNumberHasError(hausNumberError)
	}
	/// /////////////////////////////////////

	// Name input config, and dataHandler
	const nameValidationHandler = (value: string) => value.trim() !== ''

	const configName = {
		defaultValue: '',
		checkTouch: true,
		errorText: 'Name is required',
		validationHandler: nameValidationHandler
	}

	let resetUseInputNameState: () => void
	const useInputNameData = ({ hasError: nameError, resetState }: retrieveValuesParams) => {
		resetUseInputNameState = resetState
		setNameHasError(nameError)
	}
	/// /////////////////////////////////////

	// Email input config, and dataHandler
	const emailValidationHandler = (value: string) => {
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return emailRegex.test(value)
	}

	const configEmail = {
		defaultValue: '',
		checkTouch: true,
		errorText: 'Email is required',
		validationHandler: emailValidationHandler
	}

	let resetUseInputEmailState: () => void
	const useInputEmailData = ({ hasError: emailError, resetState }: retrieveValuesParams) => {
		resetUseInputEmailState = resetState
		setEmailHasError(emailError)
	}
	/// /////////////////////////////////////

	// Telefon input config, and dataHandler
	const telefonValidationHandler = (value: string) => value.trim() !== '' && value.length > 11

	const configTelefon = {
		defaultValue: '',
		checkTouch: true,
		errorText: 'Telefon is required',
		validationHandler: telefonValidationHandler
	}

	let resetUseInputTelefonState: () => void
	const useInputTelefonData = ({ hasError: telefonError, resetState }: retrieveValuesParams) => {
		resetUseInputTelefonState = resetState
		setTelefonHasError(telefonError)
	}
	/// /////////////////////////////////////

	// Submit form
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (streetHasError || hausNumberHasError || nameHasError || emailHasError || telefonHasError) {
			setFormHasError(true)
			return
		}
		setFormHasError(false)

		// send order to firebase
		writeOrder({
			streetName: streetRef.current?.value as string,
			hausNumber: hausNummerRef.current?.value as string,
			name: nameRef.current?.value as string,
			email: emailRef.current?.value as string,
			phone: telefonRef.current?.value as string,
			order: cartItems
		})

		// reset all inputs
		resetUseInputStreetState()
		resetUseInputHausNumberState()
		resetUseInputNameState()
		resetUseInputEmailState()
		resetUseInputTelefonState()

		closeCartModal()
		clearCart()
	}

	const onClearCartHandler = () => {
		clearCart()
	}

	return (
		<Form hasError={streetHasError || hausNumberHasError || nameHasError || emailHasError || telefonHasError} onSubmit={onSubmitHandler}>
			<fieldset>
				<legend>Deliveri Address</legend>
				<Input
					ref={streetRef}
					type="text"
					label='Street name'
					id='street'
					useInputConfig={configStreet}
					retrieveValues={useInputStreetData}
				/>
				<Input
					ref={hausNummerRef}
					type="number"
					label='Haus number'
					id='hausNumber'
					useInputConfig={configHausNumber}
					retrieveValues={useInputHausNumberData}
				/>
				<div>
					<label htmlFor="saveData">Save for next order</label>
					<input type="checkbox" id="saveData" name="saveData"></input>
				</div>
			</fieldset>
			<fieldset>
				<legend>Personal data</legend>
				<Input ref={nameRef} type='text' placeholder='Name' label='Name' id='Name' useInputConfig={configName} retrieveValues={useInputNameData}/>
				<Input ref={emailRef} type='email' placeholder='Email' label='Email' id='email' useInputConfig={configEmail} retrieveValues={useInputEmailData}/>
				<Input ref={telefonRef} type='tel' placeholder='Telefon' label='Telefon' id='Telefon' useInputConfig={configTelefon} retrieveValues={useInputTelefonData}/>
			</fieldset>
			<fieldset>
				<legend>Payment</legend>
				<label htmlFor="paymentMethod">Payment method</label>
				{/* <select id="paymentMethod" name="paymentMethod">
					<option value="creditCard">Credit Card</option>
					<option value="paypal">PayPal</option>
				</select> */}
			</fieldset>
			<Button variant='secondary' onClick={onClearCartHandler} >
				clear cart
			</Button>
			<Button variant='primary' type="submit">
				Order {`${totalPrice.toFixed(2)} €`}
			</Button>
		</Form>
	)
}
