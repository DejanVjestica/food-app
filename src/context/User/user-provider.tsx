import React, { useState, useEffect } from 'react'
import { UserContext } from './user-context'

type UserProviderProps = {
	children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false)
	// listen on keydow events esc and close modal
	useEffect(() => {
		const keyDownHandler = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isModalOpen) {
				setIsModalOpen(false)
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
	}

	const openLoginHandler = () => {
		setIsLoginOpen(true)
	}

	const closeLoginHandler = () => {
		setIsLoginOpen(false)
	}

	const openRegisterHandler = () => {
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
			}}
		>{children}
		</UserContext.Provider>
	)
}
