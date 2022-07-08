/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react'
import { FirestoreContext } from './firestore-context'

// firebase
import { db, collection, getDocs, where, query } from '../../firebase'

// Types
import { RestaurantType } from '../../types/restaurant.types'

export const FirestoreProvider = ({ children }: { children: React.ReactNode }) => {
	// state
	const [restaurantsList, setRestaurantsList] = useState<RestaurantType[]>([])
	const [tagList, setTagList] = useState<string[]>([])
	const [selectedTag, setSelectedTag] = useState<string[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const docRef = collection(db, 'restaurants')

	const getAllRestaurants = async () => {
		setLoading(true)
		const restaurants = await getDocs(docRef)
		const items: RestaurantType[] = []
		const tags: string[] = []

		restaurants.forEach((doc) => {
			items.push(doc.data() as RestaurantType)
			tags.push(doc.data().tags)
		})

		setRestaurantsList(items)

		const newArr = tags.flat(1)
		const uniqArr = [...new Set(newArr)]
		setTagList(uniqArr)

		setLoading(false)
	}

	useEffect(() => {
		getAllRestaurants()
	}, [])

	const setTagsForFiltering = (tag?: string) => {
		setSelectedTag((prevState) => {
			if (!tag) {
				return []
			} else if (prevState.includes(tag)) {
				return prevState.filter((item) => item !== tag)
			} else {
				return [...prevState, tag]
			}
		})
	}

	const filterRestaurantsByTag = async () => {
		const tags = await query(docRef, where('tags', 'array-contains-any', selectedTag))
		const items: RestaurantType[] = []
		const querySnapshot = await getDocs(tags)

		querySnapshot.forEach((doc) => {
			items.push(doc.data() as RestaurantType)
		})

		setRestaurantsList(items)
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		if (selectedTag.length === 0) {
			getAllRestaurants()
			return
		}
		filterRestaurantsByTag()
	}, [selectedTag])

	return (
		<FirestoreContext.Provider
			value={{
				restaurantsList,
				tagList,
				loading,
				selectedTag,
				setTagsForFiltering
			}}>
			{children}
		</FirestoreContext.Provider>
	)
}
