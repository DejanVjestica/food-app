import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

// components
import { Button } from '../UI/Button/Button'
import { Wrapper } from '../Helpers/Wrapper/Wrapper'
import { CartNote } from './CartNote'

// styles
import styles from './CartItem.module.scss'

// context
import { CartContext } from '../../context/Cart/cart-context'

// types
import { MealItemExtendedType } from '../../types/cart.types'

type CartItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
	item: MealItemExtendedType
}

export const CartItem = ({ item }: CartItemProps) => {
	const { addItem, removeItem } = useContext(CartContext)
	const price = item.price * item.quantity
	const priceEuro = `${price.toFixed(2)} €`
	const [showText, setShowText] = useState(false)
	const newItem = { ...item, quantity: 1 }

	const addItemHandler = (): void => {
		addItem(newItem)
	}

	const removeItemHandler = (): void => {
		removeItem(newItem)
	}

	const cancelNoteHandler = (): void => {
		setShowText(false)
	}

	const showNoteHandler = (): void => {
		setShowText(true)
	}

	const addNoteLabel = item.note ? 'Edit note' : 'Add note'

	return (
		<li className={styles['cart-item']}>
			<p className={styles['cart-item__quantity']}>{item.quantity}</p>
			<p className={styles['cart-item__name']}>{item.name}</p>
			<p className={styles['cart-item__price']}>{priceEuro}</p>

			<Wrapper as="div" className={styles['cart-item__actions']}>
				{!showText && <Button variant='simple' onClick={showNoteHandler}>
					{addNoteLabel}
				</Button>}
				<Wrapper as="div" className={styles['cart-item__actions-add-remove']}>
					<Button variant='icon' onClick={removeItemHandler}>
						<FontAwesomeIcon icon={faMinus} />
					</Button>
					<Button variant='icon' onClick={addItemHandler}>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				</Wrapper>
				{!showText && <p className={styles['cart-item__note']}>{item.note}</p>}
				{showText && <CartNote note={item.note} cancelNote={cancelNoteHandler} id={item.id}></CartNote>}
			</Wrapper>
		</li>
	)
}
