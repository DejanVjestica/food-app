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
	totalOfItems: number
	isModalOpen: boolean
	openModal: () => void
	closeModal: () => void
	addItem: (meal: MealItemExtendedType) => void
	clearCart: (id: number) => void
	changeQuantity: (action: string, id: number) => void
}

export type CartProviderProps = {
	children: React.ReactNode
}

export type CartReducerState = {
	cartItems: MealItemExtendedType[]
}

type CartAddAction = {
	type: 'ADD_ITEM'
	payload: MealItemExtendedType
}

type CartRemoveAction = {
	type: 'CLEAR_CART'
}

export type CartChangeQuantityPayload = {
	action: string
	id: number
}

type CartChangeQuantityAction = {
	type: 'CHANGE_QUANTITY'
	payload: CartChangeQuantityPayload
}

export type CartReducerAction = CartAddAction | CartRemoveAction | CartChangeQuantityAction
