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
	note?: string
}

export type CartContextType = {
	cartItems: MealItemExtendedType[]
	isModalOpen: boolean
	totalPrice: number
	totalItems: number
	openCartModal: () => void
	closeCartModal: () => void
	addItem: (item: MealItemExtendedType) => void
	removeItem: (item: MealItemExtendedType) => void
	clearCart: () => void
	addNote: (note: string, id: number) => void
	removeNote: (id: number) => void
}

type CartAddAction = {
	type: 'ADD_ITEM'
	payload: MealItemExtendedType
}

type CartRemoveAction = {
	type: 'REMOVE_ITEM'
	payload: MealItemExtendedType
}

export type AddNoteType = {
	note: string
	id: number
}

type CartNoteAddAction = {
	type: 'ADD_NOTE'
	payload: AddNoteType
}

type CartNoteRemoveAction = {
	type: 'REMOVE_NOTE'
	payload: number
}

type CartClearAction = {
	type: 'CLEAR_CART'
}

export type CartReducerAction = CartAddAction | CartClearAction | CartRemoveAction | CartNoteAddAction | CartNoteRemoveAction
