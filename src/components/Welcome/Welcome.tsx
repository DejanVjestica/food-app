// components
import { Button } from '../UI/Button/Button'
import { Stage } from '../LayoutElements/Stage/Stage'
import { Layout } from '../Helpers/Layout/Layout'

// custom hooks
import { useStorage } from '../../hooks/useStorage'

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
	const imagePath = 'restaurantsCover/restaurantsCover.jpg'
	const { imgUrl } = useStorage(imagePath)

	const imgConfig = {
		src: imgUrl,
		alt: 'Alternative text that describes the image',
		srcSet: imgUrl
	} as ImgConfigType

	return (
		<Layout>
			<article className={styles.welcome}>
				<div className={styles.welcome__info}>
					<h1>Welcome to best food portal</h1>
					<Button as="link" to="/restaurants" variant="primary">
						<span>Please check our restaurants</span>
					</Button>
				</div>
				<Stage imgConfig={imgConfig}></Stage>
			</article>
		</Layout>
	)
}
