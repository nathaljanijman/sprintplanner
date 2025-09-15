<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>{{ $t('legal.terms.title') }}</h1>
        <p class="last-updated">{{ $t('legal.terms.lastUpdated') }}</p>
      </div>
      
      <div class="legal-content">
        <p>{{ $t('legal.terms.content') }}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Sprint Planner ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        
        <h2>2. Description of Service</h2>
        <p>Sprint Planner is a free web-based tool designed to help agile teams plan their sprints more effectively by:</p>
        <ul>
          <li>Tracking historical sprint velocity data</li>
          <li>Calculating team capacity and availability</li>
          <li>Providing sprint planning recommendations</li>
          <li>Offering data visualization and insights</li>
        </ul>
        
        <h2>3. Use License</h2>
        <p>Permission is granted to use Sprint Planner for personal and commercial purposes, subject to the following restrictions:</p>
        <ul>
          <li>You may not modify, copy, or redistribute the software</li>
          <li>You may not attempt to reverse engineer or decompile the application</li>
          <li>You may not use the service for any illegal or unauthorized purpose</li>
          <li>You may not remove any copyright or proprietary notices</li>
          <li>You may not use the service to violate any laws or regulations</li>
        </ul>
        
        <h2>4. User Responsibilities</h2>
        <p>As a user of Sprint Planner, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information when using the service</li>
          <li>Use the service in accordance with all applicable laws and regulations</li>
          <li>Not attempt to gain unauthorized access to the service or its systems</li>
          <li>Not use the service to transmit malicious code or harmful content</li>
          <li>Respect the intellectual property rights of Sprint Planner</li>
        </ul>
        
        <h2>5. Data and Privacy</h2>
        <p>Your use of Sprint Planner is subject to our Privacy Policy, which is incorporated into these Terms by reference. Key points:</p>
        <ul>
          <li>All data is stored locally in your browser</li>
          <li>We do not collect or store your personal sprint data on our servers</li>
          <li>You are responsible for backing up your data</li>
          <li>You can delete your data at any time</li>
        </ul>
        
        <h2>6. Service Availability</h2>
        <p>We strive to provide continuous service availability, but we do not guarantee:</p>
        <ul>
          <li>Uninterrupted access to the service</li>
          <li>Error-free operation</li>
          <li>Compatibility with all devices or browsers</li>
          <li>Availability of specific features</li>
        </ul>
        
        <h2>7. Intellectual Property</h2>
        <p>The service and its original content, features, and functionality are owned by Sprint Planner and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
        
        <h2>8. Disclaimer of Warranties</h2>
        <p>Sprint Planner is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:</p>
        <ul>
          <li>Warranties of merchantability or fitness for a particular purpose</li>
          <li>Warranties regarding the accuracy, reliability, or completeness of the service</li>
          <li>Warranties that the service will be uninterrupted or error-free</li>
          <li>Warranties regarding the security of the service</li>
        </ul>
        
        <h2>9. Limitation of Liability</h2>
        <p>In no event shall Sprint Planner, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:</p>
        <ul>
          <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
          <li>Damages resulting from your use or inability to use the service</li>
          <li>Damages resulting from any conduct or content of any third party on the service</li>
          <li>Damages resulting from unauthorized access to or alteration of your data</li>
        </ul>
        
        <h2>10. Indemnification</h2>
        <p>You agree to defend, indemnify, and hold harmless Sprint Planner and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).</p>
        
        <h2>11. Termination</h2>
        <p>We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        
        <h2>12. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
        
        <h2>13. Governing Law</h2>
        <p>These Terms shall be interpreted and governed by the laws of the Netherlands, without regard to its conflict of law provisions.</p>
        
        <h2>14. Severability</h2>
        <p>If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
        
        <h2>15. Contact Information</h2>
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> legal@sprintplanner.nl</li>
          <li><strong>Website:</strong> https://sprintplanner.nl</li>
        </ul>
        
        <div class="legal-note">
          <h3>Effective Date</h3>
          <p>These Terms of Service are effective as of January 1, 2025, and will remain in effect except with respect to any changes in their provisions in the future, which will be in effect immediately after being posted on this page.</p>
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
