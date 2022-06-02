/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

// Types
import { CartContextType } from '../../types/cart.types'

export const CartContext = createContext({
	cartItems: [],
	totalPrice: 0,
	totalItems: 0,
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
	addNote: () => {},
	removeNote: () => {}
} as CartContextType)
