import React, { useState, useEffect } from 'react'
import { UserContext } from './user-context'

export const UserProvider = ({ children }: {children: React.ReactNode}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false)
	// listen on keydow events esc and close modal
	useEffect(() => {
		const keyDownHandler = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isModalOpen) {
				setIsModalOpen(false)
				setIsLoginOpen(false)
				setIsRegisterOpen(false)
			}
		}

		document.addEventListener('keydown', keyDownHandler)

		return () => {
			document.removeEventListener('keydown', keyDownHandler)
		}
	}, [isModalOpen])

	const openModalHandler = () => {
		setIsModalOpen(true)
	}

	const closeModalHandler = () => {
		setIsModalOpen(false)
		setIsLoginOpen(false)
		setIsRegisterOpen(false)
	}

	const openLoginHandler = () => {
		if (isRegisterOpen) setIsRegisterOpen(false)
		setIsLoginOpen(true)
	}

	const closeLoginHandler = () => {
		setIsLoginOpen(false)
	}

	const openRegisterHandler = () => {
		if (isLoginOpen) setIsLoginOpen(false)
		setIsRegisterOpen(true)
	}

	const closeRegisterHandler = () => {
		setIsRegisterOpen(false)
	}

	return (
		<UserContext.Provider
			value={{
				isModalOpen,
				isLoginOpen,
				isRegisterOpen,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
				openLogin: openLoginHandler,
				closeLogin: closeLoginHandler,
				openRegister: openRegisterHandler,
				closeRegister: closeRegisterHandler
			}}>
			{children}
		</UserContext.Provider>
	)
}
