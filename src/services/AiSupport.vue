<script setup>
import { ref } from 'vue'
import { getAiMessage } from '../services/aiService'

const mood = ref("")
const aiMessage = ref("")
const loading = ref(false)

const askAI = async () => {
  loading.value = true
  aiMessage.value = await getAiMessage(
    "Give a supportive message for someone who feels: " + mood.value
  )
  loading.value = false
}
</script>

<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">AI Mood Support</h1>

    <textarea
      v-model="mood"
      class="border p-2 w-full rounded"
      rows="3"
      placeholder="Describe how you feel..."
    ></textarea>

    <button
      @click="askAI"
      class="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
    >
      Get Support Message
    </button>

    <div class="mt-6 p-4 bg-green-50 rounded shadow">
      <p v-if="loading">AI is thinking...</p>
      <p v-else>{{ aiMessage }}</p>
    </div>

    <p class="text-xs text-gray-500 mt-4">
      ⚠️ This is not medical advice. For serious concerns, please consult a professional.
    </p>
  </div>
</template>