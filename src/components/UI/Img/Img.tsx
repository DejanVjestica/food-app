import React from 'react'

// types
import { SrcSetItem } from '../../../types/use-srcSet.types'

// custom hooks
import { useSrcSet } from '../../../hooks/use-srcSet'

type ImgProps = {
	srcsetdata?: string | SrcSetItem[]
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'srcSet'>

export const Img = ({ srcsetdata, ...rest }: ImgProps) => {
	if (srcsetdata) {
		const srcSetItems = useSrcSet(srcsetdata)
		return <img {...rest} srcSet={srcSetItems} />
	}
	return <img {...rest} />
}
