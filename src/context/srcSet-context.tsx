import React, { createContext } from 'react'

type SrcSetItem = {
	src: string
	imageWidth: string
}

type SrcSetContextType = {
	generateSrcSet: (srcArr: SrcSetItem[]) => string
}

export const SrcSetContext = createContext<SrcSetContextType>({
	generateSrcSet: () => ''
})

type SrcSetProviderProps = {
	children: React.ReactNode
}

export const SrcSetProvider = ({ children }: SrcSetProviderProps) => {
	const generateSrcSetHandler = (srcArr: SrcSetItem[]) => {
		return srcArr.map(({ src, imageWidth }: SrcSetItem) => `${src} ${imageWidth}`).join(', ')
	}

	return (
		<SrcSetContext.Provider
			value={{
				generateSrcSet: generateSrcSetHandler
			}}>
			{children}
		</SrcSetContext.Provider>
	)
}
