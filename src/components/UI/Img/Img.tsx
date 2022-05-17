import React from 'react'

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> &
	Omit<React.ComponentProps<'img'>, 'srcSet'>

export const Img = (props: ImgProps) => {
	return <img {...props}></img>
}
