import { create } from 'zustand'
import { signIn, editUser, getUser } from '../requests'

const useAuthStore = create((set, get) => ({
  form: {
    email: '',
    password: '',
  },
  profile: null,
  setProfile: (data) => {
    set({ profile: data })
  },
  onChange: (event) => {
    const { name, value } = event.target
    set(prevState => ({ 
      form: {
        ...prevState.form, 
        [name]: value
      }
    }))
  },
  onChangeProfile: (event) => {
    const { name, value } = event.target
    set(prevState => ({ 
      profile: {
        ...prevState.profile, 
        [name]: value
      }
    }))
  },
  login: async () => {
    const { form } = get()
    const credential = await signIn(form)
    if (!credential) {
      return null
    }
    const user = await getUser(credential.user.uid)
    console.log(user.role)
    document.cookie = `access_token=${credential.user.accessToken || ''}; path=/`
    document.cookie = `role=${user.role || ''}; path=/`
    localStorage.setItem('access_token', credential.user.accessToken)
    return { ...credential, role: user.role }
  },
  onEdit: async () => {
    try {
      const { profile } = get()
      await editUser(profile)
      set({
        profile: null
      })
    } catch (e) {
      console.log(e)
    }
  }
}))

export default useAuthStore
