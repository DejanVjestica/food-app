import { RestaurantType } from './restaurant.types'

export type FirestoreContextType = {
	restaurantsList: RestaurantType[],
	tagList: string[],
	selectedTag: string[],
	loading: boolean,
	setTagsForFiltering: (tag: string) => void,
}
