<template>
  <div class="home">
    <!-- Skip Navigation for Accessibility -->
    <a href="#main-content" class="skip-link">Ga naar hoofdinhoud</a>

    <!-- Global Loading State -->
    <div v-if="isLoading" class="loading-overlay" role="status" aria-live="polite">
      <div class="loading-content">
        <div class="loading-spinner" aria-hidden="true"></div>
        <p>{{ loadingMessage }}</p>
      </div>
    </div>

    <!-- Global Feedback Messages -->
    <div class="feedback-container">
      <div v-if="successMessage" class="feedback success" role="status" aria-live="polite">
        <span class="feedback-icon" aria-hidden="true"></span>
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="feedback error" role="alert" aria-live="assertive">
        <span class="feedback-icon" aria-hidden="true"></span>
        {{ errorMessage }}
        <button @click="errorMessage = ''" class="feedback-close" aria-label="Dismiss error">×</button>
      </div>
    </div>
    <!-- GDPR Cookie Consent Banner -->
    <div v-if="!cookieConsentAccepted" class="cookie-consent" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div class="cookie-content">
        <div class="cookie-text">
          <h4 id="cookie-title">Cookie Instellingen</h4>
          <p id="cookie-description">We gebruiken cookies en lokale opslag om je sprint planning data en voorkeuren lokaal op je apparaat op te slaan. Geen data wordt verzonden naar externe servers.</p>

          <div class="cookie-categories">
            <div class="cookie-category">
              <h5>Essentiële Cookies (Vereist)</h5>
              <p>Noodzakelijk voor het functioneren van de applicatie. Kan niet worden uitgeschakeld.</p>
              <ul>
                <li>Sprint planning data (lokale opslag)</li>
                <li>Taal voorkeuren</li>
                <li>Cookie toestemming status</li>
              </ul>
            </div>
          </div>

          <div class="data-controller">
            <h5>Data Beheerder</h5>
            <p>Sprint Planner (sprintplanner.nl)<br>
            Data bewaring: Tot handmatig verwijderd door gebruiker<br>
            Juridische basis: Gerechtvaardigd belang (Art. 6(1)(f) AVG)</p>
          </div>
        </div>
        <div class="cookie-actions">
          <button @click="acceptCookies" class="cookie-button primary" aria-describedby="accept-description">
            Alles Accepteren
          </button>
          <router-link to="/privacy" class="cookie-button secondary">
            Privacybeleid
          </router-link>
          <span id="accept-description" class="sr-only">Accepteer essentiële cookies en ga door met het gebruiken van de applicatie</span>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <div class="nav-brand">
          <h2>Sprint Planner</h2>
        </div>
        <div class="nav-links">
          <a 
            href="https://linkedin.com/in/nathaljanijman" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="nav-link linkedin-link"
            aria-label="LinkedIn profiel van Nathalja Nijman"
          >
            <svg class="linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span class="linkedin-text">LinkedIn | Nathalja Nijman</span>
          </a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main id="main-content">
      <!-- Hero Section -->
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-container">
          <div class="hero-content">
            <h1 id="hero-title" class="title">Sprint Planner</h1>
            <p class="subtitle">De eenvoudigste manier om je sprints te plannen en je team's velocity te tracken</p>
            <button @click="scrollToWidget" class="cta-button" aria-describedby="cta-description">
              Probeer Sprint Planner
              <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <span id="cta-description" class="sr-only">Scroll naar sprint planning tool hieronder</span>
          </div>
        <div class="hero-visual">
          <div class="predictability-simple">
            <!-- Simple Trend Chart -->
            <div class="trend-chart">
              <div class="chart-header">
                <span class="chart-title">Sprint Velocity</span>
                <span class="trend-indicator">+12%</span>
              </div>
              <div class="chart-line">
                <svg viewBox="0 0 300 80" class="trend-svg">
                  <defs>
                    <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8" />
                      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <path d="M 20 60 L 60 55 L 100 45 L 140 35 L 180 30 L 220 25 L 260 20" 
                        stroke="url(#simpleGradient)" 
                        stroke-width="3" 
                        fill="none" 
                        class="simple-trend"/>
                  <circle cx="260" cy="20" r="4" fill="#3b82f6" class="trend-dot"/>
                </svg>
              </div>
              <div class="chart-labels">
                <span>Sprint 18</span>
                <span>Sprint 19</span>
                <span>Sprint 20</span>
                <span>Sprint 21</span>
                <span>Sprint 22</span>
                <span>Sprint 23</span>
              </div>
            </div>
            
            <!-- Key Message -->
            <div class="key-message">
              <div class="message-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.9.37 4.13 1.02"/>
                </svg>
              </div>
              <div class="message-text">
                <h3>Voorspelbaarheid neemt toe met historische data</h3>
                <p>Track je team's velocity patronen om betere sprint planning beslissingen te nemen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Functies</h2>
          <p class="section-subtitle">Alles wat je nodig hebt voor effectieve sprint planning</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3v18h18"/>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
            <h3>Velocity tracking</h3>
            <p>Track je team's velocity over tijd om betere voorspellingen te maken</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
            </div>
            <h3>Sprint planning</h3>
            <p>Plan je sprints op basis van historische data en team capaciteit</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <h3>Simpel & snel</h3>
            <p>Intuïtieve interface die je binnen seconden resultaten geeft</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Planner Widget -->
    <section id="planner-widget" class="planner-widget" aria-labelledby="planner-title" role="region">
      <div class="container">
        <div class="section-header">
          <h2 id="planner-title" class="section-title">Sprint Planner</h2>
          <p class="section-subtitle">Plan je volgende sprint in 4 eenvoudige stappen</p>
        </div>

        <div class="stepper-container" role="group" aria-labelledby="stepper-title">
          <h3 id="stepper-title" class="sr-only">Sprint planning wizard</h3>
          <!-- Progress Stepper -->
          <div class="stepper-progress" role="progressbar" :aria-valuenow="currentStep" aria-valuemin="1" aria-valuemax="4" :aria-valuetext="`Step ${currentStep} of 4: ${steps[currentStep - 1]?.title}`">
            <div class="stepper-line" :style="{ width: `${(currentStep / 4) * 100}%` }"></div>
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="stepper-circle"
              :class="{
                'active': index + 1 === currentStep,
                'completed': index + 1 < currentStep
              }"
              :aria-label="`Step ${index + 1}: ${step.title}`"
              :aria-current="index + 1 === currentStep ? 'step' : false"
            >
              <span v-if="index + 1 < currentStep" class="checkmark" aria-hidden="true"></span>
              <span v-else aria-hidden="true">{{ index + 1 }}</span>
            </div>
          </div>

          <!-- Step Labels -->
          <div class="stepper-labels">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="step-label"
              :class="{ 'active': index + 1 === currentStep }"
            >
              {{ step.title }}
            </div>
          </div>

          <!-- Step Content -->
          <div class="step-content">
            <!-- Step 1: Historical Velocity -->
            <div v-if="currentStep === 1" class="step-panel velocity-step">
              <div class="step-header">
                <h3>Team velocity</h3>
                <p>Hoe wil je je velocity invoeren?</p>
              </div>
              
              <!-- Input Method Toggle -->
              <div class="input-method-toggle">
                <button
                  @click="velocityInputMethod = 'manual'"
                  class="toggle-button"
                  :class="{ 'active': velocityInputMethod === 'manual' }"
                >
                  <div class="toggle-content">
                    <div class="toggle-title">Snel gemiddelde</div>
                    <div class="toggle-subtitle">Voer je gemiddelde velocity in</div>
                  </div>
                </button>

                <button
                  @click="velocityInputMethod = 'individual'"
                  class="toggle-button"
                  :class="{ 'active': velocityInputMethod === 'individual' }"
                >
                  <div class="toggle-content">
                    <div class="toggle-title">Gedetailleerde historie</div>
                    <div class="toggle-subtitle">Voer laatste 6 sprints in</div>
                  </div>
                </button>
              </div>

              <!-- Individual Sprint Input -->
              <div v-if="velocityInputMethod === 'individual'" class="velocity-input-section">
                <div class="section-header">
                  <h4>Laatste 6 sprints</h4>
                  <p>Voer velocity voor elke sprint in om je gemiddelde te berekenen</p>
                </div>
                
                <div class="velocity-grid-minimal" role="group" aria-labelledby="velocity-inputs-title">
                  <h4 id="velocity-inputs-title" class="sr-only">Sprint velocity inputs</h4>
                  <div v-for="(sprint, index) in sprints" :key="index" class="velocity-card-minimal">
                    <label :for="`sprint-${index}`" class="sprint-number">{{ index + 1 }}</label>
                    <input
                      :id="`sprint-${index}`"
                      v-model.number="sprint.velocity"
                      type="number"
                      min="0"
                      placeholder="0"
                      class="velocity-input-minimal"
                      @input="updateStepCompletion"
                      :aria-label="`Sprint ${index + 1} velocity in story points`"
                      aria-describedby="velocity-hint"
                    />
                    <div class="sprint-label">Sprint</div>
                  </div>
                  <p id="velocity-hint" class="sr-only">Voer het aantal story points in dat per sprint is voltooid</p>
                </div>
              </div>

              <!-- Manual Average Input -->
              <div v-if="velocityInputMethod === 'manual'" class="manual-input-section">
                <div class="section-header">
                  <h4>Gemiddelde velocity</h4>
                  <p>Voer de gemiddelde velocity van je team direct in</p>
                </div>
                
                <div class="manual-input-container">
                  <div class="input-wrapper">
                    <input 
                      v-model.number="manualAverageVelocity" 
                      type="number" 
                      min="0" 
                      placeholder="Voer gemiddelde velocity in"
                      class="manual-velocity-input"
                      @input="updateStepCompletion"
                    />
                    <div class="input-suffix">story points</div>
                  </div>
                </div>
              </div>


              <!-- Velocity Summary - Only for Individual Sprints -->
              <div v-if="velocityInputMethod === 'individual'" class="velocity-summary-minimal">
                <div class="summary-card-minimal">
                  <div class="summary-header">
                    <div class="summary-title">Gemiddelde velocity</div>
                  </div>
                  <div class="summary-value-minimal">{{ displayAverageVelocity }}</div>
                  <div class="summary-subtitle">story points per sprint</div>
                </div>
              </div>
            </div>

            <!-- Step 2: Team Capacity -->
            <div v-if="currentStep === 2" class="step-panel capacity-step">
              <div class="step-header">
                <h3>{{ steps[1].title }}</h3>
                <p>Configureer de realistische capaciteit van je team met individuele developer tracking</p>
              </div>
              
              <!-- Basic Configuration -->
              <div class="capacity-section">
                <div class="section-header">
                  <h4>Team Configuration</h4>
                  <p>Configureer de capaciteit van je team en sprint duur</p>
                </div>

                <!-- Team Input Method Toggle -->
                <!-- Simplified Team Configuration -->
                <div class="team-config-simple">
                  <div class="config-grid" role="group" aria-labelledby="team-config-title">
                    <h4 id="team-config-title" class="sr-only">Team configuration</h4>
                    <div class="config-item">
                      <label for="sprint-weeks">Sprint duur</label>
                      <div class="input-group">
                        <input
                          id="sprint-weeks"
                          v-model.number="capacity.sprintWeeks"
                          type="number"
                          min="1"
                          max="4"
                          class="config-input"
                          @input="updateStepCompletion"
                          aria-describedby="sprint-weeks-hint"
                        />
                        <span class="input-suffix">weeks</span>
                      </div>
                      <span id="sprint-weeks-hint" class="sr-only">Voer sprint duur in tussen 1 en 4 weken</span>
                    </div>

                    <div class="config-item">
                      <label for="team-size">Team Size</label>
                      <div class="input-group">
                        <input
                          id="team-size"
                          v-model.number="capacity.teamMembers"
                          type="number"
                          min="1"
                          max="20"
                          class="config-input"
                          @input="updateStepCompletion"
                          aria-describedby="team-size-hint"
                        />
                        <span class="input-suffix">people</span>
                      </div>
                      <span id="team-size-hint" class="sr-only">Voer aantal teamleden in</span>
                    </div>
                  </div>
                </div>
                
                <!-- Simplified Team Summary -->
                <div class="team-capacity-summary">
                  <div class="summary-card-simple">
                    <div class="summary-title">Team capaciteit</div>
                    <div class="capacity-calculation">
                      <div class="calc-step">
                        {{ capacity.teamMembers }} personen × {{ capacity.sprintWeeks }} weken × 40u/week = {{ capacity.teamMembers * capacity.sprintWeeks * 40 }} uur
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <!-- Capacity Summary -->
              <div class="capacity-summary-detailed">
                <div class="summary-card-detailed">
                  <div class="summary-header">
                    <div class="summary-title">Realistische team capaciteit</div>
                    <div class="summary-subtitle">Gebaseerd op individuele contract uren en afwezigheid</div>
                  </div>
                  
                  <div class="capacity-breakdown">
                    <div class="breakdown-item">
                      <div class="breakdown-label">Totaal contract uren</div>
                      <div class="breakdown-value">{{ totalContractHours }}h</div>
                    </div>
                    
                    <div class="breakdown-item">
                      <div class="breakdown-label">Totaal afwezigheids uren</div>
                      <div class="breakdown-value">{{ totalAbsenceHours }}h</div>
                    </div>
                    
                    <div class="breakdown-item">
                      <div class="breakdown-label">Beschikbare uren</div>
                      <div class="breakdown-value">{{ availableHours }}h</div>
                    </div>
                    
                    <div class="breakdown-item">
                      <div class="breakdown-label">Na buffer ({{ capacity.bufferPercentage }}%)</div>
                      <div class="breakdown-value">{{ finalCapacity }}h</div>
                    </div>
                  </div>
                  
                  <div class="final-capacity">
                    <div class="final-label">Sprint capaciteit</div>
                    <div class="final-value">{{ finalCapacity }} uur</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3: Availability -->
            <div v-if="currentStep === 3" class="step-panel availability-step">
              <div class="step-header">
                <h3>Team beschikbaarheid</h3>
                <p>Pas aan voor realistische team capaciteit rekening houdend met vakanties en onverwachte problemen</p>
              </div>

              <!-- Simplified Availability Configuration -->
              <div class="availability-config-simple">
                <div class="config-grid">
                  <div class="config-item">
                    <label>Team beschikbaarheid</label>
                    <div class="input-group">
                      <input v-model.number="teamAvailabilityPercentage" type="number" min="50" max="100" class="config-input" @input="updateStepCompletion" />
                      <span class="input-suffix">%</span>
                    </div>
                    <div class="input-hint">Houdt rekening met vakanties, vergaderingen, ziektedagen (typisch: 80-85%)</div>
                  </div>

                  <div class="config-item">
                    <label>Buffer for Unexpected</label>
                    <div class="input-group">
                      <input v-model.number="capacity.bufferPercentage" type="number" min="0" max="50" class="config-input" @input="updateStepCompletion" />
                      <span class="input-suffix">%</span>
                    </div>
                    <div class="input-hint">Bugfixes, urgente zaken, scope wijzigingen (marktgemiddelde: 15-20%)</div>
                  </div>
                </div>
              </div>

              <!-- Final Capacity Calculation -->
              <div class="final-capacity-summary">
                <div class="summary-card-simple">
                  <div class="summary-title">Definitieve sprint capaciteit</div>
                  <div class="capacity-calculation">
                    <div class="calc-step">
                      Basis capaciteit: {{ capacity.teamMembers * capacity.sprintWeeks * 40 }} uur
                    </div>
                    <div class="calc-step">
                      × {{ teamAvailabilityPercentage }}% beschikbaarheid = {{ Math.round(capacity.teamMembers * capacity.sprintWeeks * 40 * (teamAvailabilityPercentage / 100)) }} uur
                    </div>
                    <div class="calc-step">
                      - {{ capacity.bufferPercentage }}% buffer = {{ finalCapacity }} uur
                    </div>
                  </div>
                  <div class="final-value-large">{{ finalCapacity }} uur</div>
                </div>
              </div>
            </div>

            <!-- Step 4: Results -->
            <div v-if="currentStep === 4" class="step-panel">
              <div class="step-header">
                <h3>{{ steps[3].title }}</h3>
                <p>Je gepersonaliseerde sprint planning aanbevelingen</p>
              </div>
              
              <div class="results-showcase">
                <div class="main-result">
                  <div class="result-badge">Aanbevolen</div>
                  <div class="result-number">{{ recommendedSprintPoints }}</div>
                  <div class="result-unit">Story Points</div>
                </div>
                
                <div class="results-grid">
                  <div class="result-item">
                    <div class="result-icon"></div>
                    <div class="result-info">
                      <div class="result-label">Gemiddelde velocity</div>
                      <div class="result-value">{{ averageVelocity }}</div>
                    </div>
                  </div>
                  
                  <div class="result-item">
                    <div class="result-icon"></div>
                    <div class="result-info">
                      <div class="result-label">Team capaciteit</div>
                      <div class="result-value">{{ teamCapacity }}</div>
                    </div>
                  </div>
                  
                  <div class="result-item">
                    <div class="result-icon"></div>
                    <div class="result-info">
                      <div class="result-label">Vertrouwen</div>
                      <div class="result-value confidence" :class="confidence.toLowerCase()">{{ confidence }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="stepper-navigation">
            <button 
              v-if="currentStep > 1" 
              @click="previousStep" 
              class="nav-button secondary"
            >
              Vorige
            </button>
            <div class="nav-spacer"></div>
            <button
              v-if="currentStep < 4"
              @click="nextStep"
              class="nav-button primary"
              :disabled="!canProceed"
            >
              Volgende
            </button>
            <button
              v-if="currentStep === 4"
              @click="resetStepper"
              class="nav-button primary"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </section>

    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-content">
          <div class="footer-content-minimal">
            <div class="footer-brand-minimal">
              <h3>Sprint Planner</h3>
              <p class="footer-copyright">© 2025 sprintplanner.nl</p>
            </div>
            <div class="footer-links-minimal">
              <router-link to="/privacy" class="footer-link-minimal">Privacy</router-link>
              <router-link to="/data-deletion" class="footer-link-minimal">Delete Data</router-link>
              <router-link to="/cookie-settings" class="footer-link-minimal">Cookies</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Modern UX State Management
const isLoading = ref(false)
const loadingMessage = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const scrollToWidget = () => {
  const element = document.getElementById('planner-widget')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Show loading state for operations
const showLoading = (message) => {
  isLoading.value = true
  loadingMessage.value = message
  errorMessage.value = ''
  successMessage.value = ''
}

// Show success feedback
const showSuccess = (message) => {
  isLoading.value = false
  successMessage.value = message
  errorMessage.value = ''
  setTimeout(() => { successMessage.value = '' }, 3000)
}

// Show error feedback
const showError = (message) => {
  isLoading.value = false
  errorMessage.value = message
  successMessage.value = ''
}

// Stepper data
const currentStep = ref(1)
const canProceed = ref(false)
const velocityInputMethod = ref('average')
const manualAverageVelocity = ref(0)
const cookieConsentAccepted = ref(false)

const steps = [
  { title: 'Historische Velocity' },
  { title: 'Team Capaciteit' },
  { title: 'Beschikbaarheid' },
  { title: 'Resultaten' }
]

// Planner data
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
  contractHoursPerWeek: 40,
  bufferPercentage: 15
})

// Team input method toggle
const teamInputMethod = ref('individual') // 'individual' or 'average'

// Individual developers with absences - start with 2 default developers
const developers = ref([
  { id: 1, name: 'Developer 1', contractHoursPerWeek: 40, absences: [] },
  { id: 2, name: 'Developer 2', contractHoursPerWeek: 40, absences: [] }
])

// Average team hours (for simple input)
const averageTeamHours = ref(40)

// Team availability percentage (for average mode)
const teamAvailabilityPercentage = ref(85)

// New developer form
const newDeveloper = ref({
  name: '',
  contractHoursPerWeek: 40
})

// Absence form
const newAbsence = ref({
  developerId: null,
  type: 'vacation',
  startDate: '',
  endDate: '',
  hoursPerDay: 8,
  reason: ''
})

// Computed properties - CORRECTED LOGIC
const averageVelocity = computed(() => {
  console.log('averageVelocity computed - method:', velocityInputMethod.value)
  
  if (velocityInputMethod.value === 'manual') {
    const result = manualAverageVelocity.value || 0
    console.log(' Manual velocity result:', result)
    return result
  }
  
  // Individual sprints calculation
  const validSprints = sprints.value.filter(s => s.velocity > 0)
  console.log(' Valid sprints:', validSprints)
  
  if (validSprints.length === 0) {
    console.log(' No valid sprints, returning 0')
    return 0
  }
  
  const sum = validSprints.reduce((acc, s) => acc + s.velocity, 0)
  const result = Math.round((sum / validSprints.length) * 100) / 100
  console.log(' Individual velocity result:', result)
  return result
})

const displayAverageVelocity = computed(() => {
  return averageVelocity.value
})

// Team capacity calculations
const totalContractHours = computed(() => {
  if (teamInputMethod.value === 'average') {
    return capacity.value.teamMembers * averageTeamHours.value * capacity.value.sprintWeeks
  }
  
  if (developers.value.length === 0) return 0
  
  return developers.value.reduce((total, dev) => {
    return total + (capacity.value.sprintWeeks * dev.contractHoursPerWeek)
  }, 0)
})

const totalAbsenceHours = computed(() => {
  if (developers.value.length === 0) return 0
  
  return developers.value.reduce((total, dev) => {
    const devAbsenceHours = dev.absences.reduce((devTotal, absence) => {
      if (!absence.startDate || !absence.endDate) return devTotal
      
      const startDate = new Date(absence.startDate)
      const endDate = new Date(absence.endDate)
      const daysDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
      return devTotal + (daysDiff * (absence.hoursPerDay || 8))
    }, 0)
    return total + devAbsenceHours
  }, 0)
})

const availableHours = computed(() => {
  const contractHours = totalContractHours.value
  const absenceHours = totalAbsenceHours.value
  return Math.max(0, contractHours - absenceHours)
})

const finalCapacity = computed(() => {
  const available = availableHours.value
  const bufferReduction = available * (capacity.value.bufferPercentage / 100)
  return Math.max(0, Math.round(available - bufferReduction))
})

const teamCapacity = computed(() => {
  return finalCapacity.value
})

// Sprint planning calculations
const recommendedSprintPoints = computed(() => {
  const velocity = averageVelocity.value
  const capacity = teamCapacity.value
  
  if (velocity === 0 || capacity === 0) return 0
  
  // Convert capacity to story points (assuming 1 story point = 8 hours)
  const capacityInStoryPoints = Math.round(capacity / 8)
  
  // Take the minimum of velocity and capacity
  return Math.min(velocity, capacityInStoryPoints)
})

const confidence = computed(() => {
  if (velocityInputMethod.value === 'manual') {
    return 'Medium' // Manual input gives medium confidence
  }
  
  const validSprints = sprints.value.filter(s => s.velocity > 0)
  if (validSprints.length >= 4) return 'High'
  if (validSprints.length >= 2) return 'Medium'
  return 'Low'
})

// Stepper methods - SIMPLIFIED
const updateStepCompletion = () => {
  console.log(' updateStepCompletion called, currentStep:', currentStep.value)
  console.log(' velocityInputMethod:', velocityInputMethod.value)
  console.log(' manualAverageVelocity:', manualAverageVelocity.value)
  console.log(' sprints:', sprints.value)
  
  if (currentStep.value === 1) {
    // Step 1: Check if velocity is entered
    if (velocityInputMethod.value === 'manual') {
      canProceed.value = manualAverageVelocity.value > 0
      console.log(' Manual velocity check:', manualAverageVelocity.value > 0)
    } else {
      canProceed.value = sprints.value.some(s => s.velocity > 0)
      console.log(' Individual sprints check:', sprints.value.some(s => s.velocity > 0))
    }
  } else if (currentStep.value === 2) {
    // Step 2: Check if team capacity is configured
    if (teamInputMethod.value === 'average') {
      canProceed.value = capacity.value.teamMembers > 0 && averageTeamHours.value > 0
      console.log(' Average team capacity check:', capacity.value.teamMembers > 0 && averageTeamHours.value > 0)
    } else {
      canProceed.value = developers.value.length > 0
      console.log(' Individual team capacity check:', developers.value.length > 0)
    }
  } else if (currentStep.value === 3) {
    // Step 3: Check if availability is configured
    if (teamInputMethod.value === 'average') {
      canProceed.value = teamAvailabilityPercentage.value > 0
      console.log(' Average availability check:', teamAvailabilityPercentage.value > 0)
    } else {
      canProceed.value = true // Individual absences are optional
      console.log(' Individual availability check: allowing proceed')
    }
  } else {
    // Step 4: Always allow proceeding
    canProceed.value = true
    console.log(' Step 4: allowing proceed')
  }
  
  console.log(' canProceed set to:', canProceed.value)
}

// Removed updateManualVelocity - now using updateStepCompletion directly

// Cookie consent methods
const acceptCookies = () => {
  cookieConsentAccepted.value = true
  localStorage.setItem('sprintplanner-cookie-consent', 'accepted')
  // Record consent timestamp for GDPR compliance
  localStorage.setItem('sprintplanner-consent-timestamp', new Date().toISOString())
}


// Developer management methods
const addDeveloper = () => {
  if (newDeveloper.value.name.trim()) {
    const newId = Math.max(...developers.value.map(d => d.id)) + 1
    developers.value.push({
      id: newId,
      name: newDeveloper.value.name.trim(),
      contractHoursPerWeek: newDeveloper.value.contractHoursPerWeek,
      absences: []
    })
    newDeveloper.value = { name: '', contractHoursPerWeek: 40 }
    updateStepCompletion()
  }
}

const removeDeveloper = (developerId) => {
  developers.value = developers.value.filter(d => d.id !== developerId)
  updateStepCompletion()
}

const addAbsence = () => {
  if (newAbsence.value.developerId && newAbsence.value.startDate && newAbsence.value.endDate) {
    const developer = developers.value.find(d => d.id === newAbsence.value.developerId)
    if (developer) {
      developer.absences.push({
        id: Date.now(),
        type: newAbsence.value.type,
        startDate: newAbsence.value.startDate,
        endDate: newAbsence.value.endDate,
        hoursPerDay: newAbsence.value.hoursPerDay,
        reason: newAbsence.value.reason
      })
      newAbsence.value = {
        developerId: null,
        type: 'vacation',
        startDate: '',
        endDate: '',
        hoursPerDay: 8,
        reason: ''
      }
      updateStepCompletion()
    }
  }
}

const removeAbsence = (developerId, absenceId) => {
  const developer = developers.value.find(d => d.id === developerId)
  if (developer) {
    developer.absences = developer.absences.filter(a => a.id !== absenceId)
    updateStepCompletion()
  }
}

const getAbsenceTypeLabel = (type) => {
  const labels = {
    vacation: 'Vacation',
    sick: 'Sick Leave',
    training: 'Training',
    project: 'Other Project',
    other: 'Other'
  }
  return labels[type] || type
}

const getAbsenceTypeColor = (type) => {
  const colors = {
    vacation: '#3b82f6',
    sick: '#ef4444',
    training: '#10b981',
    project: '#f59e0b',
    other: '#6b7280'
  }
  return colors[type] || '#6b7280'
}

const nextStep = () => {
  console.log(' NEXT CLICKED - Current step:', currentStep.value)
  console.log(' canProceed:', canProceed.value)

  if (!canProceed.value) {
    showError('Please complete all required fields before continuing')
    return
  }

  if (currentStep.value < 3) {
    showLoading('Processing step...')
    // Simulate processing time for better UX
    setTimeout(() => {
      currentStep.value++
      updateStepCompletion()
      showSuccess(`Moved to step ${currentStep.value}`)
    }, 500)
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    updateStepCompletion()
  }
}

// goToStep function removed - stepper circles are now display-only

const resetStepper = () => {
  currentStep.value = 1
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
    contractHoursPerWeek: 40,
    bufferPercentage: 10
  }
  
  developers.value = []
  updateStepCompletion()
}

onMounted(() => {
  // Always start at step 1
  currentStep.value = 1
  
  // Check cookie consent
  const cookieConsent = localStorage.getItem('sprintplanner-cookie-consent')
  if (cookieConsent) {
    cookieConsentAccepted.value = true
  }
  
  // Only load data if cookies are accepted
  if (cookieConsent === 'accepted') {
    // Load saved planner data
    const savedData = localStorage.getItem('sprintplanner-data')
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        if (data.sprints) sprints.value = data.sprints
        if (data.capacity) capacity.value = data.capacity
        if (data.developers) developers.value = data.developers
        if (data.velocityInputMethod) velocityInputMethod.value = data.velocityInputMethod
        if (data.manualAverageVelocity) manualAverageVelocity.value = data.manualAverageVelocity
      } catch (error) {
        console.error('Error loading saved data:', error)
      }
    }
  }
  
  // Update step completion after loading data
  updateStepCompletion()
})
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
}

/* Cookie Consent Banner */
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  z-index: 10000;
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cookie-text h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.cookie-text p {
  font-size: 0.875rem;
  color: #a1a1aa;
  line-height: 1.5;
  margin: 0;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.cookie-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-width: 100px;
}

.cookie-button.primary {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

.cookie-button.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.cookie-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cookie-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .cookie-actions {
    width: 100%;
    justify-content: center;
  }
  
  .cookie-button {
    flex: 1;
    max-width: 120px;
  }
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
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
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
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link.router-link-active {
  color: #3b82f6;
}

.linkedin-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
}

.linkedin-link:hover {
  background: rgba(0, 119, 181, 0.1);
  border-color: #0077b5;
  color: #0077b5;
  transform: translateY(-1px);
}

.linkedin-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
}

.linkedin-link:hover .linkedin-icon {
  transform: scale(1.1);
}

.linkedin-text {
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .linkedin-text {
    font-size: 0.75rem;
  }
  
  .linkedin-link {
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 480px) {
  .linkedin-text {
    display: none;
  }
  
  .linkedin-link {
    padding: 0.5rem;
  }
}


/* Hero Section */
.hero {
  padding: 5rem 0 2rem;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  min-height: 50vh;
}

.hero-content {
  text-align: left;
  z-index: 2;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.cta-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
}

.cta-button:hover .cta-icon {
  transform: translateX(4px);
}


/* Simple Predictability Visual */
.predictability-simple {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
}

.trend-chart {
  margin-bottom: 1rem;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.chart-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
}

.trend-indicator {
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.chart-line {
  height: 80px;
  margin-bottom: 0.75rem;
}

.trend-svg {
  width: 100%;
  height: 100%;
}

.simple-trend {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawSimpleTrend 2s ease-in-out forwards;
}

.trend-dot {
  opacity: 0;
  animation: fadeInDot 0.5s ease-in-out forwards;
  animation-delay: 1.5s;
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #a1a1aa;
}

.key-message {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
}

.message-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #10b981;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.message-text h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.message-text p {
  font-size: 0.875rem;
  color: #a1a1aa;
  line-height: 1.5;
  margin: 0;
}

/* Animations */
@keyframes drawSimpleTrend {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeInDot {
  to {
    opacity: 1;
  }
}

/* Features Section */
.features {
  padding: 6rem 0;
  background: rgba(255, 255, 255, 0.02);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--accent-primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.feature-icon svg {
  width: 2rem;
  height: 2rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
}

.footer-content-minimal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-brand-minimal h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.footer-copyright {
  color: #71717a;
  font-size: 0.75rem;
  margin: 0;
}

.footer-links-minimal {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.footer-link-minimal {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
  font-weight: 500;
}

.footer-link-minimal:hover {
  color: #3b82f6;
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
  
  .hero {
    padding: 0.5rem 0 1.5rem;
  }
  
  .hero-container {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    gap: 1rem;
    min-height: auto;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  
  
  .features {
    padding: 4rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer {
    padding: 1.5rem 0;
  }
  
  .footer-content-minimal {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-links-minimal {
    gap: 1.5rem;
  }
  
}

/* Accessibility Styles */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #3b82f6;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 6px;
}

/* Focus Styles for Better Accessibility */
button:focus,
input:focus,
select:focus,
textarea:focus,
.nav-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* High Contrast Support */
@media (prefers-contrast: high) {
  .toggle-button {
    border-width: 2px;
  }

  .stepper-circle {
    border-width: 2px;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .loading-spinner {
    animation: none !important;
  }
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.loading-content {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: white;
  backdrop-filter: blur(20px);
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Feedback Messages */
.feedback-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feedback {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: 500;
  min-width: 250px;
  backdrop-filter: blur(20px);
  animation: slideIn 0.3s ease-out;
}

.feedback.success {
  background: rgba(16, 185, 129, 0.9);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.feedback.error {
  background: rgba(239, 68, 68, 0.9);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.feedback-icon {
  font-size: 1.2rem;
}

.feedback-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feedback-close:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Planner Widget */
.planner-widget {
  padding: 3rem 0;
  background: rgba(255, 255, 255, 0.02);
}

.stepper-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Stepper Progress */
.stepper-progress {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 2rem;
}

.stepper-line {
  position: absolute;
  top: 50%;
  left: 2rem;
  right: 2rem;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 2px;
  transform: translateY(-50%);
  transition: width 0.5s ease;
  z-index: 1;
}

.stepper-circle {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
  color: #a1a1aa;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.stepper-circle.active {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-color: #3b82f6;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.stepper-circle.completed {
  background: linear-gradient(135deg, #10b981, #059669);
  border-color: #10b981;
  color: white;
}

.stepper-circle.disabled {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: #71717a;
  cursor: not-allowed;
  opacity: 0.5;
}

.stepper-circle:hover:not(.active) {
  transform: scale(1.05);
  border-color: #3b82f6;
  cursor: pointer;
}

/* Stepper circles are now display-only - no click functionality */

.checkmark {
  font-size: 1.25rem;
  font-weight: 700;
}

/* Team Input Toggle */
.team-input-toggle {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  backdrop-filter: blur(20px);
}

.team-input-toggle .toggle-button {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.team-input-toggle .toggle-button:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
}

.team-input-toggle .toggle-button.active {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.toggle-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toggle-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
}

.toggle-subtitle {
  font-size: 0.875rem;
  color: #a1a1aa;
}

/* Average Hours Section */
.average-hours-section {
  margin-top: 1.5rem;
}

.average-input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-wrapper label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #e5e7eb;
}

.team-size-input,
.average-hours-input {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.team-size-input:focus,
.average-hours-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.average-summary {
  margin-top: 1.5rem;
}

.summary-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
  text-align: center;
}

.summary-title {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
}

.summary-value {
  font-size: 2rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 0.25rem;
}

.summary-subtitle {
  font-size: 0.75rem;
  color: #71717a;
}

@media (max-width: 768px) {
  .team-input-toggle {
    flex-direction: column;
  }
  
  .average-input-container {
    grid-template-columns: 1fr;
  }
}

/* Step Labels */
.stepper-labels {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
  position: relative;
  margin-top: 0.5rem;
  align-items: start;
}

.step-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
  text-align: center;
  transition: color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 0.75rem;
  line-height: 1.2;
  padding: 0 0.5rem;
}

.step-label.active {
  color: #3b82f6;
  font-weight: 600;
}

/* Step Content */
.step-content {
  min-height: 400px;
}

.step-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.step-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.step-header h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-header p {
  color: #a1a1aa;
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
}

.planner-step {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.planner-step h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.planner-step p {
  color: #a1a1aa;
  margin-bottom: 1.5rem;
}

.velocity-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.velocity-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.velocity-input label {
  font-size: 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
}

.velocity-field {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
}

.velocity-field:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.capacity-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.capacity-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.capacity-input label {
  font-size: 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
}

.capacity-field {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
}

.capacity-field:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.average-display, .capacity-display {
  text-align: center;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.5rem;
  color: #3b82f6;
  font-size: 1.125rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.result-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.result-card.highlight {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  transform: scale(1.05);
}

.result-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.result-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

.result-card.highlight .result-value {
  color: #3b82f6;
}

@media (max-width: 768px) {
  .velocity-inputs {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .capacity-inputs {
    grid-template-columns: 1fr;
  }
  
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .result-card.highlight {
    transform: none;
  }
}

/* Step 1: Historical Velocity - Minimalist Glass Design */
.velocity-step {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px);
}

/* Input Method Toggle */
.input-method-toggle {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.toggle-button {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(40px);
}

.toggle-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.toggle-button:hover::before {
  opacity: 1;
}

.toggle-button.active {
  background: rgba(59, 130, 246, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.toggle-button.coming-soon {
  opacity: 0.6;
  cursor: not-allowed;
  position: relative;
}

.toggle-button.coming-soon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.1) 49%, rgba(255, 255, 255, 0.1) 51%, transparent 52%);
  background-size: 20px 20px;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: -20px 0; }
  100% { background-position: 20px 0; }
}

/* Removed toggle-icon styles for minimalist design */

.toggle-content {
  position: relative;
  z-index: 2;
}

.toggle-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.toggle-subtitle {
  font-size: 0.875rem;
  color: #a1a1aa;
  line-height: 1.4;
}

.coming-soon-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 3;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 1rem;
}

.section-header h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.section-header p {
  color: #a1a1aa;
  font-size: 1rem;
}

/* Individual Sprint Input */
.velocity-input-section {
  margin-bottom: 1rem;
}

.velocity-grid-minimal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.velocity-card-minimal {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
}

.velocity-card-minimal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(29, 78, 216, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.velocity-card-minimal:hover::before {
  opacity: 1;
}

.velocity-card-minimal:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.15);
}

.sprint-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 2;
}

.velocity-input-minimal {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.velocity-input-minimal:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  background: rgba(255, 255, 255, 0.12);
}

.sprint-label {
  font-size: 0.75rem;
  color: #a1a1aa;
  margin-top: 0.5rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
}

/* Manual Input Section */
.manual-input-section {
  margin-bottom: 1rem;
}

.manual-input-container {
  display: flex;
  justify-content: center;
}

.input-wrapper {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  min-width: 300px;
}

.input-wrapper:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.manual-velocity-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
    padding: 1rem;
}

.manual-velocity-input:focus {
  outline: none;
}

.manual-velocity-input::placeholder {
  color: #71717a;
}

.input-suffix {
  color: #a1a1aa;
  font-size: 0.875rem;
  font-weight: 500;
  padding-right: 1rem;
}

/* Integration Placeholder */
.integration-placeholder {
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  margin-bottom: 1rem;
}

/* Removed integration-icon for minimalist design */

.integration-placeholder h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.integration-placeholder p {
  color: #a1a1aa;
  font-size: 1rem;
  margin-bottom: 1rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.integration-features {
  display: flex;
    flex-direction: column;
    gap: 1rem;
  margin-bottom: 1rem;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #a1a1aa;
  font-size: 0.875rem;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
  flex-shrink: 0;
}

.integration-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem 2rem;
  color: #a1a1aa;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
}

/* Removed button-icon for minimalist design */

/* Velocity Summary Minimal */
.velocity-summary-minimal {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.summary-card-minimal {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  min-width: 250px;
}

.summary-card-minimal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(29, 78, 216, 0.05));
  z-index: 1;
}

.summary-card-minimal > * {
  position: relative;
  z-index: 2;
}

.summary-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

/* Removed summary-icon-minimal for minimalist design */

.summary-title {
  font-size: 1rem;
  font-weight: 600;
  color: #a1a1aa;
}

.summary-value-minimal {
  font-size: 3rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.summary-subtitle {
  font-size: 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
}

/* Step 2: Team Capacity - Enhanced Design */
.capacity-step {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px);
}

/* Step 3: Availability - Enhanced Design */
.availability-step {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px);
}

/* Buffer Section */
.buffer-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(20px);
}

.buffer-input-container {
  margin-top: 1rem;
}

.buffer-input {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.buffer-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

/* Availability Input Toggle */
.availability-input-toggle {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  backdrop-filter: blur(20px);
}

.availability-input-toggle .toggle-button {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.availability-input-toggle .toggle-button:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
}

.availability-input-toggle .toggle-button.active {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

/* Average Availability Section */
.average-availability-section {
  margin-top: 1.5rem;
}

.availability-input-container {
  margin-bottom: 1rem;
}

.availability-input {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.availability-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

/* Final Capacity Display */
.final-capacity {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 1rem;
  text-align: center;
}

.final-label {
  font-size: 0.875rem;
  color: #10b981;
  margin-bottom: 0.5rem;
}

.final-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #10b981;
}

@media (max-width: 768px) {
  .availability-input-toggle {
    flex-direction: column;
  }
}

/* Capacity Sections */
.capacity-section {
  margin-bottom: 1.5rem;
}

.capacity-section .section-header {
  text-align: left;
  margin-bottom: 1.5rem;
}

.capacity-section .section-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.capacity-section .section-header p {
  color: #a1a1aa;
  font-size: 0.875rem;
  margin: 0;
}

/* Sprint Configuration Grid */
.sprint-config-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  margin-bottom: 1rem;
}

.config-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.config-card:hover {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.config-content label {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.config-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 1rem;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
}

.config-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.capacity-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.capacity-card:hover {
  transform: translateY(-2px);
  border-color: #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
}

.capacity-icon {
  font-size: 2rem;
  opacity: 0.8;
}

.capacity-content {
  flex: 1;
}

.capacity-content label {
  display: block;
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.input-group {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  overflow: hidden;
}

.capacity-input {
  flex: 1;
  padding: 1rem;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
}

.capacity-input:focus {
  outline: none;
}

.input-suffix {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #a1a1aa;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Summary Cards */
.velocity-summary, .capacity-summary {
  display: flex;
  justify-content: center;
}

.summary-card {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  min-width: 300px;
}

.summary-icon {
  font-size: 2.5rem;
  opacity: 0.8;
}

.summary-content {
  text-align: left;
}

.summary-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.summary-value {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
}

/* Results Showcase */
.results-showcase {
  text-align: center;
}

.main-result {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.1));
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 1.5rem;
    position: relative;
  overflow: hidden;
}

.main-result::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(29, 78, 216, 0.05));
  z-index: 1;
}

.main-result > * {
    position: relative;
  z-index: 2;
}

.result-badge {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.result-number {
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffffff, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.result-unit {
  font-size: 1.25rem;
  color: #a1a1aa;
  font-weight: 500;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.result-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.result-item:hover {
  transform: translateY(-2px);
  border-color: #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
}

.result-icon {
  font-size: 2rem;
  opacity: 0.8;
}

.result-info {
  text-align: left;
}

.result-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.result-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

.result-value.confidence.high {
  color: #10b981;
}

.result-value.confidence.medium {
  color: #f59e0b;
}

.result-value.confidence.low {
  color: #ef4444;
}

/* Navigation */
.stepper-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-spacer {
  flex: 1;
}

.nav-button {
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.nav-button.primary {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.nav-button.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.nav-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.nav-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .stepper-progress {
    padding: 0 1rem;
  }
  
  .stepper-circle {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .stepper-labels {
    padding: 0 1rem;
    margin-top: 0.25rem;
  }
  
  .step-label {
    font-size: 0.75rem;
    max-width: 80px;
    width: 100%;
  }
  
  .step-panel {
    padding: 2rem 1.5rem;
  }
  
  .step-header h3 {
    font-size: 1.5rem;
  }
  
  .velocity-grid-minimal {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .capacity-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .capacity-card {
    padding: 1.5rem;
  }
  
  .summary-card {
    min-width: auto;
    padding: 1.5rem;
  }
  
  .main-result {
    padding: 2rem 1.5rem;
  }
  
  .result-number {
    font-size: 3rem;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stepper-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-button {
    width: 100%;
    max-width: 200px;
  }
  
  .input-method-toggle {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .toggle-button {
    padding: 1rem;
  }
  
  .velocity-card-minimal {
    padding: 1rem 0.75rem;
  }
  
  .velocity-input-minimal {
    font-size: 1rem;
    padding: 0.5rem;
  }
  
  .sprint-number {
    font-size: 1.25rem;
  }
}

/* Contract Hours Section */
.contract-hours-container {
  display: flex;
  justify-content: center;
}

.contract-hours-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
  min-width: 400px;
    text-align: center;
  }
  
.contract-hours-input label {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.contract-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 1rem;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
}

.contract-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.input-hint {
  font-size: 0.75rem;
  color: #71717a;
  font-style: italic;
}

.hint-primary {
  color: #a1a1aa;
  margin-bottom: 0.25rem;
  font-style: normal;
}

.hint-secondary {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.market-average {
  color: #10b981;
  font-weight: 500;
  font-style: normal;
}

.source {
  color: #6b7280;
  font-size: 0.7rem;
  font-style: italic;
}

/* Availability Grid */
.availability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.availability-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.availability-card:hover {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.availability-content label {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.availability-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 1rem;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
}

.availability-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

/* Detailed Capacity Summary */
.capacity-summary-detailed {
  display: flex;
    justify-content: center;
  margin-top: 2rem;
}

.summary-card-detailed {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 1.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  min-width: 500px;
}

.summary-card-detailed::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(29, 78, 216, 0.05));
  z-index: 1;
}

.summary-card-detailed > * {
  position: relative;
  z-index: 2;
}

.summary-header {
  text-align: center;
  margin-bottom: 1rem;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.summary-subtitle {
  font-size: 0.875rem;
  color: #a1a1aa;
}

.capacity-breakdown {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
    padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.breakdown-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
}

.breakdown-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3b82f6;
}

.final-capacity {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(29, 78, 216, 0.15));
  border-radius: 1rem;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.final-label {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.final-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive Design for Capacity */
@media (max-width: 768px) {
  .contract-hours-input {
    min-width: auto;
    width: 100%;
    padding: 1.5rem;
  }
  
  .availability-grid {
    grid-template-columns: 1fr;
  }
  
  .summary-card-detailed {
    min-width: auto;
    width: 100%;
  }
  
  .capacity-breakdown {
    gap: 0.75rem;
  }
  
  .breakdown-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}

/* Team Management Styles */
.add-developer-form {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 2rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(20px);
}

.form-row {
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  gap: 1.5rem;
  align-items: end;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.developer-input, .hours-input {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.875rem;
  color: #ffffff;
  font-size: 1rem;
}

.developer-input:focus, .hours-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.add-button {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 0.875rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.add-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.add-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.developers-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.developer-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.developer-card:hover {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.developer-info {
  flex: 1;
}

.developer-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.developer-hours {
  font-size: 0.875rem;
  color: #a1a1aa;
}

.developer-actions {
  margin-left: 1rem;
}

.remove-button {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-button:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: translateY(-1px);
}

/* Absence Management Styles */
.add-absence-form {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 2rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(20px);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.absence-select, .absence-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.875rem;
  color: #ffffff;
  font-size: 0.875rem;
}

.absence-select:focus, .absence-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.add-absence-button {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 0.875rem 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-absence-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.add-absence-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.absences-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.developer-absences {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
}

.developer-absences-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.developer-absences-header h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.absence-count {
  font-size: 0.875rem;
  color: #a1a1aa;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
}

.absences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.absence-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #3b82f6;
  border-radius: 0.75rem;
  padding: 1rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.absence-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.absence-info {
  flex: 1;
}

.absence-type {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.absence-dates {
    font-size: 0.75rem;
  color: #a1a1aa;
  margin-bottom: 0.25rem;
}

.absence-details {
  font-size: 0.75rem;
  color: #71717a;
  margin-bottom: 0.25rem;
}

.absence-reason {
  font-size: 0.75rem;
  color: #a1a1aa;
  font-style: italic;
}

.remove-absence-button {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
    font-size: 1rem;
  line-height: 1;
}

.remove-absence-button:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: scale(1.1);
}

/* Responsive Design for Team Management */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .developers-list {
    grid-template-columns: 1fr;
  }
  
  .absences-grid {
    grid-template-columns: 1fr;
  }
  
  .developer-absences-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .add-developer-form,
  .add-absence-form {
    padding: 1.5rem;
  }
  
  .developer-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .developer-actions {
    margin-left: 0;
    width: 100%;
  }
  
  .remove-button {
    width: 100%;
  }
}

/* Extra small mobile devices */
@media (max-width: 480px) {
  .hero-container {
    padding: 0 0.75rem;
  }
  
  .step-panel {
    padding: 1rem 0.75rem;
  }
  
  .stepper-circle {
    width: 35px;
    height: 35px;
    font-size: 0.875rem;
  }
  
  .step-label {
    font-size: 0.625rem;
    max-width: 60px;
    width: 100%;
  }
  
  .velocity-grid-minimal {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  .velocity-card-minimal {
    padding: 0.75rem 0.5rem;
  }
  
  .velocity-input-minimal {
    font-size: 0.875rem;
    padding: 0.375rem;
  }
  
  .sprint-number {
    font-size: 1rem;
  }
  
  .toggle-button {
    padding: 0.75rem;
  }
  
  .toggle-title {
    font-size: 1rem;
  }
  
  .toggle-subtitle {
    font-size: 0.75rem;
  }
  
  .nav-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
  
  .result-number {
    font-size: 2.5rem;
  }
  
  .main-result {
    padding: 1.5rem 1rem;
  }
}
</style>