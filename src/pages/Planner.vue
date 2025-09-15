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

        <!-- Step 1: Velocity -->
        <div v-if="currentStep === 1" class="step-panel velocity-step">
          <div class="step-header">
            <h3>{{ steps[0].title }}</h3>
            <p>Enter your team's velocity data</p>
          </div>
          
          <!-- Velocity Input Method Toggle -->
          <div class="velocity-input-toggle">
            <button 
              @click="velocityInputMethod = 'individual'"
              class="toggle-button"
              :class="{ 'active': velocityInputMethod === 'individual' }"
            >
              <div class="toggle-content">
                <div class="toggle-title">Sprint History</div>
                <div class="toggle-subtitle">Enter last 6 sprints</div>
              </div>
            </button>
            
            <button 
              @click="velocityInputMethod = 'manual'"
              class="toggle-button"
              :class="{ 'active': velocityInputMethod === 'manual' }"
            >
              <div class="toggle-content">
                <div class="toggle-title">Average</div>
                <div class="toggle-subtitle">Enter average directly</div>
              </div>
            </button>
          </div>

          <!-- Individual Sprint Input -->
          <div v-if="velocityInputMethod === 'individual'" class="velocity-input-section">
            <div class="velocity-grid-minimal">
              <div 
                v-for="(sprint, index) in sprints" 
                :key="index" 
                class="velocity-input-item"
              >
                <label>{{ sprint.name }}</label>
                <input 
                  v-model.number="sprint.velocity" 
                  type="number" 
                  min="0" 
                  class="velocity-input"
                  @input="updateStepCompletion"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <!-- Manual Average Input -->
          <div v-if="velocityInputMethod === 'manual'" class="manual-input-section">
            <div class="manual-input-container">
              <label>Average Velocity</label>
              <input 
                v-model.number="manualAverageVelocity" 
                type="number" 
                min="0" 
                class="manual-input"
                @input="updateStepCompletion"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        <!-- Step 2: Capacity -->
        <div v-if="currentStep === 2" class="step-panel capacity-step">
          <div class="step-header">
            <h3>{{ steps[1].title }}</h3>
            <p>Set up your team's capacity</p>
          </div>
          
          <!-- Sprint Duration -->
          <div class="sprint-duration-section">
            <label>Sprint Duration</label>
            <input 
              v-model.number="capacity.sprintWeeks" 
              type="number" 
              min="1" 
              max="4" 
              class="duration-input"
              @input="updateStepCompletion"
            />
            <span class="input-suffix">weeks</span>
          </div>

          <!-- Team Input Method Toggle -->
          <div class="team-input-toggle">
            <button 
              @click="teamInputMethod = 'individual'"
              class="toggle-button"
              :class="{ 'active': teamInputMethod === 'individual' }"
            >
              <div class="toggle-content">
                <div class="toggle-title">Individual</div>
                <div class="toggle-subtitle">Per developer</div>
              </div>
            </button>
            
            <button 
              @click="teamInputMethod = 'average'"
              class="toggle-button"
              :class="{ 'active': teamInputMethod === 'average' }"
            >
              <div class="toggle-content">
                <div class="toggle-title">Average</div>
                <div class="toggle-subtitle">Team total</div>
              </div>
            </button>
          </div>

          <!-- Individual Developers -->
          <div v-if="teamInputMethod === 'individual'" class="individual-developers-section">
            <div class="developers-list">
              <div 
                v-for="(dev, index) in developers" 
                :key="index" 
                class="developer-item"
              >
                <div class="developer-info">
                  <input 
                    v-model="dev.name" 
                    class="developer-name"
                    placeholder="Developer name"
                    @input="updateStepCompletion"
                  />
                  <input 
                    v-model.number="dev.hoursPerWeek" 
                    type="number" 
                    min="0" 
                    max="60" 
                    class="developer-hours"
                    @input="updateStepCompletion"
                  />
                  <span class="hours-label">hours/week</span>
                </div>
                <button 
                  @click="removeDeveloper(index)" 
                  class="remove-developer"
                  v-if="developers.length > 1"
                >
                  Remove
                </button>
              </div>
            </div>
            
            <button @click="addDeveloper" class="add-developer">
              Add Developer
            </button>
          </div>

          <!-- Average Team Hours -->
          <div v-if="teamInputMethod === 'average'" class="average-team-section">
            <div class="team-size-input">
              <label>Team Size</label>
              <input 
                v-model.number="capacity.teamMembers" 
                type="number" 
                min="1" 
                max="20" 
                class="team-size-field"
                @input="updateStepCompletion"
              />
              <span class="input-suffix">developers</span>
            </div>
            
            <div class="average-hours-input">
              <label>Average Hours per Week</label>
              <input 
                v-model.number="averageTeamHours" 
                type="number" 
                min="0" 
                max="60" 
                class="average-hours-field"
                @input="updateStepCompletion"
              />
              <span class="input-suffix">hours</span>
            </div>
          </div>
        </div>

        <!-- Step 3: Availability -->
        <div v-if="currentStep === 3" class="step-panel availability-step">
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

          <!-- Buffer Configuration -->
          <div class="buffer-section">
            <div class="buffer-input">
              <label>Buffer for Unexpected Issues</label>
              <input 
                v-model.number="capacity.bufferPercentage" 
                type="number" 
                min="0" 
                max="50" 
                class="buffer-field"
                @input="updateStepCompletion"
                placeholder="15"
              />
              <span class="input-suffix">%</span>
            </div>
            <div class="field-context">
              <div class="context-primary">For unexpected issues, sick days, urgent meetings</div>
              <div class="context-secondary">
                <span class="market-average">Market average: 15-20%</span>
                <span class="context-source">(Agile Alliance, Scrum.org)</span>
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

        <!-- Step 4: Results -->
        <div v-if="currentStep === 4" class="step-panel">
          <div class="step-header">
            <h3>{{ steps[3].title }}</h3>
            <p>Your sprint planning recommendations</p>
          </div>
          
          <div class="results-container">
            <div class="results-grid">
              <div class="result-item" data-tooltip="Average Velocity: Your team's historical story points completed per sprint. Based on your input data to predict future performance.">
                <div class="result-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                  </svg>
                </div>
                <div class="result-info">
                  <div class="result-label">Average Velocity</div>
                  <div class="result-value">{{ averageVelocity }} points</div>
                </div>
              </div>
              
              <div class="result-item" data-tooltip="Team Capacity: Total available hours your team can work during this sprint, after accounting for absences and buffer time.">
                <div class="result-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div class="result-info">
                  <div class="result-label">Team Capacity</div>
                  <div class="result-value">{{ finalCapacity }} hours</div>
                </div>
              </div>
              
              <div class="result-item" data-tooltip="Confidence: How reliable this recommendation is based on your input data. High = 3+ sprints or manual input, Medium = 1-2 sprints, Low = no data.">
                <div class="result-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div class="result-info">
                  <div class="result-label">Confidence</div>
                  <div class="result-value">{{ confidence }}</div>
                </div>
              </div>
            </div>
            
            <div class="recommendation">
              <h3>Recommended Sprint Size</h3>
              <div class="recommended-value">{{ recommendedSprint }} story points</div>
              <p class="recommendation-note">
                Based on your average velocity of {{ averageVelocity }} points and team capacity of {{ finalCapacity }} hours.
              </p>
            </div>
          </div>
        </div>

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
  { name: 'Sprint 1', velocity: 0 },
  { name: 'Sprint 2', velocity: 0 },
  { name: 'Sprint 3', velocity: 0 },
  { name: 'Sprint 4', velocity: 0 },
  { name: 'Sprint 5', velocity: 0 },
  { name: 'Sprint 6', velocity: 0 }
])

const capacity = ref({
  sprintWeeks: 2,
  teamMembers: 5,
  availability: 100,
  factor: 1.0,
  bufferPercentage: 15
})

// Input methods
const velocityInputMethod = ref('individual')
const teamInputMethod = ref('individual')
const availabilityInputMethod = ref('total')

// Manual velocity input
const manualAverageVelocity = ref(0)

// Team configuration
const developers = ref([
  { name: 'Developer 1', hoursPerWeek: 40 },
  { name: 'Developer 2', hoursPerWeek: 40 }
])

const averageTeamHours = ref(40)

// Availability variables
const totalHoursLost = ref(0)

const notes = ref('')

// Computed properties
const canProceed = ref(false)

// Average velocity calculation
const averageVelocity = computed(() => {
  if (velocityInputMethod.value === 'manual') {
    return manualAverageVelocity.value
  }
  
  const validSprints = sprints.value.filter(s => s.velocity > 0)
  if (validSprints.length === 0) return 0
  
  return Math.round(validSprints.reduce((sum, s) => sum + s.velocity, 0) / validSprints.length)
})

// Total contract hours calculation
const totalContractHours = computed(() => {
  if (teamInputMethod.value === 'individual') {
    return developers.value.reduce((total, dev) => total + dev.hoursPerWeek, 0) * capacity.value.sprintWeeks
  }
  return capacity.value.teamMembers * averageTeamHours.value * capacity.value.sprintWeeks
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

// Recommended sprint size
const recommendedSprint = computed(() => {
  const velocity = averageVelocity.value
  const capacity = finalCapacity.value
  
  if (velocity === 0 || capacity === 0) return 0
  
  // Simple calculation: assume 1 story point = 8 hours
  const hoursPerPoint = 8
  return Math.round(capacity / hoursPerPoint)
})

// Confidence level
const confidence = computed(() => {
  if (velocityInputMethod.value === 'manual') {
    return 'High'
  }
  
  const validSprints = sprints.value.filter(s => s.velocity > 0)
  if (validSprints.length >= 4) return 'High'
  if (validSprints.length >= 2) return 'Medium'
  return 'Low'
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

// Developer management
const addDeveloper = () => {
  developers.value.push({
    name: `Developer ${developers.value.length + 1}`,
    hoursPerWeek: 40
  })
}

const removeDeveloper = (index) => {
  if (developers.value.length > 1) {
    developers.value.splice(index, 1)
  }
}

// Step management
const currentStep = ref(1)

const onStepChange = (step) => {
  currentStep.value = step
}

const onNext = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const onPrevious = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const onComplete = () => {
  console.log('Planning completed!')
}

const updateStepCompletion = () => {
  // Update step completion logic based on current step
  if (currentStep.value === 1) {
    canProceed.value = averageVelocity.value > 0
  } else if (currentStep.value === 2) {
    canProceed.value = capacity.value.teamMembers > 0
  } else if (currentStep.value === 3) {
    canProceed.value = true // Availability is optional
  } else if (currentStep.value === 4) {
    canProceed.value = true
  }
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