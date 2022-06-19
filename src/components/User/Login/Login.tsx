import React, { useContext } from 'react'

// Components
import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { Input } from '../../UI/Input/Input'

// Context
import { UserContext } from '../../../context/User/user-context'

// Styles
import styles from './Login.module.scss'

export const Login = () => {
	const { openRegister } = useContext(UserContext)

	return (
		<div className={styles.wrapper}>
			<p>Please login</p>
			<Form>
				<Input type='email' placeholder='Email' label='Email' id='email' />
				<Input type='password' placeholder='Password' label='Password' id='password' />
				<Button variant='primary'>Login</Button>
			</Form>

			<Button variant='simple' onClick={openRegister} >Register</Button>
		</div>
	)
}
