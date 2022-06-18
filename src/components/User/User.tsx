import React from 'react'

// Components
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { Modal } from '../UI/Modal/Modal'

export const User = () => {
	return <Modal element='#user-modal-root'>
		<Login />
		<Register />
	</Modal>
}
