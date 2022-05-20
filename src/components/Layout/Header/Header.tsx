import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import headerStyles from './Header.module.scss'
import CartStyles from './CartButton.module.scss'

import { Button } from '../../UI/Button/Button'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

// contexts
import { CartContext } from '../../../context/cart-context'

export const Header = () => {
	const { openModal, cartItems } = useContext(CartContext)

	return (
		<>
			<Wrapper as="header" className={headerStyles.header}>
				<h1 className={headerStyles.headline}>Food app</h1>
				<Button className={CartStyles.button} onClick={openModal}>
					<span className={CartStyles.icon}>
						<FontAwesomeIcon icon={faCartShopping} />
					</span>
					<span>Your cart</span>
					<span className={CartStyles.badge}>{cartItems.length}</span>
				</Button>
			</Wrapper>
		</>
	)
}
