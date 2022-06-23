import { createContext } from 'react'

// Types
import { CartContextType } from '../../types/cart.types'

export const CartContext = createContext({
	cartItems: [],
	totalPrice: 0,
	totalItems: 0,
	isModalOpen: false,
	openCartModal: () => undefined,
	closeCartModal: () => undefined,
	addItem: () => undefined,
	removeItem: () => undefined,
	clearCart: () => undefined,
	addNote: () => undefined,
	removeNote: () => undefined
} as CartContextType)
