import { collection, query, where, doc, getDocs, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/shared/firebase'

export const getAllDoctors = async () => {
  try {
    const list = []
    const q = query(collection(db, 'user'), where('role', '==', 'doctor'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    return list
  } catch (e) {
    console.log(e)
  }
}

export const getDoctorDetails = async (uid) => {
  try {
    const docRef = doc(db, 'user', uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: uid, ...docSnap.data() }
    } else {
      return Promise.reject()
    }
  } catch (e) {
    console.log(e)
  }
}

export const postDoctor = async (data) => {
  try {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      const user = userCredential.user
      await setDoc(doc(db, 'user', user.uid), {
        ...data,
        role: 'doctor'
      })
    })
    .catch((error) => {
      alert(error.message)
      return Promise.reject(error)
    })
  } catch (e) {
    console.log(e)
  }
}

export const editDoctor = async (data) => {
  try {
    await updateDoc(doc(db, 'user', data.id), data)
  } catch (e) {
    console.log(e)
  }
}