<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>{{ $t('legal.privacy.title') }}</h1>
        <p class="last-updated">{{ $t('legal.privacy.lastUpdated') }}</p>
      </div>
      
      <div class="legal-content">
        <p>{{ $t('legal.privacy.content') }}</p>
        
        <h2>1. Information We Collect</h2>
        <p>Sprint Planner is designed with privacy in mind. We collect minimal data necessary to provide our service:</p>
        <ul>
          <li><strong>Sprint velocity data</strong> - Historical sprint completion data (stored locally in your browser)</li>
          <li><strong>Team capacity information</strong> - Team size, working hours, and availability settings (stored locally in your browser)</li>
          <li><strong>Planning preferences</strong> - Sprint duration, buffer percentages, and calculation methods (stored locally in your browser)</li>
          <li><strong>Language preference</strong> - Your selected interface language (stored locally in your browser)</li>
          <li><strong>Usage analytics</strong> - Anonymous usage statistics to improve our service (no personal data)</li>
        </ul>
        
        <h2>2. How We Use Your Information</h2>
        <p>Your data is used exclusively to:</p>
        <ul>
          <li>Calculate sprint capacity and velocity averages for planning recommendations</li>
          <li>Provide personalized sprint planning suggestions based on your historical data</li>
          <li>Remember your preferences and settings for a better user experience</li>
          <li>Improve our service through anonymous usage analytics</li>
        </ul>
        
        <h2>3. Data Storage and Security</h2>
        <p><strong>Local Storage:</strong> All your sprint planning data is stored locally in your browser's localStorage. We do not store any of your data on our servers.</p>
        <p><strong>Data Security:</strong> Your data is protected by your browser's built-in security features. We recommend using a modern, secure browser and keeping it updated.</p>
        <p><strong>Data Retention:</strong> Your data remains in your browser until you delete it or clear your browser data. We have no access to or control over your locally stored data.</p>
        
        <h2>4. Data Sharing and Third Parties</h2>
        <p>We do not share, sell, or transmit your sprint planning data to any third parties. Your data remains completely private and secure on your device.</p>
        <p><strong>Third-party services we use:</strong></p>
        <ul>
          <li><strong>Hosting:</strong> We use Cloudflare for website hosting and CDN services</li>
          <li><strong>Analytics:</strong> We use anonymous analytics to understand usage patterns (no personal data collected)</li>
        </ul>
        
        <h2>5. Your Rights (GDPR Compliance)</h2>
        <p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
        <ul>
          <li><strong>Right to Access:</strong> You can view all your data directly in the application</li>
          <li><strong>Right to Rectification:</strong> You can modify your data at any time through the interface</li>
          <li><strong>Right to Erasure:</strong> You can delete all your data using the "Delete All Data" button or by clearing your browser data</li>
          <li><strong>Right to Data Portability:</strong> You can export your data using the export feature</li>
          <li><strong>Right to Object:</strong> You can stop using the service at any time</li>
        </ul>
        
        <h2>6. Cookies and Local Storage</h2>
        <p>Sprint Planner uses browser localStorage (not cookies) to store your data. This includes:</p>
        <ul>
          <li>Sprint velocity history</li>
          <li>Team capacity settings</li>
          <li>Planning preferences</li>
          <li>Language settings</li>
        </ul>
        <p>You can clear this data at any time through your browser settings or using our data deletion feature.</p>
        
        <h2>7. Children's Privacy</h2>
        <p>Sprint Planner is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
        
        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.</p>
        
        <h2>9. Contact Information</h2>
        <p>If you have any questions about this privacy policy or your data rights, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> privacy@sprintplanner.nl</li>
          <li><strong>Website:</strong> https://sprintplanner.nl</li>
        </ul>
        
        <div class="legal-note">
          <h3>Data Controller Information</h3>
          <p><strong>Controller:</strong> Sprint Planner<br>
          <strong>Contact:</strong> privacy@sprintplanner.nl<br>
          <strong>Last Updated:</strong> January 2025</p>
        </div>
      </div>
      
      <div class="legal-footer">
        <router-link to="/" class="btn btn-primary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

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

.legal-note {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 2rem 0;
}

.legal-note h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.legal-note p {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
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
