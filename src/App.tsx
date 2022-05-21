import React, { useContext } from 'react'

import { Header } from './components/Layout/Header/Header'
import { Stage } from './components/Layout/Stage/Stage'
import { Meals } from './components/Meals/Meals'
import { Wrapper } from './components/Helpers/Wrapper/Wrapper'
import { Cart } from './components/Cart/Cart'

import styles from './App.module.scss'

// Contexts
import { CartContext } from './context/Cart/cart-context'

export const App = () => {
	const { isModalOpen } = useContext(CartContext)
	return (
		<>
			<Header />
			<Stage />
			<Wrapper as="main" className={styles.main}>
				<Meals />
			</Wrapper>
			{isModalOpen && <Cart></Cart>}
		</>
	)
}
