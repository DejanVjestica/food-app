import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

// components
import { Button } from '../UI/Button/Button'
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
// styles
import styles from './CartItem.module.scss'

type CartItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
	item: {
		id: number
		name: string
		price: number
	}
}

export const CartItem = ({ item }: CartItemProps) => {
	const priceEuro = `${item.price.toFixed(2)} €`

	return (
		<li className={styles['cart-item']}>
			<p className={styles['cart-item__name']}>{item.name}</p>
			<p className={styles['cart-item__price']}>{priceEuro}</p>

			<Wrapper as="div" className={styles['cart-item__actions']}>
				<Button className={styles['cart-item__remove']}>Add note</Button>
				<Button className={styles['cart-item__remove-one']}>
					<FontAwesomeIcon icon={faMinus} />
				</Button>
				<Button className={styles['cart-item__add-one']}>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
			</Wrapper>
		</li>
	)
}
