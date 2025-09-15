<template>
  <div class="planner">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <h2>Sprint Planner</h2>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
          <router-link to="/planner" class="nav-link">{{ $t('nav.planner') }}</router-link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <div class="planner-header">
          <h1>{{ $t('planner.title') }}</h1>
          <p>{{ $t('planner.subtitle') }}</p>
        </div>

        <Stepper 
          :steps="steps" 
          :can-proceed="canProceed"
          @step-change="onStepChange"
          @next="onNext"
          @previous="onPrevious"
          @complete="onComplete"
        >
          <!-- Step 1: Velocity Form -->
          <template #step-1>
            <VelocityForm 
              v-model:sprints="sprints"
              @update:can-proceed="updateCanProceed"
            />
          </template>

          <!-- Step 2: Capacity Form -->
          <template #step-2>
            <CapacityForm 
              v-model:capacity="capacity"
              @update:can-proceed="updateCanProceed"
            />
          </template>

          <!-- Step 3: Availability -->
          <template #step-3>
            <div class="step-panel availability-step">
              <div class="step-header">
                <h3>{{ steps[2].title }}</h3>
                <p>Specify hours lost per sprint</p>
              </div>
              
              <!-- Availability Input Method Toggle -->
              <div class="availability-input-toggle">
                <button 
                  @click="availabilityInputMethod = 'individual'"
                  class="toggle-button"
                  :class="{ 'active': availabilityInputMethod === 'individual' }"
                >
                  <div class="toggle-content">
                    <div class="toggle-title">Individual</div>
                    <div class="toggle-subtitle">Per developer</div>
                  </div>
                </button>
                
                <button 
                  @click="availabilityInputMethod = 'total'"
                  class="toggle-button"
                  :class="{ 'active': availabilityInputMethod === 'total' }"
                >
                  <div class="toggle-content">
                    <div class="toggle-title">Total</div>
                    <div class="toggle-subtitle">Team total</div>
                  </div>
                </button>
              </div>

              <!-- Total Hours Lost Input -->
              <div v-if="availabilityInputMethod === 'total'" class="total-hours-section">
                <div class="total-hours-input">
                  <label>Total Hours Lost per Sprint</label>
                  <input 
                    v-model.number="totalHoursLost" 
                    type="number" 
                    min="0" 
                    :max="totalContractHours" 
                    class="hours-input"
                    @input="updateStepCompletion"
                    placeholder="0"
                  />
                  <span class="input-suffix">hours</span>
                </div>
                <div class="field-context">
                  <div class="context-primary">Include vacation, sick days, training, meetings</div>
                  <div class="context-secondary">
                    <span class="market-average">Typical: 10-15% of total hours</span>
                    <span class="context-source">({{ Math.round(totalContractHours * 0.125) }}h for your team)</span>
                  </div>
                </div>
              </div>

              <!-- Sprint Capacity Summary -->
              <div class="capacity-summary">
                <div class="summary-card-large">
                  <div class="summary-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <div class="summary-content">
                    <div class="summary-label">Sprint Capacity</div>
                    <div class="summary-value">{{ finalCapacity }} hours</div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- Step 4: Results -->
          <template #step-4>
            <ResultsSection 
              :sprints="sprints"
              :capacity="capacity"
              :results="results"
              @update:notes="updateNotes"
            />
          </template>
        </Stepper>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button @click="resetData" class="btn btn-secondary">
            {{ $t('planner.reset') }}
          </button>
          <button @click="exportData" class="btn btn-primary">
            {{ $t('planner.export') }}
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Sprint Planner</h3>
            <p>{{ $t('footer.copyright') }}</p>
          </div>
          <div class="footer-links">
            <router-link to="/privacy" class="footer-link">{{ $t('footer.legal.privacy') }}</router-link>
            <router-link to="/terms" class="footer-link">{{ $t('footer.legal.terms') }}</router-link>
            <router-link to="/service" class="footer-link">{{ $t('footer.legal.service') }}</router-link>
            <router-link to="/data-deletion" class="footer-link">{{ $t('footer.legal.dataDeletion') }}</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import Stepper from '../components/Stepper.vue'
import VelocityForm from '../components/VelocityForm.vue'
import CapacityForm from '../components/CapacityForm.vue'
import ResultsSection from '../components/ResultsSection.vue'

const { t } = useI18n()

// Stepper configuration
const steps = [
  { id: 1, titleKey: 'velocityForm.title' },
  { id: 2, titleKey: 'capacityForm.title' },
  { id: 3, titleKey: 'availability.title' },
  { id: 4, titleKey: 'results.title' }
]

// Reactive data
const sprints = ref([
  { velocity: 0 },
  { velocity: 0 },
  { velocity: 0 },
  { velocity: 0 },
  { velocity: 0 },
  { velocity: 0 }
])

const capacity = ref({
  sprintWeeks: 2,
  teamMembers: 5,
  availability: 100,
  factor: 1.0,
  bufferPercentage: 15
})

// Availability variables
const availabilityInputMethod = ref('total')
const totalHoursLost = ref(0)

const notes = ref('')

// Computed properties
const canProceed = ref(false)

// Total contract hours calculation
const totalContractHours = computed(() => {
  return capacity.value.teamMembers * 40 * capacity.value.sprintWeeks
})

// Available hours after absences
const availableHours = computed(() => {
  const contractHours = totalContractHours.value
  const absenceHours = totalHoursLost.value
  return Math.max(0, contractHours - absenceHours)
})

// Final capacity after buffer
const finalCapacity = computed(() => {
  const available = availableHours.value
  const buffer = capacity.value.bufferPercentage / 100
  return Math.round(available * (1 - buffer))
})

const results = computed(() => {
  const validSprints = sprints.value.filter(s => s.velocity > 0)
  const averageVelocity = validSprints.length > 0 
    ? validSprints.reduce((sum, s) => sum + s.velocity, 0) / validSprints.length 
    : 0

  const teamCapacity = capacity.value.sprintWeeks * 
    capacity.value.teamMembers * 
    (capacity.value.availability / 100) * 
    capacity.value.factor

  const recommendedSprint = Math.round(averageVelocity * 0.8) // Conservative estimate
  const confidence = validSprints.length >= 3 ? 'High' : validSprints.length >= 1 ? 'Medium' : 'Low'

  return {
    averageVelocity: Math.round(averageVelocity * 100) / 100,
    teamCapacity: Math.round(teamCapacity * 100) / 100,
    recommendedSprint,
    confidence
  }
})

// Methods
const updateCanProceed = (canProceedValue) => {
  canProceed.value = canProceedValue
}

const onStepChange = (step) => {
  console.log('Step changed to:', step)
}

const onNext = (step) => {
  console.log('Next step:', step)
}

const onPrevious = (step) => {
  console.log('Previous step:', step)
}

const onComplete = () => {
  console.log('Planning completed!')
  // Save to localStorage
  saveToLocalStorage()
}

const updateNotes = (newNotes) => {
  notes.value = newNotes
  saveToLocalStorage()
}

const resetData = () => {
  if (confirm('Are you sure you want to reset all data?')) {
    sprints.value = [
      { velocity: 0 },
      { velocity: 0 },
      { velocity: 0 },
      { velocity: 0 },
      { velocity: 0 },
      { velocity: 0 }
    ]
    capacity.value = {
      sprintWeeks: 2,
      teamMembers: 5,
      availability: 100,
      factor: 1.0
    }
    notes.value = ''
    localStorage.removeItem('sprintplanner-data')
  }
}

const exportData = () => {
  const data = {
    sprints: sprints.value,
    capacity: capacity.value,
    results: results.value,
    notes: notes.value,
    timestamp: new Date().toISOString()
  }
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `sprint-planning-${new Date().toISOString().split('T')[0]}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const saveToLocalStorage = () => {
  const data = {
    sprints: sprints.value,
    capacity: capacity.value,
    notes: notes.value
  }
  localStorage.setItem('sprintplanner-data', JSON.stringify(data))
}

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('sprintplanner-data')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      if (data.sprints) sprints.value = data.sprints
      if (data.capacity) capacity.value = data.capacity
      if (data.notes) notes.value = data.notes
    } catch (error) {
      console.error('Error loading saved data:', error)
    }
  }
}

onMounted(() => {
  loadFromLocalStorage()
})
</script>

<style scoped>
.planner {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h2 {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--accent-primary);
}

.nav-link.router-link-active {
  color: var(--accent-primary);
}

/* Main Content */
.main-content {
  padding: 8rem 0 4rem;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.planner-header {
  text-align: center;
  margin-bottom: 3rem;
}

.planner-header h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.planner-header p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  min-width: 120px;
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

.btn-primary {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-brand h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--accent-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
  
  .main-content {
    padding: 6rem 0 3rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 200px;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
  }
}

/* Availability Section */
.availability-input-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.total-hours-section {
  margin-bottom: 2rem;
}

.total-hours-input {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.hours-input {
  width: 100px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
}

.hours-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.field-context {
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
}

.context-primary {
  font-size: 0.875rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.context-secondary {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.75rem;
}

.market-average {
  color: #3b82f6;
  font-weight: 600;
}

.context-source {
  color: #a1a1aa;
  font-style: italic;
}
</style>