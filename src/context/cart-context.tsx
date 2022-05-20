/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'
type CartItem = {
	id: number
	name: string
	price: number
}

type CartContextType = {
	cartItems: CartItem[]
	isModalOpen: boolean
	openModal: () => void
	closeModal: () => void
	addItem: (meal: CartItem) => void
	// removeItem: () => void
	// clearItemFromCart: () => void
	// clearCart: () => void
}

export const CartContext = createContext({
	cartItems: [],
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	addItem: () => {}
	// removeItem: () => {},
	// clearItemFromCart: () => {},
	// clearCart: () => {}
} as CartContextType)

type CartProviderProps = {
	children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [isModalOpen, setisModalOpen] = useState<boolean>(false)
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	document.addEventListener('keydown', (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setisModalOpen(false)
		}
	})

	const openModalHandler = () => {
		setisModalOpen(true)
	}

	const closeModalHandler = () => {
		setisModalOpen(false)
	}

	const addItemHandler = (meal: CartItem) => {
		setCartItems([...cartItems, meal])
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				isModalOpen,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
				addItem: addItemHandler
			}}>
			{children}
		</CartContext.Provider>
	)
}
