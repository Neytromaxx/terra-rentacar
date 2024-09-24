import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import { createI18n } from 'vue-i18n'
import en from './lang/en.json'
import ru from './lang/ru.json'

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
      en: en,
      ru: ru
    }
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
