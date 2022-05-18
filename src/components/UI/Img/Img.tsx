import React, { useContext, useState, useEffect } from 'react'
import { SrcSetContext } from '../../../context/srcSet-context'

type SrcSet = {
	src: string
	imageWidth: string
}

type ImgProps = {
	srcSet?: string | SrcSet[]
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'srcSet'>

export const Img = (props: ImgProps) => {
	const context = useContext(SrcSetContext)
	const [srcSet, setSrcSet] = useState<string>('')

	if (!props.srcSet) {
		return <img {...props} srcSet={srcSet}></img>
	}

	useEffect(() => {
		if (typeof props.srcSet === 'string') {
			setSrcSet(props.srcSet)
		} else {
			setSrcSet(context.generateSrcSet(props.srcSet as SrcSet[]))
		}
	}, [srcSet])

	return <img {...props} srcSet={srcSet}></img>
}
