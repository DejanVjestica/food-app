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
	const { closeModal, cartItems, totalPrice, clearCart } = useContext(CartContext)

	const orderItems = cartItems.map((item) => <CartItem key={item.id} item={item} />)
	const hasItems = cartItems.length > 0

	return (
		<Modal element={'#cart-modal-root'}>
			{!hasItems && <p>Please fill up the Cart</p>}
			<ul className={styles.cart__items}>{orderItems}</ul>
			{hasItems && (
				<p className={styles.cart__total}>
					<span>Total amount</span>
					<span>{`${totalPrice.toFixed(2)} €`}</span>
				</p>
			)}
			<Wrapper as="div" className={styles.cart__actions}>
				{hasItems && <Button onClick={clearCart}>Clear Cart</Button>}
				<Button onClick={closeModal} className={styles.button__close}>
					Close
				</Button>
				{hasItems && <Button className={styles.button__order}>Order</Button>}
			</Wrapper>
		</Modal>
	)
}
