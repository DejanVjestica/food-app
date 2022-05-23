/* eslint-disable no-tabs */
import React, { useState, useReducer } from 'react'
import { CartContext } from './cart-context'

// Types
import { CartItemType, CartProviderProps, CartReducerState, CartRedcerAction } from '../../types/cart.types'

const defaultState: CartReducerState = {
	cartItems: []
}

const cartReducer = (state: CartReducerState, action: CartRedcerAction) => {
	let existingMeal, newMeal, newMealsArray

	switch (action.type) {
		case 'ADD_ITEM':
			existingMeal = state.cartItems.find((item) => item.id === action.payload.id)

			if (existingMeal) {
				newMeal = state.cartItems.map((item) => {
					if (item.id === action.payload.id) {
						return {
							...item,
							quantity: item.quantity + action.payload.quantity
						}
					}
					return item
				})
				console.log(newMeal)

				newMealsArray = [...newMeal]
			} else {
				newMealsArray = [...state.cartItems, action.payload]
			}

			return {
				cartItems: newMealsArray
			}
		case 'REMOVE_ITEM':
			return {
				cartItems: []
			}
		default:
			return defaultState
	}
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [isModalOpen, setisModalOpen] = useState<boolean>(false)

	const [state, dispatch] = useReducer(cartReducer, defaultState)

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

	const addItemHandler = (meal: CartItemType) => {
		dispatch({ type: 'ADD_ITEM', payload: meal })
	}

	const removeItemHandler = (id: number) => {
		dispatch({ type: 'REMOVE_ITEM', payload: id })
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
				removeItem: removeItemHandler
			}}>
			{children}
		</CartContext.Provider>
	)
}
