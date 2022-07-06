import React from 'react'

// firestore
import { getStorage, ref } from 'firebase/storage'
import { useDownloadURL } from 'react-firebase-hooks/storage'

// fontsawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faHourglass, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'

// components
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
import { Img } from '../UI/Img/Img'
import { ListItem } from '../UI/ListItem/ListItem'
import { Button } from '../UI/Button/Button'
import { Spinner } from '../UI/Spinner/Spinner'

// styles
import styles from './RestaurantsItem.module.scss'

// types
import { RestaurantType } from '../../types/restaurant.types'
type RestaurantsItemProps = {
	restaurant: RestaurantType,
	id: number
}

export const RestaurantsItem = ({ restaurant, id }: RestaurantsItemProps) => {
	const tags = restaurant.tags?.map((tag, index) => {
		return <span key={index}>{tag}</span>
	})

	const storage = getStorage()
	const imagePath = `restaurants/${restaurant.cover}`
	const [value, loading, error] = useDownloadURL(ref(storage, imagePath))

	return (
		<li className={styles.restaurant__item}>
			{loading && <Spinner></Spinner>}
			{error && <p>{error.message}</p>}
			<Img id={restaurant.name} alt={restaurant.name} src={value} />
			<Wrapper as="div" >
				<h3 className={styles.restaurant__name}>{restaurant.name}</h3>
				<p className={styles.restaurant__desc}>{restaurant.description}</p>
				<p className={styles.restaurant__tags}>{tags}</p>
				<Wrapper as='aside'>
					<ul className={styles.restaurant__info}>
						<ListItem>
							<FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
							{restaurant.address}
						</ListItem>
						<ListItem>
							<FontAwesomeIcon icon={faHourglass}></FontAwesomeIcon>
							{restaurant.hours}
						</ListItem>
						<ListItem>
							<FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
							{restaurant.phone}
						</ListItem>
						<ListItem>
							<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
							{restaurant.rating}
						</ListItem>
					</ul>
				</Wrapper>
			</Wrapper>
			<Button as="link" to={`/restaurants/${id}`}></Button>
		</li>
	)
}
