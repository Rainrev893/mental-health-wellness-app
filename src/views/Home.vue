<template>
  <div class="home">
    <h1 class="title">Welcome to Your Safe Space</h1>
    <p class="subtitle">
      Take a moment for yourself. Explore tools and resources designed to support
      your mental wellness journey, one breath at a time.
    </p>

    <div class="cards">
      <router-link to="/breathing" class="card breathing-card">
        <div class="card-icon">🌬️</div>
        <h3>Breathing Exercises</h3>
        <p>Guided breathing techniques to calm your mind</p>
      </router-link>

      <router-link to="/wellness" class="card wellness-card">
        <div class="card-icon">💚</div>
        <h3>Wellness Tips</h3>
        <p>Self-care strategies and mental health resources</p>
      </router-link>

      <router-link to="/ai-support" class="card ai-card">
        <div class="card-icon">💬</div>
        <h3>AI Support</h3>
        <p>Connect with our supportive AI assistant</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.breathing-card .card-icon {
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wellness-card .card-icon {
  background: linear-gradient(135deg, #34d399, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ai-card .card-icon {
  background: linear-gradient(135deg, #a78bfa, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.card p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>