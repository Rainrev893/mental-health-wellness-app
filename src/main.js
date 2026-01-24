import './assets/main.css'
import './testFallback.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

import { fallbackMessages } from './services/fallbackMessages.js'

const msg = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
console.log(msg)

import { getAiMessage } from './services/aiService.js'

getAiMessage("I feel tired and stressed").then(console.log)