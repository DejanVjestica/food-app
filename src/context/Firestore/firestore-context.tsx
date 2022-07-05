import { createContext } from 'react'

// Types
import { FirestoreContextType } from '../../types/firestoreContext.types'

export const FirestoreContext = createContext({
	restaurantsList: [],
	tagList: [],
	loading: false,
	setTagsForFiltering: () => undefined,
	getAllRestaurants: () => undefined
} as FirestoreContextType)
