import React, { useContext } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'

// Components
import { Cart } from './components/Cart/Cart'
import { User } from './components/User/User'
import { Restaurants } from './components/Restaurants/Restaurants'
import { Welcome } from './components/Welcome/Welcome'
import { Header } from './components/LayoutElements/Header/Header'
import { AvailableMeals } from './components/Meals/AvailableMeals'

// Contexts
import { CartContext } from './context/Cart/cart-context'
import { UserContext } from './context/User/user-context'

export const App = () => {
	const { isModalOpen: cartModal } = useContext(CartContext)
	const { isModalOpen: userModal } = useContext(UserContext)

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="restaurants" element={<Outlet />}>
					<Route index element={<Restaurants />} />
					<Route path=":id" element={<AvailableMeals />} />

				</Route>
				<Route
					path="*"
					element={
						<p>There&apos;s nothing here!</p>
					}
				/>
			</Routes>

			{cartModal && <Cart></Cart>}
			{userModal && <User></User>}
		</>
	)
}
