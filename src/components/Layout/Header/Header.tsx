import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

// styles
import headerStyles from './Header.module.scss'

// components
import { Button } from '../../UI/Button/Button'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

// contexts
import { CartContext } from '../../../context/Cart/cart-context'
import { UserContext } from '../../../context/User/user-context'

export const Header = () => {
	// state
	const [isBtnHighlighted, setBtnHighlighted] = useState<boolean>(false)

	// contexts
	const { openCartModal, totalPrice, totalItems, cartItems } = useContext(CartContext)
	const { openModal } = useContext(UserContext)

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

	const buttonClasses = `${isBtnHighlighted ? headerStyles.bump : ''}`

	return (
		<>
			<Wrapper as="header" className={[headerStyles.header, buttonClasses].join(' ')}>
				<Button as='link' to={'/'}>
					<h1 className={headerStyles.headline}>Food app</h1>
				</Button>
				<Button onClick={openCartModal} variant='primary'>
					<span className={headerStyles.icon}>
						<FontAwesomeIcon icon={faCartShopping} />
					</span>
					<span>Your cart</span>
					<span className={headerStyles.badge}>{totalItems}</span>
					<span className={headerStyles.price}>{`${totalPrice.toFixed(2)} €`}</span>
				</Button>
				<Button onClick={openModal} variant='icon' modifier='is-no-border'>
					<FontAwesomeIcon icon={faBars} />
				</Button>
			</Wrapper>
		</>
	)
}
