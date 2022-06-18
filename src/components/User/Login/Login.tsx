import React, { useContext } from 'react'

// Components
import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { Input } from '../../UI/Input/Input'

// Context
import { UserContext } from '../../../context/User/user-context'

// Styles
import styles from './Cart.module.scss'

export const Login = () => {
	const { closeLogin, openRegister } = useContext(UserContext)

	return (
		<>
			<p>Please login</p>
			<Form>
				<Input type='email' placeholder='Email' label='Email' id='email' />
				<Input type='password' placeholder='Password' label='Password' id='password' />
				<Button variant='primary'>Login</Button>
			</Form>

			<Button variant='secondary' onClick={closeLogin}>Close</Button>
			<Button variant='simple' onClick={openRegister} >Register</Button>
		</>
	)
}
