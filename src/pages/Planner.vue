<!-- OPTIMIZED VERSION - Minimalist Design with All Improvements -->
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
          <div class="sprint-duration-minimal">
            <label>Sprint Duration</label>
            <div class="duration-input-group">
              <input 
                v-model.number="capacity.sprintWeeks" 
                type="number" 
                min="1" 
                max="4" 
                class="duration-input-small"
                @input="updateStepCompletion"
              />
              <span class="input-suffix">weeks</span>
            </div>
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
            <h3>Availability</h3>
            <p>Configure team availability and absences</p>
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
              <label>Hours Lost</label>
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
              <label>Buffer</label>
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
            <h3>Results</h3>
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
  if (validSprints.length >= 3) return 'High'
  if (validSprints.length >= 1) return 'Medium'
  return 'Low'
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
    if (teamInputMethod.value === 'individual') {
      canProceed.value = developers.value.every(dev => dev.name && dev.hoursPerWeek > 0)
    } else {
      canProceed.value = capacity.value.teamMembers > 0 && averageTeamHours.value > 0
    }
  } else if (currentStep.value === 3) {
    canProceed.value = totalHoursLost.value >= 0
  } else if (currentStep.value === 4) {
    canProceed.value = true
  }
}

// Data persistence
const saveToLocalStorage = () => {
  const data = {
    sprints: sprints.value,
    capacity: capacity.value,
    velocityInputMethod: velocityInputMethod.value,
    teamInputMethod: teamInputMethod.value,
    availabilityInputMethod: availabilityInputMethod.value,
    manualAverageVelocity: manualAverageVelocity.value,
    developers: developers.value,
    averageTeamHours: averageTeamHours.value,
    totalHoursLost: totalHoursLost.value,
    notes: notes.value,
    currentStep: currentStep.value
  }
  localStorage.setItem('sprintPlannerData', JSON.stringify(data))
}

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('sprintPlannerData')
  if (saved) {
    try {
      const data = JSON.parse(saved)
      sprints.value = data.sprints || sprints.value
      capacity.value = data.capacity || capacity.value
      velocityInputMethod.value = data.velocityInputMethod || velocityInputMethod.value
      teamInputMethod.value = data.teamInputMethod || teamInputMethod.value
      availabilityInputMethod.value = data.availabilityInputMethod || availabilityInputMethod.value
      manualAverageVelocity.value = data.manualAverageVelocity || manualAverageVelocity.value
      developers.value = data.developers || developers.value
      averageTeamHours.value = data.averageTeamHours || averageTeamHours.value
      totalHoursLost.value = data.totalHoursLost || totalHoursLost.value
      notes.value = data.notes || notes.value
      currentStep.value = data.currentStep || currentStep.value
    } catch (error) {
      console.error('Error loading data from localStorage:', error)
    }
  }
}

const resetData = () => {
    sprints.value = [
    { name: 'Sprint 1', velocity: 0 },
    { name: 'Sprint 2', velocity: 0 },
    { name: 'Sprint 3', velocity: 0 },
    { name: 'Sprint 4', velocity: 0 },
    { name: 'Sprint 5', velocity: 0 },
    { name: 'Sprint 6', velocity: 0 }
    ]
    capacity.value = {
      sprintWeeks: 2,
      teamMembers: 5,
      availability: 100,
    factor: 1.0,
    bufferPercentage: 15
  }
  velocityInputMethod.value = 'individual'
  teamInputMethod.value = 'individual'
  availabilityInputMethod.value = 'total'
  manualAverageVelocity.value = 0
  developers.value = [
    { name: 'Developer 1', hoursPerWeek: 40 },
    { name: 'Developer 2', hoursPerWeek: 40 }
  ]
  averageTeamHours.value = 40
  totalHoursLost.value = 0
    notes.value = ''
  currentStep.value = 1
  canProceed.value = false
  localStorage.removeItem('sprintPlannerData')
}

const exportData = () => {
  const data = {
    sprints: sprints.value,
    capacity: capacity.value,
    averageVelocity: averageVelocity.value,
    finalCapacity: finalCapacity.value,
    recommendedSprint: recommendedSprint.value,
    confidence: confidence.value,
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

const updateNotes = (newNotes) => {
  notes.value = newNotes
  saveToLocalStorage()
}

// Lifecycle
onMounted(() => {
  loadFromLocalStorage()
  updateStepCompletion()
})
</script>

<style scoped>
/* Minimalist Design System */
.planner {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
}

.navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.main-content {
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.planner-header {
  text-align: center;
  margin-bottom: 3rem;
}

.planner-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.planner-header p {
  font-size: 1.125rem;
  color: #e0e7ff;
  margin: 0;
}

/* Step Panels */
.step-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
}

.step-header {
  margin-bottom: 2rem;
  text-align: center;
}

.step-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.step-header p {
  color: #a1a1aa;
  margin: 0;
}

/* Toggle Buttons */
.velocity-input-toggle,
.team-input-toggle,
.availability-input-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.toggle-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.toggle-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.toggle-button.active {
  background: rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.toggle-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toggle-title {
  font-weight: 600;
  color: #ffffff;
  font-size: 1rem;
}

.toggle-subtitle {
  color: #a1a1aa;
  font-size: 0.875rem;
}

/* Input Sections */
.velocity-input-section,
.manual-input-section,
.individual-developers-section,
.average-team-section,
.total-hours-section,
.buffer-section {
  margin-bottom: 2rem;
}

.velocity-grid-minimal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.velocity-input-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.velocity-input-item label {
  font-weight: 500;
  color: #ffffff;
  font-size: 0.875rem;
}

.velocity-input,
.manual-input,
.duration-input,
.developer-name,
.developer-hours,
.team-size-field,
.average-hours-field,
.hours-input,
.buffer-field {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.velocity-input:focus,
.manual-input:focus,
.duration-input:focus,
.developer-name:focus,
.developer-hours:focus,
.team-size-field:focus,
.average-hours-field:focus,
.hours-input:focus,
.buffer-field:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.velocity-input::placeholder,
.manual-input::placeholder,
.developer-name::placeholder,
.hours-input::placeholder,
.buffer-field::placeholder {
  color: #6b7280;
}

/* Sprint Duration - Minimalist */
.sprint-duration-minimal {
  margin-bottom: 2rem;
}

.sprint-duration-minimal label {
  display: block;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.duration-input-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 120px;
}

.duration-input-small {
  width: 60px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #ffffff;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.duration-input-small:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input-suffix {
  color: #a1a1aa;
  font-size: 0.875rem;
}

/* Developers */
.developers-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.developer-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
}

.developer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.developer-name {
  flex: 1;
  min-width: 150px;
}

.developer-hours {
  width: 100px;
  text-align: center;
}

.hours-label {
  color: #a1a1aa;
  font-size: 0.875rem;
  white-space: nowrap;
}

.remove-developer {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.remove-developer:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
}

.add-developer {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #93c5fd;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.add-developer:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
  transform: translateY(-2px);
}

/* Team Configuration */
.team-size-input,
.average-hours-input {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.team-size-input label,
.average-hours-input label {
  font-weight: 500;
  color: #ffffff;
  min-width: 150px;
}

.team-size-field,
.average-hours-field {
  width: 120px;
  text-align: center;
}

/* Field Context */
.field-context {
  margin-top: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
}

.context-primary {
  color: #ffffff;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.context-secondary {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #a1a1aa;
}

.market-average {
  color: #10b981;
  font-weight: 500;
}

.context-source {
  color: #6b7280;
}

/* Capacity Summary */
.capacity-summary {
  margin-top: 2rem;
}

.summary-card-large {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 0.75rem;
}

.summary-icon {
  width: 3rem;
  height: 3rem;
  color: #10b981;
  flex-shrink: 0;
}

.summary-content {
  flex: 1;
}

.summary-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.25rem;
}

.summary-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

/* Results */
.results-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.result-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.result-item:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.95);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  white-space: normal;
  max-width: 250px;
  text-align: center;
  z-index: 10;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.result-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #3b82f6;
  flex-shrink: 0;
}

.result-info {
  flex: 1;
}

.result-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.25rem;
}

.result-value {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.recommendation {
  text-align: center;
  padding: 2rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 1rem;
}

.recommendation h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.recommended-value {
  font-size: 3rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.recommendation-note {
  color: #a1a1aa;
  margin: 0;
  font-size: 0.875rem;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.footer-brand p {
  margin: 0;
  color: #a1a1aa;
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .planner-header h1 {
    font-size: 2rem;
  }
  
  .step-panel {
    padding: 1.5rem;
  }
  
  .velocity-input-toggle,
  .team-input-toggle,
  .availability-input-toggle {
    grid-template-columns: 1fr;
  }
  
  .velocity-grid-minimal {
    grid-template-columns: 1fr;
  }
  
  .developer-item {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
  
  .developer-info {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .developer-name,
  .developer-hours {
    width: 100%;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .planner-header h1 {
    font-size: 1.75rem;
  }
  
  .step-panel {
    padding: 1rem;
  }
  
  .toggle-button {
    padding: 1rem;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>