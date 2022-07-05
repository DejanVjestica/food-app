import React, { useContext, useState } from 'react'

// context
import { FirestoreContext } from '../../../context/Firestore/firestore-context'

// components
import { ListItem } from '../ListItem/ListItem'
import { TagButton } from './TagButton'

// stiles
import styles from './Tags.module.scss'

type TagsProps = {
	variant?: 'sidebar'
}

export const Tags = ({ variant }: TagsProps) => {
	// Context
	const { tagList, selectedTag, setTagsForFiltering } = useContext(FirestoreContext)

	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setTagsForFiltering(event.currentTarget.innerText)
	}

	const className = [styles.default, styles[`${variant}`]].join(' ')

	const tagsListItems = tagList.map((tag, index) => {
		const isActive = selectedTag.includes(tag)

		return <ListItem key={index}>
			<TagButton onClick={onClickHandler} key={tag} active={isActive} >
				{tag}
			</TagButton>
		</ListItem>
	})

	return (
		<ul className={className}>
			{tagsListItems}
		</ul>
	)
}
