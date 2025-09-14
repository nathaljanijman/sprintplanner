<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>{{ $t('legal.terms.title') }}</h1>
        <p class="last-updated">{{ $t('legal.terms.lastUpdated') }}</p>
      </div>
      
      <div class="legal-content">
        <p>{{ $t('legal.terms.content') }}</p>
        
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using Sprint Planner, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2>Use License</h2>
        <p>Permission is granted to temporarily use Sprint Planner for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>modify or copy the materials</li>
          <li>use the materials for any commercial purpose or for any public display</li>
          <li>attempt to reverse engineer any software contained on the website</li>
          <li>remove any copyright or other proprietary notations from the materials</li>
        </ul>
        
        <h2>Disclaimer</h2>
        <p>The materials on Sprint Planner are provided on an 'as is' basis. Sprint Planner makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        
        <h2>Limitations</h2>
        <p>In no event shall Sprint Planner or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sprint Planner, even if Sprint Planner or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        
        <h2>Accuracy of Materials</h2>
        <p>The materials appearing on Sprint Planner could include technical, typographical, or photographic errors. Sprint Planner does not warrant that any of the materials on its website are accurate, complete or current.</p>
        
        <h2>Contact Information</h2>
        <p>If you have any questions about these Terms of Service, please contact us at legal@sprintplanner.nl</p>
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

.legal-content ul {
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
