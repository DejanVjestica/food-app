import React, { useContext } from 'react'

// Contexts
import { UserContext } from '../../../context/User/user-context'

// Styles
import styles from './Register.module.scss'

// Components
import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { Input } from '../../UI/Input/Input'

export const Register = () => {
	const { openLogin } = useContext(UserContext)

	return (
		<div className={styles.wrapper}>
			<p>Please register</p>
			<Form>
				<Input type='text' placeholder='Name' label='Name' id='Name' />
				<Input type='email' placeholder='Email' label='Email' id='email' />
				<Input type='password' placeholder='Password' label='Password' id='password' />
				<Button variant='primary'>Register</Button>
			</Form>

			<Button variant='simple' onClick={openLogin} >Login</Button>
		</div>
	)
}
