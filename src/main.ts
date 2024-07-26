import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import vClickOutside from 'v-click-outside';



import './assets/main.scss'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(pinia) 
app.directive('click-outside', vClickOutside);

navigator.serviceWorker.register('/service-worker.ts', { scope: "/" })
    .then(() => console.log('регистрация sw успешна'))
    