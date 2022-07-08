// styles
import styles from './Form.module.scss'

// types
type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
	children: React.ReactNode
	hasError?: boolean
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
} & Omit<React.ComponentProps<'form'>, 'children'>

export const Form = ({ children, hasError, onSubmit }: FormProps) => {
	const disableSubmitButton = hasError ? styles.disabled : ''

	return (
		<form className={[styles.form, disableSubmitButton].join(' ')} onSubmit={onSubmit}>
			{children}
		</form>
	)
}
