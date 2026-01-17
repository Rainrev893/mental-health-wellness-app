<template>
  <div class="breathing">
    <h1 class="title">Breathing Exercise</h1>
    <p class="subtitle">Follow the circle and breathe deeply. Let go of stress with each exhale.</p>

    <div class="breathing-container">
      <div class="circle-wrapper">
        <div class="breathing-circle" :class="phase"></div>
        <p class="instruction">{{ instructionText }}</p>
      </div>
    </div>

    <button @click="toggleBreathing" class="control-btn">
      {{ isActive ? 'Pause' : 'Begin' }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const isActive = ref(false)
const phase = ref('inhale')
const instructionText = ref('Start')

let phaseInterval = null

const phases = [
  { name: 'inhale', text: 'Breathe In', duration: 4000 },
  { name: 'hold', text: 'Hold', duration: 4000 },
  { name: 'exhale', text: 'Breathe Out', duration: 4000 },
  { name: 'hold-exhale', text: 'Hold', duration: 4000 }
]

let currentPhaseIndex = 0

const runBreathingCycle = () => {
  const currentPhase = phases[currentPhaseIndex]
  phase.value = currentPhase.name
  instructionText.value = currentPhase.text

  phaseInterval = setTimeout(() => {
    currentPhaseIndex = (currentPhaseIndex + 1) % phases.length
    if (isActive.value) {
      runBreathingCycle()
    }
  }, currentPhase.duration)
}

const toggleBreathing = () => {
  isActive.value = !isActive.value

  if (isActive.value) {
    currentPhaseIndex = 0
    runBreathingCycle()
  } else {
    clearTimeout(phaseInterval)
    phase.value = 'inhale'
    instructionText.value = 'Start'
  }
}

onUnmounted(() => {
  clearTimeout(phaseInterval)
})
</script>

<style scoped>
.breathing {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 3rem;
}

.breathing-container {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.circle-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.breathing-circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #93c5fd, #c4b5fd);
  transition: transform 4s ease-in-out;
}

.breathing-circle.inhale {
  transform: scale(1.5);
}

.breathing-circle.hold {
  transform: scale(1.5);
}

.breathing-circle.exhale {
  transform: scale(1);
}

.breathing-circle.hold-exhale {
  transform: scale(1);
}

.instruction {
  position: relative;
  z-index: 10;
  font-size: 1.8rem;
  font-weight: 600;
  color: #1f2937;
}

.control-btn {
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #3b82f6, #7c3aed);
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.control-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}

.control-btn:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .circle-wrapper {
    width: 250px;
    height: 250px;
  }

  .breathing-circle {
    width: 150px;
    height: 150px;
  }

  .instruction {
    font-size: 1.5rem;
  }
}
</style>