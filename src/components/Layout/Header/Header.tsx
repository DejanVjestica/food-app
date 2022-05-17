import React from 'react'

import styles from './Header.module.scss'

import { Stage } from '../Stage/Stage'
import { Button } from '../../UI/Button/Button'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

export const Header = () => {
	const onClickHandler = () => {
		console.log('clicked')
	}
	return (
		<>
			<Wrapper as="header" className={styles.header}>
				<h1 className={styles.headline}>Food app</h1>
				<Button onClick={onClickHandler}>Cart</Button>
			</Wrapper>
			<Stage></Stage>
		</>
	)
}
