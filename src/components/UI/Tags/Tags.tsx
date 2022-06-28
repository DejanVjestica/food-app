import React from 'react'

// components
import { ListItem } from '../ListItem/ListItem'

// stiles
import styles from './Tags.module.scss'

type TagsProps = {
	variant?: 'primary' | 'secondary'
	modifier?: string
	tags: string[]
}

export const Tags = ({ tags, variant, modifier }: TagsProps) => {
	const className = [styles.default, styles[`${variant}`], styles[`${modifier}`]].join(' ')

	const tagsListItems = tags.map((tag, index) => {
		return <ListItem key={index}>{tag}</ListItem>
	})

	return (
		<ul className={className}>
			{tagsListItems}
		</ul>
	)
}
