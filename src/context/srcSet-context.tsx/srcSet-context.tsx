import { createContext } from 'react'

import { SrcSetItem } from '../../types/srcSet.types'

type SrcSetContextType = {
	generateSrcSet: (srcArr: SrcSetItem[]) => string
}

export const SrcSetContext = createContext<SrcSetContextType>({
	generateSrcSet: () => ''
})
