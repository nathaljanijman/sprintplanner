<template>
  <div class="results-section">
    <div class="results-header">
      <h2>{{ $t('results.title') }}</h2>
      <p>{{ $t('results.subtitle') }}</p>
    </div>

    <div class="results-content">
      <!-- Summary Cards -->
      <div class="summary-grid">
        <div class="summary-card">
          <div class="card-icon velocity">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"/>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>{{ $t('results.averageVelocity') }}</h3>
            <div class="card-value">{{ results.averageVelocity }}</div>
            <div class="card-label">story points</div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon capacity">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>{{ $t('results.teamCapacity') }}</h3>
            <div class="card-value">{{ results.teamCapacity }}</div>
            <div class="card-label">story points</div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon recommendation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>{{ $t('results.recommendedSprint') }}</h3>
            <div class="card-value">{{ results.recommendedSprint }}</div>
            <div class="card-label">story points</div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon confidence">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>{{ $t('results.confidence') }}</h3>
            <div class="card-value">{{ results.confidence }}</div>
            <div class="card-label">level</div>
          </div>
        </div>
      </div>

      <!-- Detailed Analysis -->
      <div class="analysis-section">
        <h3>Planning Analysis</h3>
        <div class="analysis-content">
          <div class="analysis-item">
            <div class="analysis-label">Velocity Trend</div>
            <div class="analysis-value" :class="velocityTrendClass">
              {{ velocityTrend }}
            </div>
          </div>
          <div class="analysis-item">
            <div class="analysis-label">Capacity Utilization</div>
            <div class="analysis-value" :class="utilizationClass">
              {{ capacityUtilization }}%
            </div>
          </div>
          <div class="analysis-item">
            <div class="analysis-label">Planning Confidence</div>
            <div class="analysis-value" :class="confidenceClass">
              {{ confidenceLevel }}
            </div>
          </div>
        </div>
      </div>

      <!-- Notes Section -->
      <div class="notes-section">
        <h3>{{ $t('results.notes') }}</h3>
        <textarea
          v-model="notes"
          class="notes-textarea"
          :placeholder="'Add your planning notes here...'"
          rows="4"
          @input="onNotesChange"
        ></textarea>
        <button @click="saveNotes" class="btn btn-primary">
          {{ $t('results.saveNotes') }}
        </button>
      </div>

      <!-- Recommendations -->
      <div class="recommendations-section">
        <h3>Recommendations</h3>
        <div class="recommendations-list">
          <div v-for="(recommendation, index) in recommendations" :key="index" class="recommendation-item">
            <div class="recommendation-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
              </svg>
            </div>
            <div class="recommendation-text">{{ recommendation }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  sprints: {
    type: Array,
    required: true
  },
  capacity: {
    type: Object,
    required: true
  },
  results: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:notes'])

const notes = ref('')

const velocityTrend = computed(() => {
  const validSprints = props.sprints.filter(s => s.velocity > 0)
  if (validSprints.length < 2) return 'Insufficient data'
  
  const recent = validSprints.slice(-3)
  const older = validSprints.slice(-6, -3)
  
  if (recent.length === 0 || older.length === 0) return 'Insufficient data'
  
  const recentAvg = recent.reduce((sum, s) => sum + s.velocity, 0) / recent.length
  const olderAvg = older.reduce((sum, s) => sum + s.velocity, 0) / older.length
  
  const change = ((recentAvg - olderAvg) / olderAvg) * 100
  
  if (change > 10) return 'Increasing'
  if (change < -10) return 'Decreasing'
  return 'Stable'
})

const velocityTrendClass = computed(() => {
  const trend = velocityTrend.value
  if (trend === 'Increasing') return 'trend-up'
  if (trend === 'Decreasing') return 'trend-down'
  return 'trend-stable'
})

const capacityUtilization = computed(() => {
  if (props.results.teamCapacity === 0) return 0
  return Math.round((props.results.recommendedSprint / props.results.teamCapacity) * 100)
})

const utilizationClass = computed(() => {
  const util = capacityUtilization.value
  if (util > 90) return 'utilization-high'
  if (util < 70) return 'utilization-low'
  return 'utilization-good'
})

const confidenceLevel = computed(() => {
  const validSprints = props.sprints.filter(s => s.velocity > 0)
  if (validSprints.length >= 4) return 'High'
  if (validSprints.length >= 2) return 'Medium'
  return 'Low'
})

const confidenceClass = computed(() => {
  const level = confidenceLevel.value
  if (level === 'High') return 'confidence-high'
  if (level === 'Medium') return 'confidence-medium'
  return 'confidence-low'
})

const recommendations = computed(() => {
  const recs = []
  
  if (velocityTrend.value === 'Decreasing') {
    recs.push('Consider investigating why velocity is decreasing and address any blockers')
  }
  
  if (capacityUtilization.value > 90) {
    recs.push('Your recommended sprint size is very close to team capacity - consider reducing scope')
  }
  
  if (capacityUtilization.value < 70) {
    recs.push('You have room to increase sprint scope or add more features')
  }
  
  if (confidenceLevel.value === 'Low') {
    recs.push('Gather more velocity data to improve planning accuracy')
  }
  
  if (props.results.averageVelocity === 0) {
    recs.push('Enter velocity data from previous sprints to get accurate recommendations')
  }
  
  if (recs.length === 0) {
    recs.push('Your sprint planning looks well-balanced!')
  }
  
  return recs
})

const onNotesChange = () => {
  emit('update:notes', notes.value)
}

const saveNotes = () => {
  emit('update:notes', notes.value)
  // Could add a success message here
}
</script>

<style scoped>
.results-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.results-header {
  text-align: center;
  margin-bottom: 3rem;
}

.results-header h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.results-header p {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.results-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Summary Grid */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.summary-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.summary-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--accent-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon.velocity {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.card-icon.capacity {
  background: linear-gradient(135deg, #10b981, #059669);
}

.card-icon.recommendation {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.card-icon.confidence {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.card-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.card-content h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.card-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.card-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Analysis Section */
.analysis-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.analysis-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.analysis-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.analysis-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.analysis-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.analysis-value {
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
}

.trend-up, .utilization-good, .confidence-high {
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
}

.trend-down, .utilization-high, .confidence-low {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.trend-stable, .utilization-low, .confidence-medium {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}

/* Notes Section */
.notes-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.notes-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.notes-textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  line-height: 1.5;
  resize: vertical;
  min-height: 100px;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
}

.notes-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.notes-textarea::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* Recommendations Section */
.recommendations-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.recommendations-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.recommendations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recommendation-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.recommendation-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--accent-primary);
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.recommendation-icon svg {
  width: 100%;
  height: 100%;
}

.recommendation-text {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .results-section {
    padding: 1rem;
  }
  
  .summary-grid {
    grid-template-columns: 1fr;
  }
  
  .summary-card {
    padding: 1.5rem;
  }
  
  .analysis-content {
    grid-template-columns: 1fr;
  }
  
  .analysis-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .recommendation-item {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .recommendation-icon {
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .summary-card {
    flex-direction: column;
    text-align: center;
  }
  
  .card-icon {
    align-self: center;
  }
}
</style>
