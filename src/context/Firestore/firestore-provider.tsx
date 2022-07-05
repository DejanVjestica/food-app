import React, { useState, useEffect } from 'react'
import { FirestoreContext } from './firestore-context'

// firebase
import firebase from '../../firestoreNew'
// import { collection, query, where, getDocs } from 'firebase/firestore'

// Types
import { RestaurantType } from '../../types/restaurant.types'

export const FirestoreProvider = ({ children }: {children: React.ReactNode}) => {
	// state
	const [restaurantsList, setRestaurantsList] = useState<RestaurantType[]>([])
	const [tagList, setTagList] = useState<string[]>([])
	const [selectedTag, setSelectedTag] = useState<string[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const ref = firebase.firestore().collection('restaurants')

	// REALTIME GET FUNCTION
	const getAllRestaurants = () => {
		setLoading(true)
		ref.onSnapshot((querySnapshot) => {
			const items: any = []
			const tags: string[] = []

			querySnapshot.forEach((doc) => {
				items.push(doc.data())
				tags.push(doc.data().tags)
			})

			setRestaurantsList(items)

			const newArr = tags.flat(1)
			const uniqArr = [...new Set(newArr)]
			setTagList(uniqArr)

			setLoading(false)
		})
	}

	useEffect(() => {
		getAllRestaurants()
	}, [])

	const setTagsForFiltering = (tag: string) => {
		setSelectedTag((prevState) => {
			if (prevState.includes(tag)) {
				return prevState.filter((item) => item !== tag)
			}
			return [...prevState, tag]
		})
	}

	const filterRestaurantsByTag = () => {
		ref.where('tags', 'array-contains-any', selectedTag).onSnapshot((querySnapshot) => {
			const items: any = []

			querySnapshot.forEach((doc) => {
				items.push(doc.data())
			})

			setRestaurantsList(items)
			setLoading(false)
		})
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
				setTagsForFiltering,
				getAllRestaurants
			}}>
			{children}
		</FirestoreContext.Provider>
	)
}