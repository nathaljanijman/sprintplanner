import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      planner: 'Planner',
      language: 'Language'
    },
    hero: {
      title: 'Sprint Planner',
      subtitle: 'The easiest way to plan your sprints and track your team\'s velocity',
      cta: 'Go to Planner'
    },
    features: {
      title: 'Features',
      subtitle: 'Everything you need for effective sprint planning',
      velocity: {
        title: 'Velocity tracking',
        description: 'Track your team\'s velocity over time to make better predictions'
      },
      planning: {
        title: 'Sprint planning',
        description: 'Plan your sprints based on historical data and team capacity'
      },
      simple: {
        title: 'Simple & fast',
        description: 'Intuitive interface that gets you results in seconds'
      },
      data: {
        title: 'Data-driven',
        description: 'Make decisions based on real data, not guesswork'
      },
      team: {
        title: 'Team focus',
        description: 'Built for agile teams who want to improve their planning'
      }
    },
    about: {
      title: 'About Sprint Planner',
      description: 'Sprint Planner helps agile teams plan their sprints more effectively by tracking velocity and calculating team capacity. Our tool makes it easy to make data-driven decisions and improve your sprint planning process.',
      cta: 'Start planning'
    },
    footer: {
      copyright: '© 2025 sprintplanner.nl - Predict your sprints better',
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        service: 'Service',
        dataDeletion: 'Data Deletion'
      }
    },
    planner: {
      title: 'Sprint Planner',
      subtitle: 'Plan your next sprint based on historical velocity and team capacity',
      reset: 'Reset',
      export: 'Export Data'
    },
    stepper: {
      title: 'Sprint Planning Wizard',
      subtitle: 'Follow these steps to plan your next sprint',
      step: 'Step {current} of {total}',
      previous: 'Previous',
      next: 'Next',
      complete: 'Complete',
      previousStep: 'Go to previous step',
      nextStep: 'Go to next step',
      complete: 'Complete planning'
    },
    velocityForm: {
      title: 'Historical Velocity',
      subtitle: 'Enter velocity data from your last 6 sprints',
      sprint: 'Sprint {number}',
      velocity: 'Velocity',
      average: 'Average Velocity',
      addSprint: 'Add Sprint',
      removeSprint: 'Remove Sprint'
    },
    capacityForm: {
      title: 'Team Capacity',
      subtitle: 'Configure your team\'s capacity for the next sprint',
      sprintWeeks: 'Sprint Duration (weeks)',
      teamMembers: 'Number of Team Members',
      availability: 'Team Availability (%)',
      factor: 'Capacity Factor',
      calculatedCapacity: 'Calculated Capacity'
    },
    availability: {
      title: 'Availability',
      subtitle: 'Configure team availability and absences'
    },
    results: {
      title: 'Sprint Planning Results',
      subtitle: 'Based on your historical data and team capacity',
      averageVelocity: 'Average Velocity',
      teamCapacity: 'Team Capacity',
      recommendedSprint: 'Recommended Sprint Size',
      confidence: 'Confidence Level',
      notes: 'Planning Notes',
      saveNotes: 'Save Notes'
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: January 2025',
        content: 'This privacy policy describes how we collect, use, and protect your information when you use Sprint Planner.'
      },
      terms: {
        title: 'Terms of Service',
        lastUpdated: 'Last updated: January 2025',
        content: 'These terms of service govern your use of Sprint Planner. By using our service, you agree to these terms.'
      },
      service: {
        title: 'Service Information',
        lastUpdated: 'Last updated: January 2025',
        content: 'Sprint Planner is a free tool to help agile teams plan their sprints more effectively.'
      },
      dataDeletion: {
        title: 'Data Deletion',
        lastUpdated: 'Last updated: January 2025',
        content: 'You can delete all your data at any time. All data is stored locally in your browser.',
        deleteButton: 'Delete All Data',
        confirmMessage: 'Are you sure you want to delete all data? This action cannot be undone.',
        successMessage: 'All data has been deleted successfully.'
      }
    }
  },
  nl: {
    nav: {
      home: 'Home',
      planner: 'Planner',
      language: 'Taal'
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
      nextStep: 'Ga naar volgende stap',
      complete: 'Voltooi planning'
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
}

const i18n = createI18n({
  locale: 'nl', // default locale
  fallbackLocale: 'en',
  messages
})

export default i18n
