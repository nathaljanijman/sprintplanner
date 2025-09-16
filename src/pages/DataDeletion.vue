<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Gegevens Verwijderen</h1>
        <p class="last-updated">Laatst bijgewerkt: september 2025</p>
      </div>
      
      <div class="legal-content">
        <p>Je kunt al je gegevens op elk moment verwijderen. Alle gegevens worden lokaal opgeslagen in je browser.</p>
        
        <h2>Welke gegevens worden opgeslagen</h2>
        <p>Sprint Planner slaat de volgende gegevens lokaal op in je browser:</p>
        <ul>
          <li>Sprint velocity geschiedenis</li>
          <li>Team capaciteit instellingen</li>
          <li>Planning notities en resultaten</li>
          <li>Taal voorkeur</li>
          <li>Gebruikersinterface voorkeuren</li>
        </ul>
        
        <h2>Hoe je je gegevens kunt verwijderen</h2>
        <p>Je kunt al je gegevens op twee manieren verwijderen:</p>
        
        <div class="delete-section">
          <h3>Methode 1: Gebruik de verwijder knop</h3>
          <p>Klik op de knop hieronder om direct al je gegevens te verwijderen:</p>
          <button 
            @click="deleteAllData" 
            class="btn btn-danger"
            :disabled="isDeleting"
          >
            {{ isDeleting ? 'Verwijderen...' : 'Verwijder Alle Gegevens' }}
          </button>
          <div v-if="deleteMessage" class="delete-message" :class="{ success: deleteSuccess }">
            {{ deleteMessage }}
          </div>
        </div>
        
        <div class="delete-section">
          <h3>Methode 2: Browser gegevens wissen</h3>
          <p>Je kunt ook je gegevens wissen door je browser's localStorage te wissen:</p>
          <ol>
            <li>Open je browser's Developer Tools (F12)</li>
            <li>Ga naar het Application of Storage tabblad</li>
            <li>Zoek "Local Storage" in de linker sidebar</li>
            <li>Selecteer je domein (sprintplanner.nl of localhost)</li>
            <li>Verwijder alle items of wis alle gegevens</li>
          </ol>
        </div>
        
        <h2>Wat er gebeurt na verwijdering</h2>
        <p>Na het verwijderen van je gegevens:</p>
        <ul>
          <li>Alle sprint velocity gegevens gaan verloren</li>
          <li>Alle team capaciteit instellingen worden gereset</li>
          <li>Alle planning notities worden verwijderd</li>
          <li>Taal voorkeur wordt gereset naar standaard (Nederlands)</li>
          <li>Je moet alle gegevens opnieuw invoeren om de planner te gebruiken</li>
        </ul>
        
        <h2>Gegevensherstel</h2>
        <p>Zodra gegevens zijn verwijderd, kunnen ze niet worden hersteld. Zorg ervoor dat je belangrijke gegevens exporteert voordat je ze verwijdert als je een back-up wilt bewaren.</p>
        
        <h2>Contact</h2>
        <p>Als je vragen hebt over gegevensverwijdering of hulp nodig hebt, neem dan contact met ons op via privacy@sprintplanner.nl</p>
      </div>
      
      <div class="legal-footer">
        <router-link to="/" class="btn btn-primary">Terug naar Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDeleting = ref(false)
const deleteMessage = ref('')
const deleteSuccess = ref(false)

const deleteAllData = async () => {
  if (!confirm('Weet je zeker dat je alle gegevens wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.')) {
    return
  }
  
  isDeleting.value = true
  deleteMessage.value = ''
  
  try {
    // Clear all localStorage data
    localStorage.clear()
    
    // Wait a moment for visual feedback
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    deleteMessage.value = 'Alle gegevens zijn succesvol verwijderd.'
    deleteSuccess.value = true
    
    // Reset after 3 seconds
    setTimeout(() => {
      deleteMessage.value = ''
      deleteSuccess.value = false
    }, 3000)
    
  } catch (error) {
    deleteMessage.value = 'Fout bij het verwijderen van gegevens. Probeer je browser gegevens handmatig te wissen.'
    deleteSuccess.value = false
  } finally {
    isDeleting.value = false
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

.legal-content ul, .legal-content ol {
  margin: 1rem 0 1.5rem 2rem;
  color: #a1a1aa;
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
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
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