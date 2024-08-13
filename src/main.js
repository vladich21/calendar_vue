import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './assets/main.scss';
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
navigator.serviceWorker
    .register('/service-worker.ts', { scope: '/' })
    .then(() => console.log('регистрация sw успешна'));
