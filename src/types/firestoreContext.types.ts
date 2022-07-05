import { RestaurantType } from './restaurant.types'

export type FirestoreContextType = {
	restaurantsList: RestaurantType[],
	tagList: string[],
	loading: boolean,
	setTagsForFiltering: (tag: string) => void,
	getAllRestaurants: () => void,
}
