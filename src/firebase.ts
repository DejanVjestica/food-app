/* eslint-disable space-before-function-paren */
import { initializeApp } from 'firebase/app'
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut
} from 'firebase/auth'
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApiKEy = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
	apiKey: firebaseApiKEy,
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

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider)
		const user = res.user
		const q = query(collection(db, 'users'), where('uid', '==', user.uid))
		const docs = await getDocs(q)
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email
			})
		}
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
		await addDoc(collection(db, 'users'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email
		})
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

export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout }
