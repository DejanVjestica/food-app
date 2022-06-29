import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// styles
import styles from './Header.module.scss'

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

	const buttonClasses = `${isBtnHighlighted ? styles.bump : ''}`

	// use location to show the back button
	const { pathname } = useLocation()

	const navigate = useNavigate()
	const handleClickBack = () => {
		navigate(-1)
	}

	return (
		<>
			<Wrapper as="header" className={[styles.header, buttonClasses].join(' ')}>
				<Wrapper as='div' className={styles['header__action-wrapper-left']}>
					{(pathname !== '/') && <Button variant='icon' modifier='is-no-border' onClick={handleClickBack}>
						<FontAwesomeIcon icon={faArrowLeft} />
					</Button>}
					<Button as='link' to={'/'}>
						<h1 className={styles.headline}>Food app</h1>
					</Button>
				</ Wrapper>

				<Wrapper as='div' className={styles['header__action-wrapper-right']}>
					<Button onClick={openCartModal} variant='primary'>
						<span className={styles.icon}>
							<FontAwesomeIcon icon={faCartShopping} />
						</span>
						<span>Your cart</span>
						<span className={styles.badge}>{totalItems}</span>
						<span className={styles.price}>{`${totalPrice.toFixed(2)} €`}</span>
					</Button>
					<Button onClick={openModal} variant='icon' modifier='is-no-border'>
						<FontAwesomeIcon icon={faBars} />
					</Button>
				</Wrapper>
			</Wrapper>
		</>
	)
}
