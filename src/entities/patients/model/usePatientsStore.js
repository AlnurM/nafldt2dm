import { create } from 'zustand'
import { getAllPatients } from '../requests'

const usePatientsStore = create((set, get) => ({
  list: [],
  getPatients: async () => {
    try {
      const list = await getAllPatients()
      set({ list })
    } catch (e) {
      console.log(e)
    }
  },
}))

export default usePatientsStore
