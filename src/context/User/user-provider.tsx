import React, { useState, useEffect } from 'react'
import { UserContext } from './user-context'

type UserProviderProps = {
	children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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

	return (
		<UserContext.Provider
			value={{
				isModalOpen,
				openUserModal: openModalHandler,
				closeUserModal: closeModalHandler
			}}
		>{children}
		</UserContext.Provider>
	)
}
