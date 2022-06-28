import React from 'react'

// styles
import styles from './Stage.module.scss'

// components
import { Img } from '../../UI/Img/Img'
import { Wrapper } from '../../Helpers/Wrapper/Wrapper'

// types
import { SrcSetItem } from '../../../types/use-srcSet.types'

type StageProps = {
	data: SrcSetItem[]
}

export const Stage = (props: StageProps) => {
	return (
		<Wrapper className={styles.stage}>
			<Img
				src={'https://via.placeholder.com/200x75'}
				alt="Alternative text that describes the image"
				srcsetdata={props.data}>
			</Img>
		</Wrapper>
	)
}
