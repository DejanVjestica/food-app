/* eslint-disable no-tabs */
/* eslint-disable space-before-function-paren */
import { initializeApp } from 'firebase/app'
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	onAuthStateChanged,
	sendEmailVerification,
	updateProfile
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase, ref, set } from 'firebase/database'

// types
import { MealItemType } from './types/cart.types'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
	apiKey: 'AIzaSyD-5RbSwbB_eaBEh10qK17BI_bhVets8u8',
	authDomain: 'food-app-ed31b.firebaseapp.com',
	databaseURL: 'https://food-app-ed31b-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'food-app-ed31b',
	storageBucket: 'food-app-ed31b.appspot.com',
	messagingSenderId: '809842321837',
	appId: '1:809842321837:web:645a198be14e831bd29924',
	measurementId: 'G-KWF8EBZ9QX'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const database = getDatabase()

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider)
		const user = res.user
		await set(ref(database, `users/${user.uid}/username`), {
			name: user.displayName,
			email: user.email,
			photoUrl: user.photoURL,
			isVerified: user.emailVerified,
			isAnonymous: user.isAnonymous,
			phoneNumber: user.phoneNumber
		})
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

const logInWithEmailAndPassword = async (email: string, password: string) => {
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password)
		const user = res.user

		await updateProfile(user, {
			displayName: name
		})

		await set(ref(database, `users/${user.uid}/username`), {
			name,
			email,
			photoUrl: user.photoURL,
			isVerified: user.emailVerified,
			isAnonymous: user.isAnonymous,
			phoneNumber: user.phoneNumber
		})
		await sendEmailVerification(user)
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

const sendPasswordReset = async (email: string) => {
	try {
		await sendPasswordResetEmail(auth, email)
		alert('Password reset link sent!')
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

const logout = () => {
	signOut(auth)
}

type OrderType = {
	streetName: string
	hausNumber: string
	name: string
	email: string
	phone: string
	order: MealItemType[]
}

const writeOrder = async (order: OrderType) => {
	const db = getDatabase()
	const auth = getAuth()
	const user: string = auth.currentUser?.uid || ''
	const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
	const path = user ? `orders/${user}` : `orders/${randomId}`

	try {
		await set(ref(db, path), {
			streetName: order.streetName,
			hausNumber: order.hausNumber,
			name: order.name,
			email: order.email,
			telefon: order.phone,
			order: order.order
		})
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, onAuthStateChanged, logout, writeOrder }
