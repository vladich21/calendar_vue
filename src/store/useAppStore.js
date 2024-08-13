import { defineStore } from "pinia";
export const useAppStore = defineStore('app', {
    state: () => ({
        isFirstVisit: true
    }),
    actions: {
        setIsFirstVisit(value) {
            this.isFirstVisit = value;
        }
    }
});
