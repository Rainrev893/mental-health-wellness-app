<template>
  <div class="ai-support">
    <h1 class="title">AI Support</h1>

    <div class="coming-soon">
      <div class="icon">💬</div>
      <h2>Coming Soon</h2>
      <p class="description">
        We're developing a compassionate AI assistant to provide supportive conversations
        and resources when you need them most.
      </p>
      <p class="feature-info">
        This feature will offer a safe, judgment-free space to express your feelings
        and explore coping strategies.
      </p>
    </div>

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
}

.title {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 2rem;
}

.coming-soon {
  background: linear-gradient(135deg, #f3e8ff, #dbeafe);
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.15);
  margin-bottom: 2rem;
}

.icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.coming-soon h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.feature-info {
  color: #6b7280;
  font-style: italic;
  line-height: 1.6;
}

.disclaimer {
  background: #fef3c7;
  border: 2px solid #fbbf24;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.disclaimer p {
  color: #78350f;
  line-height: 1.6;
  font-size: 0.95rem;
}

.disclaimer strong {
  color: #92400e;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .coming-soon h2 {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>
