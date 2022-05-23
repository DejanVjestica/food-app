/* eslint-disable no-tabs */
import React, { useState, useReducer } from 'react'
import { CartContext } from './cart-context'

// Types
import { CartItemType, CartProviderProps, CartReducerState, CartRedcerAction } from '../../types/cart.types'
import { log } from 'console'

const defaultState: CartReducerState = {
	cartItems: []
}

const addItemToCart = (newItem: CartItemType, state: CartReducerState) => {
	let newMeal
	const existingMeal = state.cartItems.find((item) => item.id === newItem.id)

	if (existingMeal) {
		newMeal = state.cartItems.map((item) => {
			if (item.id === newItem.id) {
				return {
					...item,
					quantity: item.quantity + newItem.quantity
				}
			}
			return item
		})

		return [...newMeal]
	} else {
		return [...state.cartItems, newItem]
	}
}

const cartReducer = (state: CartReducerState, action: CartRedcerAction) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				cartItems: addItemToCart(action.payload, state)
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

	const changeQuantityHandler = (action: string, id: number) => {
		// dispatch({ type: 'REMOVE_ITEM', payload: id })
		console.log('changeQuantityHandler', action, id)
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
				removeItem: removeItemHandler,
				changeQuantity: changeQuantityHandler
			}}>
			{children}
		</CartContext.Provider>
	)
}
