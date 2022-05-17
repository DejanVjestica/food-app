import React from 'react'

import styles from './Stage.module.scss'
import { Img } from '../../UI/Img/Img'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

const srcsetArr = [
	{ src: 'https://via.placeholder.com/400x150', imageWidth: '400w' },
	{ src: 'https://via.placeholder.com/600x225', imageWidth: '600w' },
	{ src: 'https://via.placeholder.com/800x300', imageWidth: '800w' },
	{ src: 'https://via.placeholder.com/1000x375', imageWidth: '1000w' },
	{ src: 'https://via.placeholder.com/1200x450', imageWidth: '1200w' },
	{ src: 'https://via.placeholder.com/1400x525', imageWidth: '1400w' },
	{ src: 'https://via.placeholder.com/1600x600', imageWidth: '1600w' },
	{ src: 'https://via.placeholder.com/1800x675', imageWidth: '1800w' },
	{ src: 'https://via.placeholder.com/2000x750', imageWidth: '2000w' },
	{ src: 'https://via.placeholder.com/2200x825', imageWidth: '2200w' },
	{ src: 'https://via.placeholder.com/2400x900', imageWidth: '2400w' },
	{ src: 'https://via.placeholder.com/2600x975', imageWidth: '2600w' },
	{ src: 'https://via.placeholder.com/2800x1050', imageWidth: '2800w' },
	{ src: 'https://via.placeholder.com/3000x1125', imageWidth: '3000w' },
	{ src: 'https://via.placeholder.com/3200x1200', imageWidth: '3200w' }
]

const srcSetString = srcsetArr
	.map(({ src, imageWidth }) => `${src} ${imageWidth}`)
	.join(', ')

export const Stage = () => {
	return (
		<Wrapper className={styles.stage}>
			<Img
				src={'https://via.placeholder.com/200x75'}
				alt="Alternative text that describes the image"
				srcSet={srcSetString}></Img>
		</Wrapper>
	)
}
