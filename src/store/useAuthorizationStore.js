import { defineStore } from 'pinia';
export const useAuthorizationStore = defineStore('authorization', {
    state: () => ({
        isLoading: true,
        isSuccess: false,
        todos: null
    }),
    actions: {
        async setIsLoading(value) {
            this.isLoading = value;
        },
        setIsSuccess(value) {
            this.isSuccess = value;
        }
    }
});
