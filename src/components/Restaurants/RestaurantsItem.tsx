import React from 'react'

// fontsawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faHourglass, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'

// components
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
import { Img } from '../UI/Img/Img'
import { ListItem } from '../UI/ListItem/ListItem'
import { Button } from '../UI/Button/Button'
import { Tags } from '../UI/Tags/Tags'

// styles
import styles from './RestaurantsItem.module.scss'

// types
import { RestaurantType } from '../../types/restaurant.types'
type RestaurantsItemProps = {
	restaurant: RestaurantType,
	id: number
}

export const RestaurantsItem = ({ restaurant, id }: RestaurantsItemProps) => {
	return (
		<li className={styles.restaurant__item}>
			<Img id={restaurant.name} alt={restaurant.name} />
			<Wrapper as="div" >
				<h3 className={styles.restaurant__name}>{restaurant.name}</h3>
				<p className={styles.restaurant__desc}>{restaurant.description}</p>
				<Tags variant='primary' tags={restaurant.tags}></Tags>
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
