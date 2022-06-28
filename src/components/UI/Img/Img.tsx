import React from 'react'

// types
import { SrcSetItem } from '../../../types/use-srcSet.types'

// custom hooks
import { useSrcSet } from '../../../hooks/use-srcSet'

type ImgProps = {
	srcsetdata?: SrcSetItem[] | string
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'srcsetdata'>

export const Img = ({ srcsetdata = '', ...rest }: ImgProps) => {
	const srcSetItems = useSrcSet(srcsetdata as SrcSetItem[])

	if (!srcsetdata) {
		return <img {...rest} />
	}
	return <img {...rest} srcSet={srcSetItems} />
}
