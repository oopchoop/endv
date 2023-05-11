import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/about.css'
import './assets/accept-login.css'
import './assets/registration.css'
import './assets/basket.css'
import './assets/catalog.css'
import './assets/favorite.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
