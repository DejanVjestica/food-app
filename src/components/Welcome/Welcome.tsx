import React from 'react'

// components
import { Button } from '../UI/Button/Button'
import { Stage } from '../LayoutElements/Stage/Stage'
import { Layout } from '../Helpers/Layout/Layout'

// firestore
import { getStorage, ref } from 'firebase/storage'
import { useDownloadURL } from 'react-firebase-hooks/storage'

// types
import { SrcSetItem } from '../../types/use-srcSet.types'

// styles
import styles from './Welcome.module.scss'

type ImgConfigType = {
	src?: string | undefined
	srcSet?: SrcSetItem[] | string
	alt?: string | undefined
}

export const Welcome = () => {
	const storage = getStorage()

	const imagePath = 'restaurantsCover/restaurantsCover.jpg'
	const [value] = useDownloadURL(ref(storage, imagePath))

	const imgConfig = {
		src: value,
		alt: 'Alternative text that describes the image',
		srcSet: value
	} as ImgConfigType

	return (
		<Layout>
			<article className={styles.welcome}>
				<div className={styles.welcome__info}>
					<h1>Welcome to best food portal</h1>
					<Button as="link" to="/restaurants" variant='primary'>
						<span>Please check our restaurants</span>
					</Button>
				</div>
				<Stage imgConfig={imgConfig} ></Stage>
			</article>
		</Layout>
	)
}
