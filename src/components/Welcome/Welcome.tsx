import React from 'react'

// components
import { Button } from '../UI/Button/Button'
import { Stage } from '../LayoutElements/Stage/Stage'
import { Layout } from '../Helpers/Layout/Layout'

// firebase
import { getDatabase, ref as databaseRef } from 'firebase/database'
import { useObject } from 'react-firebase-hooks/database'

// types
import { SrcSetItem } from '../../types/use-srcSet.types'

// styles
import styles from './Welcome.module.scss'

export const Welcome = () => {
	const dbRef = databaseRef(getDatabase(), 'restaurants/info/cover')
	const [snapshot] = useObject(dbRef)
	const cover: SrcSetItem[] = snapshot?.val()

	return (
		<Layout>
			<article className={styles.welcome}>
				<div className={styles.welcome__info}>
					<h1>Welcome to best food portal</h1>
					<Button as="link" to="/restaurants" variant='primary'>
						<span>Please check our restaurants</span>
					</Button>
				</div>
				<Stage data={cover}></Stage>
			</article>
		</Layout>
	)
}
