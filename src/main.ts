import { createApp } from 'vue'
import router from './router/router'
import { createPinia } from 'pinia'
import './scss/reset.scss';
import App from './App.vue'

const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
