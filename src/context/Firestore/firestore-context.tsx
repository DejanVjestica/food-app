import { createContext } from 'react'

// Types
import { FirestoreContextType } from '../../types/firestoreContext.types'

export const FirestoreContext = createContext({
	restaurantsList: [],
	tagList: [],
	selectedTag: [],
	loading: false,
	setTagsForFiltering: () => undefined
} as FirestoreContextType)
