import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/shared/firebase'

export const signIn = async ({ email, password }) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    alert(e.message)
  }
}