import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.scss'

type ModalProps = {
	children: React.ReactNode
	element: string
}

export const Modal = (props: ModalProps) => {
	return ReactDOM.createPortal(
		<aside className={styles.modal}>
			<div className={styles.modal__content}>{props.children}</div>
		</aside>,

		document.querySelector(props.element) as HTMLElement
	)
}
