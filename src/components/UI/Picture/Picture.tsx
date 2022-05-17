import React from 'react'
import { Img } from '../Img/Img'

type PictureProps = React.ImgHTMLAttributes<HTMLImageElement> &
	Omit<React.ComponentProps<'img'>, 'srcSet'>

export const Picture = (props: PictureProps) => {
	return (
		<picture>
			<source
				srcSet={props.srcSet}
				sizes={props.sizes}></source>
			<Img src={props.src} alt={props.alt}></Img>
		</picture>
	)
}
