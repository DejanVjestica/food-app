import React from 'react'

// Firebase
import {
	User
} from 'firebase/auth'

// components
import { Img } from '../../UI/Img/Img'
import { Button } from '../../UI/Button/Button'

// styles
import styles from './Profile.module.scss'

type ProfileProps = {
	user: User | null | undefined
}

export const Profile = ({ user }: ProfileProps) => {
	const userName = user?.displayName || user?.email
	const userImg = user?.photoURL || undefined

	return (
		<div className={styles.profile}>
			{userImg && <Img src={userImg} alt='profile image' />}
			<div className={styles.info}>
				<h2>{userName}</h2>
				<Button variant='simple'>Pesonal data</Button>
			</div>
		</div>
	)
}
