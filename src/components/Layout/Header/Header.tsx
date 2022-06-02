import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import headerStyles from './Header.module.scss'
import cartButtonStyles from './CartButton.module.scss'

import { Button } from '../../UI/Button/Button'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

// contexts
import { CartContext } from '../../../context/Cart/cart-context'

export const Header = () => {
	const [isBtnHighlighted, setBtnHighlighted] = useState<boolean>(false)

	const { openModal, totalPrice, totalItems, cartItems } = useContext(CartContext)

	useEffect(() => {
		if (cartItems.length === 0) {
			return
		}

		const timer = setTimeout(() => {
			setBtnHighlighted(false)
		}, 300)

		setBtnHighlighted(true)

		return () => {
			clearTimeout(timer)
		}
	}, [cartItems])

	const buttonClasses = `${cartButtonStyles.button} ${isBtnHighlighted ? cartButtonStyles.bump : ''}`

	return (
		<>
			<Wrapper as="header" className={headerStyles.header}>
				<h1 className={headerStyles.headline}>Food app</h1>
				<Button className={buttonClasses} onClick={openModal}>
					<span className={cartButtonStyles.icon}>
						<FontAwesomeIcon icon={faCartShopping} />
					</span>
					<span>Your cart</span>
					<span className={cartButtonStyles.badge}>{totalItems}</span>
					<span className={cartButtonStyles.price}>{`${totalPrice.toFixed(2)} €`}</span>
				</Button>
			</Wrapper>
		</>
	)
}
