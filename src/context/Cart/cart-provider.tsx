/* eslint-disable no-tabs */
import React, { useState, useReducer, useEffect } from 'react'
import { CartContext } from './cart-context'

// Types
import { CartProviderProps, MealItemExtendedType } from '../../types/cart.types'

// reducer
import { cartReducer, defaultState } from './cart-reducer'

export const CartProvider = ({ children }: CartProviderProps) => {
	const [isModalOpen, setisModalOpen] = useState<boolean>(false)

	const [state, dispatch] = useReducer(cartReducer, defaultState)

	useEffect(() => {
		const keyDownHandler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setisModalOpen(false)
			}
		}
		document.addEventListener('keydown', keyDownHandler)
		return () => {
			document.removeEventListener('keydown', keyDownHandler)
		}
	}, [])

	const openModalHandler = () => {
		setisModalOpen(true)
	}

	const closeModalHandler = () => {
		setisModalOpen(false)
	}

	const addItemHandler = (meal: MealItemExtendedType) => {
		dispatch({ type: 'ADD_ITEM', payload: meal })
	}

	const clearCartHandler = () => {
		dispatch({ type: 'CLEAR_CART' })
	}

	const changeQuantityHandler = (action: string, id: number) => {
		dispatch({ type: 'CHANGE_QUANTITY', payload: { action, id } })
	}

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				totalOfItems: state.cartItems.reduce((acc, curr) => {
					return acc + curr.quantity
				}, 0),
				isModalOpen,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
				addItem: addItemHandler,
				clearCart: clearCartHandler,
				changeQuantity: changeQuantityHandler
			}}>
			{children}
		</CartContext.Provider>
	)
}
