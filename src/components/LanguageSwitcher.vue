<template>
  <div class="language-switcher">
    <button
      @click="toggleLanguage"
      class="language-button"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      :aria-label="$t('nav.language')"
    >
      <svg class="language-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" x2="22" y1="12" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span class="language-text">{{ currentLanguage.toUpperCase() }}</span>
      <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 12,15 18,9"/>
      </svg>
    </button>
    
    <div v-if="isOpen" class="language-dropdown" role="menu">
      <button
        @click="setLanguage('nl')"
        class="language-option"
        :class="{ active: currentLanguage === 'nl' }"
        role="menuitem"
      >
        <span class="flag">🇳🇱</span>
        <span>Nederlands</span>
      </button>
      <button
        @click="setLanguage('en')"
        class="language-option"
        :class="{ active: currentLanguage === 'en' }"
        role="menuitem"
      >
        <span class="flag">🇬🇧</span>
        <span>English</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const currentLanguage = computed(() => locale.value)

const toggleLanguage = () => {
  isOpen.value = !isOpen.value
}

const setLanguage = (lang) => {
  locale.value = lang
  isOpen.value = false
  // Store in localStorage
  localStorage.setItem('sprintplanner-language', lang)
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.language-switcher')) {
    isOpen.value = false
  }
}

onMounted(() => {
  // Load saved language
  const savedLanguage = localStorage.getItem('sprintplanner-language')
  if (savedLanguage && ['nl', 'en'].includes(savedLanguage)) {
    locale.value = savedLanguage
  }
  
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.language-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--accent-primary);
  transform: translateY(-1px);
}

.language-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-primary);
}

.language-icon {
  width: 1rem;
  height: 1rem;
  opacity: 0.8;
}

.language-text {
  font-weight: 600;
  letter-spacing: 0.05em;
}

.dropdown-icon {
  width: 0.75rem;
  height: 0.75rem;
  transition: transform 0.2s ease;
}

.language-switcher:hover .dropdown-icon {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-width: 140px;
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation: dropdownFadeIn 0.2s ease;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.language-option:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent-primary);
}

.language-option.active {
  background: rgba(59, 130, 246, 0.2);
  color: var(--accent-primary);
  font-weight: 600;
}

.language-option:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.1);
}

.flag {
  font-size: 1rem;
  line-height: 1;
}

@media (max-width: 768px) {
  .language-button {
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
  }
  
  .language-dropdown {
    right: -0.5rem;
    min-width: 120px;
  }
}
</style>
