import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	onAuthStateChanged,
	sendEmailVerification
} from 'firebase/auth'

import { getFirestore, doc, updateDoc, collection, setDoc, getDoc, getDocs, where, query } from 'firebase/firestore'

// types
import { MealItemType } from './types/cart.types'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
	projectId: process.env.REACT_APP_FB_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FB_MSID,
	appId: process.env.REACT_APP_FB_APP_ID,
	measurementId: process.env.REACT_APP_FB_APP_MESURMENT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const db = getFirestore()

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async() => {
	try {
		await signInWithPopup(auth, googleProvider)
		const data = {
			name: auth.currentUser?.displayName,
			email: auth.currentUser?.email,
			photoUrl: auth.currentUser?.photoURL,
			createdAt: Date.now(),
			isVerified: auth.currentUser?.emailVerified,
			isAnonymous: auth.currentUser?.isAnonymous,
			phoneNumber: auth.currentUser?.phoneNumber
		}

		const userId = auth.currentUser?.uid ? auth.currentUser.uid : 'new-user-id'
		await setDoc(doc(db, 'users', userId), data)
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

const logInWithEmailAndPassword = async(email: string, password: string) => {
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

const registerWithEmailAndPassword = async(name: string, email: string, password: string) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password)
		await sendEmailVerification(res.user)

		const data = {
			name,
			email,
			photoUrl: res.user.photoURL,
			createdAt: Date.now(),
			isAnonymous: res.user.isAnonymous,
			phoneNumber: res.user.phoneNumber
		}

		await setDoc(doc(db, 'users', res.user.uid), data)
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

const sendPasswordReset = async(email: string) => {
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

const writeOrder = async(order: OrderType) => {
	if (!auth.currentUser) {
		alert('You must be logged in to place an order!')
		return
	}

	const userId: string = await auth.currentUser.uid

	const data = {
		streetName: order.streetName,
		hausNumber: order.hausNumber,
		name: order.name,
		email: order.email,
		telefon: order.phone,
		order: order.order
	}

	try {
		await setDoc(doc(db, 'orders', userId), data)
	} catch (err: any) {
		console.error(err)
		alert(err.message)
	}
}

export {
	firebase,
	db,
	auth,
	getDoc,
	getDocs,
	collection,
	doc,
	setDoc,
	updateDoc,
	where,
	query,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	onAuthStateChanged,
	logout,
	writeOrder
}
