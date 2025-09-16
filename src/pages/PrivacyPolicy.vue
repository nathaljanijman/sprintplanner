<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Privacybeleid</h1>
        <p class="last-updated">Laatst bijgewerkt: september 2025</p>
      </div>
      
      <div class="legal-content">
        <p>Dit privacybeleid beschrijft hoe we je informatie verzamelen, gebruiken en beschermen wanneer je Sprint Planner gebruikt.</p>
        
        <h2>1. Informatie die we verzamelen</h2>
        <p>Sprint Planner is ontworpen met privacy in gedachten. We verzamelen minimale gegevens die nodig zijn voor onze service:</p>
        <ul>
          <li><strong>Sprint velocity gegevens</strong> - Historische sprint voltooiingsdata (lokaal opgeslagen in je browser)</li>
          <li><strong>Team capaciteit informatie</strong> - Team grootte, werkuren en beschikbaarheidsinstellingen (lokaal opgeslagen in je browser)</li>
          <li><strong>Planning voorkeuren</strong> - Sprint duur, buffer percentages en berekeningsmethoden (lokaal opgeslagen in je browser)</li>
          <li><strong>Taal voorkeur</strong> - Je geselecteerde interface taal (lokaal opgeslagen in je browser)</li>
          <li><strong>Gebruiksstatistieken</strong> - Anonieme gebruiksstatistieken om onze service te verbeteren (geen persoonlijke gegevens)</li>
        </ul>
        
        <h2>2. Hoe we je informatie gebruiken</h2>
        <p>Je gegevens worden uitsluitend gebruikt om:</p>
        <ul>
          <li>Sprint capaciteit en velocity gemiddelden te berekenen voor planning aanbevelingen</li>
          <li>Gepersonaliseerde sprint planning suggesties te geven op basis van je historische gegevens</li>
          <li>Je voorkeuren en instellingen te onthouden voor een betere gebruikerservaring</li>
          <li>Onze service te verbeteren door anonieme gebruiksstatistieken</li>
        </ul>
        
        <h2>3. Gegevensopslag en beveiliging</h2>
        <p><strong>Lokale opslag:</strong> Al je sprint planning gegevens worden lokaal opgeslagen in je browser's localStorage. We slaan geen van je gegevens op onze servers op.</p>
        <p><strong>Gegevensbeveiliging:</strong> Je gegevens worden beschermd door de ingebouwde beveiligingsfuncties van je browser. We raden aan om een moderne, veilige browser te gebruiken en deze up-to-date te houden.</p>
        <p><strong>Gegevensbewaring:</strong> Je gegevens blijven in je browser totdat je ze verwijdert of je browser gegevens wist. We hebben geen toegang tot of controle over je lokaal opgeslagen gegevens.</p>
        
        <h2>4. Gegevensdeling en derden</h2>
        <p>We delen, verkopen of verzenden je sprint planning gegevens niet naar derden. Je gegevens blijven volledig privé en veilig op je apparaat.</p>
        <p><strong>Derde partij services die we gebruiken:</strong></p>
        <ul>
          <li><strong>Hosting:</strong> We gebruiken Cloudflare voor website hosting en CDN services</li>
          <li><strong>Analytics:</strong> We gebruiken anonieme analytics om gebruiks patronen te begrijpen (geen persoonlijke gegevens verzameld)</li>
        </ul>
        
        <h2>5. Je rechten (GDPR naleving)</h2>
        <p>Onder de Algemene Verordening Gegevensbescherming (AVG) heb je de volgende rechten:</p>
        <ul>
          <li><strong>Recht op toegang:</strong> Je kunt al je gegevens direct in de applicatie bekijken</li>
          <li><strong>Recht op rectificatie:</strong> Je kunt je gegevens op elk moment via de interface wijzigen</li>
          <li><strong>Recht op vergetelheid:</strong> Je kunt al je gegevens verwijderen met de "Verwijder Alle Gegevens" knop of door je browser gegevens te wissen</li>
          <li><strong>Recht op gegevensoverdraagbaarheid:</strong> Je kunt je gegevens exporteren met de export functie</li>
          <li><strong>Recht op beperking:</strong> Je kunt het gebruik van je gegevens beperken door ze te verwijderen</li>
          <li><strong>Recht op bezwaar:</strong> Je kunt bezwaar maken tegen de verwerking van je gegevens door ze te verwijderen</li>
        </ul>
        
        <h2>6. Cookies en lokale opslag</h2>
        <p>Sprint Planner gebruikt geen tracking cookies. We gebruiken alleen:</p>
        <ul>
          <li><strong>Essentiële lokale opslag</strong> - Voor het opslaan van je sprint planning gegevens</li>
          <li><strong>Voorkeuren opslag</strong> - Voor het onthouden van je taal en interface instellingen</li>
          <li><strong>Cookie toestemming</strong> - Voor het onthouden van je cookie voorkeuren</li>
        </ul>
        
        <h2>7. Privacy van kinderen</h2>
        <p>Sprint Planner is niet specifiek gericht op kinderen onder de 16 jaar. We verzamelen niet bewust persoonlijke informatie van kinderen onder de 16 jaar. Als je een ouder of voogd bent en je weet dat je kind ons persoonlijke informatie heeft gegeven, neem dan contact met ons op.</p>
        
        <h2>8. Wijzigingen aan dit privacybeleid</h2>
        <p>We kunnen dit privacybeleid van tijd tot tijd bijwerken. We zullen je op de hoogte stellen van eventuele wijzigingen door de nieuwe datum bovenaan dit privacybeleid te plaatsen. We raden je aan dit privacybeleid periodiek te controleren op wijzigingen.</p>
        
        <h2>9. Contact</h2>
        <p>Als je vragen hebt over dit privacybeleid of over hoe we je gegevens verwerken, neem dan contact met ons op via privacy@sprintplanner.nl</p>
        
        <div class="legal-note">
          <p><strong>Juridische noot:</strong> Dit privacybeleid is van toepassing op het gebruik van Sprint Planner. Door onze service te gebruiken, ga je akkoord met de verzameling en het gebruik van informatie zoals beschreven in dit privacybeleid.</p>
        </div>
      </div>
      
      <div class="legal-footer">
        <router-link to="/" class="btn btn-primary">Terug naar Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
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

.legal-note {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 2rem 0;
}

.legal-note p {
  color: #93c5fd;
  margin-bottom: 0;
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

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
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
}
</style>