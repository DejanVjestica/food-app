import { createContext } from 'react'

// Types
import { UserContextType } from '../../types/user.types'

export const UserContext = createContext({
	isModalOpen: false,
	isLoginOpen: false,
	isRegisterOpen: false,
	openModal: () => undefined,
	openLogin: () => undefined,
	closeLogin: () => undefined,
	openRegister: () => undefined,
	closeRegister: () => undefined
} as UserContextType)
