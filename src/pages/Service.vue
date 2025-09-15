<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>{{ $t('legal.service.title') }}</h1>
        <p class="last-updated">{{ $t('legal.service.lastUpdated') }}</p>
      </div>
      
      <div class="legal-content">
        <p>{{ $t('legal.service.content') }}</p>
        
        <h2>1. Service Overview</h2>
        <p>Sprint Planner is a comprehensive web-based tool designed to help agile teams improve their sprint planning process through data-driven insights and recommendations.</p>
        
        <h2>2. Core Features</h2>
        <p>Our service provides the following key features:</p>
        <ul>
          <li><strong>Historical Velocity Tracking</strong> - Input and analyze your team's sprint velocity over time</li>
          <li><strong>Team Capacity Planning</strong> - Calculate realistic team capacity based on working hours and availability</li>
          <li><strong>Intelligent Recommendations</strong> - Get data-driven suggestions for optimal sprint size</li>
          <li><strong>Availability Management</strong> - Track individual and team absences for accurate planning</li>
          <li><strong>Buffer Configuration</strong> - Set appropriate buffers for unexpected issues</li>
          <li><strong>Multi-language Support</strong> - Available in Dutch and English</li>
          <li><strong>Data Export</strong> - Export your planning data for team meetings and documentation</li>
        </ul>
        
        <h2>3. Technical Specifications</h2>
        <p><strong>Architecture:</strong> Sprint Planner is built as a modern single-page application (SPA) using Vue.js 3 and Vite.</p>
        <p><strong>Data Storage:</strong> All data is stored locally in your browser's localStorage - no server-side data storage.</p>
        <p><strong>Performance:</strong> Optimized for fast loading and responsive user experience across all devices.</p>
        
        <h2>4. Browser Compatibility</h2>
        <p>Sprint Planner is compatible with all modern browsers that support ES6+ and localStorage:</p>
        <ul>
          <li><strong>Chrome</strong> 80+ (recommended)</li>
          <li><strong>Firefox</strong> 75+</li>
          <li><strong>Safari</strong> 13+</li>
          <li><strong>Edge</strong> 80+</li>
          <li><strong>Opera</strong> 67+</li>
        </ul>
        
        <h2>5. Mobile and Device Support</h2>
        <p>Our service is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop computers (Windows, macOS, Linux)</li>
          <li>Tablets (iPad, Android tablets)</li>
          <li>Mobile phones (iOS, Android)</li>
          <li>Various screen sizes from 320px to 4K displays</li>
        </ul>
        
        <h2>6. Data Privacy and Security</h2>
        <p><strong>Local Storage Only:</strong> All your sprint planning data remains on your device. We don't collect, store, or transmit any of your data to our servers.</p>
        <p><strong>No Tracking:</strong> We don't use cookies or tracking pixels to monitor your usage.</p>
        <p><strong>Secure Connection:</strong> All communication with our service uses HTTPS encryption.</p>
        <p><strong>Data Control:</strong> You have complete control over your data - view, modify, or delete it at any time.</p>
        
        <h2>7. Service Availability</h2>
        <p><strong>Uptime:</strong> We strive for 99.9% uptime, but cannot guarantee uninterrupted service.</p>
        <p><strong>Maintenance:</strong> Scheduled maintenance will be announced in advance when possible.</p>
        <p><strong>Updates:</strong> New features and improvements are deployed automatically - no action required from you.</p>
        
        <h2>8. Performance and Limitations</h2>
        <p><strong>Data Limits:</strong> Limited only by your browser's localStorage capacity (typically 5-10MB).</p>
        <p><strong>Calculation Speed:</strong> All calculations are performed client-side for maximum speed and privacy.</p>
        <p><strong>Offline Capability:</strong> Once loaded, the service works offline for viewing and basic calculations.</p>
        
        <h2>9. Support and Documentation</h2>
        <p><strong>User Guide:</strong> Comprehensive help is available within the application interface.</p>
        <p><strong>Technical Support:</strong> For technical issues, contact us at support@sprintplanner.nl</p>
        <p><strong>Feature Requests:</strong> We welcome feedback and feature suggestions at feedback@sprintplanner.nl</p>
        
        <h2>10. Service Updates and Changes</h2>
        <p><strong>Automatic Updates:</strong> New features and improvements are deployed automatically.</p>
        <p><strong>Backward Compatibility:</strong> We strive to maintain compatibility with existing data formats.</p>
        <p><strong>Change Notifications:</strong> Significant changes will be announced on our website.</p>
        
        <h2>11. Third-Party Services</h2>
        <p>We use the following third-party services to provide our service:</p>
        <ul>
          <li><strong>Cloudflare</strong> - CDN and security services</li>
          <li><strong>Vercel/Netlify</strong> - Hosting and deployment (if applicable)</li>
          <li><strong>Google Fonts</strong> - Web fonts (loaded from Google's servers)</li>
        </ul>
        
        <h2>12. Service Status</h2>
        <p><strong>Current Status:</strong> Active and fully operational</p>
        <p><strong>Last Updated:</strong> January 2025</p>
        <p><strong>Version:</strong> 1.0.0</p>
        
        <div class="legal-note">
          <h3>Service Level Agreement (SLA)</h3>
          <p>While we strive to provide reliable service, Sprint Planner is provided "as is" without any guarantees of uptime or performance. For critical business use, we recommend maintaining local backups of your planning data.</p>
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
