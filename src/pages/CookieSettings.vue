<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Cookie & Local Storage Settings</h1>
        <p class="last-updated">Last updated: January 27, 2025</p>
      </div>
      
      <div class="legal-content">
        <p>Sprint Planner uses minimal local storage to provide you with a personalized sprint planning experience. This page explains what data we store and how you can manage it.</p>
        
        <h2>What We Store Locally</h2>
        <p>Sprint Planner stores the following data in your browser's localStorage:</p>
        
        <div class="storage-section">
          <h3>Essential Data (Required for functionality)</h3>
          <div class="data-item">
            <div class="data-header">
              <span class="data-name">Sprint Velocity History</span>
              <span class="data-status required">Required</span>
            </div>
            <p class="data-description">Your historical sprint completion data to calculate averages and make predictions.</p>
            <div class="data-example">
              <strong>Example:</strong> <code>{"sprints": [{"velocity": 15}, {"velocity": 18}, {"velocity": 12}]}</code>
            </div>
          </div>
          
          <div class="data-item">
            <div class="data-header">
              <span class="data-name">Team Capacity Settings</span>
              <span class="data-status required">Required</span>
            </div>
            <p class="data-description">Team size, working hours, and availability settings for capacity calculations.</p>
            <div class="data-example">
              <strong>Example:</strong> <code>{"teamMembers": 5, "sprintWeeks": 2, "contractHoursPerWeek": 40}</code>
            </div>
          </div>
          
          <div class="data-item">
            <div class="data-header">
              <span class="data-name">Planning Preferences</span>
              <span class="data-status required">Required</span>
            </div>
            <p class="data-description">Your preferred sprint duration, buffer percentages, and calculation methods.</p>
            <div class="data-example">
              <strong>Example:</strong> <code>{"bufferPercentage": 15, "sprintWeeks": 2}</code>
            </div>
          </div>
        </div>
        
        <div class="storage-section">
          <h3>Optional Data (Can be disabled)</h3>
          <div class="data-item">
            <div class="data-header">
              <span class="data-name">Language Preference</span>
              <span class="data-status optional">Optional</span>
            </div>
            <p class="data-description">Your selected interface language (Dutch/English).</p>
            <div class="data-example">
              <strong>Example:</strong> <code>{"language": "nl"}</code>
            </div>
          </div>
          
          <div class="data-item">
            <div class="data-header">
              <span class="data-name">User Interface Settings</span>
              <span class="data-status optional">Optional</span>
            </div>
            <p class="data-description">Your preferred theme, layout, and display settings.</p>
            <div class="data-example">
              <strong>Example:</strong> <code>{"theme": "dark", "compactMode": false}</code>
            </div>
          </div>
        </div>
        
        <h2>How to Manage Your Data</h2>
        
        <div class="management-section">
          <h3>View Your Stored Data</h3>
          <p>You can view all your stored data by opening your browser's Developer Tools:</p>
          <ol>
            <li>Press <kbd>F12</kbd> or right-click and select "Inspect"</li>
            <li>Go to the "Application" or "Storage" tab</li>
            <li>Expand "Local Storage" in the left sidebar</li>
            <li>Click on your domain (sprintplanner.nl or localhost)</li>
            <li>You'll see all stored data with keys like "sprintplanner-data"</li>
          </ol>
        </div>
        
        <div class="management-section">
          <h3>Delete Specific Data</h3>
          <p>You can delete specific data types:</p>
          <div class="delete-options">
            <button 
              @click="deleteVelocityData" 
              class="btn btn-warning"
              :disabled="isDeleting"
            >
              {{ isDeleting ? 'Deleting...' : 'Delete Velocity Data' }}
            </button>
            <button 
              @click="deleteCapacityData" 
              class="btn btn-warning"
              :disabled="isDeleting"
            >
              {{ isDeleting ? 'Deleting...' : 'Delete Capacity Data' }}
            </button>
            <button 
              @click="deletePreferences" 
              class="btn btn-warning"
              :disabled="isDeleting"
            >
              {{ isDeleting ? 'Deleting...' : 'Delete Preferences' }}
            </button>
          </div>
        </div>
        
        <div class="management-section">
          <h3>Delete All Data</h3>
          <p>To completely reset the application and delete all your data:</p>
          <button 
            @click="deleteAllData" 
            class="btn btn-danger"
            :disabled="isDeleting"
          >
            {{ isDeleting ? 'Deleting...' : 'Delete All Data' }}
          </button>
          <div v-if="deleteMessage" class="delete-message" :class="{ success: deleteSuccess }">
            {{ deleteMessage }}
          </div>
        </div>
        
        <h2>Data Security</h2>
        <p><strong>Local Storage Only:</strong> All your data is stored locally in your browser. We never transmit your sprint planning data to our servers.</p>
        <p><strong>Browser Security:</strong> Your data is protected by your browser's built-in security features. We recommend using a modern, secure browser.</p>
        <p><strong>No Tracking:</strong> We do not use tracking cookies or analytics that collect personal information.</p>
        
        <h2>Data Export</h2>
        <p>You can export your data for backup purposes:</p>
        <button 
          @click="exportData" 
          class="btn btn-primary"
          :disabled="isExporting"
        >
          {{ isExporting ? 'Exporting...' : 'Export My Data' }}
        </button>
        <div v-if="exportMessage" class="export-message">
          {{ exportMessage }}
        </div>
        
        <h2>Contact</h2>
        <p>If you have questions about data storage or need help managing your data, contact us at privacy@sprintplanner.nl</p>
      </div>
      
      <div class="legal-footer">
        <router-link to="/" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDeleting = ref(false)
const isExporting = ref(false)
const deleteMessage = ref('')
const deleteSuccess = ref(false)
const exportMessage = ref('')

const deleteVelocityData = async () => {
  if (!confirm('Are you sure you want to delete all velocity data? This action cannot be undone.')) {
    return
  }
  
  isDeleting.value = true
  try {
    const data = JSON.parse(localStorage.getItem('sprintplanner-data') || '{}')
    delete data.sprints
    delete data.velocityInputMethod
    delete data.manualAverageVelocity
    localStorage.setItem('sprintplanner-data', JSON.stringify(data))
    
    deleteMessage.value = 'Velocity data deleted successfully'
    deleteSuccess.value = true
    setTimeout(() => { deleteMessage.value = '' }, 3000)
  } catch (error) {
    deleteMessage.value = 'Error deleting velocity data'
    deleteSuccess.value = false
  } finally {
    isDeleting.value = false
  }
}

const deleteCapacityData = async () => {
  if (!confirm('Are you sure you want to delete all capacity data? This action cannot be undone.')) {
    return
  }
  
  isDeleting.value = true
  try {
    const data = JSON.parse(localStorage.getItem('sprintplanner-data') || '{}')
    delete data.capacity
    delete data.developers
    delete data.teamInputMethod
    delete data.averageTeamHours
    delete data.teamAvailabilityPercentage
    localStorage.setItem('sprintplanner-data', JSON.stringify(data))
    
    deleteMessage.value = 'Capacity data deleted successfully'
    deleteSuccess.value = true
    setTimeout(() => { deleteMessage.value = '' }, 3000)
  } catch (error) {
    deleteMessage.value = 'Error deleting capacity data'
    deleteSuccess.value = false
  } finally {
    isDeleting.value = false
  }
}

const deletePreferences = async () => {
  if (!confirm('Are you sure you want to delete all preferences? This action cannot be undone.')) {
    return
  }
  
  isDeleting.value = true
  try {
    const data = JSON.parse(localStorage.getItem('sprintplanner-data') || '{}')
    delete data.language
    delete data.theme
    delete data.compactMode
    localStorage.setItem('sprintplanner-data', JSON.stringify(data))
    
    deleteMessage.value = 'Preferences deleted successfully'
    deleteSuccess.value = true
    setTimeout(() => { deleteMessage.value = '' }, 3000)
  } catch (error) {
    deleteMessage.value = 'Error deleting preferences'
    deleteSuccess.value = false
  } finally {
    isDeleting.value = false
  }
}

const deleteAllData = async () => {
  if (!confirm('Are you sure you want to delete ALL data? This action cannot be undone.')) {
    return
  }
  
  isDeleting.value = true
  try {
    localStorage.clear()
    deleteMessage.value = 'All data deleted successfully'
    deleteSuccess.value = true
    setTimeout(() => { deleteMessage.value = '' }, 3000)
  } catch (error) {
    deleteMessage.value = 'Error deleting data'
    deleteSuccess.value = false
  } finally {
    isDeleting.value = false
  }
}

const exportData = async () => {
  isExporting.value = true
  try {
    const data = localStorage.getItem('sprintplanner-data')
    if (!data) {
      exportMessage.value = 'No data found to export'
      return
    }
    
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `sprintplanner-data-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    exportMessage.value = 'Data exported successfully'
    setTimeout(() => { exportMessage.value = '' }, 3000)
  } catch (error) {
    exportMessage.value = 'Error exporting data'
  } finally {
    isExporting.value = false
  }
}
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
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
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-updated {
  color: #a1a1aa;
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
  color: #ffffff;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.legal-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 1.5rem 0 0.75rem 0;
}

.legal-content p {
  margin-bottom: 1.5rem;
  color: #a1a1aa;
}

.legal-content ol {
  margin: 1rem 0 1.5rem 2rem;
  color: #a1a1aa;
}

.legal-content li {
  margin-bottom: 0.5rem;
}

.storage-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.data-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
}

.data-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.data-name {
  font-weight: 600;
  color: #ffffff;
}

.data-status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.data-status.required {
  background: rgba(239, 68, 68, 0.1);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.data-status.optional {
  background: rgba(59, 130, 246, 0.1);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.data-description {
  color: #a1a1aa;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.data-example {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.75rem;
  color: #10b981;
}

.management-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.delete-options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
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
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.btn-warning {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.btn-warning:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
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

.delete-message, .export-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

.delete-message.success, .export-message {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: #86efac;
}

.legal-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

kbd {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-family: monospace;
  font-size: 0.875rem;
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
  
  .storage-section, .management-section {
    padding: 1rem;
  }
  
  .delete-options {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
