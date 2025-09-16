    <!-- Planner Widget -->
    <section id="planner-widget" class="planner-widget" aria-labelledby="planner-title" role="region">
      <div class="container">
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
                :style="{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }"
                aria-hidden="true"
              ></div>
            </div>
            
            <!-- Progress Steps -->
            <div class="progress-steps">
              <div 
                v-for="(step, index) in steps" 
                :key="index"
                class="progress-step"
                :class="{ 
                  'active': currentStep === index + 1,
                  'completed': currentStep > index + 1 
                }"
                @click="goToStep(index + 1)"
                :aria-label="`Stap ${index + 1}: ${step.title}`"
                role="button"
                tabindex="0"
                @keydown.enter="goToStep(index + 1)"
                @keydown.space.prevent="goToStep(index + 1)"
              >
                <div class="step-circle">
                  <svg v-if="currentStep > index + 1" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span v-else>{{ index + 1 }}</span>
                </div>
                <div class="step-label">{{ step.title }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step Content -->
        <div class="step-content">
          <!-- Step 1: Historical Velocity -->
          <div v-if="currentStep === 1" class="step-panel" role="tabpanel" :aria-labelledby="`step-${currentStep}-title`">
            <div class="step-header">
              <h3 id="step-1-title" class="step-title">Historische velocity</h3>
              <p class="step-description">Hoeveel story points heeft je team gemiddeld per sprint behaald?</p>
            </div>
            
            <div class="input-method-toggle">
              <button 
                @click="velocityInputMethod = 'average'"
                class="toggle-button"
                :class="{ active: velocityInputMethod === 'average' }"
                type="button"
                aria-pressed="velocityInputMethod === 'average'"
              >
                <div class="toggle-content">
                  <div class="toggle-title">Gemiddelde velocity</div>
                  <div class="toggle-subtitle">Bereken op basis van historische data</div>
                </div>
              </button>
              
              <button 
                @click="velocityInputMethod = 'individual'"
                class="toggle-button"
                :class="{ active: velocityInputMethod === 'individual' }"
                type="button"
                aria-pressed="velocityInputMethod === 'individual'"
              >
                <div class="toggle-content">
                  <div class="toggle-title">Individuele sprints</div>
                  <div class="toggle-subtitle">Voer elke sprint handmatig in</div>
                </div>
              </button>
            </div>

            <!-- Average Velocity Input -->
            <div v-if="velocityInputMethod === 'average'" class="average-velocity-section">
              <div class="velocity-input-group">
                <label for="average-velocity" class="input-label">Gemiddelde velocity per sprint</label>
                <div class="input-with-suffix">
                  <input 
                    id="average-velocity"
                    v-model.number="velocity.value.averageVelocity"
                    type="number"
                    min="0"
                    step="0.5"
                    class="velocity-input-minimal"
                    placeholder="0"
                    aria-describedby="velocity-help"
                  />
                  <span class="input-suffix">story points</span>
                </div>
                <p id="velocity-help" class="input-help">Gebaseerd op je laatste 3-5 sprints</p>
              </div>
            </div>

            <!-- Individual Velocity Input -->
            <div v-if="velocityInputMethod === 'individual'" class="individual-velocity-section">
              <div class="velocity-grid-minimal">
                <div 
                  v-for="(sprint, index) in velocity.value.sprints" 
                  :key="index"
                  class="velocity-card-minimal"
                >
                  <div class="sprint-number">Sprint {{ index + 1 }}</div>
                  <input 
                    v-model.number="sprint.points"
                    type="number"
                    min="0"
                    step="0.5"
                    class="velocity-input-minimal"
                    placeholder="0"
                    :aria-label="`Sprint ${index + 1} story points`"
                  />
                </div>
              </div>
              
              <div class="velocity-actions">
                <button 
                  @click="addSprint" 
                  class="add-sprint-button"
                  type="button"
                  aria-label="Voeg sprint toe"
                >
                  + Sprint toevoegen
                </button>
              </div>
            </div>

            <div class="step-navigation">
              <div class="nav-spacer"></div>
              <button 
                @click="nextStep" 
                class="nav-button primary"
                :disabled="!canProceed"
                type="button"
              >
                Volgende
              </button>
            </div>
          </div>

          <!-- Step 2: Team Capacity -->
          <div v-if="currentStep === 2" class="step-panel" role="tabpanel" :aria-labelledby="`step-${currentStep}-title`">
            <div class="step-header">
              <h3 id="step-2-title" class="step-title">Team capaciteit</h3>
              <p class="step-description">Wat is de totale capaciteit van je team voor deze sprint?</p>
            </div>
            
            <div class="team-input-toggle">
              <button 
                @click="teamInputMethod = 'average'"
                class="toggle-button"
                :class="{ active: teamInputMethod === 'average' }"
                type="button"
                aria-pressed="teamInputMethod === 'average'"
              >
                <div class="toggle-content">
                  <div class="toggle-title">Gemiddelde contracturen</div>
                  <div class="toggle-subtitle">Bereken op basis van team grootte</div>
                </div>
              </button>
              
              <button 
                @click="teamInputMethod = 'individual'"
                class="toggle-button"
                :class="{ active: teamInputMethod === 'individual' }"
                type="button"
                aria-pressed="teamInputMethod === 'individual'"
              >
                <div class="toggle-content">
                  <div class="toggle-title">Individuele developers</div>
                  <div class="toggle-subtitle">Voer elke developer handmatig in</div>
                </div>
              </button>
            </div>

            <!-- Average Team Hours -->
            <div v-if="teamInputMethod === 'average'" class="average-team-section">
              <div class="config-grid-minimal">
                <div class="config-item-minimal">
                  <label for="sprint-duration" class="input-label">Sprint duur</label>
                  <div class="input-group-minimal">
                    <input 
                      id="sprint-duration"
                      v-model.number="capacity.value.sprintDuration"
                      type="number"
                      min="1"
                      max="4"
                      class="config-input-minimal"
                      aria-describedby="sprint-duration-help"
                    />
                    <span class="input-suffix">weken</span>
                  </div>
                  <p id="sprint-duration-help" class="input-help">Meestal 2 weken</p>
                </div>
                
                <div class="config-item-minimal">
                  <label for="team-size" class="input-label">Aantal developers</label>
                  <div class="input-group-minimal">
                    <input 
                      id="team-size"
                      v-model.number="capacity.value.teamSize"
                      type="number"
                      min="1"
                      max="20"
                      class="config-input-minimal"
                      aria-describedby="team-size-help"
                    />
                    <span class="input-suffix">personen</span>
                  </div>
                  <p id="team-size-help" class="input-help">Inclusief alle teamleden</p>
                </div>
                
                <div class="config-item-minimal">
                  <label for="hours-per-week" class="input-label">Gemiddelde uren per week</label>
                  <div class="input-group-minimal">
                    <input 
                      id="hours-per-week"
                      v-model.number="capacity.value.contractHoursPerWeek"
                      type="number"
                      min="1"
                      max="50"
                      class="config-input-minimal"
                      aria-describedby="hours-per-week-help"
                    />
                    <span class="input-suffix">uur/week</span>
                  </div>
                  <p id="hours-per-week-help" class="input-help">Meestal 36-40 uur</p>
                </div>
              </div>
              
              <div class="team-capacity-summary-minimal">
                <div class="summary-card-minimal">
                  <div class="summary-title-minimal">Team capaciteit</div>
                  <div class="capacity-calculation-minimal">
                    <div class="calc-step-minimal">{{ capacity.value.teamSize }} personen</div>
                    <div class="calc-step-minimal">× {{ capacity.value.sprintDuration }} weken</div>
                    <div class="calc-step-minimal">× {{ capacity.value.contractHoursPerWeek }} uur/week</div>
                    <div class="calc-step-minimal">= <strong>{{ totalContractHours }} uur</strong></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Individual Developers -->
            <div v-if="teamInputMethod === 'individual'" class="individual-team-section">
              <div class="add-developer-form-minimal">
                <div class="form-row-minimal">
                  <div class="form-group-minimal">
                    <label for="developer-name" class="input-label">Developer naam</label>
                    <input 
                      id="developer-name"
                      v-model="newDeveloper.name"
                      type="text"
                      class="developer-input-minimal"
                      placeholder="Bijv. Jan"
                      @keydown.enter="addDeveloper"
                    />
                  </div>
                  <div class="form-group-minimal">
                    <label for="developer-hours" class="input-label">Uren per week</label>
                    <input 
                      id="developer-hours"
                      v-model.number="newDeveloper.hours"
                      type="number"
                      min="1"
                      max="50"
                      class="hours-input-minimal"
                      placeholder="36"
                      @keydown.enter="addDeveloper"
                    />
                  </div>
                  <button 
                    @click="addDeveloper" 
                    class="add-button-minimal"
                    type="button"
                    :disabled="!newDeveloper.name || !newDeveloper.hours"
                  >
                    Toevoegen
                  </button>
                </div>
              </div>
              
              <div v-if="capacity.value.developers.length > 0" class="developers-list-minimal">
                <div 
                  v-for="(dev, index) in capacity.value.developers" 
                  :key="index"
                  class="developer-card-minimal"
                >
                  <div class="developer-info-minimal">
                    <div class="developer-name-minimal">{{ dev.name }}</div>
                    <div class="developer-hours-minimal">{{ dev.hours }} uur/week</div>
                  </div>
                  <button 
                    @click="removeDeveloper(index)" 
                    class="remove-button-minimal"
                    type="button"
                    aria-label="Verwijder developer"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div v-if="capacity.value.developers.length > 0" class="team-capacity-summary-minimal">
                <div class="summary-card-minimal">
                  <div class="summary-title-minimal">Team capaciteit</div>
                  <div class="capacity-calculation-minimal">
                    <div class="calc-step-minimal">{{ capacity.value.developers.length }} developers</div>
                    <div class="calc-step-minimal">× {{ capacity.value.sprintDuration }} weken</div>
                    <div class="calc-step-minimal">× {{ totalIndividualHours / capacity.value.developers.length }} uur/week gemiddeld</div>
                    <div class="calc-step-minimal">= <strong>{{ totalContractHours }} uur</strong></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="step-navigation">
              <button 
                @click="previousStep" 
                class="nav-button secondary"
                type="button"
              >
                Vorige
              </button>
              <button 
                @click="nextStep" 
                class="nav-button primary"
                :disabled="!canProceed"
                type="button"
              >
                Volgende
              </button>
            </div>
          </div>

          <!-- Step 3: Availability -->
          <div v-if="currentStep === 3" class="step-panel" role="tabpanel" :aria-labelledby="`step-${currentStep}-title`">
            <div class="step-header">
              <h3 id="step-3-title" class="step-title">Beschikbaarheid</h3>
              <p class="step-description">Zijn er teamleden die minder beschikbaar zijn tijdens deze sprint?</p>
            </div>
            
            <div class="add-absence-form-minimal">
              <div class="form-row-minimal">
                <div class="form-group-minimal">
                  <label for="absence-developer" class="input-label">Developer</label>
                  <select 
                    id="absence-developer"
                    v-model="newAbsence.developerId"
                    class="absence-select-minimal"
                  >
                    <option value="">Selecteer developer</option>
                    <option 
                      v-for="(dev, index) in availableDevelopers" 
                      :key="index"
                      :value="index"
                    >
                      {{ getDeveloperName(index) }}
                    </option>
                  </select>
                </div>
                <div class="form-group-minimal">
                  <label for="absence-hours" class="input-label">Aantal uren afwezigheid</label>
                  <input 
                    id="absence-hours"
                    v-model.number="newAbsence.hours"
                    type="number"
                    min="1"
                    max="100"
                    class="absence-input-minimal"
                    placeholder="8"
                  />
                </div>
                <button 
                  @click="addAbsence" 
                  class="add-absence-button-minimal"
                  type="button"
                  :disabled="!newAbsence.developerId || !newAbsence.hours"
                >
                  +
                </button>
              </div>
            </div>
            
            <div v-if="generalAbsences.length > 0" class="absences-list-minimal">
              <div 
                v-for="(absence, index) in generalAbsences" 
                :key="index"
                class="developer-card-minimal"
              >
                <div class="developer-info-minimal">
                  <div class="developer-name-minimal">{{ getDeveloperName(absence.developerId) }}</div>
                  <div class="developer-hours-minimal">{{ absence.hours }} uur afwezig</div>
                </div>
                <button 
                  @click="removeAbsence(index)" 
                  class="remove-button-minimal"
                  type="button"
                  aria-label="Verwijder afwezigheid"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div class="final-capacity-summary-minimal">
              <div class="summary-card-minimal">
                <div class="summary-title-minimal">Definitief sprint capaciteit</div>
                <div class="capacity-calculation-minimal">
                  <div class="calc-step-minimal">Basis capaciteit: {{ totalContractHours }} uur</div>
                  <div class="calc-step-minimal">Afwezigheid: -{{ totalAbsenceHours }} uur</div>
                  <div class="calc-step-minimal">= <strong>{{ finalCapacity }} uur</strong></div>
                </div>
              </div>
            </div>

            <div class="step-navigation">
              <button 
                @click="previousStep" 
                class="nav-button secondary"
                type="button"
              >
                Vorige
              </button>
              <button 
                @click="nextStep" 
                class="nav-button primary"
                type="button"
              >
                Volgende
              </button>
            </div>
          </div>

          <!-- Step 4: Results -->
          <div v-if="currentStep === 4" class="step-panel" role="tabpanel" :aria-labelledby="`step-${currentStep}-title`">
            <div class="step-header">
              <h3 id="step-4-title" class="step-title">Resultaten</h3>
              <p class="step-description">Je sprint planning aanbevelingen</p>
            </div>
            
            <div class="results-grid">
              <div class="result-card" data-tooltip="Gebaseerd op je historische velocity">
                <div class="result-number">{{ averageVelocity }}</div>
                <div class="result-label">Verwachte velocity</div>
                <div class="result-unit">story points</div>
              </div>
              
              <div class="result-card" data-tooltip="Totale team capaciteit minus afwezigheid">
                <div class="result-number">{{ finalCapacity }}</div>
                <div class="result-label">Beschikbare uren</div>
                <div class="result-unit">uur</div>
              </div>
              
              <div class="result-card" data-tooltip="Verhouding tussen velocity en capaciteit">
                <div class="result-number">{{ velocityPerHour.toFixed(2) }}</div>
                <div class="result-label">Velocity per uur</div>
                <div class="result-unit">points/uur</div>
              </div>
            </div>
            
            <div class="main-result">
              <div class="result-title">Sprint planning aanbeveling</div>
              <div class="result-description">
                Plan <strong>{{ Math.round(averageVelocity * 0.8) }} - {{ Math.round(averageVelocity * 1.2) }}</strong> story points voor deze sprint.
                Dit geeft je team voldoende uitdaging zonder overbelasting.
              </div>
              <div class="confidence-level">
                <span class="confidence-label">Vertrouwen:</span>
                <span class="confidence-value" :class="confidenceClass">{{ confidenceText }}</span>
              </div>
            </div>

            <div class="step-navigation">
              <button 
                @click="previousStep" 
                class="nav-button secondary"
                type="button"
              >
                Vorige
              </button>
              <button 
                @click="resetPlanner" 
                class="nav-button primary"
                type="button"
              >
                Start over
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>