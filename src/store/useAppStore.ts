import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        isFirstVisit: true
    }),
    actions: {
        setIsFirstVisit(value: boolean) {
            this.isFirstVisit = value
        }
    }
})