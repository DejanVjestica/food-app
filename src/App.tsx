import React from 'react'

import { Header } from './components/Layout/Header/Header'
import { Stage } from './components/Layout/Stage/Stage'
import { Meals } from './components/Meals/Meals'
import { Wrapper } from './components/Helpers/Wrapper/Wrapper'

import styles from './App.module.scss'

export const App = () => {
	return (
		<>
			<Header />
			<Stage />
			<Wrapper as="main" className={styles.main}>
				<Meals />
			</Wrapper>
		</>
	)
}
