import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global-colors.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/fonts.css'
import './assets/fontawesome-pro/font-awesome.css'

createApp(App).use(router).mount('#app')