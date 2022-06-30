import React, { useContext, useState, useEffect } from 'react'

// Firebase
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

// Components
import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { Input } from '../../UI/Input/Input'
import { Img } from '../../UI/Img/Img'

// Types
import { retrieveValuesParams } from '../../../types/use-input.types'

// Context
import { UserContext } from '../../../context/User/user-context'

// Styles
import styles from './Login.module.scss'

// Icons
import googleLogo from '../../../assets/google-brands.svg'

export const Login = () => {
	// Refs
	const emailRef = React.createRef<HTMLInputElement>()
	const passwordRef = React.createRef<HTMLInputElement>()

	// States
	const [emailHasError, setEmailHasError] = useState(true)
	const [passwordHasError, setPasswordHasError] = useState(true)

	// Context
	const { openRegister, closeLogin } = useContext(UserContext)

	const [user, loading, error] = useAuthState(auth)

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return
		}
		if (user)console.log(user)
	}, [user, loading])

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

	// Submit form handler
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (emailHasError || passwordHasError) {
			return
		}

		const email = emailRef.current?.value || ''
		const password = passwordRef.current?.value || ''
		logInWithEmailAndPassword(email, password)

		resetUseInputEmailState()
		resetUseInputPasswordState()

		closeLogin()
	}

	const loginWithGoogleHandler = () => {
		signInWithGoogle()
	}

	return (
		<div className={styles.wrapper}>
			<p>Please login</p>
			<Button variant='icon' onClick={loginWithGoogleHandler}>
				<Img src={googleLogo}></Img>
				<span>Login with google</span>
			</Button>
			<Form hasError={emailHasError || passwordHasError} onSubmit={onSubmitHandler} >
				<Input ref={emailRef} type='email' placeholder='Email' label='Email' id='email' useInputConfig={configEmail} retrieveValues={useInputEmailData}/>
				<Input ref={passwordRef} type='password' placeholder='Password' label='Password' id='password' useInputConfig={configPassword} retrieveValues={useInputPasswordData}/>
				<Button variant='primary'>Login</Button>
			</Form>

			<Button variant='simple' onClick={openRegister} >Register</Button>
		</div>
	)
}
