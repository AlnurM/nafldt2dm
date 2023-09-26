import { create } from 'zustand'
import { getAllDoctors, postDoctor, editDoctor } from '../requests'

const useDoctorsStore = create((set, get) => ({
  list: [],
  form: {
    name: '',
    password: '',
    phone: '',
    email: '',
    about: '',
  },
  setForm: (data) => {
    set({ form: data })
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
  getDoctors: async () => {
    try {
      const list = await getAllDoctors()
      set({ list })
    } catch (e) {
      console.log(e)
    }
  },
  onEdit: async () => {
    try {
      const { form } = get()
      await editDoctor(form)
      set({ 
        form: {
          name: '',
          password: '',
          phone: '',
          email: '',
          about: '',
        }
      })
    } catch (e) {
      console.log(e)
    }
  },
  onSubmit: async () => {
    try {
      const { form } = get()
      await postDoctor(form)
      set({ 
        form: {
          name: '',
          password: '',
          phone: '',
          email: '',
          about: '',
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}))

export default useDoctorsStore
