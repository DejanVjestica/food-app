export type CartItem = {
	quantity: number
	id: number
	name: string
	price: number
}

export type CartContextType = {
	cartItems: CartItem[]
	totalOfItems: number
	isModalOpen: boolean
	openModal: () => void
	closeModal: () => void
	addItem: (meal: CartItem) => void
	removeItem: (id: number) => void
}

export type CartProviderProps = {
	children: React.ReactNode
}
