<template>
  <div class="home">


    <!-- Skip Navigation for Accessibility -->
    <a href="#main-content" class="skip-link">Ga naar hoofdinhoud</a>
    <a href="#planner-widget" class="skip-link">Ga naar Sprint Planner</a>

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
          <p id="cookie-description">We gebruiken lokale opslag om je sprint planning data op je apparaat op te slaan. Geen data wordt verzonden naar externe servers.</p>
        </div>
        <div class="cookie-actions">
          <button @click="acceptCookies" class="cookie-button primary" aria-describedby="accept-description">
            Accepteren
          </button>
          <router-link to="/privacy" class="cookie-button secondary" @click="scrollToTop">
            Meer info
          </router-link>
          <span id="accept-description" class="sr-only">Accepteer lokale opslag om de applicatie te gebruiken</span>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <router-link to="/" class="logo-link">
          <img src="/logo-icon.png" alt="Sprint Planner" class="nav-logo nav-logo-desktop" />
          <img src="/logo-icon.png" alt="Sprint Planner" class="nav-logo nav-logo-mobile" />
          <span class="nav-brand-text">Sprint Planner.</span>
        </router-link>
        <div class="nav-links">
          <a 
            href="https://www.linkedin.com/in/nathalja-nijman-86410389/" 
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
            <h1 id="hero-title" class="title">
              Betere <span class="title-highlight">predictability</span> voor je <span class="title-highlight">sprint planning</span>
            </h1>
            <p class="subtitle">
              Voor PO's en agilisten die data-driven willen plannen. Bereken team velocity en sprint capaciteit in 4 eenvoudige stappen.
              <strong>Geen complexe tools, gewoon eerlijke planning.</strong>
            </p>
            <div class="hero-cta">
              <button @click="scrollToWidget" class="cta-button primary" aria-describedby="cta-description">
                <span class="cta-text">Start je Sprint Planning</span>
                <span class="cta-icon">→</span>
              </button>
              <p class="cta-subtext">Gratis • Geen registratie • Direct resultaat</p>
            </div>
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

        <!-- Section Header -->
        <div class="section-header">
          <h2 id="planner-title" class="section-title">Sprint Planner</h2>
          <p class="section-subtitle">Plan je volgende sprint in 4 eenvoudige stappen</p>
        </div>

        <div class="progress-container" role="group" aria-labelledby="progress-title">
          <h3 id="progress-title" class="sr-only">Sprint planning wizard</h3>
          
          <!-- Modern Progress Bar -->
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <div 
                class="progress-fill"
                :style="{ width: ((currentStep - 1) / (steps.length - 1)) * 100 + '%' }"
                aria-hidden="true"
              ></div>
            </div>
          </div>
            
          <div class="progress-steps">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
                  class="progress-step"
              :class="{ 
                'active': index + 1 === currentStep, 
                    'completed': index + 1 < currentStep,
                    'clickable': index + 1 < currentStep || index + 1 === currentStep
                  }"
                  :data-step="index + 1"
                  :aria-label="'Stap ' + (index + 1) + ': ' + step.title + (index + 1 < currentStep ? ' (voltooid)' : '')"
                  :aria-describedby="'step-' + (index + 1) + '-description'"
                  role="button"
                  :tabindex="index + 1 <= currentStep ? '0' : '-1'"
                  @click="goToStep(index + 1)"
                  @keydown="handleStepperKeydown($event, index + 1)"
                >
                  <div class="step-circle">
                    <svg v-if="index + 1 < currentStep" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span v-else aria-hidden="true">{{ index + 1 }}</span>
          </div>
                  <div class="step-label">
                    <span class="step-title">{{ step.title }}</span>
                    <span v-if="index + 1 < currentStep" class="step-status">Voltooid</span>
                    <span v-else-if="index + 1 === currentStep" class="step-status current">Huidig</span>
        </div>
                  <div :id="'step-' + (index + 1) + '-description'" class="sr-only">
                    {{ index + 1 === 1 ? 'Configureer je team velocity door historische data in te voeren of een gemiddelde waarde op te geven.' : '' }}
                    {{ index + 1 === 2 ? 'Stel je team capaciteit in door het aantal developers en hun beschikbare uren per week te definiëren.' : '' }}
                    {{ index + 1 === 3 ? 'Voeg eventuele afwezigheden en buffers toe voor realistische sprint planning.' : '' }}
                    {{ index + 1 === 4 ? 'Bekijk je gepersonaliseerde sprint planning aanbevelingen en resultaten.' : '' }}
                  </div>
                </div>
            </div>
      </div>
          </div>

          <!-- Step Content -->
          <div class="step-content">

            <!-- Step 0: Welcome -->
            <div v-if="currentStep === 0" class="step-panel welcome-step">
              <div class="welcome-content">
                <h1 class="welcome-title">Welkom!</h1>
                <p class="welcome-subtitle">Deze tool helpt je snel en effectief je volgende sprint te plannen</p>

                <div class="welcome-benefits">
                  <h3>Wat je krijgt:</h3>
                  <ul class="benefits-list">
                    <li>Betere sprint predictability</li>
                    <li>Team velocity berekening</li>
                    <li>Realistische capaciteit planning</li>
                  </ul>
                </div>

                <div class="welcome-steps">
                  <h3>De stappen:</h3>
                  <div class="steps-overview">
                    <div class="step-item">
                      <span class="step-number">1</span>
                      <div class="step-details">
                        <span class="step-name">Team Velocity</span>
                        <span class="step-time">2 minuten</span>
                      </div>
                    </div>
                    <div class="step-item">
                      <span class="step-number">2</span>
                      <div class="step-details">
                        <span class="step-name">Team Capaciteit</span>
                        <span class="step-time">2 minuten</span>
                      </div>
                    </div>
                    <div class="step-item">
                      <span class="step-number">3</span>
                      <div class="step-details">
                        <span class="step-name">Beschikbaarheid</span>
                        <span class="step-time">1 minuut</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="welcome-tip">
                  <p><strong>Pro tip:</strong> Heb je laatste sprint gegevens bij de hand</p>
                </div>

                <div class="welcome-cta">
                  <button @click="goToNextStep" class="welcome-start-btn" :disabled="isNavigating">
                    Start je Planning
                    <svg class="welcome-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>

                  <div class="welcome-or">of</div>

                  <button @click="openLoadModal" class="welcome-load-btn">
                    <svg class="welcome-load-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <path d="M16 13H8"/>
                      <path d="M16 17H8"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    Bestaande planning laden
                  </button>
                </div>
              </div>
            </div>

            <!-- Step 3: Availability -->
            <div v-if="currentStep === 3" class="step-panel availability-step">
              <div class="step-header">
                <h3>Team beschikbaarheid</h3>
                <p>Stel team beschikbaarheid en buffer in voor realistische sprint planning</p>
              </div>

              <!-- Afwezigheid formulier -->
              <div class="add-absence-form-minimal">
                <div class="form-row-minimal">
                  <div class="form-group-minimal">
                    <label>Developer</label>
                    <select v-model="newAbsence.developerId" class="absence-select-minimal">
                      <option value="">Selecteer developer</option>
                      <!-- Individual developers scenario -->
                      <template v-if="teamInputMethod === 'individual'">
                        <option v-for="developer in developers" :key="developer.id" :value="developer.id">{{ developer.name }}</option>
                      </template>
                      <!-- Average team scenario -->
                      <template v-if="teamInputMethod === 'average'">
                        <option v-for="i in capacity.teamMembers" :key="i" :value="i">Developer {{ i }}</option>
                      </template>
                    </select>
                  </div>
                  <div class="form-group-minimal">
                    <label>Aantal uren afwezigheid</label>
                    <input
                      v-model.number="newAbsence.hours"
                      type="number"
                      min="1"
                      max="40"
                      class="absence-input-minimal"
                      placeholder="Bijv. 8"
                    />
                  </div>
                  <button
                    @click="addAbsence"
                    :disabled="!newAbsence.developerId || !newAbsence.hours"
                    class="add-absence-button-minimal"
                    aria-label="Voeg afwezigheid toe"
                  >
                    +
                  </button>
                </div>
              </div>

              <!-- Afwezighedenlijst -->
              <div v-if="generalAbsences.length > 0" class="absences-list-minimal" style="margin-top: 1.5rem;">
                <h4 style="color: #ffffff; margin-bottom: 1rem; font-size: 1rem;">Afwezigheden</h4>
                <div v-for="absence in generalAbsences" :key="absence.id" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 1rem; margin-bottom: 0.5rem; border-radius: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="color: #ffffff; font-weight: 500;">{{ getDeveloperName(absence.developerId) }}</div>
                    <div style="color: #a1a1aa; font-size: 0.875rem;">{{ absence.hours }} uur afwezigheid</div>
                  </div>
                  <button @click="removeAbsence(absence.id)" style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.5); color: #ef4444; padding: 0.5rem; border-radius: 0.25rem; cursor: pointer; font-size: 0.875rem;">
                    Verwijder
                  </button>
                </div>
              </div>

              <!-- Buffer Setting -->
              <div class="buffer-section-minimal">
                <div class="buffer-input-group">
                  <label>Buffer percentage</label>
                  <div class="input-row">
                    <input
                      v-model.number="bufferPercentage"
                      type="number"
                      min="0"
                      max="50"
                      step="1"
                      class="buffer-input"
                    />
                    <span class="input-suffix">%</span>
                  </div>
                  <div class="help-text">Voor bugs, urgente issues (marktgemiddelde: 15-20%)</div>
                </div>
              </div>

              <!-- Final Capacity Summary -->
              <div class="final-capacity-summary-minimal">
                <div class="compact-result-card" @click="toggleFinalCapacityDetails">
                  <div class="compact-result-value">{{ finalCapacity || '160' }}</div>
                  <div class="compact-result-label">uur</div>
                  <div v-if="showFinalCapacityDetails" class="compact-result-details">
                    <div>Basis: {{ totalContractHours || '200' }} uur</div>
                    <div v-if="totalAbsenceHours > 0">- {{ totalAbsenceHours }} uur afwezigheid</div>
                    <div>- {{ bufferPercentage }}% buffer</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 4: Results -->
            <div v-if="currentStep === 4" class="step-panel">
              <div class="step-header">
                <h3>Resultaten</h3>
                <p>Je gepersonaliseerde sprint planning aanbevelingen</p>
              </div>

              <div class="results-showcase">
                <!-- Hero Result -->
                <div class="hero-result">
                  <div class="hero-number">{{ recommendedSprintPoints || 0 }}</div>
                  <div class="hero-text">
                    <div class="hero-label">Story Points</div>
                    <div class="hero-context">Aanbevolen voor {{ capacity.sprintWeeks }}-week sprint</div>
                  </div>
                </div>

                <!-- Key Metrics Grid -->
                <div class="metrics-grid">
                  <div class="metric-item">
                    <div class="metric-value">{{ displayAverageVelocity }}</div>
                    <div class="metric-label">Velocity</div>
                  </div>
                  <div class="metric-item">
                    <div class="metric-value">{{ finalCapacity || 0 }}u</div>
                    <div class="metric-label">Capaciteit</div>
                  </div>
                  <div class="metric-item">
                    <div class="metric-value">{{ bufferPercentage || 0 }}%</div>
                    <div class="metric-label">Buffer</div>
                  </div>
                </div>

                <!-- Simple Details Link -->
                <div class="details-section">
                  <button
                    @click="showAllDetails = !showAllDetails"
                    class="show-details-btn"
                  >
                    {{ showAllDetails ? 'Verberg details' : 'Toon berekening' }}
                  </button>

                  <!-- All Details in One Clean Section -->
                  <div v-if="showAllDetails" class="details-content">
                    <div class="detail-block">
                      <h4>Velocity berekening</h4>
                      <p v-if="velocityInputMethod === 'manual'">
                        {{ manualAverageVelocity }} SP handmatig ingevoerd,
                        aangepast voor marktgemiddelde overhead (36%):
                        <strong>{{ Math.round(manualAverageVelocity * 0.64 * 100) / 100 }} SP effectief</strong>
                      </p>
                      <p v-else>
                        {{ displayAverageVelocity }} SP gemiddelde uit {{ filledSprints }} sprints,
                        aangepast voor marktgemiddelde overhead (36%):
                        <strong>{{ Math.round(displayAverageVelocity * 0.64 * 100) / 100 }} SP effectief</strong>
                      </p>
                    </div>

                    <div class="detail-block">
                      <h4>Capaciteit berekening</h4>
                      <p v-if="teamInputMethod === 'average'">
                        {{ capacity.teamMembers }} developers × {{ capacity.sprintWeeks }} weken × {{ capacity.contractHoursPerWeek }} uur = {{ totalContractHours }} uur basis.
                        <span v-if="totalAbsenceHours > 0">Min {{ totalAbsenceHours }} uur afwezigheid. </span>
                        Min {{ bufferPercentage }}% buffer = <strong>{{ finalCapacity || 0 }} uur netto</strong>
                      </p>
                      <p v-else>
                        {{ developers.length }} developers = {{ totalContractHours }} uur basis.
                        <span v-if="totalAbsenceHours > 0">Min {{ totalAbsenceHours }} uur afwezigheid. </span>
                        Min {{ bufferPercentage }}% buffer = <strong>{{ finalCapacity || 0 }} uur netto</strong>
                      </p>
                    </div>

                    <div class="detail-block">
                      <h4>Jouw configuratie</h4>
                      <div class="config-summary">
                        <span>{{ velocityInputMethod === 'manual' ? 'Snelle velocity invoer' : 'Historische velocity data' }}</span> •
                        <span>{{ teamInputMethod === 'average' ? 'Gemiddelde team uren' : 'Individuele developers' }}</span> •
                        <span>{{ capacity.sprintWeeks }}-week sprint</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 1: Historical Velocity -->
            <div v-if="currentStep === 1" class="step-panel velocity-step">
              <div class="step-header">
                <h3>Team velocity bepalen</h3>
                <p>Kies hoe je de velocity van je team wilt invoeren</p>
              </div>

              <!-- Method Selection Cards -->
              <div class="method-selection">
                <div
                  @click="velocityInputMethod = 'manual'; updateStepCompletion()"
                  class="method-card"
                  :class="{ 'selected': velocityInputMethod === 'manual' }"
                >
                  <div class="method-content">
                    <h4>Snelle invoer</h4>
                    <p>Ik ken mijn gemiddelde velocity al</p>
                    <div class="method-time">30 seconden</div>
                  </div>
                  <div class="method-radio" :class="{ 'checked': velocityInputMethod === 'manual' }"></div>
                </div>

                <div
                  @click="velocityInputMethod = 'individual'; updateStepCompletion()"
                  class="method-card"
                  :class="{ 'selected': velocityInputMethod === 'individual' }"
                >
                  <div class="method-content">
                    <h4>Historische data</h4>
                    <p>Bereken op basis van laatste 6 sprints</p>
                    <div class="method-time">2 minuten</div>
                  </div>
                  <div class="method-radio" :class="{ 'checked': velocityInputMethod === 'individual' }"></div>
                </div>
              </div>

              <!-- Individual Sprint Input -->
              <div v-if="velocityInputMethod === 'individual'" class="velocity-input-section">
                <div class="input-section-header">
                  <h4>Laatste 6 sprints</h4>
                  <p>Voer het aantal voltooide story points per sprint in</p>
                </div>

                <div class="velocity-grid" role="group" aria-labelledby="velocity-inputs-title">
                  <h4 id="velocity-inputs-title" class="sr-only">Sprint velocity inputs</h4>
                  <div v-for="(sprint, index) in sprints" :key="index" class="velocity-input-card">
                    <div class="sprint-header">
                      <span class="sprint-number">Sprint {{ index + 1 }}</span>
                      <span class="sprint-period">{{ getPeriodLabel(index) }}</span>
                    </div>
                    <div class="input-container">
                      <input
                        :id="`sprint-${index}`"
                        v-model.number="sprint.velocity"
                        type="number"
                        min="0"
                        placeholder="bijv. 25"
                        :class="['velocity-input', { 'error': shouldShowError(`sprint-${index}`) }]"
                        @input="markFieldAsTouched(`sprint-${index}`); validateField(`sprint-${index}`, sprint.velocity, { required: true, min: 1 }); updateStepCompletion()"
                        @blur="markFieldAsTouched(`sprint-${index}`)"
                        :aria-label="`Sprint ${index + 1} velocity in story points`"
                      />
                      <span class="input-unit">SP</span>
                    </div>
                    <div v-if="shouldShowError(`sprint-${index}`)" class="field-error">
                      {{ getFieldError(`sprint-${index}`) }}
                    </div>
                  </div>
                </div>

                <!-- Progress Indicator -->
                <div class="velocity-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: (filledSprints / 6 * 100) + '%' }"></div>
                  </div>
                  <span class="progress-text">{{ filledSprints }}/6 sprints ingevuld</span>
                </div>
              </div>

              <!-- Manual Average Input -->
              <div v-if="velocityInputMethod === 'manual'" class="manual-input-section">
                <div class="input-section-header">
                  <h4>Gemiddelde velocity invoeren</h4>
                  <p>Voer de gemiddelde velocity van je team in story points in</p>
                </div>

                <div class="manual-input-card">
                  <div class="velocity-input-large">
                    <input
                      v-model.number="manualAverageVelocity"
                      type="number"
                      min="0"
                      placeholder="bijv. 28"
                      :class="['velocity-input-big', { 'error': shouldShowError('manualVelocity') }]"
                      @input="markFieldAsTouched('manualVelocity'); validateField('manualVelocity', manualAverageVelocity, { required: true, min: 1 }); updateStepCompletion()"
                      @blur="markFieldAsTouched('manualVelocity')"
                    />
                    <span class="velocity-unit">story points per sprint</span>
                  </div>

                  <div v-if="shouldShowError('manualVelocity')" class="field-error">
                    {{ getFieldError('manualVelocity') }}
                  </div>
                </div>

                <!-- Information Card -->
                <div class="info-card">
                  <div class="info-header">
                    <span class="info-title">Realistische berekening</span>
                  </div>
                  <div class="info-content">
                    <p>Alle velocity data wordt automatisch aangepast voor overhead zoals:</p>
                    <div class="overhead-list">
                      <div class="overhead-item">• 7% afwezigheid (vakantie, ziekte)</div>
                      <div class="overhead-item">• 17% meetings & ceremonies</div>
                      <div class="overhead-item">• 12% context switching</div>
                    </div>
                  </div>
                </div>
              </div>


              <!-- Velocity Summary - Only for Individual Sprints -->
              <div v-if="velocityInputMethod === 'individual' && filledSprints > 0" class="velocity-summary">
                <div class="summary-card">
                  <div class="summary-header">
                    <span class="summary-title">Berekende gemiddelde</span>
                  </div>
                  <div class="summary-value">
                    <span class="value-number">{{ displayAverageVelocity }}</span>
                    <span class="value-unit">story points</span>
                  </div>
                  <div class="summary-details">
                    Gebaseerd op {{ filledSprints }} van 6 sprints
                  </div>
                </div>

                <!-- Information Card for Historical Data -->
                <div class="info-card">
                  <div class="info-header">
                    <span class="info-title">Realistische berekening</span>
                  </div>
                  <div class="info-content">
                    <p>Deze historische data wordt automatisch aangepast voor overhead zoals:</p>
                    <div class="overhead-list">
                      <div class="overhead-item">• 7% afwezigheid (vakantie, ziekte)</div>
                      <div class="overhead-item">• 17% meetings & ceremonies</div>
                      <div class="overhead-item">• 12% context switching</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Step 2: Team Capacity -->
            <div v-if="currentStep === 2" class="step-panel capacity-step">

              <div class="step-header">
                <h3>{{ steps[1].title }}</h3>
                <p>Configureer je team capaciteit op basis van contracturen of individuele developers</p>
                </div>
                
                <!-- Team Input Method Toggle -->
                <div class="team-input-toggle" style="display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 1rem !important; margin-bottom: 2rem !important; padding: 1rem !important; background: rgba(255, 255, 255, 0.1) !important; border-radius: 1rem !important;">
                  <button 
                  @click="setTeamMethod('average')"
                  :class="['toggle-button', { active: teamInputMethod === 'average' }]"
                  aria-pressed="teamInputMethod === 'average'"
                  style="display: flex !important; align-items: center !important; gap: 1rem !important; background: rgba(255, 255, 255, 0.1) !important; border: 1px solid rgba(255, 255, 255, 0.2) !important; border-radius: 0.75rem !important; padding: 1.5rem !important; cursor: pointer !important; color: white !important; font-size: 1rem !important; transition: all 0.2s ease !important; z-index: 999 !important; position: relative !important; pointer-events: auto !important;"
                >
                  <div class="toggle-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                    <div class="toggle-content">
                    <div class="toggle-title">Gemiddelde contracturen</div>
                    <div class="toggle-subtitle">Aantal developers × gemiddelde uren per week</div>
                    </div>
                  </button>
                  
                  <button 
                  @click="setTeamMethod('individual')"
                  :class="['toggle-button', { active: teamInputMethod === 'individual' }]"
                  aria-pressed="teamInputMethod === 'individual'"
                  style="display: flex !important; align-items: center !important; gap: 1rem !important; background: rgba(255, 255, 255, 0.1) !important; border: 1px solid rgba(255, 255, 255, 0.2) !important; border-radius: 0.75rem !important; padding: 1.5rem !important; cursor: pointer !important; color: white !important; font-size: 1rem !important; transition: all 0.2s ease !important; z-index: 999 !important; position: relative !important; pointer-events: auto !important;"
                >
                  <div class="toggle-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5V22h2v-6h2v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.12 7.88 7 6.5 7S4 8.12 4 9.5V15h-.5v7h4z"/>
                    </svg>
                  </div>
                    <div class="toggle-content">
                    <div class="toggle-title">Individuele developers</div>
                    <div class="toggle-subtitle">Voeg developers toe met hun specifieke uren</div>
                    </div>
                  </button>
                </div>
                
              <!-- Individual Developers Section -->
              <div v-if="teamInputMethod === 'individual'" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 2rem; margin: 2rem 0; border-radius: 1rem;">
                <h4 style="color: #3b82f6; margin-bottom: 1rem; font-size: 1.2rem;">Individuele Developers</h4>
                <p style="color: #a1a1aa; margin-bottom: 1.5rem;">Voeg developers toe met hun specifieke contracturen per week.</p>

                <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                  <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 1rem; align-items: end;">
                    <div>
                      <label style="display: block; color: #ffffff; font-size: 0.875rem; margin-bottom: 0.5rem;">Developer naam</label>
                      <input
                        v-model="newDeveloper.name"
                        type="text"
                        placeholder="Bijv. Jan de Vries"
                        style="width: 100%; padding: 0.75rem; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0.5rem; color: white; font-size: 1rem;">
                      </div>
                    <div>
                      <label style="display: block; color: #ffffff; font-size: 0.875rem; margin-bottom: 0.5rem;">Uren per week</label>
                      <input
                        v-model.number="newDeveloper.contractHoursPerWeek"
                        type="number"
                        placeholder="40"
                        min="1"
                        max="60"
                        style="width: 100%; padding: 0.75rem; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 0.5rem; color: white; font-size: 1rem;">
                      </div>
                    <button
                      @click="addDeveloper"
                      style="padding: 0.75rem 1.5rem; background: #3b82f6; border: none; border-radius: 0.5rem; color: white; font-weight: 500; cursor: pointer;">
                      Toevoegen
                      </button>
                    </div>
                  </div>

                <!-- Developer List -->
                <div v-if="developers.length === 0" style="color: #a1a1aa; font-size: 0.875rem; text-align: center; padding: 2rem;">
                  Nog geen developers toegevoegd. Voeg je eerste developer toe om te beginnen.
                      </div>

                <div v-if="developers.length > 0" style="margin-top: 1.5rem;">
                  <h5 style="color: #ffffff; margin-bottom: 1rem; font-size: 1rem;">Team Overzicht</h5>
                  <div v-for="developer in developers" :key="developer.id" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 1rem; margin-bottom: 0.5rem; border-radius: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <span style="color: #ffffff; font-weight: 500;">{{ developer.name }}</span>
                      <span style="color: #a1a1aa; margin-left: 1rem;">{{ developer.contractHoursPerWeek }} uur/week</span>
                    </div>
                    <button @click="removeDeveloper(developer.id)" style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.5); color: #ef4444; padding: 0.5rem; border-radius: 0.25rem; cursor: pointer; font-size: 0.875rem;">
                      Verwijder
                        </button>
                      </div>

                  <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; text-align: center;">
                    <span style="color: #3b82f6; font-weight: 600;">Totaal: {{ totalIndividualHours }} uur/week</span>
                    </div>
                  </div>
                </div>

              <!-- Average Team Hours Option -->
              <div v-if="teamInputMethod === 'average'" class="average-team-section">
                <div class="config-grid-minimal">
                  <div class="config-item-minimal">
                    <label>Sprint duur</label>
                    <div class="input-group-minimal">
                      <input
                        v-model.number="capacity.sprintWeeks"
                        type="number"
                        min="1"
                        max="4"
                        class="config-input-minimal"
                        @input="updateStepCompletion"
                      />
                      <span class="input-suffix-minimal">weken</span>
                    </div>
                    </div>

                  <div class="config-item-minimal">
                    <label>Aantal developers</label>
                    <div class="input-group-minimal">
                      <input
                        v-model.number="capacity.teamMembers"
                        type="number"
                        min="1"
                        max="20"
                        :class="['config-input-minimal', { 'error': !isFieldValid('teamMembers') }]"
                        @input="validateField('teamMembers', capacity.teamMembers, { required: true, min: 1 }); updateStepCompletion()"
                        :aria-invalid="!isFieldValid('teamMembers')"
                        :aria-describedby="'team-members-error'"
                      />
                      <div v-if="!isFieldValid('teamMembers')" id="team-members-error" class="field-error">
                        {{ getFieldError('teamMembers') }}
                  </div>
                      <span class="input-suffix-minimal">personen</span>
                </div>
              </div>

                  <div class="config-item-minimal">
                    <label>Gemiddelde uren per week</label>
                    <div class="input-group-minimal">
                      <input
                        v-model.number="averageTeamHours"
                        type="number"
                        min="10"
                        max="60"
                        :class="['config-input-minimal', { 'error': !isFieldValid('averageHours') }]"
                        @input="validateField('averageHours', averageTeamHours, { required: true, min: 1, max: 40 }); updateStepCompletion()"
                        :aria-invalid="!isFieldValid('averageHours')"
                        :aria-describedby="'average-hours-error'"
                      />
                      <div v-if="!isFieldValid('averageHours')" id="average-hours-error" class="field-error">
                        {{ getFieldError('averageHours') }}
                  </div>
                      <span class="input-suffix-minimal">uur</span>
                    </div>
                    </div>
                    </div>
                    
                <!-- Team Capacity Summary for Average -->
                <div class="team-capacity-summary-minimal">
                  <div class="compact-result-card" @click="toggleTeamCapacityDetails">
                    <div class="compact-result-value">{{ capacity.teamMembers * capacity.sprintWeeks * averageTeamHours }}</div>
                    <div class="compact-result-label">uur</div>
                    <div v-if="showTeamCapacityDetails" class="compact-result-details">
                      {{ capacity.teamMembers }} personen × {{ capacity.sprintWeeks }} weken × {{ averageTeamHours }}u/week
                </div>
              </div>
            </div>

              <!-- Individual Developers Option -->
              <div v-if="teamInputMethod === 'individual'" style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 2rem; margin: 2rem 0; border-radius: 1rem;">
                <h4 style="color: #3b82f6; margin-bottom: 1rem; font-size: 1.2rem;">🧑‍💻 Individuele Developers</h4>
                <p style="color: #a1a1aa; margin-bottom: 1.5rem;">Voeg developers toe met hun specifieke contracturen per week.</p>
                <div class="add-developer-form-minimal">
                  <div class="form-row-minimal">
                    <div class="form-group-minimal">
                      <label>Developer naam</label>
                      <input
                        v-model="newDeveloper.name"
                        type="text"
                        placeholder="Bijv. Jan de Vries"
                        class="developer-input-minimal"
                      />
              </div>
                    <div class="form-group-minimal">
                      <label>Uren per week</label>
                      <input
                        v-model.number="newDeveloper.contractHoursPerWeek"
                        type="number"
                        min="10"
                        max="60"
                        class="hours-input-minimal"
                      />
                  </div>
                <button 
                      @click="addDeveloper"
                      :disabled="!newDeveloper.name.trim() || !newDeveloper.contractHoursPerWeek"
                      class="add-button-minimal"
                    >
                      Toevoegen
                </button>
                </div>

                <div v-if="developers.length > 0" class="developers-list-minimal">
                  <div v-for="developer in developers" :key="developer.id" class="developer-card-minimal">
                    <div class="developer-info-minimal">
                      <div class="developer-name-minimal">{{ developer.name }}</div>
                      <div class="developer-hours-minimal">{{ developer.contractHoursPerWeek }} uur/week</div>
                  </div>
                    <button @click="removeDeveloper(developer.id)" class="remove-button-minimal">
                      Verwijderen
                </button>
              </div>
                    </div>
                    
                <!-- Team Capacity Summary for Individual -->
                <div v-if="developers.length > 0" class="team-capacity-summary-minimal">
                  <div class="compact-result-card" @click="toggleIndividualCapacityDetails">
                    <div class="compact-result-value">{{ totalIndividualHours * capacity.sprintWeeks }}</div>
                    <div class="compact-result-label">uur</div>
                    <div v-if="showIndividualCapacityDetails" class="compact-result-details">
                      {{ totalIndividualHours }} uur/week × {{ capacity.sprintWeeks }} weken
                    </div>
                  </div>
                </div>
                    </div>
                    
                    </div>
                    


            <!-- Step 3: Results -->
            <div v-if="currentStep === 3" class="step-panel">
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
                    <div class="result-info">
                      <div class="result-label">Gemiddelde velocity</div>
                      <div class="result-value">{{ averageVelocity }}</div>
                    </div>
                  </div>

                  <div class="result-item">
                    <div class="result-info">
                      <div class="result-label">Team capaciteit</div>
                      <div class="result-value">{{ teamCapacity }}</div>
                    </div>
                  </div>

                  <div class="result-item">
                    <div class="result-info">
                      <div class="result-label">Vertrouwen</div>
                      <div class="result-value confidence" :class="confidence.toLowerCase()">{{ confidence }}</div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <!-- Loaded Planning Context Banner -->
        <div v-if="currentStep > 0 && currentPlanningKey" class="loaded-planning-banner">
          <div class="banner-content">
            <div class="banner-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <path d="M16 13H8"/>
                <path d="M16 17H8"/>
              </svg>
            </div>
            <div class="banner-text">
              <div class="banner-title">{{ loadedPlanningBannerTitle }}</div>
              <div class="banner-subtitle">{{ loadedPlanningBannerSubtitle }}</div>
            </div>
            <button @click="currentPlanningKey = null" class="banner-dismiss" aria-label="Banner sluiten">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Multi-Sprint Analytics Banner -->
        <div v-if="currentStep === 4 && hasMultipleSprints" class="analytics-detection-banner">
          <div class="banner-content-analytics">
            <div class="banner-icon-analytics">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 3v18h18"/>
                <path d="M8 17l4-4 4 4 6-6"/>
                <circle cx="8" cy="17" r="1"/>
                <circle cx="12" cy="13" r="1"/>
                <circle cx="16" cy="17" r="1"/>
                <circle cx="22" cy="11" r="1"/>
              </svg>
            </div>
            <div class="banner-text-analytics">
              <div class="banner-title-analytics">Meerdere sprints gevonden</div>
              <div class="banner-subtitle-analytics">{{ sprintAnalyticsData.length }} sprints in planning serie</div>
            </div>
            <button @click="showAnalyticsDashboard = true" class="analytics-button">
              Bekijk Analytics Dashboard
            </button>
          </div>
        </div>

        <!-- Planning Actions -->
        <div v-if="currentStep === 4" class="planning-actions">
          <div class="action-buttons">
            <button @click="showSaveModal = true" class="action-btn save-btn">
              <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                <polyline points="17,21 17,13 7,13 7,21"/>
                <polyline points="7,3 7,8 15,8"/>
              </svg>
              <span>Planning opslaan</span>
            </button>

            <button @click="showFeedbackModal = true" class="action-btn feedback-btn">
              <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              <span>Feedback geven</span>
            </button>
          </div>
        </div>

        <!-- Universal Navigation Component -->
        <div v-if="currentStep > 0" class="universal-navigation">
          <div class="nav-container">
            <div class="nav-spacer"></div>
            <div class="nav-buttons">
              <!-- Previous Button -->
            <button
              v-if="currentStep > 0" 
                @click="goToPreviousStep"
                class="nav-btn prev-btn"
                :disabled="isNavigating"
                aria-label="Ga naar vorige stap"
              >
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
                <span class="nav-text">Vorige</span>
            </button>

              <!-- Next Button -->
            <button
              v-if="currentStep < 4"
@click="goToNextStep"
                class="nav-btn next-btn"
                :disabled="!canProceed || isNavigating"
                :class="{ 'disabled': !canProceed }"
                aria-label="Ga naar volgende stap"
              >
<span class="nav-text">Volgende</span>
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>

              <!-- Start Over Button -->
            <button
              v-if="currentStep === 4" 
              @click="resetStepper" 
                class="nav-btn reset-btn"
                :disabled="isNavigating"
                aria-label="Start opnieuw"
              >
                <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                </svg>
                <span class="nav-text">Start Over</span>
            </button>
          </div>
            <div class="nav-spacer"></div>
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
              <p class="footer-copyright">© 2025 sprintplanner.nl</p>
          </div>
            <div class="footer-links-minimal">
              <router-link to="/privacy" class="footer-link-minimal" @click="scrollToTop">Privacy</router-link>
              <router-link to="/data-deletion" class="footer-link-minimal" @click="scrollToTop">Delete Data</router-link>
              <router-link to="/cookie-settings" class="footer-link-minimal" @click="scrollToTop">Cookies</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <!-- Save Planning Modal -->
  <div v-if="showSaveModal" class="modal-overlay" @click="showSaveModal = false">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>Planning opslaan</h3>
        <button @click="showSaveModal = false" class="close-button" aria-label="Sluiten">×</button>
      </div>
      <div class="modal-body">
        <div v-if="savedPlanningKey" class="success-state">
          <div class="success-icon">✓</div>
          <p>Planning succesvol opgeslagen!</p>
          <div class="key-display">
            <label>Planning code:</label>
            <div class="key-value">{{ savedPlanningKey }}</div>
            <button @click="copyToClipboard(savedPlanningKey)" class="copy-button">
              Kopiëren
            </button>
          </div>
          <p class="key-info">Bewaar deze code om je planning later te laden.</p>
        </div>
        <div v-else class="save-form">
          <p>Sla je huidige planning op om later te laden of te delen.</p>
          <button @click="savePlanningData" class="save-button" :disabled="isSaving">
            {{ isSaving ? 'Opslaan...' : 'Opslaan' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Load Planning Modal - Modern UX 2025 -->
  <div v-if="showLoadModal" class="modal-overlay-modern" @click="showLoadModal = false">
    <div class="modal-content-modern" @click.stop>
      <!-- Hero Section -->
      <div class="modal-hero">
        <div class="modal-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <path d="M16 13H8"/>
            <path d="M16 17H8"/>
          </svg>
        </div>
        <h2>Planning laden</h2>
        <p class="modal-subtitle">Voer je planning code in om een bestaande sprint planning te laden</p>
      </div>

      <!-- Content Section -->
      <div class="modal-content-section">
        <div class="input-group-modern">
          <label for="planningKey" class="input-label-modern">Planning code</label>
          <div class="input-wrapper-modern">
            <input
              id="planningKey"
              v-model="loadKey"
              type="text"
              placeholder="Bijv. ABC123XY"
              class="input-modern"
              :class="{ 'error': loadError }"
              @input="loadError = ''"
            >
            <div v-if="loadKey" class="input-status">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
            </div>
          </div>
          <div v-if="loadError" class="error-message-modern">
            <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {{ loadError }}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="modal-actions-modern">
          <button @click="showLoadModal = false" class="btn-secondary-modern">
            Annuleren
          </button>
          <button
            @click="loadPlanningData(loadKey)"
            class="btn-primary-modern"
            :disabled="!loadKey || isLoading"
            :class="{ 'loading': isLoading }"
          >
            <span v-if="!isLoading">Planning laden</span>
            <span v-else class="loading-content">
              <svg class="loading-spinner" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                  <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                </circle>
              </svg>
              Laden...
            </span>
          </button>
        </div>

        <!-- Help Section -->
        <div class="modal-help">
          <div class="help-item">
            <svg class="help-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span>Planning codes zijn 8 karakters lang (bijv. ABC123XY)</span>
          </div>
        </div>
      </div>

      <!-- Close Button -->
      <button @click="showLoadModal = false" class="close-button-modern" aria-label="Sluiten">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Feedback Modal -->
  <div v-if="showFeedbackModal" class="modal-overlay" @click="showFeedbackModal = false">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>Feedback geven</h3>
        <button @click="showFeedbackModal = false" class="close-button" aria-label="Sluiten">×</button>
      </div>
      <div class="modal-body">
        <div v-if="feedbackSubmitted" class="success-state">
          <div class="success-icon">✓</div>
          <p>Bedankt voor je feedback!</p>
          <p class="feedback-info">Je feedback helpt ons het model te verbeteren.</p>
        </div>
        <div v-else class="feedback-form">
          <p>Hoe accuraat was de voorspelling voor jouw sprint?</p>

          <div class="rating-section">
            <label>Accuraatheid:</label>
            <div class="rating-buttons">
              <button
                v-for="rating in [1,2,3,4,5]"
                :key="rating"
                @click="feedbackRating = rating"
                :class="['rating-button', { active: feedbackRating === rating }]"
              >
                {{ rating }}
              </button>
            </div>
          </div>

          <div class="feedback-text">
            <label for="feedbackComment">Opmerkingen (optioneel):</label>
            <textarea
              id="feedbackComment"
              v-model="feedbackComment"
              placeholder="Wat kunnen we verbeteren?"
              class="feedback-textarea"
            ></textarea>
          </div>

          <button @click="submitFeedback" class="submit-button" :disabled="!feedbackRating || isSubmittingFeedback">
            {{ isSubmittingFeedback ? 'Versturen...' : 'Versturen' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Analytics Dashboard Modal -->
  <div v-if="showAnalyticsDashboard" class="modal-overlay-analytics" @click="showAnalyticsDashboard = false">
    <div class="modal-content-analytics" @click.stop>
      <!-- Dashboard Header -->
      <div class="dashboard-header">
        <div class="header-content">
          <div class="header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"/>
              <path d="M8 17l4-4 4 4 6-6"/>
              <circle cx="8" cy="17" r="1"/>
              <circle cx="12" cy="13" r="1"/>
              <circle cx="16" cy="17" r="1"/>
              <circle cx="22" cy="11" r="1"/>
            </svg>
          </div>
          <div class="header-text">
            <h2>Sprint Analytics Dashboard</h2>
            <p>Analyse van {{ sprintAnalyticsData.length }} sprints in planning serie</p>
          </div>
        </div>
        <button @click="showAnalyticsDashboard = false" class="close-button-analytics">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <!-- Sprint Comparison Grid -->
        <div class="analytics-section">
          <h3 class="section-title">Sprint Vergelijking</h3>
          <div class="comparison-grid">
            <div class="grid-header">
              <div class="grid-cell">Sprint</div>
              <div class="grid-cell">Voorspeld</div>
              <div class="grid-cell">Werkelijk</div>
              <div class="grid-cell">Accuracy</div>
              <div class="grid-cell">Team</div>
              <div class="grid-cell">Duur</div>
            </div>
            <div v-for="(sprint, index) in sprintAnalyticsData" :key="sprint.key" class="grid-row">
              <div class="grid-cell sprint-number">#{{ index + 1 }}</div>
              <div class="grid-cell predicted">{{ sprint.predicted }} pts</div>
              <div class="grid-cell actual">
                <span v-if="sprint.actual">{{ sprint.actual }} pts</span>
                <span v-else class="pending">In uitvoering</span>
              </div>
              <div class="grid-cell accuracy">
                <span v-if="sprint.accuracy" :class="getAccuracyClass(sprint.accuracy)">
                  {{ sprint.accuracy }}%
                </span>
                <span v-else class="pending">-</span>
              </div>
              <div class="grid-cell">{{ sprint.teamSize }} pers</div>
              <div class="grid-cell">{{ sprint.duration }} wk</div>
            </div>
          </div>
        </div>

        <!-- Performance Metrics -->
        <div class="analytics-section">
          <h3 class="section-title">Performance Overzicht</h3>
          <div class="metrics-grid-analytics">
            <div class="metric-card">
              <div class="metric-label">Gemiddelde Velocity</div>
              <div class="metric-value">{{ averageVelocityMetric }} pts</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Voorspelling Accuracy</div>
              <div class="metric-value" :class="getAccuracyClass(overallAccuracy)">{{ overallAccuracy }}%</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Afgeronde Sprints</div>
              <div class="metric-value">{{ completedSprints }}/{{ sprintAnalyticsData.length }}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Best Performing Sprint</div>
              <div class="metric-value">#{{ bestSprintNumber }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
const currentStep = ref(0)
const canProceed = ref(false)
const velocityInputMethod = ref('manual')
const manualAverageVelocity = ref(null)

// Validation state
const validationErrors = ref({})
const touchedFields = ref({})
const isFieldValid = (field) => !validationErrors.value[field]
const getFieldError = (field) => validationErrors.value[field] || ''
const isFieldTouched = (field) => touchedFields.value[field]
const shouldShowError = (field) => isFieldTouched(field) && !isFieldValid(field)

// Navigation state
const isNavigating = ref(false)

// Validation functions
const markFieldAsTouched = (field) => {
  touchedFields.value[field] = true
}

const validateField = (field, value, rules) => {
  const errors = []

  // Handle null/undefined values properly
  const isEmpty = value === null || value === undefined || value === ''
  const numericValue = Number(value)

  if (rules.required && isEmpty) {
    errors.push('Dit veld is verplicht')
  }

  if (!isEmpty && rules.min && numericValue < rules.min) {
    errors.push(`Minimum waarde is ${rules.min}`)
  }

  if (!isEmpty && rules.max && numericValue > rules.max) {
    errors.push(`Maximum waarde is ${rules.max}`)
  }

  if (!isEmpty && rules.pattern && !rules.pattern.test(value)) {
    errors.push(rules.message || 'Ongeldige invoer')
  }

  if (errors.length > 0) {
    validationErrors.value[field] = errors[0]
  } else {
    delete validationErrors.value[field]
  }

  return errors.length === 0
}

const validateStep = (step) => {
  let isValid = true
  
  if (step === 1) {
    if (velocityInputMethod.value === 'manual') {
      isValid = validateField('manualVelocity', manualAverageVelocity.value, { 
        required: true, 
        min: 1 
      }) && isValid
    } else {
      // Validate sprint velocities
      sprints.value.forEach((sprint, index) => {
        isValid = validateField(`sprint-${index}`, sprint.velocity, { 
          required: true, 
          min: 1 
        }) && isValid
      })
    }
  } else if (step === 2) {
    if (teamInputMethod.value === 'average') {
      isValid = validateField('teamMembers', capacity.value.teamMembers, { 
        required: true, 
        min: 1 
      }) && isValid
      isValid = validateField('averageHours', averageTeamHours.value, { 
        required: true, 
        min: 1,
        max: 40
      }) && isValid
    } else {
      // Validate individual developers
      developers.value.forEach((dev, index) => {
        isValid = validateField(`dev-name-${index}`, dev.name, { 
          required: true,
          pattern: /^.{2,}$/,
          message: 'Naam moet minimaal 2 karakters zijn'
        }) && isValid
        isValid = validateField(`dev-hours-${index}`, dev.contractHoursPerWeek, { 
          required: true, 
          min: 1,
          max: 40
        }) && isValid
      })
    }
  }
  
  return isValid
}
const cookieConsentAccepted = ref(false)

const steps = [
  { title: 'Historische velocity' },
  { title: 'Team capaciteit' },
  { title: 'Beschikbaarheid' },
  { title: 'Resultaten' }
]

// Planner data
const sprints = ref([
  { velocity: null },
  { velocity: null },
  { velocity: null },
  { velocity: null },
  { velocity: null },
  { velocity: null }
])

const capacity = ref({
  sprintWeeks: 2,
  teamMembers: 5,
  contractHoursPerWeek: 40,
  bufferPercentage: 15
})

// Team input method toggle
const teamInputMethod = ref('average') // 'individual' or 'average'
console.log('teamInputMethod initialized to:', teamInputMethod.value)

// Helper functions for toggle
const setTeamMethod = (method) => {
  console.log('Setting team method to:', method)
  teamInputMethod.value = method
  updateStepCompletion()
}

// Availability input method toggle
const availabilityInputMethod = ref('percentage') // 'percentage' or 'hours'

// Individual developers with absences - start empty
const developers = ref([])

// Google Analytics 4 Integration
const analytics = ref({
  sessionId: Date.now().toString(),
  startTime: Date.now(),
  currentStep: 0
})

// Initialize Google Analytics
const initializeAnalytics = () => {
  analytics.value.startTime = Date.now()
  console.log('Google Analytics initialized for Sprint Planner')
}

// Track widget start when user clicks "Start je Planning"
const trackWidgetStart = () => {
  const checkGtag = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'widget_start', {
        event_category: 'Sprint Planner',
        event_label: 'Widget Started',
        value: 1
      })
      console.log('✅ GA4: Widget start event sent')
    } else {
      console.log('❌ GA4: gtag not available - retrying...')
      setTimeout(checkGtag, 1000)
    }
  }
  
  // Check immediately and retry if needed
  checkGtag()
}

// Track step completion with Google Analytics
const trackStepCompletion = (stepNumber, stepName) => {
  const timeSpent = Date.now() - analytics.value.startTime
  
  const sendEvent = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'step_completed', {
        event_category: 'Sprint Planner',
        event_label: `Step ${stepNumber}: ${stepName}`,
        value: stepNumber,
        custom_parameters: {
          step_name: stepName,
          step_number: stepNumber,
          time_spent: timeSpent
        }
      })
      console.log(`✅ GA4: Step ${stepNumber} (${stepName}) event sent`)
    } else {
      console.log(`❌ GA4: gtag not available for step ${stepNumber} - retrying...`)
      setTimeout(sendEvent, 500)
    }
  }
  
  sendEvent()
  analytics.value.currentStep = stepNumber
  console.log(`GA4: Step ${stepNumber} (${stepName}) completed in ${timeSpent}ms`)
}

// Track widget completion with Google Analytics
const trackWidgetCompletion = () => {
  const totalTime = Date.now() - analytics.value.startTime
  
  const sendEvent = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'widget_completed', {
        event_category: 'Sprint Planner',
        event_label: 'Widget Completed Successfully',
        value: 1,
        custom_parameters: {
          total_time: totalTime,
          completion_time: new Date().toISOString()
        }
      })
      console.log('✅ GA4: Widget completed event sent')
    } else {
      console.log('❌ GA4: gtag not available for widget completion - retrying...')
      setTimeout(sendEvent, 500)
    }
  }
  
  sendEvent()
  
  // Also track locally as backup
  trackLocalSession()
  
  console.log('GA4: Widget completed!', {
    totalTime: totalTime,
    sessionId: analytics.value.sessionId
  })
}

// Track errors with Google Analytics
const trackError = (error, context) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'widget_error', {
      event_category: 'Sprint Planner',
      event_label: `Error in ${context}`,
      value: 0,
      custom_parameters: {
        error_message: error.message || error,
        error_context: context,
        current_step: analytics.value.currentStep
      }
    })
  }
  
  console.error('GA4: Error tracked:', error, context)
}

// Track user interactions
const trackUserInteraction = (action, element) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'user_interaction', {
      event_category: 'Sprint Planner',
      event_label: `${action}: ${element}`,
      value: 1
    })
  }
}

// Track form submissions
const trackFormSubmission = (formName, success = true) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submission', {
      event_category: 'Sprint Planner',
      event_label: `${formName} - ${success ? 'Success' : 'Failed'}`,
      value: success ? 1 : 0
    })
  }
}

// Track navigation events
const trackNavigation = (direction, fromStep, toStep) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'navigation', {
      event_category: 'Sprint Planner',
      event_label: `${direction}: Step ${fromStep} → Step ${toStep}`,
      value: toStep
    })
  }
}

// Development: Analytics dashboard (only in development)
const showAnalyticsDebugInfo = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Sprint Planner Analytics Dashboard')
    console.log('=====================================')
    console.log('Session ID:', analytics.value.sessionId)
    console.log('Current Step:', analytics.value.currentStep)
    console.log('Time Elapsed:', Math.round((Date.now() - analytics.value.startTime) / 1000) + 's')
    console.log('')
    console.log('🔍 To view Google Analytics data:')
    console.log('1. Open Google Analytics dashboard')
    console.log('2. Go to Events > All Events')
    console.log('3. Filter by "Sprint Planner" category')
    console.log('4. Look for these events:')
    console.log('   - widget_start: When widget is opened')
    console.log('   - step_completed: When each step is completed')
    console.log('   - widget_completed: When user reaches results')
    console.log('   - user_interaction: Button clicks and form submissions')
    console.log('   - navigation: Step navigation events')
    console.log('   - form_submission: Form success/failure')
    console.log('   - widget_error: Any errors that occur')
    console.log('')
    console.log('📈 Key Metrics to Track:')
    console.log('- Completion rate (widget_completed / widget_start)')
    console.log('- Step drop-off points (step_completed events)')
    console.log('- Error frequency (widget_error events)')
    console.log('- Average time per step (custom_parameters.time_spent)')
    console.log('- Form submission success rate (form_submission events)')
  }
}

// Simple local analytics as backup
const localAnalytics = {
  sessions: JSON.parse(localStorage.getItem('sprintplanner_sessions') || '[]'),
  
  trackSession: (data) => {
    const session = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...data
    }
    localAnalytics.sessions.push(session)
    localStorage.setItem('sprintplanner_sessions', JSON.stringify(localAnalytics.sessions))
    console.log('📊 Local analytics tracked:', session)
  },
  
  getStats: () => {
    const sessions = localAnalytics.sessions
    const completed = sessions.filter(s => s.completed)
    return {
      totalSessions: sessions.length,
      completedSessions: completed.length,
      completionRate: sessions.length > 0 ? (completed.length / sessions.length * 100).toFixed(1) + '%' : '0%',
      averageTime: completed.length > 0 ? Math.round(completed.reduce((sum, s) => sum + (s.totalTime || 0), 0) / completed.length / 1000) + 's' : '0s'
    }
  }
}

// Track session completion
const trackLocalSession = () => {
  const totalTime = Date.now() - analytics.value.startTime
  localAnalytics.trackSession({
    completed: true,
    totalTime: totalTime,
    steps: analytics.value.steps.completed.length
  })
}

// Make analytics dashboard available globally for development
if (process.env.NODE_ENV === 'development') {
  window.showAnalyticsDebugInfo = showAnalyticsDebugInfo
  window.analytics = analytics
  window.localAnalytics = localAnalytics
}

// Average team hours (for simple input)
const averageTeamHours = ref(40)

// Team availability percentage (for average mode)
const teamAvailabilityPercentage = ref(85)
const bufferPercentage = ref(15)

// Toggle states for result card details
const showVelocityDetails = ref(false)
const showTeamCapacityDetails = ref(false)
const showIndividualCapacityDetails = ref(false)
const showFinalCapacityDetails = ref(false)

// New developer form
const newDeveloper = ref({
  name: '',
  contractHoursPerWeek: 40
})

// New absence form
const newAbsence = ref({
  type: '',
  hours: 0,
  developerId: ''
})

// General absences list (reactive)
const generalAbsences = ref([])

// All absences (from general absences list)
const allAbsences = computed(() => {
  console.log('allAbsences computed:', generalAbsences.value)
  return generalAbsences.value
})

// Absence form (legacy - keeping for compatibility)
const newAbsenceLegacy = ref({
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
  const validSprints = sprints.value.filter(s => s.velocity !== null && s.velocity !== undefined && s.velocity > 0)
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
  if (velocityInputMethod.value === 'manual') {
    return manualAverageVelocity.value || '--'
  }
  const velocity = averageVelocity.value
  return velocity > 0 ? velocity : '--'
})

// Helper functions for UX improvements
const filledSprints = computed(() => {
  return sprints.value.filter(sprint => sprint.velocity && sprint.velocity > 0).length
})

const getPeriodLabel = (index) => {
  const weeks = ['2 weken geleden', '4 weken geleden', '6 weken geleden', '8 weken geleden', '10 weken geleden', '12 weken geleden']
  return weeks[index] || 'Vorige sprint'
}

// Simplified disclosure state
const showAllDetails = ref(false)

// Loaded Planning Banner Context
const loadedPlanningBannerTitle = computed(() => {
  if (!currentPlanningKey.value) return ''

  switch(currentStep.value) {
    case 1:
      return 'Planning geladen - Controleer velocity'
    case 2:
      return 'Planning geladen - Controleer team capaciteit'
    case 3:
      return 'Planning geladen - Controleer beschikbaarheid'
    case 4:
      return 'Planning geladen - Resultaten'
    default:
      return 'Planning geladen'
  }
})

const loadedPlanningBannerSubtitle = computed(() => {
  if (!currentPlanningKey.value) return ''

  switch(currentStep.value) {
    case 1:
      return `Code: ${currentPlanningKey.value} • Wijzig indien nodig en ga verder`
    case 2:
      return `Code: ${currentPlanningKey.value} • Wijzig team instellingen indien nodig`
    case 3:
      return `Code: ${currentPlanningKey.value} • Wijzig beschikbaarheid indien nodig`
    case 4:
      return `Code: ${currentPlanningKey.value} • Je planning is klaar!`
    default:
      return `Code: ${currentPlanningKey.value}`
  }
})

// Analytics Computed Properties
const averageVelocityMetric = computed(() => {
  if (sprintAnalyticsData.value.length === 0) return 0
  const sum = sprintAnalyticsData.value.reduce((acc, sprint) => acc + sprint.velocity, 0)
  return Math.round(sum / sprintAnalyticsData.value.length)
})

const overallAccuracy = computed(() => {
  const completedSprintsWithAccuracy = sprintAnalyticsData.value.filter(sprint => sprint.accuracy !== null)
  if (completedSprintsWithAccuracy.length === 0) return 0
  const sum = completedSprintsWithAccuracy.reduce((acc, sprint) => acc + sprint.accuracy, 0)
  return Math.round(sum / completedSprintsWithAccuracy.length)
})

const completedSprints = computed(() => {
  return sprintAnalyticsData.value.filter(sprint => sprint.actual !== null).length
})

const bestSprintNumber = computed(() => {
  const completedSprintsWithAccuracy = sprintAnalyticsData.value.filter(sprint => sprint.accuracy !== null)
  if (completedSprintsWithAccuracy.length === 0) return 1

  const bestSprint = completedSprintsWithAccuracy.reduce((best, current, index) => {
    return current.accuracy > best.accuracy ? { ...current, index: index + 1 } : best
  }, { accuracy: 0, index: 1 })

  return bestSprint.index
})

const getAccuracyClass = (accuracy) => {
  if (accuracy >= 90) return 'accuracy-high'
  if (accuracy >= 75) return 'accuracy-medium'
  return 'accuracy-low'
}

// Data Persistence System
const currentPlanningKey = ref(null)
const showSaveModal = ref(false)
const showLoadModal = ref(false)
const loadKey = ref('')
const saveSuccess = ref(false)
const savedPlanningKey = ref('')
const isSaving = ref(false)
const loadError = ref('')

// Multi-Sprint Analytics System
const hasMultipleSprints = ref(false)
const sprintAnalyticsData = ref([])
const showAnalyticsDashboard = ref(false)

// Feedback System
const showFeedbackModal = ref(false)
const feedbackData = ref({
  actualPoints: null,
  sprintRating: null,
  issues: [],
  meetingsOverhead: null,
  contextSwitchingOverhead: null,
  bufferSufficient: null,
  additionalComments: ''
})
const feedbackSubmitted = ref(false)
const feedbackRating = ref(null)
const feedbackComment = ref('')
const isSubmittingFeedback = ref(false)

// Helper function to get developer name
const getDeveloperName = (developerId) => {
  if (teamInputMethod.value === 'average') {
    return `Developer ${developerId}`
  }
  
  const dev = developers.value.find(d => d.id === developerId)
  return dev ? dev.name : `Developer ${developerId}`
}

// Team capacity calculations
const totalContractHours = computed(() => {
  if (teamInputMethod.value === 'average') {
    return capacity.value.teamMembers * capacity.value.contractHoursPerWeek * capacity.value.sprintWeeks
  }
  
  if (developers.value.length === 0) return 0
  
  return developers.value.reduce((total, dev) => {
    return total + (capacity.value.sprintWeeks * dev.contractHoursPerWeek)
  }, 0)
})

const totalAbsenceHours = computed(() => {
  return generalAbsences.value.reduce((total, absence) => {
    return total + (absence.hours || 0)
  }, 0)
})

const availableHours = computed(() => {
  const contractHours = totalContractHours.value
  const absenceHours = totalAbsenceHours.value
  return Math.max(0, contractHours - absenceHours)
})

const finalCapacity = computed(() => {
  const available = availableHours.value
  const bufferReduction = available * (bufferPercentage.value / 100)
  return Math.max(0, Math.round(available - bufferReduction))
})

const teamCapacity = computed(() => {
  return finalCapacity.value
})

// Total individual hours for summary
const totalIndividualHours = computed(() => {
  if (developers.value.length === 0) return 0
  return developers.value.reduce((total, dev) => total + (dev.contractHoursPerWeek || 0), 0)
})

// Sprint planning calculations
const recommendedSprintPoints = computed(() => {
  const velocity = averageVelocity.value
  const capacity = teamCapacity.value

  if (velocity === 0 || capacity === 0) return 0

  // Always use market averages to calculate realistic hours per story point
  const totalContractCapacity = totalContractHours.value

  // Apply market average reductions:
  // - 7% sick/vacation, 17% meetings, 12% context switching = 36% total overhead
  const marketEfficiency = 0.64 // (100% - 36% overhead)
  const effectiveHistoricalCapacity = totalContractCapacity * marketEfficiency

  const hoursPerStoryPoint = effectiveHistoricalCapacity / velocity

  // Convert current capacity to story points using calculated ratio
  const capacityInStoryPoints = Math.round(capacity / hoursPerStoryPoint)

  return capacityInStoryPoints
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

// Toggle functions for result card details
const toggleVelocityDetails = () => {
  showVelocityDetails.value = !showVelocityDetails.value
}

const toggleTeamCapacityDetails = () => {
  showTeamCapacityDetails.value = !showTeamCapacityDetails.value
}

const toggleIndividualCapacityDetails = () => {
  showIndividualCapacityDetails.value = !showIndividualCapacityDetails.value
}

const toggleFinalCapacityDetails = () => {
  showFinalCapacityDetails.value = !showFinalCapacityDetails.value
}

// Stepper methods - SIMPLIFIED
const updateStepCompletion = () => {
  console.log(' updateStepCompletion called, currentStep:', currentStep.value)
  
  // Validate current step
  const isStepValid = validateStep(currentStep.value)
  
  if (currentStep.value === 0) {
    // Step 0: Welcome screen - always allow proceeding
    canProceed.value = true
  } else if (currentStep.value === 1) {
    // Step 1: Check if velocity is entered
    if (velocityInputMethod.value === 'manual') {
      canProceed.value = isStepValid && manualAverageVelocity.value > 0
    } else {
      canProceed.value = isStepValid && sprints.value.some(s => s.velocity > 0)
    }
  } else if (currentStep.value === 2) {
    // Step 2: Check if team capacity is configured
    if (teamInputMethod.value === 'average') {
      canProceed.value = isStepValid && capacity.value.teamMembers > 0 && averageTeamHours.value > 0
    } else {
      canProceed.value = isStepValid && developers.value.length > 0
    }
  } else if (currentStep.value === 3) {
    // Step 3: Results - allow proceeding
    canProceed.value = true
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
  if (newDeveloper.value.name.trim() && newDeveloper.value.contractHoursPerWeek > 0) {
    const newId = developers.value.length > 0 ? Math.max(...developers.value.map(d => d.id)) + 1 : 1
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
  console.log('addAbsence called', newAbsence.value)
  
  if (newAbsence.value.developerId && newAbsence.value.hours > 0) {
    // Add to reactive absences list
    generalAbsences.value.push({
        id: Date.now(),
      developerId: newAbsence.value.developerId,
      hours: newAbsence.value.hours
    })
    
    // Track successful form submission
    trackFormSubmission('Add Absence', true)
    trackUserInteraction('Add', 'Developer Absence')
    
    console.log('Added absence:', generalAbsences.value)
    
    // Reset form
      newAbsence.value = {
      type: '',
      hours: 0,
      developerId: ''
      }
      updateStepCompletion()
  } else {
    // Track failed form submission
    trackFormSubmission('Add Absence', false)
    trackUserInteraction('Error', 'Form Validation Failed')
    
    console.log('Missing required fields:', {
      developerId: newAbsence.value.developerId,
      hours: newAbsence.value.hours
    })
  }
}

const removeAbsence = (absenceId) => {
  generalAbsences.value = generalAbsences.value.filter(a => a.id !== absenceId)
    updateStepCompletion()
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

// New Navigation Functions
const goToNextStep = async () => {
  if (isNavigating.value || !canProceed.value) return
  
  isNavigating.value = true
  showLoading('Verwerken...')
  
  try {
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 300))
    
    if (currentStep.value < 4) {
      const previousStep = currentStep.value
      currentStep.value++
      
      // Track widget start when going from step 0 to 1
      if (previousStep === 0 && currentStep.value === 1) {
        trackWidgetStart()
      }
      
      // Track step completion
      const stepNames = {
        0: 'Welcome',
        1: 'Velocity',
        2: 'Team Capacity', 
        3: 'Availability',
        4: 'Results'
      }
      
      if (previousStep > 0) {
        trackStepCompletion(previousStep, stepNames[previousStep])
      }
      
      // Track navigation
      trackNavigation('Next', previousStep, currentStep.value)
      
      updateStepCompletion()
      showSuccess(`Stap ${currentStep.value} geladen`)

      // Track widget completion if reaching results
      if (currentStep.value === 4) {
        trackWidgetCompletion()
      }

      // Scroll to top of widget
      setTimeout(() => {
        const widget = document.getElementById('planner-widget')
        if (widget) {
          widget.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  } catch (error) {
    showError('Er is een fout opgetreden')
  } finally {
    isNavigating.value = false
  }
}

const goToPreviousStep = async () => {
  if (isNavigating.value || currentStep.value <= 0) return
  
  isNavigating.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 150))
    
    const previousStep = currentStep.value
    currentStep.value--
    
    // Track navigation
    trackNavigation('Previous', previousStep, currentStep.value)
    
    updateStepCompletion()
    
    // Scroll to top of widget
    setTimeout(() => {
      const widget = document.getElementById('planner-widget')
      if (widget) {
        widget.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  } catch (error) {
    trackError(error, 'goToPreviousStep')
    showError('Er is een fout opgetreden')
  } finally {
    isNavigating.value = false
  }
}

// Legacy functions for compatibility
const nextStep = goToNextStep
const previousStep = goToPreviousStep

const goToStep = (stepNumber) => {
  // Only allow going to completed steps or current step
  if (stepNumber <= currentStep.value) {
    currentStep.value = stepNumber
    updateStepCompletion()
    
    // Scroll to top of widget
    setTimeout(() => {
      const widget = document.getElementById('planner-widget')
      if (widget) {
        widget.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }
}

// Keyboard navigation for stepper
const handleStepperKeydown = (event, stepNumber) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    goToStep(stepNumber)
  } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    const nextStep = Math.min(stepNumber + 1, currentStep.value)
    if (nextStep !== stepNumber) {
      document.querySelector(`[data-step="${nextStep}"]`)?.focus()
    }
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    const prevStep = Math.max(1, stepNumber - 1)
    if (prevStep !== stepNumber) {
      document.querySelector(`[data-step="${prevStep}"]`)?.focus()
    }
  }
}

const resetStepper = () => {
  currentStep.value = 0
  sprints.value = [
    { velocity: null },
    { velocity: null },
    { velocity: null },
    { velocity: null },
    { velocity: null },
    { velocity: null }
  ]
  capacity.value = {
    sprintWeeks: 2,
    teamMembers: 5,
    contractHoursPerWeek: 40,
    bufferPercentage: 10
  }

  developers.value = []
  manualAverageVelocity.value = null
  validationErrors.value = {}
  touchedFields.value = {}
  updateStepCompletion()
}

// Planning Data Management Functions
const generatePlanningKey = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase()
}

const getCurrentPlanningData = () => {
  return {
    velocity: {
      method: velocityInputMethod.value,
      manualValue: manualAverageVelocity.value,
      sprints: sprints.value,
      average: averageVelocity.value
    },
    capacity: capacity.value,
    team: {
      method: teamInputMethod.value,
      developers: developers.value
    },
    absences: generalAbsences.value,
    buffer: bufferPercentage.value,
    results: {
      recommendedPoints: recommendedSprintPoints.value,
      finalCapacity: finalCapacity.value,
      totalContractHours: totalContractHours.value
    },
    metadata: {
      created: new Date().toISOString(),
      version: '1.0',
      userAgent: navigator.userAgent.substring(0, 100)
    }
  }
}

const openLoadModal = () => {
  showLoadModal.value = true
}

// Multi-Sprint Detection & Analytics
const checkForMultipleSprints = (planningKey) => {
  try {
    const keyPrefix = planningKey.substring(0, 6) // Use first 6 chars as project identifier
    const allKeys = Object.keys(localStorage).filter(key =>
      key.startsWith('sprint_planning_') &&
      key.substring(16, 22) === keyPrefix
    )

    if (allKeys.length > 1) {
      const sprintData = []

      allKeys.forEach(key => {
        try {
          const data = JSON.parse(localStorage.getItem(key))
          if (data && data.data && data.data.results) {
            sprintData.push({
              key: data.key,
              saved: new Date(data.saved),
              predicted: data.data.results.recommendedPoints,
              actual: data.data.results.actualPoints || null,
              teamSize: data.data.capacity.teamMembers,
              duration: data.data.capacity.sprintWeeks,
              velocity: data.data.velocity.average,
              accuracy: data.data.results.actualPoints ?
                Math.round((1 - Math.abs(data.data.results.recommendedPoints - data.data.results.actualPoints) / data.data.results.recommendedPoints) * 100) :
                null
            })
          }
        } catch (e) {
          console.warn('Failed to parse sprint data:', e)
        }
      })

      if (sprintData.length > 1) {
        sprintAnalyticsData.value = sprintData.sort((a, b) => a.saved - b.saved)
        hasMultipleSprints.value = true
        return true
      }
    }

    hasMultipleSprints.value = false
    sprintAnalyticsData.value = []
    return false
  } catch (error) {
    console.error('Error checking for multiple sprints:', error)
    return false
  }
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // Could add a toast notification here
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}

const savePlanningData = async () => {
  try {
    console.log('Starting to save planning data...')
    isSaving.value = true
    const key = generatePlanningKey()
    console.log('Generated key:', key)

    const data = getCurrentPlanningData()
    console.log('Planning data:', data)

    const planningData = {
      key,
      data,
      saved: new Date().toISOString()
    }

    localStorage.setItem(`sprint_planning_${key}`, JSON.stringify(planningData))

    currentPlanningKey.value = key
    savedPlanningKey.value = key
    saveSuccess.value = true

    return key
  } catch (error) {
    console.error('Failed to save planning data:', error)
    showError('Er ging iets mis bij het opslaan van je planning')
  } finally {
    isSaving.value = false
  }
}

const loadPlanningData = async (key) => {
  try {
    loadError.value = ''

    // Step 1: Validate key format
    if (!key || key.length !== 8) {
      loadError.value = 'Planning code moet 8 karakters lang zijn'
      return false
    }

    // Step 2: Start loading with progress indication
    showLoading('Planning zoeken...')
    await new Promise(resolve => setTimeout(resolve, 300)) // UX: Brief pause for feedback

    const savedData = localStorage.getItem(`sprint_planning_${key.toUpperCase()}`)

    if (!savedData) {
      loadError.value = 'Planning niet gevonden. Controleer je code en probeer opnieuw.'
      isLoading.value = false
      return false
    }

    // Step 3: Parse and validate data
    showLoading('Planning gegevens verwerken...')
    await new Promise(resolve => setTimeout(resolve, 200))

    const planningData = JSON.parse(savedData)
    const data = planningData.data

    // Step 4: Restore data with progress
    showLoading('Planning gegevens laden...')
    await new Promise(resolve => setTimeout(resolve, 200))

    // Restore velocity data
    velocityInputMethod.value = data.velocity.method
    manualAverageVelocity.value = data.velocity.manualValue
    sprints.value = data.velocity.sprints

    // Restore capacity data
    capacity.value = data.capacity

    // Restore team data
    teamInputMethod.value = data.team.method
    developers.value = data.team.developers

    // Restore other data
    generalAbsences.value = data.absences || []
    bufferPercentage.value = data.buffer

    // Step 5: Navigate to results with smooth transition
    currentPlanningKey.value = key.toUpperCase()

    // Check for multiple sprints with same prefix
    checkForMultipleSprints(key.toUpperCase())

    showLoading('Resultaten voorbereiden...')
    await new Promise(resolve => setTimeout(resolve, 300))

    console.log('About to close modal and navigate...')

    // Close modal first
    showLoadModal.value = false
    loadKey.value = ''

    console.log('Modal closed, navigating to step 1...')

    // Navigate to velocity step to allow review/editing
    currentStep.value = 1

    console.log('Navigated to step 1, hiding loading...')

    // Always hide loading
    isLoading.value = false

    console.log('Loading hidden successfully!')

    // Step 6: Success feedback with context
    try {
      const savedDate = new Date(planningData.saved).toLocaleDateString('nl-NL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

      showSuccess(`Planning geladen! Opgeslagen op ${savedDate}. Je kunt de gegevens controleren en aanpassen.`)
    } catch (dateError) {
      // Fallback if date parsing fails
      showSuccess('Planning succesvol geladen! Je kunt de gegevens controleren en aanpassen.')
    }

    return true

  } catch (error) {
    console.error('Failed to load planning data:', error)
    loadError.value = 'Er ging iets mis bij het laden van je planning'
    isLoading.value = false
    return false
  }
}

// Feedback System Functions
const submitFeedback = async () => {
  try {
    isSubmittingFeedback.value = true

    const feedback = {
      planningKey: currentPlanningKey.value,
      rating: feedbackRating.value,
      comment: feedbackComment.value,
      originalPlanning: getCurrentPlanningData(),
      submitted: new Date().toISOString()
    }

    const existingFeedback = JSON.parse(localStorage.getItem('sprint_feedback') || '[]')
    existingFeedback.push(feedback)
    localStorage.setItem('sprint_feedback', JSON.stringify(existingFeedback))

    feedbackSubmitted.value = true
    showSuccess('Bedankt voor je feedback! Dit helpt ons het model te verbeteren.')

    // Reset feedback form after a delay
    setTimeout(() => {
      feedbackSubmitted.value = false
      feedbackRating.value = null
      feedbackComment.value = ''
      showFeedbackModal.value = false
    }, 2000)

  } catch (error) {
    console.error('Failed to submit feedback:', error)
    showError('Er ging iets mis bij het versturen van je feedback')
  } finally {
    isSubmittingFeedback.value = false
  }
}

// QR Code generation
const generateQRCodeURL = (key) => {
  const url = `${window.location.origin}?load=${key}`
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`
}

// Check for load parameter on page load
const checkForLoadParameter = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const loadParam = urlParams.get('load')

  if (loadParam) {
    loadKey.value = loadParam
    loadPlanningData(loadParam)
    window.history.replaceState({}, document.title, window.location.pathname)
  }
}

onMounted(() => {
  // Initialize analytics (but don't track widget start yet)
  analytics.value.startTime = Date.now()
  console.log('Google Analytics initialized for Sprint Planner')
  
  // Always start at step 0
  currentStep.value = 0

  // Check for load parameter
  checkForLoadParameter()

  // Create a test planning for development
  const testPlanningData = {
    key: 'TEST1234',
    data: {
      velocity: {
        method: 'manual',
        manualValue: 45,
        sprints: [42, 38, 50, 47, 43, 40],
        average: 45
      },
      capacity: {
        sprintWeeks: 2,
        teamMembers: 3,
        availability: 85,
        capacityFactor: 0.85
      },
      team: {
        method: 'average',
        developers: []
      },
      absences: [],
      buffer: 15,
      results: {
        recommendedPoints: 38,
        finalCapacity: 160,
        totalContractHours: 120
      }
    },
    saved: new Date().toISOString()
  }

  localStorage.setItem('sprint_planning_TEST1234', JSON.stringify(testPlanningData))
  console.log('Test planning created with code: TEST1234')

  // Create additional test plannings for analytics
  const testPlanningData2 = {
    key: 'TEST1235',
    data: {
      velocity: { method: 'manual', manualValue: 42, sprints: [40, 44, 38, 42, 45, 41], average: 42 },
      capacity: { sprintWeeks: 2, teamMembers: 3, availability: 90, capacityFactor: 0.80 },
      team: { method: 'average', developers: [] },
      absences: [], buffer: 20,
      results: { recommendedPoints: 40, actualPoints: 44, finalCapacity: 150, totalContractHours: 120 }
    },
    saved: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString() // 2 weeks ago
  }

  const testPlanningData3 = {
    key: 'TEST1236',
    data: {
      velocity: { method: 'manual', manualValue: 48, sprints: [46, 50, 45, 48, 52, 47], average: 48 },
      capacity: { sprintWeeks: 2, teamMembers: 4, availability: 85, capacityFactor: 0.90 },
      team: { method: 'average', developers: [] },
      absences: [], buffer: 15,
      results: { recommendedPoints: 46, actualPoints: 42, finalCapacity: 180, totalContractHours: 160 }
    },
    saved: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString() // 4 weeks ago
  }

  localStorage.setItem('sprint_planning_TEST1235', JSON.stringify(testPlanningData2))
  localStorage.setItem('sprint_planning_TEST1236', JSON.stringify(testPlanningData3))
  console.log('Test analytics data created with codes: TEST1235, TEST1236')

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
:root {
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --accent-primary: #3b82f6;
  --accent-secondary: #1d4ed8;
  --error: #ef4444;
}

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
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 70px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}


.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.125rem;
}

.nav-brand-text {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-logo {
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.nav-logo:hover {
  opacity: 0.8;
}
.nav-logo {
  height: 40px;
  width: auto;
}

.nav-logo-mobile {
  display: none;
}

.nav-logo-desktop {
  display: block;
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
  .navbar {
    position: static;
    background: transparent;
    backdrop-filter: none;
    border-bottom: none;
    height: auto;
    padding: 1rem 0;
  }

  .hero {
    padding: 0 0 2rem;
  }

  .nav-container {
    height: auto;
    padding: 0 1rem;
  }

  .nav-logo-desktop {
    display: none;
  }

  .nav-logo-mobile {
    display: block;
    height: 40px;
    width: auto;
  }


  .nav-brand-text {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .linkedin-text {
    font-size: 0.875rem;
  }

  .linkedin-link {
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
  }

  .linkedin-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}


/* Hero Section */
.hero {
  padding: 10rem 0 4rem;
  position: relative;
  overflow: hidden;
  margin-top: 0;
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
  padding: 2rem 0;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
}


.title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 0;
  background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-highlight {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
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
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}


/* Hero CTA Section */
.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-text {
  position: relative;
  z-index: 1;
}

.cta-subtext {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 500;
}

/* Form Validation Styles */
.field-error {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.field-error::before {
  content: '⚠';
  font-size: 0.875rem;
}

.velocity-input-minimal.error,
.manual-velocity-input.error,
.config-input-minimal.error,
.developer-input.error {
  border-color: #ef4444;
  background-color: rgba(239, 68, 68, 0.05);
  box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.2);
}

.velocity-input-minimal.error:focus,
.manual-velocity-input.error:focus,
.config-input-minimal.error:focus,
.developer-input.error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.cta-icon {
  position: relative;
  z-index: 1;
  font-size: 1.25rem;
  transition: transform 0.3s ease;
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


.footer-logo-desktop {
  height: 80px !important;
  width: auto !important;
  display: block !important;
}

.footer-logo-mobile {
  width: 32px;
  height: 32px;
  display: none;
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

  .nav-brand-text {
    display: none;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
  
  .hero {
    padding: 0 0 2rem;
  }

  .hero-container {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    gap: 1rem;
    min-height: auto;
  }
  
  .hero-content {
    text-align: center;
    padding: 1rem 0;
    min-height: 300px;
    align-items: center;
  }

  .hero-badge {
    align-self: center;
  }

  .hero-cta {
    align-items: center;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.125rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    margin-bottom: 2rem;
    word-wrap: break-word;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
    margin: 0;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
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
    margin-bottom: 120px; /* Add space above fixed navigation */
  }
  
  .footer-content-minimal {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-logo-desktop {
    display: none;
  }

  .footer-logo-mobile {
    display: block;
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
  padding: 1.5rem 0;
  background: rgba(255, 255, 255, 0.02);
}

.planner-widget .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.progress-container {
  max-width: 100%;
  margin: 0 auto 4rem auto;
}

/* Modern Progress Bar */
.progress-bar-wrapper {
  position: relative;
  margin-bottom: 2rem;
  padding: 0 2rem;
}

.progress-bar {
  position: relative;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 2px;
  transition: width 0.5s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
  border-radius: 0 2px 2px 0;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 120px;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
}

.progress-step.active .step-circle {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-color: #3b82f6;
  color: white;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.progress-step.completed .step-circle {
  background: linear-gradient(135deg, #10b981, #059669);
  border-color: #10b981;
  color: white;
}

.step-label {
  font-size: 0.75rem;
  color: #a1a1aa;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  transition: color 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.step-title {
  font-weight: 600;
}

.step-status {
  font-size: 0.625rem;
  color: #10b981;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.step-status.current {
  color: #3b82f6;
}

.progress-step.active .step-label {
  color: #3b82f6;
  font-weight: 600;
}

.progress-step.completed .step-label {
  color: #10b981;
}

.check-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2.5;
}

.progress-step.clickable {
  cursor: pointer;
}

.progress-step.clickable:hover .step-circle {
  transform: scale(1.05);
}

.progress-step.clickable:focus .step-circle {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.progress-step:not(.clickable) {
  cursor: default;
  opacity: 0.5;
}

/* Mobile Touch Targets & Typography */
@media (max-width: 768px) {
  .progress-bar-wrapper {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
  
  .progress-bar {
    height: 3px;
    margin-bottom: 1rem;
  }
  
  .step-circle {
    width: 44px;
    height: 44px;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    min-height: 44px;
    min-width: 44px;
  }
  
  .step-label {
    font-size: 0.75rem;
    line-height: 1.3;
    font-weight: 500;
    max-width: 80px;
  }
  
  .progress-step {
    max-width: 100px;
    min-height: 60px;
  }
  
  /* Touch-friendly buttons */
  .toggle-button,
  .nav-button,
  .cta-button,
  .add-btn,
  .remove-btn {
    min-height: 44px;
    min-width: 44px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    touch-action: manipulation;
  }
  
  /* Form inputs */
  .velocity-input-minimal,
  .manual-velocity-input,
  .config-input-minimal,
  .developer-input {
    min-height: 44px;
    font-size: 1rem;
    padding: 0.75rem;
  }
  
  /* Typography improvements */
  .title {
    font-size: clamp(2rem, 8vw, 3rem);
    line-height: 1.2;
  }
  
  .subtitle {
    font-size: 1.125rem;
    line-height: 1.5;
  }
  
  .step-header h3 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  
  .step-header p {
    font-size: 1rem;
    line-height: 1.4;
  }
}

@media (max-width: 480px) {
  .progress-bar-wrapper {
    padding: 0 0.5rem;
  }
  
  .step-circle {
    width: 32px;
    height: 32px;
    font-size: 0.625rem;
  }
  
  .step-label {
    font-size: 0.5rem;
    max-width: 60px;
    line-height: 1.1;
  }
  
  .progress-step {
    max-width: 80px;
  }
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


/* Step Content */
.step-content {
  min-height: 300px;
}

/* Step Navigation */
.step-navigation {
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  padding: 0;
  border: none;
  background: transparent;
  gap: 0.75rem;
}

.step-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
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

/* Method Selection Cards */
.method-selection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.method-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.method-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

.method-card.selected {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.2);
}


.method-content h4 {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.method-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.method-time {
  color: rgba(59, 130, 246, 0.8);
  font-size: 0.75rem;
  font-weight: 500;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  display: inline-block;
}

.method-radio {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  margin-left: auto;
  position: relative;
  transition: all 0.2s ease;
}

.method-radio.checked {
  border-color: #3b82f6;
  background: #3b82f6;
}

.method-radio.checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
}

/* Input Section Headers */
.input-section-header {
  margin-bottom: 1.5rem;
}

.input-section-header h4 {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.input-section-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* Velocity Grid - Individual Sprints */
.velocity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.velocity-input-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.75rem;
  transition: all 0.2s ease;
}

.velocity-input-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.sprint-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.sprint-number {
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
}

.sprint-period {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.velocity-input {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.375rem;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.velocity-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  background: rgba(0, 0, 0, 0.5);
}

.velocity-input.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.input-unit {
  position: absolute;
  right: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-weight: 500;
  pointer-events: none;
}

/* Progress Indicator */
.velocity-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.progress-bar {
  flex: 1;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  transition: width 0.3s ease;
  border-radius: 0.25rem;
}

.progress-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
  min-width: max-content;
}

/* Manual Input Card */
.manual-input-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.velocity-input-large {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.velocity-input-big {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  width: 200px;
  transition: all 0.2s ease;
}

.velocity-input-big:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  background: rgba(0, 0, 0, 0.5);
}

.velocity-input-big.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.velocity-unit {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
}

/* Info Card */
.info-card {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.info-icon {
  font-size: 1.25rem;
}

.info-title {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.info-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.overhead-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.overhead-item {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  padding-left: 0.5rem;
}

/* Summary Card */
.summary-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
}

.summary-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.summary-icon {
  font-size: 1.25rem;
}

.summary-title {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 500;
}

.summary-value {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.value-number {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.value-unit {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
}

.summary-details {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
}

/* Field Errors */
.field-error {
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .method-selection {
    grid-template-columns: 1fr;
  }

  .velocity-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  .velocity-input-big {
    width: 100%;
    font-size: 1.5rem;
  }

  .method-card {
    padding: 0.75rem;
  }

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

.velocity-input-minimal::placeholder {
  color: #71717a;
  font-style: italic;
}

.manual-velocity-input::placeholder {
  color: #71717a;
  font-style: italic;
}

/* Enhanced visual feedback for empty states */
.velocity-input-minimal:placeholder-shown {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

.manual-velocity-input:placeholder-shown {
  background: rgba(255, 255, 255, 0.03);
}

/* Better focus states */
.velocity-input-minimal:focus:not(:placeholder-shown) {
  background: rgba(59, 130, 246, 0.05);
}

.manual-velocity-input:focus:not(:placeholder-shown) {
  background: rgba(59, 130, 246, 0.05);
}

/* Subtle animation for better UX */
.velocity-input-minimal,
.manual-velocity-input {
  transition: all 0.2s ease;
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

/* Team Input Toggle */
.team-input-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.team-input-toggle .toggle-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 1rem;
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

.team-input-toggle .toggle-icon {
  width: 24px;
  height: 24px;
  color: #3b82f6;
  flex-shrink: 0;
}

.team-input-toggle .toggle-content {
  flex: 1;
}

.team-input-toggle .toggle-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.team-input-toggle .toggle-subtitle {
  font-size: 0.875rem;
  color: #a1a1aa;
  line-height: 1.4;
}

/* Minimal Config Grid */
.config-grid-minimal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.config-item-minimal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.config-item-minimal label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
}

.input-group-minimal {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  overflow: hidden;
}

.config-input-minimal {
  flex: 1;
  background: transparent;
  border: none;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  outline: none;
}

.config-input-minimal:focus {
  background: rgba(255, 255, 255, 0.1);
}

.input-suffix-minimal {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  color: #a1a1aa;
  font-size: 0.875rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

/* Minimal Developer Form */
.add-developer-form-minimal {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-row-minimal {
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  gap: 1rem;
  align-items: end;
}

.form-group-minimal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group-minimal label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
}

.developer-input-minimal, .hours-input-minimal {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 0.875rem;
}

.developer-input-minimal:focus, .hours-input-minimal:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.add-button-minimal {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.add-button-minimal:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.add-button-minimal:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Minimal Developer List */
.developers-list-minimal {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.developer-card-minimal {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.developer-info-minimal {
  flex: 1;
}

.developer-name-minimal {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.developer-hours-minimal {
  font-size: 0.75rem;
  color: #a1a1aa;
}

.remove-button-minimal {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-button-minimal:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: translateY(-1px);
}

/* Team Capacity Summary Minimal */
.team-capacity-summary-minimal {
  margin-top: 1.5rem;
}

.summary-card-minimal {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
}

.summary-title-minimal {
  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 0.75rem;
}

.capacity-calculation-minimal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.calc-step-minimal {
  font-size: 0.875rem;
  color: #a1a1aa;
  font-family: 'Monaco', 'Menlo', monospace;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

/* Availability Input Toggle */
.availability-input-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.availability-input-toggle .toggle-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 1rem;
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

.availability-input-toggle .toggle-icon {
  width: 24px;
  height: 24px;
  color: #3b82f6;
  flex-shrink: 0;
}

.availability-input-toggle .toggle-content {
  flex: 1;
}

.availability-input-toggle .toggle-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.availability-input-toggle .toggle-subtitle {
  font-size: 0.875rem;
  color: #a1a1aa;
  line-height: 1.4;
}

/* Hours-based Availability */
.add-absence-form-minimal {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.absence-select-minimal, .absence-input-minimal {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 0.875rem;
  width: 100%;
}

.absence-select-minimal:focus, .absence-input-minimal:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.add-absence-button-minimal {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.add-absence-button-minimal:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.add-absence-button-minimal:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Absences List */
.absences-list-minimal {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.absence-item-minimal {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.absence-info-minimal {
  flex: 1;
}

.absence-type-minimal {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
}

.absence-details-minimal {
  font-size: 0.75rem;
  color: #a1a1aa;
}

.remove-absence-button-minimal {
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

.remove-absence-button-minimal:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: scale(1.1);
}

/* Input Hint */
.input-hint-minimal {
  font-size: 0.75rem;
  color: #71717a;
  font-style: italic;
  margin-top: 0.25rem;
}

/* Final Value */
.final-value-minimal {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-top: 1.5rem;
  text-align: center;
}

/* Final Capacity Summary */
.final-capacity-summary-minimal {
  margin-top: 2rem;
}

.summary-card-minimal {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
}

.summary-title-minimal {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
}

.capacity-calculation-minimal {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
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
  
  .add-absence-form-minimal {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .form-row-minimal {
    gap: 1rem;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
  
  .form-group-minimal {
    width: 100%;
  }
  
  .config-grid-minimal {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    flex-wrap: nowrap;
    align-items: end;
  }
  
  .config-item-minimal {
    flex: 1;
    min-width: 120px;
  }
  
  .config-item-minimal label {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }
  
  .input-group-minimal {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    overflow: hidden;
    min-height: 44px;
  }
  
  .config-input-minimal {
    flex: 1;
    background: transparent;
    border: none;
    padding: 0.5rem;
    color: #ffffff;
    font-size: 0.875rem;
    outline: none;
    min-height: 44px;
  }
  
  .input-suffix-minimal {
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    color: #a1a1aa;
    font-size: 0.75rem;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    white-space: nowrap;
  }
  
  .team-input-toggle {
    flex-direction: column;
    gap: 1rem;
  }
  
  .absence-select-minimal, .absence-input-minimal {
    min-height: 48px;
    font-size: 1rem;
    padding: 0.75rem;
  }
  
  .add-absence-button-minimal {
    min-height: 48px;
    min-width: 48px;
  }
  
  .add-button-minimal {
    min-height: 48px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  
  .remove-button-minimal {
    min-height: 44px;
    min-width: 44px;
  }
  
  .summary-card-minimal {
    padding: 1.5rem;
  }
  
  .final-capacity-summary-minimal {
    margin-top: 1.5rem;
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
  padding: 0.5rem 1rem !important;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem !important;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  min-width: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
  
  .step-navigation {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    padding-top: 1rem;
  }
  
  .nav-button {
    width: 100%;
    max-width: 250px;
    padding: 1.25rem 2.5rem;
    font-size: 1.1rem;
    min-height: 56px;
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
    padding: 0 1rem;
    gap: 1.5rem;
  }
  
  .hero {
    padding: 0 0 2rem;
  }
  
  .hero-content {
    text-align: center;
    padding: 1rem 0;
    min-height: 200px;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
    margin-bottom: 2rem;
    word-wrap: break-word;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .step-panel {
    padding: 1rem 0.75rem;
  }
  
  
  .velocity-grid-minimal {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  .velocity-card-minimal {
    padding: 0.75rem 0.5rem;
  }
  
  .velocity-input-minimal {
    font-size: 1rem;
    padding: 0.75rem;
    min-height: 48px;
  }
  
  .config-input-minimal {
    min-height: 48px;
    font-size: 1rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
  }
  
  .input-group-minimal {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .developer-input-minimal, .hours-input-minimal {
    min-height: 48px;
    font-size: 1rem;
    padding: 0.75rem;
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
    padding: 1.25rem 2.5rem;
    font-size: 1.1rem;
    min-height: 56px;
    width: 100%;
    max-width: 250px;
  }
  
  .stepper-navigation {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .nav-spacer {
    display: none;
  }
  
  .result-number {
    font-size: 2.5rem;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .result-card {
    padding: 1.5rem;
    min-height: 120px;
  }
  
  .main-result {
    padding: 2rem 1rem;
    min-height: 150px;
  }
  
  .result-number {
    font-size: 2.5rem;
  }
  
  .main-result {
    padding: 1.5rem 1rem;
  }
  
  /* Touch-friendly targets */
  .step-circle {
    min-width: 44px;
    min-height: 44px;
  }
  
  .remove-absence-button-minimal {
    min-width: 44px;
    min-height: 44px;
  }
  
  .toggle-button {
    min-height: 60px;
    padding: 1rem;
  }
  
  .input-method-toggle {
    flex-direction: column;
    gap: 1rem;
  }
  
  .input-method-toggle .toggle-button {
    min-height: 70px;
    padding: 1.25rem;
  }
}

/* Mobile UX Optimizations - Senior UX Review */
@media (max-width: 768px) {
  /* Critical: Improve step navigation touch targets */
  .step-navigation {
    flex-direction: column !important;
    gap: 1rem !important;
    margin-top: 2rem !important;
    padding: 1.5rem !important;
    background: rgba(59, 130, 246, 0.05) !important;
    border: 1px solid rgba(59, 130, 246, 0.1) !important;
    border-radius: 0.75rem !important;
  }

  .nav-button {
    width: 100% !important;
    padding: 1rem 1.5rem !important;
    font-size: 1rem !important;
    min-height: 52px !important;
    border-radius: 0.5rem !important;
    font-weight: 600 !important;
    max-width: none !important;
  }

  /* Enhanced input field touch targets */
  .manual-velocity-input,
  .config-input-minimal,
  .absence-input-minimal {
    min-height: 52px !important;
    font-size: 1rem !important;
    padding: 1rem !important;
  }

  /* Better visual feedback on touch */
  .toggle-button {
    min-height: 64px !important;
    padding: 1rem !important;
  }

  /* Improved step header readability */
  .step-header h3 {
    font-size: 1.75rem !important;
    margin-bottom: 1rem !important;
  }

  .step-header p {
    font-size: 1.1rem !important;
    line-height: 1.5 !important;
  }

  /* Progress bar enhancement */
  .stepper-progress {
    margin-bottom: 2rem !important;
    padding: 0 1rem !important;
  }
}

/* Extra mobile optimizations for very small screens */
@media (max-width: 480px) {
  .step-panel {
    padding: 1.5rem 1rem !important;
  }

  .nav-button {
    padding: 1.25rem 1rem !important;
    font-size: 1.1rem !important;
    min-height: 56px !important;
  }

  .step-header h3 {
    font-size: 1.5rem !important;
  }
}

/* Step 3: Hours-based Availability Controls */
.hours-availability-section {
  margin: 2rem 0;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  margin: 2rem 0;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.empty-state h4 {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #a1a1aa;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.add-absence-form-minimal {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-row-minimal {
  display: flex;
  gap: 1rem;
  align-items: end;
}

.form-group-minimal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.form-group-minimal label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.absence-select-minimal,
.absence-input-minimal {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

.absence-select-minimal:focus,
.absence-input-minimal:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.add-absence-button-minimal {
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: var(--accent-primary);
  color: white;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-absence-button-minimal:hover:not(:disabled) {
  background: var(--accent-secondary);
}

.add-absence-button-minimal:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.absences-list-minimal {
  margin-top: 1rem;
}

.absence-item-minimal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.absence-details-minimal {
  color: var(--text-primary);
  font-weight: 500;
}

.remove-absence-button-minimal {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--error);
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buffer-section-minimal {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
}

.buffer-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.buffer-input-group label {
  font-weight: 600;
  color: var(--text-primary);
}

.input-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.buffer-input {
  width: 80px;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
  text-align: center;
}

.buffer-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.input-suffix {
  color: var(--text-secondary);
  font-weight: 500;
}

.help-text {
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.8;
}

.final-capacity-summary-minimal {
  margin-top: 2rem;
}

.summary-card-minimal {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: white;
}

.summary-title-minimal {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.capacity-calculation-minimal {
  margin-bottom: 1.5rem;
}

.calc-step-minimal {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.final-value-minimal {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
}

/* Compact Result Cards */
.compact-result-card {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  max-width: 200px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.compact-result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.compact-result-value {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  color: white;
}

.compact-result-label {
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  color: white;
}

.compact-result-details {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
  opacity: 0.8;
  animation: slideDown 0.2s ease-out;
}

.compact-result-details div {
  margin-bottom: 0.25rem;
}

.compact-result-details div:last-child {
  margin-bottom: 0;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
}

/* Center align result containers */
.velocity-summary-minimal,
.team-capacity-summary-minimal,
.final-capacity-summary-minimal {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .form-row-minimal {
    flex-direction: column;
    gap: 1rem;
  }

  .add-absence-button-minimal {
    width: 100%;
    height: 48px;
  }

  .compact-result-card {
    max-width: 180px;
    padding: 1.25rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)) !important;
    border: 1px solid rgba(59, 130, 246, 0.3) !important;
  }

  .compact-result-value {
    font-size: 1.75rem;
    color: white !important;
  }

  .result-value {
    color: white !important;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
  }

  .velocity-card-minimal {
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .developer-card-minimal {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
  }

  .summary-card-minimal {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)) !important;
    border: 1px solid rgba(59, 130, 246, 0.3) !important;
  }
}

/* Welcome Step Styling */
.welcome-step {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(20px);
  text-align: center;
}

.welcome-content {
  max-width: 500px;
  margin: 0 auto;
}

.welcome-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.welcome-benefits,
.welcome-steps {
  text-align: left;
  margin-bottom: 2rem;
}

.welcome-benefits h3,
.welcome-steps h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 1.5rem;
}

.benefits-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-weight: bold;
}

.steps-overview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: var(--accent-primary);
  color: white;
  font-weight: bold;
  border-radius: 50%;
  flex-shrink: 0;
}

.step-details {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step-name {
  font-weight: 500;
  color: var(--text-primary);
}

.step-time {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.welcome-tip {
  text-align: center;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.welcome-tip p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.welcome-cta {
  margin-top: 2rem;
  text-align: center;
}

.welcome-start-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.welcome-start-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.welcome-start-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.welcome-arrow {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
}

.welcome-start-btn:hover:not(:disabled) .welcome-arrow {
  transform: translateX(2px);
}

@media (max-width: 768px) {
  .welcome-step {
    padding: 1.5rem;
  }

  .welcome-title {
    font-size: 2.25rem;
  }

  .step-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .step-details {
    flex-direction: column;
    gap: 0.25rem;
  }
}

/* Universal Navigation Component */
.universal-navigation {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  z-index: 100;
  margin-top: 2rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-spacer {
  flex: 1;
}

.nav-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-height: 48px;
  min-width: 120px;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-btn:hover::before {
  left: 100%;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.nav-btn:disabled::before {
  display: none;
}

.prev-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.prev-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
}

.next-btn {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.next-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.next-btn.disabled {
  background: rgba(107, 114, 128, 0.3);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: none;
}

.reset-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
}

.reset-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
}

.nav-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.nav-btn:hover:not(:disabled) .nav-icon {
  transform: scale(1.1);
}

.nav-text {
  position: relative;
  z-index: 1;
  font-weight: 600;
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .universal-navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.98);
  }
  
  .nav-container {
    padding: 0;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-spacer {
    display: none;
  }
  
  .nav-buttons {
    width: 100%;
    justify-content: center;
    gap: 0.75rem;
  }
  
  .nav-btn {
    flex: 1;
    max-width: 150px;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    min-height: 52px;
  }
}

@media (max-width: 480px) {
  .nav-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .nav-btn {
    width: 100%;
    max-width: none;
    padding: 1.25rem 2rem;
    font-size: 1.1rem;
    min-height: 56px;
  }
}

/* Clean Results Page */
.results-showcase {
  margin-top: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Hero Result */
.hero-result {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-number {
  color: #3b82f6;
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.hero-label {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.hero-context {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

.metric-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
}

.metric-value {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.metric-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

/* Simple Details Section */
.details-section {
  text-align: center;
}

.show-details-btn {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.show-details-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.details-content {
  margin-top: 2rem;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.detail-block {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.5rem;
}

.detail-block h4 {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
}

.detail-block p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

.detail-block strong {
  color: #3b82f6;
  font-weight: 600;
}

.config-summary {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.5;
}

.config-summary span {
  display: inline-block;
}

.adjustment-item {
  margin-bottom: 0.25rem;
}

/* Minimal Step Details */
.velocity-breakdown {
  margin-bottom: 0.75rem;
}

.velocity-input {
  color: white;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.velocity-adjusted {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.market-breakdown {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.overhead-explanation {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
}

.overhead-items {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  line-height: 1.4;
}

/* Simple Capacity Calculation */
.capacity-line {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
}

.capacity-result {
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Clean Final Calculation */
.calc-formula {
  color: white;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.calc-explanation {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
}


/* Clean Responsive Design */
@media (max-width: 768px) {
  .hero-number {
    font-size: 4rem;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .metric-item {
    padding: 1rem;
  }

  .details-content {
    margin-top: 1.5rem;
  }

  .detail-block {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
}

/* Planning Actions */
.planning-actions {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;
}

.action-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.action-icon {
  width: 18px;
  height: 18px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-content {
  background: #1a1a1a;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header h3 {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: #a1a1aa;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.modal-body {
  padding: 1.5rem;
  color: white;
}

.success-state {
  text-align: center;
}

.success-icon {
  width: 60px;
  height: 60px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin: 0 auto 1rem;
}

.key-display {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.key-display label {
  display: block;
  color: #a1a1aa;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.key-value {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-align: center;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.copy-button, .save-button, .load-button, .submit-button {
  background: var(--accent-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.copy-button:hover, .save-button:hover, .load-button:hover, .submit-button:hover {
  background: var(--accent-secondary);
  transform: translateY(-1px);
}

.copy-button:disabled, .save-button:disabled, .load-button:disabled, .submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.key-info {
  color: #a1a1aa;
  font-size: 0.875rem;
  margin-top: 1rem;
}

.key-input {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  margin: 0.5rem 0 1rem;
}

.key-input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.rating-section {
  margin: 1.5rem 0;
}

.rating-section label {
  display: block;
  color: #a1a1aa;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.rating-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.rating-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #a1a1aa;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.rating-button:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.rating-button.active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

.feedback-text {
  margin: 1.5rem 0;
}

.feedback-text label {
  display: block;
  color: #a1a1aa;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.feedback-textarea {
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  resize: vertical;
  font-family: inherit;
}

.feedback-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }

  .action-btn {
    width: 100%;
    justify-content: center;
  }

  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .modal-header, .modal-body {
    padding: 1rem;
  }

  .rating-buttons {
    gap: 0.75rem;
  }

  .rating-button {
    width: 45px;
    height: 45px;
  }
}

/* Welcome Page Load Button */
.welcome-or {
  text-align: center;
  color: #a1a1aa;
  font-size: 0.875rem;
  margin: 1rem 0;
}

.welcome-load-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.welcome-load-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-primary);
  transform: translateY(-1px);
}

.welcome-load-icon {
  width: 18px;
  height: 18px;
}

/* Modern Modal UX 2025 */
.modal-overlay-modern {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content-modern {
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-hero {
  text-align: center;
  padding: 2rem 2rem 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  position: relative;
  overflow: hidden;
}

.modal-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1), transparent 50%);
  pointer-events: none;
}

.modal-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-icon svg {
  width: 28px;
  height: 28px;
  color: white;
}

.modal-hero h2 {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.modal-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.modal-content-section {
  padding: 2rem;
}

.input-group-modern {
  margin-bottom: 2rem;
}

.input-label-modern {
  display: block;
  color: #e5e5e5;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  letter-spacing: 0.025em;
}

.input-wrapper-modern {
  position: relative;
}

.input-modern {
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.2s ease;
  outline: none;
}

.input-modern:focus {
  border-color: var(--accent-primary);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.input-modern.error {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
}

.input-modern::placeholder {
  color: #71717a;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 400;
}

.input-status {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: checkmark 0.3s ease-out;
}

@keyframes checkmark {
  from { opacity: 0; transform: translateY(-50%) scale(0.5); }
  to { opacity: 1; transform: translateY(-50%) scale(1); }
}

.check-icon {
  width: 12px;
  height: 12px;
  color: white;
}

.error-message-modern {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 500;
}

.error-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.modal-actions-modern {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-secondary-modern {
  flex: 1;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: #a1a1aa;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary-modern:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  transform: translateY(-1px);
}

.btn-primary-modern {
  flex: 1;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary-modern:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.btn-primary-modern:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn-primary-modern.loading {
  pointer-events: none;
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.modal-help {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
}

.help-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #a1a1aa;
  font-size: 0.875rem;
}

.help-icon {
  width: 16px;
  height: 16px;
  color: var(--accent-primary);
  flex-shrink: 0;
}

.close-button-modern {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.close-button-modern:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.close-button-modern svg {
  width: 14px;
  height: 14px;
}

@media (max-width: 768px) {
  .modal-content-modern {
    margin: 1rem;
    border-radius: 20px;
  }

  .modal-hero {
    padding: 1.5rem 1.5rem 1rem;
  }

  .modal-content-section {
    padding: 1.5rem;
  }

  .modal-actions-modern {
    flex-direction: column;
  }

  .btn-secondary-modern,
  .btn-primary-modern {
    width: 100%;
  }
}

/* Loaded Planning Banner */
.loaded-planning-banner {
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  animation: bannerSlideIn 0.4s ease-out;
}

@keyframes bannerSlideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1));
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  max-width: 400px;
  width: 100%;
}

.banner-icon {
  width: 40px;
  height: 40px;
  background: rgba(16, 185, 129, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.banner-icon svg {
  width: 20px;
  height: 20px;
  color: #10b981;
}

.banner-text {
  flex: 1;
}

.banner-title {
  color: #10b981;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.banner-subtitle {
  color: rgba(16, 185, 129, 0.8);
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
}

.banner-dismiss {
  background: none;
  border: none;
  color: rgba(16, 185, 129, 0.6);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.banner-dismiss:hover {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.banner-dismiss svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .loaded-planning-banner {
    margin: 1rem;
  }

  .banner-content {
    padding: 0.875rem 1rem;
  }

  .banner-icon {
    width: 36px;
    height: 36px;
  }

  .banner-icon svg {
    width: 18px;
    height: 18px;
  }
}

/* Analytics Detection Banner */
.analytics-detection-banner {
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  animation: bannerSlideIn 0.4s ease-out;
}

.banner-content-analytics {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  max-width: 500px;
  width: 100%;
}

.banner-icon-analytics {
  width: 40px;
  height: 40px;
  background: rgba(59, 130, 246, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.banner-icon-analytics svg {
  width: 20px;
  height: 20px;
  color: var(--accent-primary);
}

.banner-text-analytics {
  flex: 1;
}

.banner-title-analytics {
  color: var(--accent-primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.banner-subtitle-analytics {
  color: rgba(59, 130, 246, 0.8);
  font-size: 0.8rem;
}

.analytics-button {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.analytics-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

/* Analytics Dashboard Modal */
.modal-overlay-analytics {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  animation: fadeIn 0.2s ease-out;
}

.modal-content-analytics {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
  animation: slideUp 0.3s ease-out;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, #1f1f1f, #161616);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-icon {
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-icon svg {
  width: 24px;
  height: 24px;
  color: var(--accent-primary);
}

.header-text h2 {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.header-text p {
  color: #a1a1aa;
  font-size: 0.875rem;
  margin: 0;
}

.close-button-analytics {
  background: rgba(255, 255, 255, 0.05);
  color: #a1a1aa;
  border: none;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-button-analytics:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.close-button-analytics svg {
  width: 16px;
  height: 16px;
}

.dashboard-content {
  padding: 1.5rem;
  max-height: calc(90vh - 120px);
  overflow-y: auto;
}

.analytics-section {
  margin-bottom: 2rem;
}

.analytics-section:last-child {
  margin-bottom: 0;
}

.section-title {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Sprint Comparison Grid */
.comparison-grid {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
}

.grid-header {
  display: grid;
  grid-template-columns: 80px 1fr 1fr 1fr 80px 80px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.grid-row {
  display: grid;
  grid-template-columns: 80px 1fr 1fr 1fr 80px 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.grid-row:last-child {
  border-bottom: none;
}

.grid-cell {
  padding: 0.875rem 1rem;
  color: #e5e5e5;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
}

.grid-header .grid-cell {
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sprint-number {
  font-weight: 600;
  color: var(--accent-primary);
}

.predicted {
  color: #fbbf24;
}

.actual {
  color: #10b981;
}

.pending {
  color: #6b7280;
  font-style: italic;
}

.accuracy-high {
  color: #10b981;
  font-weight: 600;
}

.accuracy-medium {
  color: #f59e0b;
  font-weight: 600;
}

.accuracy-low {
  color: #ef4444;
  font-weight: 600;
}

/* Performance Metrics */
.metrics-grid-analytics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.metric-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
}

.metric-label {
  color: #a1a1aa;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metric-value {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .analytics-detection-banner {
    margin: 1rem;
  }

  .banner-content-analytics {
    padding: 0.875rem 1rem;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .analytics-button {
    width: 100%;
  }

  .modal-content-analytics {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .dashboard-header {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .grid-header,
  .grid-row {
    grid-template-columns: 60px 1fr 1fr 60px 60px 60px;
    font-size: 0.75rem;
  }

  .grid-cell {
    padding: 0.5rem 0.25rem;
  }

  .metrics-grid-analytics {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>