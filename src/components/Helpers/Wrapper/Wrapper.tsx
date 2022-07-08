type WrapperOwnProps<E extends React.ElementType> = {
	children: React.ReactNode
	as?: E
}

type WrapperProps<E extends React.ElementType> = WrapperOwnProps<E> & Omit<React.ComponentProps<E>, keyof WrapperOwnProps<E>>

export const Wrapper = <E extends React.ElementType = 'div'>(props: WrapperProps<E>) => {
	const { children, as: Component = 'div', ...rest } = props
	return <Component {...rest}>{children}</Component>
}
