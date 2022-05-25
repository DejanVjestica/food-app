export interface MealItemType {
	id: number
	name: string
	price: number
	image: {
		src: string
		alt: string
		srcSet: {
			src: string
			imageWidth: string
		}[]
	}
	description: string
}

export interface MealItemExtendedType extends MealItemType {
	quantity: number
}

export type CartContextType = {
	cartItems: MealItemExtendedType[]
	isModalOpen: boolean
	totalPrice: number
	totalItems: number
	openModal: () => void
	closeModal: () => void
	addItem: (item: MealItemExtendedType) => void
	removeItem: (item: MealItemExtendedType) => void
	clearCart: () => void
}

type CartAddAction = {
	type: 'ADD_ITEM'
	payload: MealItemExtendedType
}
type CartRemoveAction = {
	type: 'REMOVE_ITEM'
	payload: MealItemExtendedType
}

type CartClearAction = {
	type: 'CLEAR_CART'
}

export type CartReducerAction = CartAddAction | CartClearAction | CartRemoveAction
