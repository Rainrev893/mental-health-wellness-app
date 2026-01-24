import { fallbackMessages } from './services/fallbackMessages.js'

const msg = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
console.log("Fallback message:", msg)