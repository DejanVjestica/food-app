// types
import { CartReducerAction, MealItemExtendedType } from '../../types/cart.types'

type CartReducerState = {
	cartItems: MealItemExtendedType[]
	totalPrice: number
}

export const defaultState: CartReducerState = {
	cartItems: [],
	totalPrice: 0
}

const addItemToCartHandler = (newItem: MealItemExtendedType, state: CartReducerState) => {
	const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === newItem.id)
	const existingCartItem = state.cartItems[existingCartItemIndex]
	let updatedItems

	if (existingCartItem) {
		const updatedItem = {
			...existingCartItem,
			quantity: existingCartItem.quantity + newItem.quantity
		}

		updatedItems = [...state.cartItems]
		updatedItems[existingCartItemIndex] = updatedItem

		return [...updatedItems]
	} else {
		return [...state.cartItems, newItem]
	}
}

const removeItemFromCartHandler = (itemToRemove: MealItemExtendedType, state: CartReducerState) => {
	const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === itemToRemove.id)
	const existingCartItem = state.cartItems[existingCartItemIndex]

	if (existingCartItem.quantity === 1) {
		const updatedItems = state.cartItems.filter((item) => item.quantity > 1)
		return [...updatedItems]
	} else {
		const updatedItem = {
			...existingCartItem,
			quantity: existingCartItem.quantity - itemToRemove.quantity
		}
		const updatedItems: MealItemExtendedType[] = [...state.cartItems]
		updatedItems[existingCartItemIndex] = updatedItem
		return [...updatedItems]
	}
}

export const cartReducer = (state: CartReducerState, action: CartReducerAction) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				cartItems: addItemToCartHandler(action.payload, state),
				totalPrice: state.totalPrice + action.payload.price * action.payload.quantity
			}
		case 'REMOVE_ITEM':
			return {
				cartItems: removeItemFromCartHandler(action.payload, state),
				totalPrice: state.totalPrice - action.payload.price
			}
		case 'CLEAR_CART':
			return {
				cartItems: [],
				totalPrice: 0
			}
		default:
			return defaultState
	}
}
