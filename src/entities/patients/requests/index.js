import { collection, query, where, getDoc, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore'
import { getCookie } from '@/shared/helpers'
import jwtDecode from 'jwt-decode'
import { db, auth } from '@/shared/firebase'

export const getAllPatients = async (doctorId) => {
  try {
    const access_token = getCookie('access_token')
    const role = getCookie('role')
    const decoded = jwtDecode(access_token)
    const list = []
    const q = !!doctorId ?
      query(collection(db, 'patient'), where('doctorId', '==', doctorId))
      : role === 'admin' 
      ? query(collection(db, 'patient'))
      : query(collection(db, 'patient'), where('doctorId', '==', decoded.user_id))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    return list || []
  } catch (e) {
    console.log(e)
  }
}

export const getPatientDetails = async (uid) => {
  try {
    const docRef = doc(db, 'patient', uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return Promise.reject()
    }
  } catch (e) {
    console.log(e)
  }
}

export const postPatient = async (data) => {
  try {
    await updateDoc(doc(db, 'patient', data.id), data)
  } catch (e) {
    try {
      await setDoc(doc(db, 'patient', data.id), {
        ...data,
        doctorId: auth.currentUser.uid
      })
    } catch (e) {
      alert(e.message)
    }
  }
}