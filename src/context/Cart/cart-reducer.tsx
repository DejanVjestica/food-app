// types
import { CartReducerAction, MealItemExtendedType, AddNoteType } from '../../types/cart.types'

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
		const updatedItems = state.cartItems.filter((item) => item !== existingCartItem)
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

const addNoteHandler = (note: AddNoteType, state: CartReducerState) => {
	const existingItemIndex = state.cartItems.findIndex((item) => item.id === note.id)
	const existingItem = state.cartItems[existingItemIndex]
	existingItem.note = note.note
	const updatedItems: MealItemExtendedType[] = [...state.cartItems]

	return [...updatedItems]
}

const removeNoteHandler = (id: number, state: CartReducerState) => {
	const existingItemIndex = state.cartItems.findIndex((item) => item.id === id)
	const existingItem = state.cartItems[existingItemIndex]
	delete existingItem.note
	const updatedItems: MealItemExtendedType[] = [...state.cartItems]

	return [...updatedItems]
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
		case 'ADD_NOTE':
			return {
				cartItems: addNoteHandler(action.payload, state),
				totalPrice: state.totalPrice
			}
		case 'REMOVE_NOTE':
			return {
				cartItems: removeNoteHandler(action.payload, state),
				totalPrice: state.totalPrice
			}
		default:
			return defaultState
	}
}
