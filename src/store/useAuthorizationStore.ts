import { defineStore } from 'pinia'

export const useAuthorizationStore = defineStore('authorization', {
  state: () => ({
    isLoading: true,
    isSuccess: false
  }),
  actions: {
    setIsLoading(value: boolean) {
        this.isLoading = value
    },
    setIsSuccess(value: boolean) {
      this.isSuccess = value
    }
  }
})
