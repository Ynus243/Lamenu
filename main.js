import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
 import router from './router/router.js'






const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

 app.use(router)

app.mount('#app')
