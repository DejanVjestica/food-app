import React, { useRef, useContext } from 'react'

// components
import { Button } from '../UI/Button/Button'
import { Wrapper } from '../Helpers/Wrapper/Wrapper'

// styles
import styles from './CartNote.module.scss'

// context
import { CartContext } from '../../context/Cart/cart-context'

type CartNoteProps = {
	cancelNote: () => void
	id: number
	note: string | undefined
}

export const CartNote = ({ cancelNote, id, note }: CartNoteProps) => {
	const { addNote, removeNote } = useContext(CartContext)
	const noteRef = useRef<HTMLTextAreaElement>(null)

	const addNoteHandler = (): void => {
		addNote(noteRef.current?.value as string, id)
		cancelNote()
	}

	const removeNoteHandler = (): void => {
		removeNote(id)
		cancelNote()
	}

	const buttonAddNoteLabel = note ? 'Edit note' : 'Add note'

	return (
		<Wrapper as="div" className={styles.note_action}>
			<textarea className={styles.note_text} ref={noteRef} rows={5} cols={33} defaultValue={note}></textarea>
			<Button className={styles.note_add} onClick={addNoteHandler}>
				{buttonAddNoteLabel}
			</Button>
			{!note && (
				<Button className={styles.note_remove} onClick={cancelNote}>
					Cancel
				</Button>
			)}
			{note && (
				<Button className={styles.note_remove} onClick={removeNoteHandler}>
					Delete
				</Button>
			)}
		</Wrapper>
	)
}
