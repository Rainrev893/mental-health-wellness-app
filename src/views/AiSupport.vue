<script setup>
import { ref } from 'vue'
import { getAiMessage } from '../services/aiService.js'

const mood = ref("")
const aiMessage = ref("")
const loading = ref(false)

const askAI = async () => {
  if (!mood.value.trim()) {
    aiMessage.value = "Please describe how you feel first."
    return
  }
  loading.value = true
  aiMessage.value = await getAiMessage(
    "Give a supportive message for someone who feels: " + mood.value
  )
  loading.value = false
}
</script>

<template>
  <div class="ai-support">
    <h1 class="title">AI Support</h1>

    <!-- Input area -->
    <textarea
      v-model="mood"
      class="mood-input"
      rows="3"
      placeholder="Describe how you feel..."
    ></textarea>

    <button @click="askAI" class="ask-btn">
      Get Support Message
    </button>

    <!-- AI Response -->
    <div class="response-box">
      <p v-if="loading">AI is thinking...</p>
      <p v-else>{{ aiMessage }}</p>
    </div>

    <!-- Disclaimer -->
    <div class="disclaimer">
      <p>
        <strong>Remember:</strong> AI support is not a substitute for professional mental health care.
        If you're in crisis, please contact emergency services or a crisis helpline immediately.
      </p>
    </div>
  </div>
</template>

<style scoped>
.ai-support {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 2rem;
}

.mood-input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.ask-btn {
  background: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}

.ask-btn:hover {
  background: #1d4ed8;
}

.response-box {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #ecfdf5;
  border-radius: 0.75rem;
  min-height: 60px;
}

.disclaimer {
  background: #fef3c7;
  border: 2px solid #fbbf24;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-top: 2rem;
}

.disclaimer p {
  color: #78350f;
  line-height: 1.6;
  font-size: 0.95rem;
}

.disclaimer strong {
  color: #92400e;
}
</style>