type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
	children: React.ReactNode
}

export const ListItem = ({ children }: ListItemProps) => {
	return <li>{children}</li>
}
