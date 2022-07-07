import React from 'react'

// styles
import styles from './Stage.module.scss'

// components
import { Img } from '../../UI/Img/Img'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

// types
import { SrcSetItem } from '../../../types/use-srcSet.types'

type StageProps = {
	imgConfig: {
		src?: string | undefined
		srcSet?: SrcSetItem[] | string
		alt?: string | undefined
	}
}

export const Stage = ({ imgConfig }: StageProps) => {
	return (
		<Wrapper className={styles.stage}>
			<Img
				src={imgConfig?.src}
				alt={imgConfig?.alt}
				srcsetdata={imgConfig?.srcSet}>
			</Img>
		</Wrapper>
	)
}
