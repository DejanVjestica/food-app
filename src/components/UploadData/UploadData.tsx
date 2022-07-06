/* eslint-disable no-tabs */
import React from 'react'
// firebase
import firebase, { db } from '../../firestoreNew'
import { doc, updateDoc, addDoc, setDoc, getFirestore, collection } from 'firebase/firestore'

import { Button } from '../UI/Button/Button'
import { Layout } from '../Helpers/Layout/Layout'

import { dataCover, dataRestaurants, german, germanMenu } from './Data'

const menu1 = [
	{
		name: 'Sushi',
		price: 10,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Sushi',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Lachs Menü (24 Stück)',
		price: 12,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Lachs',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Funa Roll Menü (18 Stück)',
		price: 13,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Funa Roll',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Maki Vegetaria Menü (18 Stück)',
		price: 11,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Maki',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	}
]

const menu2 = [
	{
		name: 'Pizza',
		price: 10,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'pizza',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Pasta',
		price: 15,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Pasta',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

	},
	{
		name: 'Salad',
		price: 20,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Salad',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Soup',
		price: 25,
		image: {

			src: 'https://via.placeholder.com/200x200',
			alt: 'Soup',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Dessert',
		price: 30,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Dessert',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },

				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	}
]

const menu3 = [
	{
		name: 'Gebratene Nudeln',
		price: 10,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Nudeln',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Sup Tom Kha Gai (scharf)',
		price: 15,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Sup Tom Kha Gai',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	},
	{
		name: 'Com Sot Lac',
		price: 20,
		image: {
			src: 'https://via.placeholder.com/200x200',
			alt: 'Com Sot Lac',
			srcSet: [
				{ src: 'https://via.placeholder.com/200x200', imageWidth: '200w' },
				{ src: 'https://via.placeholder.com/400x400', imageWidth: '400w' }
			]
		},
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
	}
]

export const UploadData = () => {
	// const onClickHandler = () => {
	// 	const getCoverImage = async() => {
	// 		const res = await fetch(
	// 			'https://food-app-ed31b-default-rtdb.europe-west1.firebasedatabase.app/restaurants/info/shops.json',
	// 			{
	// 				method: 'PUT',
	// 				body: JSON.stringify(dataRestaurants)
	// 			}
	// 		)

	// 		// const res = await fetch('https://food-app-ed31b-default-rtdb.europe-west1.firebasedatabase.app/restaurants/info/cover.json')

	// 		// const error = await res.json()
	// 		console.log(res)
	// 		// console.log('error', error)
	// 	}
	// 	getCoverImage()
	// }

	// const ref = firebase.firestore().collection('restaurants')
	// const restaurantRef = doc(db, 'restaurants', 'info')
	const restaurantRef = doc(db, 'restaurants', 'lgqO7IPuvCiV3oydGUDE')
	const newRestaurantRef = collection(db, 'restaurants')

	const onClickHandler = () => {
		updateDoc(restaurantRef, {
			menu: germanMenu
		})
		// addDoc(newRestaurantRef, german)
	}
	return (
		<Layout variant='default'>
			<Button variant='primary' onClick={onClickHandler}>upload</Button>
			<h1>UploadData</h1>
		</Layout>
	)
}
