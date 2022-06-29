import { MealItemType } from './cart.types'

export type RestaurantType = {
	address:string
	cover: string
	description: string
	hours: string
	menu: MealItemType[]
	name: string
	phone: string
	price: string
	rating: string
	reviews: string
	tags: string[]
	website: string
}
