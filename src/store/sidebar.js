import { defineStore } from 'pinia';
export const useSidebarStore = defineStore({
    id: 'sidebar',
    state: () => ({
        isSidebarVisible: true
    }),
    actions: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        }
    }
});
