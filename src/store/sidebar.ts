import { defineStore } from 'pinia'

interface SidebarState {
  isSidebarVisible: boolean
}

export const useSidebarStore = defineStore<'sidebar', SidebarState>({
  id: 'sidebar',
  state: (): SidebarState => ({
    isSidebarVisible: true
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
})
