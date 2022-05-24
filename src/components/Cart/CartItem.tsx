import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

// components
import { Button } from '../UI/Button/Button'
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
// styles
import styles from './CartItem.module.scss'

// context
import { CartContext } from '../../context/Cart/cart-context'

// types
import { MealItemExtendedType } from '../../types/cart.types'

type CartItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
	item: MealItemExtendedType
}

export const CartItem = ({ item }: CartItemProps) => {
	const { changeQuantity } = useContext(CartContext)
	const price = item.price * item.quantity
	const priceEuro = `${price.toFixed(2)} €`

	const quantityChangeHandler = (e: React.MouseEvent<HTMLElement>): void => {
		changeQuantity(e.currentTarget.getAttribute('value') as string, item.id)
	}
	return (
		<li className={styles['cart-item']}>
			<p className={styles['cart-item__quantity']}>{item.quantity}</p>
			<p className={styles['cart-item__name']}>{item.name}</p>
			<p className={styles['cart-item__price']}>{priceEuro}</p>

			<Wrapper as="div" className={styles['cart-item__actions']}>
				<Button className={styles['cart-item__remove']}>Add note</Button>
				<Button value="REMOVE" className={styles['cart-item__remove-one']} onClick={quantityChangeHandler}>
					<FontAwesomeIcon icon={faMinus} />
				</Button>
				<Button value="ADD" className={styles['cart-item__add-one']} onClick={quantityChangeHandler}>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
			</Wrapper>
		</li>
	)
}
