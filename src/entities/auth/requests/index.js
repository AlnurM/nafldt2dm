import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/shared/firebase'

export const signIn = async ({ email, password }) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    alert(e.message)
    return Promise.reject(e)
  }
}

export const getUser = async (uid) => {
  try {
    const docRef = doc(db, 'user', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data()
    }
  } catch (e) {
    console.log(e)
  }
}