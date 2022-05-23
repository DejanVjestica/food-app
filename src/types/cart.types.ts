export type CartItemType = {
	quantity: number
	id: number
	name: string
	price: number
}

export type CartContextType = {
	cartItems: CartItemType[]
	totalOfItems: number
	isModalOpen: boolean
	openModal: () => void
	closeModal: () => void
	addItem: (meal: CartItemType) => void
	removeItem: (id: number) => void
}

export type CartProviderProps = {
	children: React.ReactNode
}

export type CartReducerState = {
	cartItems: CartItemType[]
}

type CartAddAction = {
	type: 'ADD_ITEM'
	payload: CartItemType
}

type CartRemoveAction = {
	type: 'REMOVE_ITEM'
	payload: number
}
export type CartRedcerAction = CartAddAction | CartRemoveAction
