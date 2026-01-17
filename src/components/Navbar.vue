<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <h1>🌸 Calm Mind</h1>
      </router-link>

      <button class="mobile-menu-btn" @click="toggleMenu">
        {{ isMenuOpen ? '✕' : '☰' }}
      </button>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <router-link to="/" @click="closeMenu">
          <span class="icon">🏠</span> Home
        </router-link>
        <router-link to="/breathing" @click="closeMenu">
          <span class="icon">🌬️</span> Breathing
        </router-link>
        <router-link to="/wellness" @click="closeMenu">
          <span class="icon">💚</span> Wellness
        </router-link>
        <router-link to="/ai-support" @click="closeMenu">
          <span class="icon">💬</span> AI Support
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  color: #7c3aed;
  font-size: 1.5rem;
  font-weight: 600;
}

.logo {
  text-decoration: none;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #7c3aed;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a:hover {
  background: #f3e8ff;
  color: #7c3aed;
}

.nav-links a.router-link-active {
  background: #e9d5ff;
  color: #7c3aed;
  font-weight: 600;
}

.icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    padding: 1rem;
  }
}
</style>