import { useState, useEffect } from 'react'

type SrcSetItem = {
	src: string
	imageWidth: string
}

export const useSrcSet = (srcSet: string | SrcSetItem[]) => {
	const [srcSetState, setSrcSetState] = useState<string>('')

	useEffect(() => {
		if (typeof srcSet === 'string') {
			setSrcSetState(srcSet)
		} else {
			setSrcSetState(srcSet.map(({ src, imageWidth }) => `${src} ${imageWidth}`).join(', '))
		}
	}, [srcSet])

	return srcSetState
}
