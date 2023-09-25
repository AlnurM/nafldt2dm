import { create } from 'zustand'
import { signIn } from '../requests'

const useAuthStore = create((set, get) => ({
  form: {
    email: '',
    password: '',
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
  login: async () => {
    const { form } = get()
    const credential = await signIn(form)
    if (!credential) {
      return
    }
    document.cookie = `access_token=${credential.user.accessToken || ''}; path=/`
    localStorage.setItem('access_token', credential.user.accessToken)
  }
}))

export default useAuthStore
