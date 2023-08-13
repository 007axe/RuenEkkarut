import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


import VueWriter from "vue-writer";

import { MotionPlugin } from '@vueuse/motion'






const app = createApp(App)


app.use(router)
app.use(VueWriter)
app.use(MotionPlugin)

app.mount('#app')


