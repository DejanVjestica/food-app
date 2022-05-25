import React, { useContext } from 'react'

// components
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
import { Button } from '../UI/Button/Button'
import { CartItem } from './CartItem'
import { Modal } from '../UI/Modal/Modal'

// styles
import styles from './Cart.module.scss'

// context
import { CartContext } from '../../context/Cart/cart-context'

export const Cart = () => {
	const { closeModal, cartItems, totalCost } = useContext(CartContext)

	const orderItems = cartItems.map((item) => <CartItem key={item.id} item={item} />)
	const hasItems = cartItems.length > 0

	return (
		<Modal element={'#cart-modal-root'}>
			<ul className={styles.cart__items}>{orderItems}</ul>
			<p className={styles.cart__total}>
				<span>Total amount</span>
				<span>{`${totalCost.toFixed(2)} €`}</span>
			</p>
			<Wrapper as="div" className={styles.cart__actions}>
				<Button onClick={closeModal} className={styles.button__close}>
					Close
				</Button>
				{hasItems && <Button className={styles.button__order}>Order</Button>}
			</Wrapper>
		</Modal>
	)
}
