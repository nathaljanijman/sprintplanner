<template>
  <div class="capacity-form">
    <div class="form-header">
      <h2>{{ $t('capacityForm.title') }}</h2>
      <p>{{ $t('capacityForm.subtitle') }}</p>
    </div>

    <div class="form-content">
      <div class="capacity-grid">
        <div class="capacity-input">
          <label for="sprint-weeks" class="input-label">
            {{ $t('capacityForm.sprintWeeks') }}
          </label>
          <div class="input-group">
            <input
              id="sprint-weeks"
              v-model.number="capacity.sprintWeeks"
              type="number"
              min="1"
              max="4"
              step="0.5"
              class="capacity-input-field"
              @input="onInputChange"
            />
            <span class="input-suffix">weeks</span>
          </div>
        </div>

        <div class="capacity-input">
          <label for="team-members" class="input-label">
            {{ $t('capacityForm.teamMembers') }}
          </label>
          <div class="input-group">
            <input
              id="team-members"
              v-model.number="capacity.teamMembers"
              type="number"
              min="1"
              max="20"
              step="1"
              class="capacity-input-field"
              @input="onInputChange"
            />
            <span class="input-suffix">members</span>
          </div>
        </div>

        <div class="capacity-input">
          <label for="availability" class="input-label">
            {{ $t('capacityForm.availability') }}
          </label>
          <div class="input-group">
            <input
              id="availability"
              v-model.number="availabilityPercent"
              type="number"
              min="0"
              max="100"
              step="5"
              class="capacity-input-field"
              @input="onAvailabilityChange"
            />
            <span class="input-suffix">%</span>
          </div>
          <div class="input-help">
            <span class="help-text">0% = no availability, 100% = full availability</span>
          </div>
        </div>

        <div class="capacity-input">
          <label for="factor" class="input-label">
            {{ $t('capacityForm.factor') }}
          </label>
          <div class="input-group">
            <input
              id="factor"
              v-model.number="capacity.factor"
              type="number"
              min="0.1"
              max="2.0"
              step="0.1"
              class="capacity-input-field"
              @input="onInputChange"
            />
            <span class="input-suffix">×</span>
          </div>
          <div class="input-help">
            <span class="help-text">Adjust for holidays, meetings, etc.</span>
          </div>
        </div>
      </div>

      <div class="capacity-result">
        <div class="result-card">
          <h3>{{ $t('capacityForm.calculatedCapacity') }}</h3>
          <div class="result-value">{{ calculatedCapacity }}</div>
          <div class="result-label">story points</div>
          <div class="result-formula">
            {{ capacity.sprintWeeks }} × {{ capacity.teamMembers }} × {{ availabilityPercent }}% × {{ capacity.factor }} = {{ calculatedCapacity }}
          </div>
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
  capacity: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:capacity', 'update:canProceed'])

const capacity = ref({ ...props.capacity })

const availabilityPercent = computed({
  get: () => Math.round(capacity.value.availability),
  set: (value) => {
    capacity.value.availability = Math.max(0, Math.min(100, value))
  }
})

const calculatedCapacity = computed(() => {
  const result = capacity.value.sprintWeeks * 
    capacity.value.teamMembers * 
    (capacity.value.availability / 100) * 
    capacity.value.factor
  return Math.round(result * 100) / 100
})

const canProceed = computed(() => {
  return capacity.value.sprintWeeks > 0 && 
         capacity.value.teamMembers > 0 && 
         capacity.value.availability > 0 && 
         capacity.value.factor > 0
})

const onInputChange = () => {
  emit('update:capacity', capacity.value)
  emit('update:canProceed', canProceed.value)
}

const onAvailabilityChange = () => {
  capacity.value.availability = Math.max(0, Math.min(100, availabilityPercent.value))
  emit('update:capacity', capacity.value)
  emit('update:canProceed', canProceed.value)
}

// Watch for external changes
watch(() => props.capacity, (newCapacity) => {
  capacity.value = { ...newCapacity }
}, { deep: true })

// Emit initial state
emit('update:canProceed', canProceed.value)
</script>

<style scoped>
.capacity-form {
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

.capacity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.capacity-input {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.capacity-input-field {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: var(--text-primary);
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
}

.capacity-input-field:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.capacity-input-field::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}

.input-suffix {
  position: absolute;
  right: 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  pointer-events: none;
}

.input-help {
  margin-top: 0.25rem;
}

.help-text {
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.8;
  font-style: italic;
}

.capacity-result {
  display: flex;
  justify-content: center;
}

.result-card {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  min-width: 300px;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.result-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.result-value {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.result-label {
  font-size: 1rem;
  color: white;
  opacity: 0.8;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.result-formula {
  font-size: 0.875rem;
  color: white;
  opacity: 0.7;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .capacity-form {
    padding: 1rem;
  }
  
  .form-content {
    padding: 1.5rem;
  }
  
  .capacity-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .result-card {
    min-width: 250px;
    padding: 2rem;
  }
  
  .result-value {
    font-size: 2.5rem;
  }
  
  .result-formula {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 480px) {
  .capacity-grid {
    grid-template-columns: 1fr;
  }
  
  .result-card {
    min-width: 200px;
    padding: 1.5rem;
  }
  
  .result-value {
    font-size: 2rem;
  }
}
</style>
