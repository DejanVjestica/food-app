import React, { useState } from 'react'
import { CartContext } from './cart-context'

// Types
import { CartItem, CartProviderProps } from './cart-context.types'

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
		const existingMeal = cartItems.find((item) => item.id === meal.id)

		if (existingMeal) {
			setCartItems(
				cartItems.map((item) => {
					if (item.id === meal.id) {
						return {
							...item,
							quantity: item.quantity + meal.quantity
						}
					}
					return item
				})
			)
		} else {
			setCartItems([...cartItems, meal])
		}
	}

	const removeItemHandler = (id: number) => {
		setCartItems((prevState) => {
			return prevState.filter((item) => item.id !== id)
		})
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				totalOfItems: cartItems.reduce((acc, curr) => {
					return acc + curr.quantity
				}, 0),
				isModalOpen,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
				addItem: addItemHandler,
				removeItem: removeItemHandler
			}}>
			{children}
		</CartContext.Provider>
	)
}
