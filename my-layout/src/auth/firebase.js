import { initializeApp } from 'firebase/app'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
   // signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth'
import {
    getFirestore,
    // query,
    // getDocs,
    collection,
    // where,
    addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'xxxxxxxxx',
    authDomain: 'xxxxxxxxx',
    projectId: 'xxxxxxxxx',
    storageBucket: 'xxxxxxxxx',
    messagingSenderId: 'xxxxxxxxx',
    appId: 'xxxxxxxxx',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider)
        const user = res.user
        console.log(user)
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        //await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem('authenticated', 'loginnn')
        console.log('logInWithEmailAndPassword beforee: ' + email + password)
    } catch (err) {
        console.error(err)
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)
        alert('Password reset link sent!')
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const logout = () => {
    signOut(auth)
}

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
}
