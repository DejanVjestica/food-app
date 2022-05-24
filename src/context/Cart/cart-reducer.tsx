// types
import { CartReducerState, CartReducerAction, CartChangeQuantityPayload, MealItemExtendedType } from '../../types/cart.types'

export const defaultState: CartReducerState = {
	cartItems: []
}

const addItemToCart = (newItem: MealItemExtendedType, state: CartReducerState) => {
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

const changeQuantity = (newQuantity: CartChangeQuantityPayload, state: CartReducerState) => {
	const newCartItems = state.cartItems.map((item) => {
		if (item.id === newQuantity.id) {
			if (newQuantity.action === 'ADD') {
				return {
					...item,
					quantity: item.quantity + 1
				}
			} else if (newQuantity.action === 'REMOVE') {
				return {
					...item,
					quantity: item.quantity - 1
				}
			}
		}
		return item
	})

	return [...newCartItems]
}

export const cartReducer = (state: CartReducerState, action: CartReducerAction) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				cartItems: addItemToCart(action.payload, state)
			}
		case 'CLEAR_CART':
			return {
				cartItems: []
			}
		case 'CHANGE_QUANTITY':
			return {
				cartItems: changeQuantity(action.payload, state)
			}
		default:
			return defaultState
	}
}
