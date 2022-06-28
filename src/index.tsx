import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

// components
import { App } from './App'

// styles
import './index.scss'

// contexts
import { SrcSetProvider } from './context/srcSet-context.tsx/srcSet-provider'
import { CartProvider } from './context/Cart/cart-provider'
import { UserProvider } from './context/User/user-provider'
// cookies
import { CookiesProvider } from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CartProvider>
				<SrcSetProvider>
					<CookiesProvider>
						<UserProvider>
							<App />
						</UserProvider>
					</CookiesProvider>
				</SrcSetProvider>
			</CartProvider>
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
