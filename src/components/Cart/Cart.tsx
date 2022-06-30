import React, { useContext } from 'react'

// components
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
import { Button } from '../UI/Button/Button'
import { CartItem } from './CartItem'
import { Modal } from '../UI/Modal/Modal'
import { CartOrderForm } from './CartOrderForm'

// styles
import styles from './Cart.module.scss'

// context
import { CartContext } from '../../context/Cart/cart-context'

export const Cart = () => {
	// context
	const { closeCartModal, cartItems, totalPrice, clearCart } = useContext(CartContext)

	// state
	const [openOrderForm, setOpenOrderForm] = React.useState(false)

	const orderItems = cartItems.map((item) => <CartItem key={item.id} item={item} />)
	const hasItems = cartItems.length > 0

	const onClickOrderHandler = () => {
		setOpenOrderForm(true)
	}

	return (
		<Modal closeModal={closeCartModal} element={'#cart-modal-root'}>
			{!hasItems && <p>Please fill up the Cart</p>}

			<ul className={styles.cart__items}>{orderItems}</ul>

			{hasItems && (
				<p className={styles.cart__total}>
					<span>Total amount</span>
					<span>{`${totalPrice.toFixed(2)} €`}</span>
				</p>
			)}

			{openOrderForm && hasItems && <CartOrderForm />}

			<Wrapper as="div" className={styles.cart__actions}>
				{hasItems && <Button onClick={clearCart} variant='secondary'>Clear Cart</Button>}
				<Button onClick={closeCartModal} variant='secondary'>
					Close
				</Button>
				{hasItems && !openOrderForm && <Button variant='primary' onClick={onClickOrderHandler}>Order</Button>}
			</Wrapper>
		</Modal>
	)
}
