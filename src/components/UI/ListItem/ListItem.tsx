import React from 'react'

type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
	link: {
		href: string,
		title: string
	},
	text: string
}

export const ListItem = ({ link, text }: ListItemProps) => {
	return <li>
		<a href={link.href} title={link.title}>
			<span>{text}</span>
		</a>
	</li>
}
