/* eslint-disable no-tabs */
import React from 'react'

import { Button } from '../UI/Button/Button'

// import { dataCover, dataRestaurants } from './Data'

export const UploadData = () => {
	const onClickHandler = () => {
		const getCoverImage = async() => {
			// const res = await fetch('https://food-app-ed31b-default-rtdb.europe-west1.firebasedatabase.app/restaurants/info/shops.json',
			// 	{
			// 		method: 'PUT',
			// 		body: dataRestaurants
			// 	})
			// const res = await fetch('https://food-app-ed31b-default-rtdb.europe-west1.firebasedatabase.app/restaurants/info/cover.json')
			// const error = await res.json()
			// console.log(res)
			// console.log('error', error)
		}
		getCoverImage()
	}
	return (
		<div>
			<Button variant='primary' onClick={onClickHandler}>upload</Button>
			<h1>UploadData</h1>
		</div>
	)
}
