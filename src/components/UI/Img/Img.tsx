import React, { useContext, useState, useEffect } from 'react'
import { SrcSetContext } from '../../../context/srcSet-context.tsx/srcSet-context'

import { SrcSetItem } from '../../../types/srcSet.types'

type ImgProps = {
	srcSet?: string | SrcSetItem[]
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'srcSet'>

export const Img = (props: ImgProps) => {
	const context = useContext(SrcSetContext)
	const [srcSet, setSrcSet] = useState<string>('')

	// TODO fix typescript to be able not to pass srcSet as empty string
	if (!props.srcSet) return <img {...props} srcSet={srcSet}/>

	useEffect(() => {
		if (typeof props.srcSet === 'string') {
			setSrcSet(props.srcSet)
		} else {
			setSrcSet(context.generateSrcSet(props.srcSet as SrcSetItem[]))
		}
	}, [srcSet])

	return <img {...props} srcSet={srcSet}></img>
}
