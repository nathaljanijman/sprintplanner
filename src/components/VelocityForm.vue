<template>
  <div class="velocity-form">
    <div class="form-header">
      <h2>{{ $t('velocityForm.title') }}</h2>
      <p>{{ $t('velocityForm.subtitle') }}</p>
    </div>

    <div class="form-content">
      <div class="sprints-grid">
        <div 
          v-for="(sprint, index) in sprints" 
          :key="index"
          class="sprint-input"
        >
          <label :for="`sprint-${index + 1}`" class="sprint-label">
            {{ $t('velocityForm.sprint', { number: index + 1 }) }}
          </label>
          <div class="input-group">
            <input
              :id="`sprint-${index + 1}`"
              v-model.number="sprint.velocity"
              type="number"
              min="0"
              step="1"
              class="velocity-input"
              :placeholder="'0'"
              @input="onInputChange"
            />
            <span class="input-suffix">story points</span>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button 
          @click="addSprint" 
          class="btn btn-secondary"
          :disabled="sprints.length >= 10"
        >
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          {{ $t('velocityForm.addSprint') }}
        </button>
        <button 
          @click="removeSprint" 
          class="btn btn-secondary"
          :disabled="sprints.length <= 3"
        >
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14"/>
          </svg>
          {{ $t('velocityForm.removeSprint') }}
        </button>
      </div>

      <div class="average-section">
        <div class="average-card">
          <h3>{{ $t('velocityForm.average') }}</h3>
          <div class="average-value">{{ averageVelocity }}</div>
          <div class="average-label">story points</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  sprints: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:sprints', 'update:canProceed'])

const sprints = ref([...props.sprints])

const averageVelocity = computed(() => {
  const validSprints = sprints.value.filter(s => s.velocity > 0)
  if (validSprints.length === 0) return 0
  const sum = validSprints.reduce((acc, sprint) => acc + sprint.velocity, 0)
  return Math.round((sum / validSprints.length) * 100) / 100
})

const canProceed = computed(() => {
  return sprints.value.some(sprint => sprint.velocity > 0)
})

const onInputChange = () => {
  emit('update:sprints', sprints.value)
  emit('update:canProceed', canProceed.value)
}

const addSprint = () => {
  if (sprints.value.length < 10) {
    sprints.value.push({ velocity: 0 })
    emit('update:sprints', sprints.value)
  }
}

const removeSprint = () => {
  if (sprints.value.length > 3) {
    sprints.value.pop()
    emit('update:sprints', sprints.value)
    emit('update:canProceed', canProceed.value)
  }
}

// Watch for external changes
watch(() => props.sprints, (newSprints) => {
  sprints.value = [...newSprints]
}, { deep: true })

// Emit initial state
emit('update:canProceed', canProceed.value)
</script>

<style scoped>
.velocity-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-header h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-header p {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.form-content {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.sprints-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.sprint-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sprint-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.velocity-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
}

.velocity-input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.velocity-input::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}

.input-suffix {
  position: absolute;
  right: 1rem;
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
  pointer-events: none;
}

.form-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.btn-icon {
  width: 1rem;
  height: 1rem;
}

.average-section {
  display: flex;
  justify-content: center;
}

.average-card {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  min-width: 200px;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.average-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.average-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.25rem;
  line-height: 1;
}

.average-label {
  font-size: 0.875rem;
  color: white;
  opacity: 0.8;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .velocity-form {
    padding: 1rem;
  }
  
  .form-content {
    padding: 1.5rem;
  }
  
  .sprints-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .form-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
  
  .average-card {
    min-width: 150px;
    padding: 1.5rem;
  }
  
  .average-value {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .sprints-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sprint-input {
    min-width: 0;
  }
}
</style>