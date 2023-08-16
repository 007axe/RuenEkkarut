import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


import VueWriter from "vue-writer";
// importing AOS css style globally
import 'aos/dist/aos.css'

const app = createApp(App)


app.use(router)
app.use(VueWriter)


app.mount('#app')


