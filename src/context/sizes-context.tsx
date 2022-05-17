import React, { createContext, useState, useEffect } from 'react'

type Sizes = {
	sizes: string
	windowWidth: string
}

export const SourceSizes = createContext({
	sizes: '',
	windowWidth: ''
} as Sizes)

export const SourceSizesProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	const [sizes, setSizes] = useState('')
	const [windowWidth, setWindowWidth] = useState('')

	useEffect(() => {
		const updateSizes = () => {
			const { innerWidth } = window
			const sizes = `(min-width: ${innerWidth}px) ${innerWidth}px, calc(-4435vw + ${innerWidth}px)`
			setSizes(sizes)
			setWindowWidth(innerWidth.toString())
		}

		updateSizes()
		window.addEventListener('resize', updateSizes)

		return () => {
			window.removeEventListener('resize', updateSizes)
		}
	}, [])

	return (
		<SourceSizes.Provider value={{ sizes, windowWidth }}>
			{children}
		</SourceSizes.Provider>
	)
}
