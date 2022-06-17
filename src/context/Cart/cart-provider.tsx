/* eslint-disable no-tabs */
import React, { useState, useReducer, useEffect } from 'react'
import { CartContext } from './cart-context'

// Types
import { MealItemExtendedType } from '../../types/cart.types'

// reducer
import { cartReducer, defaultState } from './cart-reducer'

type CartProviderProps = {
	children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [isModalOpen, setisModalOpen] = useState<boolean>(false)

	const [state, dispatch] = useReducer(cartReducer, defaultState)

	// listen on keydow events esc and close modal
	useEffect(() => {
		const keyDownHandler = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isModalOpen) {
				setisModalOpen(false)
			}
		}

		document.addEventListener('keydown', keyDownHandler)

		return () => {
			document.removeEventListener('keydown', keyDownHandler)
		}
	}, [isModalOpen])

	const openModalHandler = () => {
		setisModalOpen(true)
	}

	const closeModalHandler = () => {
		setisModalOpen(false)
	}

	const addItemHandler = (item: MealItemExtendedType) => {
		dispatch({ type: 'ADD_ITEM', payload: item })
	}

	const removeItemHandler = (item: MealItemExtendedType) => {
		dispatch({ type: 'REMOVE_ITEM', payload: item })
	}

	const clearCartHandler = () => {
		dispatch({ type: 'CLEAR_CART' })
	}

	const addNoteHandler = (note: string, id: number) => {
		dispatch({ type: 'ADD_NOTE', payload: { note, id } })
	}

	const removeNoteHandler = (id: number) => {
		dispatch({ type: 'REMOVE_NOTE', payload: id })
	}

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				isModalOpen,
				totalPrice: state.totalPrice,
				totalItems: state.cartItems.reduce((acc, curr) => acc + curr.quantity, 0),
				openCartModal: openModalHandler,
				closeCartModal: closeModalHandler,
				addItem: addItemHandler,
				removeItem: removeItemHandler,
				clearCart: clearCartHandler,
				addNote: addNoteHandler,
				removeNote: removeNoteHandler
			}}>
			{children}
		</CartContext.Provider>
	)
}
