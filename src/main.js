import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
 import router from './router/router.js'

import { createI18n, useI18n } from 'vue-i18n'
import { languages } from './i18n'
import { defaultLocale } from './i18n'

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'uz',
  locale: defaultLocale,
  messages,
})

const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

 app.use(router)
app.use(i18n)
app.mount('#app')
