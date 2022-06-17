import { createContext } from 'react'

// Types
import { UserContextType } from '../../types/user.types'

export const UserContext = createContext({
	isModalOpen: false,
	openUserModal: () => undefined,
	closeUserModal: () => undefined
} as UserContextType)
