<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>{{ $t('legal.service.title') }}</h1>
        <p class="last-updated">{{ $t('legal.service.lastUpdated') }}</p>
      </div>
      
      <div class="legal-content">
        <p>{{ $t('legal.service.content') }}</p>
        
        <h2>What We Offer</h2>
        <p>Sprint Planner provides the following services:</p>
        <ul>
          <li>Velocity tracking and calculation</li>
          <li>Team capacity planning</li>
          <li>Sprint size recommendations</li>
          <li>Data visualization and insights</li>
          <li>Multi-language support (Dutch and English)</li>
        </ul>
        
        <h2>How It Works</h2>
        <p>Our service is designed to be simple and intuitive:</p>
        <ol>
          <li>Enter your historical sprint velocity data</li>
          <li>Configure your team's capacity for the next sprint</li>
          <li>Get instant recommendations based on your data</li>
          <li>Export your planning data for team meetings</li>
        </ol>
        
        <h2>Data Privacy</h2>
        <p>All your data is stored locally in your browser. We don't collect, store, or transmit any of your sprint planning data to our servers. Your information remains completely private and secure.</p>
        
        <h2>Browser Compatibility</h2>
        <p>Sprint Planner works with all modern browsers including:</p>
        <ul>
          <li>Chrome (recommended)</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
        </ul>
        
        <h2>Support</h2>
        <p>If you need help or have questions about our service, please contact us at support@sprintplanner.nl</p>
        
        <h2>Updates</h2>
        <p>We regularly update Sprint Planner with new features and improvements. All updates are free and automatic when you refresh your browser.</p>
      </div>
      
      <div class="legal-footer">
        <router-link to="/" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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

.legal-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .legal-content h2 {
    font-size: 1.25rem;
  }
}
</style>
