// styles
import styles from './TagButton.module.scss'

// types
type TagButtonProps = {
	children?: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	active?: boolean
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'button'>

export const TagButton = ({ children, active, ...rest }: TagButtonProps): JSX.Element => {
	const className = [styles['tag-button'], styles[`${active ? 'is-active' : ''}`]].join(' ')
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	)
}
