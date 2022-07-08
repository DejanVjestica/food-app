import ReactDOM from 'react-dom'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

// components
import { Button } from '../Button/Button'

import styles from './Modal.module.scss'

type ModalProps = {
	children: React.ReactNode
	element: string
	closeModal: () => void
}

export const Modal = ({ children, element, closeModal }: ModalProps) => {
	return ReactDOM.createPortal(
		<aside className={styles.modal}>
			<div className={styles.modal__content}>
				<Button title="close" variant="icon" onClick={closeModal}>
					<span className={styles['cancel-icon']}>
						<FontAwesomeIcon icon={faClose} />
					</span>
				</Button>
				{children}
			</div>
		</aside>,
		document.querySelector(element) as HTMLElement
	)
}
