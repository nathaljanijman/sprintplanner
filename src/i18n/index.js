// Dutch-only configuration - no i18n needed
const messages = {
  nav: {
    home: 'Home',
    planner: 'Planner'
  },
  hero: {
    title: 'Sprint Planner',
    subtitle: 'De eenvoudigste manier om je sprints te plannen en je team\'s velocity te tracken',
    cta: 'Ga naar Planner'
  },
  features: {
    title: 'Functies',
    subtitle: 'Alles wat je nodig hebt voor effectieve sprint planning',
    velocity: {
      title: 'Velocity tracking',
      description: 'Track je team\'s velocity over tijd om betere voorspellingen te maken'
    },
    planning: {
      title: 'Sprint planning',
      description: 'Plan je sprints op basis van historische data en team capaciteit'
    },
    simple: {
      title: 'Simpel & snel',
      description: 'Intuïtieve interface die je binnen seconden resultaten geeft'
    },
    data: {
      title: 'Data-driven',
      description: 'Maak beslissingen op basis van echte data, niet giswerk'
    },
    team: {
      title: 'Team focus',
      description: 'Gebouwd voor agile teams die hun planning willen verbeteren'
    }
  },
  about: {
    title: 'Over Sprint Planner',
    description: 'Sprint Planner helpt agile teams hun sprints effectiever te plannen door velocity te tracken en team capaciteit te berekenen. Onze tool maakt het makkelijk om data-driven beslissingen te nemen en je sprint planning proces te verbeteren.',
    cta: 'Start met plannen'
  },
  footer: {
    copyright: '© 2025 sprintplanner.nl - Voorspel je sprints beter',
    legal: {
      privacy: 'Privacybeleid',
      terms: 'Algemene Voorwaarden',
      service: 'Service',
      dataDeletion: 'Gegevens Verwijderen'
    }
  },
  planner: {
    title: 'Sprint Planner',
    subtitle: 'Plan je volgende sprint op basis van historische velocity en team capaciteit',
    reset: 'Reset',
    export: 'Exporteer Data'
  },
  stepper: {
    title: 'Sprint Planning Wizard',
    subtitle: 'Volg deze stappen om je volgende sprint te plannen',
    step: 'Stap {current} van {total}',
    previous: 'Vorige',
    next: 'Volgende',
    complete: 'Voltooien',
    previousStep: 'Ga naar vorige stap',
    nextStep: 'Ga naar volgende stap'
  },
  velocityForm: {
    title: 'Historische Velocity',
    subtitle: 'Voer velocity data in van je laatste 6 sprints',
    sprint: 'Sprint {number}',
    velocity: 'Velocity',
    average: 'Gemiddelde Velocity',
    addSprint: 'Sprint Toevoegen',
    removeSprint: 'Sprint Verwijderen'
  },
  capacityForm: {
    title: 'Team Capaciteit',
    subtitle: 'Configureer je team\'s capaciteit voor de volgende sprint',
    sprintWeeks: 'Sprint Duur (weken)',
    teamMembers: 'Aantal Teamleden',
    availability: 'Team Beschikbaarheid (%)',
    factor: 'Capaciteit Factor',
    calculatedCapacity: 'Berekende Capaciteit'
  },
  availability: {
    title: 'Beschikbaarheid',
    subtitle: 'Configureer team beschikbaarheid en afwezigheden'
  },
  results: {
    title: 'Sprint Planning Resultaten',
    subtitle: 'Gebaseerd op je historische data en team capaciteit',
    averageVelocity: 'Gemiddelde Velocity',
    teamCapacity: 'Team Capaciteit',
    recommendedSprint: 'Aanbevolen Sprint Grootte',
    confidence: 'Vertrouwensniveau',
    notes: 'Planning Notities',
    saveNotes: 'Notities Opslaan'
  },
  legal: {
    privacy: {
      title: 'Privacybeleid',
      lastUpdated: 'Laatst bijgewerkt: januari 2025',
      content: 'Dit privacybeleid beschrijft hoe we je informatie verzamelen, gebruiken en beschermen wanneer je Sprint Planner gebruikt.'
    },
    terms: {
      title: 'Algemene Voorwaarden',
      lastUpdated: 'Laatst bijgewerkt: januari 2025',
      content: 'Deze algemene voorwaarden regelen je gebruik van Sprint Planner. Door onze service te gebruiken, ga je akkoord met deze voorwaarden.'
    },
    service: {
      title: 'Service Informatie',
      lastUpdated: 'Laatst bijgewerkt: januari 2025',
      content: 'Sprint Planner is een gratis tool om agile teams te helpen hun sprints effectiever te plannen.'
    },
    dataDeletion: {
      title: 'Gegevens Verwijderen',
      lastUpdated: 'Laatst bijgewerkt: januari 2025',
      content: 'Je kunt al je gegevens op elk moment verwijderen. Alle gegevens worden lokaal opgeslagen in je browser.',
      deleteButton: 'Verwijder Alle Gegevens',
      confirmMessage: 'Weet je zeker dat je alle gegevens wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.',
      successMessage: 'Alle gegevens zijn succesvol verwijderd.'
    }
  }
}

export default messages
