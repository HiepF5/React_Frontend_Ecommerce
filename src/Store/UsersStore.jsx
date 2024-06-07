import { create } from 'zustand'

const UsersStore = (set, get) => ({
  userData: '',
  setUserData: (data) => set({ userData: data })
})

export const useUsers = create(UsersStore)
