import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import headerStyles from './Header.module.scss'
import CartStyles from './CartButton.module.scss'

import { Button } from '../../UI/Button/Button'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

// contexts
import { CartContext } from '../../../context/Cart/cart-context'

export const Header = () => {
	const { openModal, totalPrice, totalItems } = useContext(CartContext)

	return (
		<>
			<Wrapper as="header" className={headerStyles.header}>
				<h1 className={headerStyles.headline}>Food app</h1>
				<Button className={CartStyles.button} onClick={openModal}>
					<span className={CartStyles.icon}>
						<FontAwesomeIcon icon={faCartShopping} />
					</span>
					<span>Your cart</span>
					<span className={CartStyles.badge}>{totalItems}</span>
					<span className={CartStyles.price}>{`${totalPrice.toFixed(2)} €`}</span>
				</Button>
			</Wrapper>
		</>
	)
}
