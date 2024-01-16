import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// importiamo il router 
import { router } from './router';
// usiamo il router prima del montaggio del app
createApp(App).use(router).mount('#app')
