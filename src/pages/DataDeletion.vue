<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>{{ $t('legal.dataDeletion.title') }}</h1>
        <p class="last-updated">{{ $t('legal.dataDeletion.lastUpdated') }}</p>
      </div>
      
      <div class="legal-content">
        <p>{{ $t('legal.dataDeletion.content') }}</p>
        
        <h2>What Data Is Stored</h2>
        <p>Sprint Planner stores the following data locally in your browser:</p>
        <ul>
          <li>Sprint velocity history</li>
          <li>Team capacity settings</li>
          <li>Planning notes and results</li>
          <li>Language preference</li>
          <li>User interface preferences</li>
        </ul>
        
        <h2>How to Delete Your Data</h2>
        <p>You can delete all your data in two ways:</p>
        
        <div class="delete-section">
          <h3>Method 1: Use the Delete Button</h3>
          <p>Click the button below to instantly delete all your data:</p>
          <button 
            @click="deleteAllData" 
            class="btn btn-danger"
            :disabled="isDeleting"
          >
            {{ isDeleting ? 'Deleting...' : $t('legal.dataDeletion.deleteButton') }}
          </button>
          <div v-if="deleteMessage" class="delete-message" :class="{ success: deleteSuccess }">
            {{ deleteMessage }}
          </div>
        </div>
        
        <div class="delete-section">
          <h3>Method 2: Clear Browser Data</h3>
          <p>You can also clear your data by clearing your browser's localStorage:</p>
          <ol>
            <li>Open your browser's Developer Tools (F12)</li>
            <li>Go to the Application or Storage tab</li>
            <li>Find "Local Storage" in the left sidebar</li>
            <li>Select your domain (sprintplanner.nl or localhost)</li>
            <li>Delete all entries or clear all data</li>
          </ol>
        </div>
        
        <h2>What Happens After Deletion</h2>
        <p>After deleting your data:</p>
        <ul>
          <li>All sprint velocity data will be lost</li>
          <li>All team capacity settings will be reset</li>
          <li>All planning notes will be removed</li>
          <li>Language preference will reset to default (Dutch)</li>
          <li>You'll need to re-enter all data to use the planner again</li>
        </ul>
        
        <h2>Data Recovery</h2>
        <p>Once data is deleted, it cannot be recovered. Make sure to export any important data before deletion if you want to keep a backup.</p>
        
        <h2>Contact</h2>
        <p>If you have questions about data deletion or need help, contact us at privacy@sprintplanner.nl</p>
      </div>
      
      <div class="legal-footer">
        <router-link to="/" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isDeleting = ref(false)
const deleteMessage = ref('')
const deleteSuccess = ref(false)

const deleteAllData = async () => {
  if (!confirm(t('legal.dataDeletion.confirmMessage'))) {
    return
  }
  
  isDeleting.value = true
  deleteMessage.value = ''
  
  try {
    // Clear all localStorage data
    localStorage.clear()
    
    // Wait a moment for visual feedback
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    deleteMessage.value = t('legal.dataDeletion.successMessage')
    deleteSuccess.value = true
    
    // Reset after 3 seconds
    setTimeout(() => {
      deleteMessage.value = ''
      deleteSuccess.value = false
    }, 3000)
    
  } catch (error) {
    deleteMessage.value = 'Error deleting data. Please try clearing your browser data manually.'
    deleteSuccess.value = false
  } finally {
    isDeleting.value = false
  }
}
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.legal-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.legal-header h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-updated {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-style: italic;
}

.legal-content {
  line-height: 1.8;
  margin-bottom: 3rem;
}

.legal-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.legal-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 1.5rem 0 0.75rem 0;
}

.legal-content p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.legal-content ul, .legal-content ol {
  margin: 1rem 0 1.5rem 2rem;
  color: var(--text-secondary);
}

.legal-content li {
  margin-bottom: 0.5rem;
}

.delete-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  margin: 0.5rem 0;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.btn-danger {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
}

.btn-danger:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

.delete-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

.delete-message.success {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: #86efac;
}

.legal-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .legal-content h2 {
    font-size: 1.25rem;
  }
  
  .legal-content h3 {
    font-size: 1.125rem;
  }
  
  .delete-section {
    padding: 1rem;
  }
}
</style>
