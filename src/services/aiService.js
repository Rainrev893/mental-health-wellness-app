// src/services/aiService.js
import { fallbackMessages } from './fallbackMessages'

// ⚠️ In production, use environment variables (import.meta.env.VITE_GROQ_API_KEY)
const API_KEY = "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" // Replace with your Groq API Key

export async function getAiMessage(prompt) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: "You are a supportive mental health companion." },
            { role: "user", content: prompt }
          ]
        })
      }
    )

    const result = await response.json()

    if (result.choices && result.choices[0]?.message?.content) {
      return result.choices[0].message.content
    }

    throw new Error("Invalid AI response")

  } catch (error) {
    console.warn("AI API failed, using fallback:", error)

    const random =
      fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]

    return random
  }
}