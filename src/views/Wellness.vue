<template>
  <div class="wellness">
    <h1 class="title">Wellness Tips</h1>
    <p class="subtitle">Small steps toward better mental health and self-care</p>

    <div class="tips-grid">
      <div v-for="(tip, index) in tips" :key="index" class="tip-card">
        <h3>{{ tip.title }}</h3>
        <p>{{ tip.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const tips = [
  {
    title: '🙏 Practice Gratitude',
    content: 'Take a moment each day to reflect on three things you\'re grateful for. This simple practice can shift your perspective and improve mood.'
  },
  {
    title: '🏃 Move Your Body',
    content: 'Physical activity releases endorphins and reduces stress. Even a 10-minute walk can make a difference in how you feel.'
  },
  {
    title: '🤝 Connect with Others',
    content: 'Reach out to friends or family. Social connections are vital for mental wellbeing and help combat feelings of isolation.'
  },
  {
    title: '🛡️ Set Boundaries',
    content: 'It\'s okay to say no. Protecting your time and energy is essential for maintaining mental health and preventing burnout.'
  },
  {
    title: '😴 Prioritize Sleep',
    content: 'Aim for 7-9 hours of quality sleep. Good sleep hygiene supports emotional regulation and cognitive function.'
  },
  {
    title: '🩺 Seek Professional Help',
    content: 'There\'s strength in asking for help. If you\'re struggling, consider talking to a therapist or counselor.'
  }
]
</script>

<style scoped>
.wellness {
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
}

.subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 3rem;
  text-align: center;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tip-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.tip-card h3 {
  font-size: 1.3rem;
  color: #7c3aed;
  margin-bottom: 0.75rem;
}

.tip-card p {
  color: #4b5563;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>