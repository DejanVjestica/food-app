// styles
import styles from './Spinner.module.scss'

// types
type SpinnerProps = {
	children?: React.ReactNode
}

export const Spinner = ({ children = '... Loading' }: SpinnerProps): JSX.Element => {
	return (
		<div className={styles.loader__wrapper}>
			<div className={styles.loader__inner}></div>
			<p className={styles.loader__text}>{children}</p>
		</div>
	)
}
