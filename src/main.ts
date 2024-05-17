import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './assets/main.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')

navigator.serviceWorker.register('/service-worker.ts', { scope: "/" })
    .then(() => console.log('регистрация sw успешна'))