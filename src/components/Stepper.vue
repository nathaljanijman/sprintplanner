<template>
  <div class="stepper">
    <div class="stepper-header">
      <h2>{{ $t('stepper.title') }}</h2>
      <p>{{ $t('stepper.subtitle') }}</p>
    </div>

    <!-- Progress Bar -->
    <div class="progress-container">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressPercentage + '%' }"
          :aria-label="`${currentStep} of ${totalSteps} steps completed`"
        ></div>
      </div>
      <div class="progress-text">
        {{ $t('stepper.step', { current: currentStep, total: totalSteps }) }}
      </div>
    </div>

    <!-- Step Indicators -->
    <div class="step-indicators" role="tablist">
      <button
        v-for="(step, index) in steps"
        :key="step.id"
        :id="`step-tab-${step.id}`"
        role="tab"
        :aria-selected="currentStep === step.id"
        :aria-controls="`step-panel-${step.id}`"
        :tabindex="currentStep === step.id ? 0 : -1"
        :class="['step-indicator-item', { active: currentStep === step.id, completed: currentStep > step.id }]"
        @click="goToStep(step.id)"
      >
        <span class="step-number">{{ step.id }}</span>
        <span class="step-title">{{ $t(step.titleKey) }}</span>
      </button>
    </div>

    <div class="stepper-content" :aria-labelledby="`step-tab-${currentStep}`">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        :id="`step-panel-${step.id}`"
        role="tabpanel"
        :aria-hidden="currentStep !== step.id"
        v-show="currentStep === step.id"
      >
        <slot :name="`step-${step.id}`"></slot>
      </div>
    </div>

    <div class="stepper-navigation">
      <button
        @click="previousStep"
        :disabled="currentStep === 1"
        class="btn btn-secondary"
        :aria-label="$t('stepper.previousStep')"
      >
        {{ $t('stepper.previous') }}
      </button>
      <button
        @click="nextStep"
        :disabled="!canProceed"
        v-if="currentStep < steps.length"
        class="btn btn-primary"
        :aria-label="$t('stepper.nextStep')"
      >
        {{ $t('stepper.next') }}
      </button>
      <button
        @click="complete"
        :disabled="!canProceed"
        v-else
        class="btn btn-primary"
        :aria-label="$t('stepper.complete')"
      >
        {{ $t('stepper.complete') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  steps: {
    type: Array,
    required: true
  },
  canProceed: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['step-change', 'complete', 'next', 'previous'])

const currentStep = ref(1)
const totalSteps = computed(() => props.steps.length)
const progressPercentage = computed(() => (currentStep.value / totalSteps.value) * 100)

const nextStep = () => {
  if (currentStep.value < props.steps.length && props.canProceed) {
    currentStep.value++
    emit('next', currentStep.value)
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    emit('previous', currentStep.value)
  }
}

const goToStep = (stepId) => {
  if (stepId >= 1 && stepId <= totalSteps.value) {
    currentStep.value = stepId
  }
}

const complete = () => {
  if (props.canProceed) {
    emit('complete')
  }
}

watch(currentStep, (newVal) => {
  emit('step-change', newVal)
})
</script>

<style scoped>
.stepper {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.stepper-header {
  text-align: center;
  margin-bottom: 3rem;
}

.stepper-header h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stepper-header p {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Progress Bar */
.progress-container {
  margin-bottom: 3rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Step Indicators */
.step-indicators {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.step-indicator-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  backdrop-filter: blur(10px);
}

.step-indicator-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.step-indicator-item.active {
  background: rgba(59, 130, 246, 0.2);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.step-indicator-item.completed {
  background: rgba(34, 197, 94, 0.2);
  border-color: #22c55e;
  color: #22c55e;
}

.step-indicator-item:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.step-number {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
}

.step-indicator-item.active .step-number {
  background: var(--accent-primary);
  color: white;
}

.step-indicator-item.completed .step-number {
  background: #22c55e;
  color: white;
}

.step-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
}

/* Stepper Content */
.stepper-content {
  margin-bottom: 3rem;
  min-height: 400px;
}

/* Navigation */
.stepper-navigation {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
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

/* Responsive Design */
@media (max-width: 768px) {
  .stepper {
    padding: 1rem;
  }
  
  .step-indicators {
    gap: 1rem;
  }
  
  .step-indicator-item {
    min-width: 100px;
    padding: 0.75rem;
  }
  
  .stepper-navigation {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .step-indicators {
    flex-direction: column;
    align-items: center;
  }
  
  .step-indicator-item {
    width: 100%;
    max-width: 200px;
  }
}
</style>
