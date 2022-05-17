import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import headerStyles from './Header.module.scss'
import CartStyles from './CartButton.module.scss'

import { Button } from '../../UI/Button/Button'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

export const Header = () => {
	const onClickHandler = () => {
		console.log('clicked')
	}
	return (
		<>
			<Wrapper as="header" className={headerStyles.header}>
				<h1 className={headerStyles.headline}>
					Food app
				</h1>
				<Button
					className={CartStyles.button}
					onClick={onClickHandler}>
					<span className={CartStyles.icon}>
						<FontAwesomeIcon
							icon={faCartShopping}
						/>
					</span>
					<span>Your cart</span>
					<span className={CartStyles.badge}>
						3
					</span>
				</Button>
			</Wrapper>
		</>
	)
}
