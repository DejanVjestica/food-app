import React, { useContext } from 'react'

// Components
import { Header } from './components/Layout/Header/Header'
import { Stage } from './components/Layout/Stage/Stage'
import { Meals } from './components/Meals/Meals'
import { Wrapper } from './components/Helpers/Wrapper/Wrapper'
import { Cart } from './components/Cart/Cart'
// import { Welcome } from './components/Welcome/Welcome'
// import { Restaurants } from './components/Restaurants/Restaurants'
import { User } from './components/User/User'

// Styles
import styles from './App.module.scss'

// Contexts
import { CartContext } from './context/Cart/cart-context'
import { UserContext } from './context/User/user-context'

// Cookies
// import { useCookies } from 'react-cookie'

export const App = () => {
	const { isModalOpen: cartModal } = useContext(CartContext)
	const { isModalOpen: userModal } = useContext(UserContext)
	// const [cookies, setCookies] = useCookies(['user'])

	// const components = cookies.user ? <Restaurants /> : <Welcome />

	return (
		<>
			<Header />
			<Stage />
			<Wrapper as="main" className={styles.main}>
				<Meals />
			</Wrapper>
			{cartModal && <Cart></Cart>}
			{userModal && <User></User>}
		</>
	)
}
