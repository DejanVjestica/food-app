import React, { useContext } from 'react'

// styles
import styles from './User.module.scss'

// Contexts
import { UserContext } from '../../context/User/user-context'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

// Components
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { Modal } from '../UI/Modal/Modal'
import { Button } from '../UI/Button/Button'

export const User = () => {
	const { isLoginOpen, isRegisterOpen, openLogin, openRegister, closeModal } = useContext(UserContext)

	const loginHandler = () => {
		openLogin()
	}

	const registerHandler = () => {
		openRegister()
	}

	return <Modal element='#user-modal-root'>
		<div className={styles.wrapper}>
			<Button variant='icon' onClick={closeModal} >
				<span className={styles['cancel-icon']}><FontAwesomeIcon icon={faClose} /></span>
			</Button>

			{!isLoginOpen && !isRegisterOpen && <h2>Mein Account</h2>}
			{!isLoginOpen && !isRegisterOpen && <div className={styles.controls}>
				<Button variant='secondary' onClick={loginHandler}>Login</Button>
				<Button variant='secondary' onClick={registerHandler}>Register new account</Button>
			</div>}
			{isLoginOpen && <Login />}
			{isRegisterOpen && <Register />}
		</div>
	</Modal>
}
