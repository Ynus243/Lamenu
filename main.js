import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'

import { createI18n, useI18n } from 'vue-i18n'
import { languages } from './i18n'
import { defaultLocale } from './i18n'

const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'uz',
    locale: defaultLocale,
    messages

})

createApp(App,{
  setup() {
    const {t} = useI18n()
    return {t}
  }
}).use(i18n).mount('#app')
