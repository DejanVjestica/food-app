import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
// contexts
import { SrcSetProvider } from './context/srcSet-context.tsx/srcSet-provider'
import { CartProvider } from './context/Cart/cart-provider'
import { UserProvider } from './context/User/user-provider'
// cookies
import { CookiesProvider } from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<CartProvider>
			<SrcSetProvider>
				<CookiesProvider>
					<UserProvider>
						<App />
					</UserProvider>
				</CookiesProvider>
			</SrcSetProvider>
		</CartProvider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
