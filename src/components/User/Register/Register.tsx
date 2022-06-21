import React, { useContext, useState } from 'react'

// Contexts
import { UserContext } from '../../../context/User/user-context'

// Types
import { retrieveValuesParams } from '../../../hooks/use-input.types'

// Components
import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { Input } from '../../UI/Input/Input'

export const Register = () => {
	const { openLogin } = useContext(UserContext)

	// States
	const [nameHasError, setNameHasError] = useState(true)
	const [emailHasError, setEmailHasError] = useState(true)
	const [passwordHasError, setPasswordHasError] = useState(true)

	// Name input config, and dataHandler
	/// /////////////////////////////////////
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

	// Email input config, and dataHandler
	/// /////////////////////////////////////
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

	// Password input config, and dataHandler
	/// /////////////////////////////////////
	const passwordValidationHandler = (value: string) => {
		return value.trim() !== '' && value.length >= 8
	}

	const generateNewErrorText = (errorText: string) => {
		const newErrorText: string = (errorText.trim() === '') ? 'Password cant be empty' : ((errorText.length <= 8) ? ('Password must be at least 8 characters') : (''))

		return newErrorText
	}

	const configPassword = {
		defaultValue: '',
		checkTouch: true,
		errorText: 'Password is required',
		validationHandler: passwordValidationHandler,
		generateNewErrorText
	}

	let resetUseInputPasswordState: () => void
	const useInputPasswordData = ({ hasError: passwordError, resetState }: retrieveValuesParams) => {
		resetUseInputPasswordState = resetState
		setPasswordHasError(passwordError)
	}

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (nameHasError || emailHasError || passwordHasError) {
			return
		}

		resetUseInputNameState()
		resetUseInputEmailState()
		resetUseInputPasswordState()
	}

	return (
		<div>
			<p>Please register</p>
			<Form onSubmit={onSubmitHandler}>
				<Input key={'Name'} type='text' placeholder='Name' label='Name' id='Name' useInputConfig={configName} retrieveValues={useInputNameData}/>
				<Input key={'Email'}type='email' placeholder='Email' label='Email' id='email' useInputConfig={configEmail} retrieveValues={useInputEmailData}/>
				<Input key={'Password'} type='password' placeholder='Password' label='Password' id='password' useInputConfig={configPassword} retrieveValues={useInputPasswordData}/>
				<Button variant='primary'>Register</Button>
			</Form>

			<Button variant='simple' onClick={openLogin} >Login</Button>
		</div>
	)
}
