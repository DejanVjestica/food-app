import React, { useRef, useState, useEffect } from 'react'

// types
import { SrcSetItem } from '../../../types/use-srcSet.types'

// custom hooks
import { useSrcSet } from '../../../hooks/use-srcSet'

// components
import { Spinner } from '../../UI/Spinner/Spinner'

type BaseProps = {
	srcsetdata?: SrcSetItem[] | string
}

type ImgProps = BaseProps & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof BaseProps>

export const Img = ({ srcsetdata = '', ...rest }: ImgProps) => {
	// ref
	const imageRef = useRef<HTMLImageElement>(null)
	// state
	const [isLoading, setIsLoading] = useState(true)
	const srcSetItems = useSrcSet(srcsetdata as SrcSetItem[])

	useEffect(() => {
		const img = imageRef.current
		img?.addEventListener('load', () => {
			setIsLoading(false)
		})
	}
	, [imageRef])

	if (!srcsetdata) {
		return (
			<>
				{isLoading && <Spinner></Spinner>}
				<img {...rest} ref={imageRef}/>
			</>
		)
	}
	return (
		<>
			{isLoading && <Spinner></Spinner>}
			<img {...rest} ref={imageRef} srcSet={srcSetItems} />
		</>
	)
}
