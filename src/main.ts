import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import './assets/main.scss'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(pinia) 

navigator.serviceWorker.register('/service-worker.ts', { scope: "/" })
    .then(() => console.log('регистрация sw успешна'))