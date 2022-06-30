import React, { useContext } from 'react'

// styles
import styles from './User.module.scss'

// Contexts
import { UserContext } from '../../context/User/user-context'

// Components
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { Modal } from '../UI/Modal/Modal'
import { Button } from '../UI/Button/Button'
import { Profile } from './Profile/Profile'

// Firebase
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logout } from '../../firebase'

export const User = () => {
	// authState
	const [user, loading] = useAuthState(auth)

	// Context
	const { isLoginOpen, isRegisterOpen, openLogin, openRegister, closeModal } = useContext(UserContext)

	return <Modal closeModal={closeModal} element='#user-modal-root'>
		<div className={styles.wrapper}>
			{!user && <>
				{!isLoginOpen && !isRegisterOpen && <h2>Mein Account</h2>}
				{!isLoginOpen && !isRegisterOpen && <div className={styles.controls}>
					<Button variant='secondary' onClick={openLogin}>Login</Button>
					<Button variant='secondary' onClick={openRegister}>Register new account</Button>
				</div>}
				{isLoginOpen && <Login />}
				{isRegisterOpen && <Register />}
			</>}
		</div>
		{user && <Profile user={user}></Profile>}
		{loading && <p>Please wait is loading</p>}
		{user && <Button variant='primary' onClick={logout}>Logout</Button>}
	</Modal>
}
