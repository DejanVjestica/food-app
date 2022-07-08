import { SrcSetItem } from '../../types/use-srcSet.types'

import { SrcSetContext } from './srcSet-context'

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
