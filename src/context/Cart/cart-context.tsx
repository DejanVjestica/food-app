/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

// Types
import { CartContextType } from '../../types/cart.types'

export const CartContext = createContext({
	cartItems: [],
	totalOfItems: 0,
	totalCost: 0,
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	addItem: () => {},
	clearCart: () => {},
	changeQuantity: () => {}
} as CartContextType)
