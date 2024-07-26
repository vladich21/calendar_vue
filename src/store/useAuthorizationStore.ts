import { defineStore } from 'pinia'

export const useAuthorizationStore = defineStore('authorization', {
  state: () => ({
    isLoading: true,
    isSuccess: false,
    todos: null
  }),
  actions: {
    async setIsLoading(value: boolean) {
      this.isLoading = value
    },
    setIsSuccess(value: boolean) {
      this.isSuccess = value
    }
  }
})
