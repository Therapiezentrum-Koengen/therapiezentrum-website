
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Activity, Ticket, Heart, Zap, Coffee, Clock, Barbell, Thermometer } from 'lucide-react';

const colors = {
  primary: '#348393',
  accent: '#A3D279'
};

const services = {
  Therapiezentrum: [
    {
      title: 'Mitgliedschaft',
      options: [
        { label: 'Standard', price: '18,50 €/Woche' },
        { label: 'Flex', price: '21 €/Woche (monatlich kündbar)' },
        { label: 'Partnertarif', price: '13,88 €/Woche (2 Personen, 25 % Rabatt)' }
      ],
      features: [
        'Getränke',
        '24 Stunden Zugang',
        'Herz‑Kreislauftherapie',
        'Beweglichkeitstherapie',
        'Trainingstherapie',
        'Koordinationstherapie',
        'Schwingungstherapie',
        'Individueller Therapieplan alle 8–12 Wochen',
        'Körperzusammensetzungsanalyse (BIA)'
      ]
    },
    {
      title: 'Präventionskurs §20',
      price: '169 €',
      features: [
        'Alle Leistungen der Mitgliedschaft',
        '60 Tage Zugang (automatisches Ende)',
        'Mindestens 8 Einheiten für Kostenerstattung',
        'Zusätzliche Einheiten (1× pro Woche)',
        'Zertifikat bei erfolgreichem Abschluss'
      ],
      note: '40–100 % Erstattung durch gesetzliche Krankenkassen, 2× jährlich'
    },
    {
      title: '10er Karte',
      price: '159 €',
      features: [
        'Alle Leistungen der Mitgliedschaft (Zeitkontingent)'
      ]
    }
  ],
  Physiotherapie: [
    {
      category: 'Heilmittel',
      items: [
        'Krankengymnastik (KG)',
        'Manuelle Therapie (MT)',
        'Krankengymnastik am Gerät (KGG)',
        'Klassische Massage (KMT)',
        'PNF',
        'Manuelle Lymphdrainage (MLD)',
        'Kompressionsbandagierung',
        'Hausbesuche'
      ]
    },
    {
      category: 'Ergänzende Heilmittel',
      items: ['Rotlicht', 'Wärme', 'Elektrotherapie']
    },
    {
      category: 'Zusatzleistungen',
      items: ['Befundung', 'Berichte für Krankenkassen', 'Stoßwellentherapie', 'Sonographie/Ultraschall']
    },
    {
      category: 'Osteopathie',
      items: ['Spezialisiert für Erwachsene (60 Min.)', 'Spezialisiert für Kinder (60 Min.)']
    },
    {
      category: 'Heilpraktik',
      items: ['Blutegeltherapie', 'Blutabnahme', 'Blutanalyse', 'Neuraltherapie', 'Akupunktur']
    }
  ]
};

const definitions = {
  'Getränke': 'Kostenfreie Getränke während Ihrer Trainingseinheit.',
  '24 Stunden Zugang': 'Zugang rund um die Uhr per Chipkarte.',
  'Herz‑Kreislauftherapie': 'Ausdauertraining zur Stärkung von Herz und Kreislauf.',
  'Beweglichkeitstherapie': 'Gezielte Übungen zur Gelenkflexibilität.',
  'Trainingstherapie': 'Individuelle Trainingsprogramme.',
  'Koordinationstherapie': 'Verbesserung von Balance und Kontrolle.',
  'Schwingungstherapie': 'Vibrationstraining (Galileo) zur Aktivierung der Muskulatur.',
  'Körperzusammensetzungsanalyse (BIA)': 'Analyse von Muskel‑, Fett‑ und Wasseranteilen.',
  'Krankengymnastik (KG)': 'Therapeutische Übungen zur Reduktion von Schmerzen.',
  'Manuelle Therapie (MT)': 'Mobilisierung von Gelenken und Weichteilen.',
  'KGG': 'Gerätetraining zur Kraftsteigerung.',
  'KMT': 'Massage zur Lockerung von Verspannungen.',
  'PNF': 'Neuromuskuläre Facilitationstechniken.',
  'MLD': 'Lymphdrainage zur Ödemreduktion.',
  'Kompressionsbandagierung': 'Medizinische Bandagen zur Venentherapie.',
  'Hausbesuche': 'Therapie bei Ihnen zuhause.',
  'Rotlicht': 'Infrarot‑Wärmetherapie zur Durchblutungsförderung.',
  'Wärme': 'Entspannende Wärmebehandlung.',
  'Elektrotherapie': 'Elektrische Reizstrombehandlung.',
  'Stoßwellentherapie': 'Druckwellenbehandlung zur Gewebeheilung.',
  'Sonographie/Ultraschall': 'Bildgebung und Therapie mit Schallwellen.',
  'Präventionskurs §20': 'Kurzzeitkurs (60 Tage) auf Rezept §20 SGB V, inkl. 8 Einheiten + Zertifikat.',
  'Osteopathie': 'Ganzheitliche manuelle Therapie zur Aktivierung der Selbstheilungskräfte.',
  'Heilpraktik': 'Nicht‑ärztliche Heilkunde mit Naturheilverfahren.'
};

export default function App() {
  const [step, setStep] = useState('welcome');
  const [segment, setSegment] = useState(null);
  const [service, setService] = useState(null);
  const [definitionKey, setDefinitionKey] = useState(null);

  const resetAll = () => {
    setStep('welcome');
    setSegment(null);
    setService(null);
    setDefinitionKey(null);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      <div
        className="absolute inset-0 opacity-10 z-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('logo.png')" }}
      />

      <AnimatePresence mode="wait">
        {step === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative text-center p-8 rounded-2xl shadow-lg bg-[#348393] text-white w-full max-w-md z-10"
          >
            <img src="logo.png" alt="Logo" className="h-12 mb-4 mx-auto" />
            <h1 className="text-4xl font-bold mb-4">
              Leistungsübersicht des Therapiezentrum Köngen
            </h1>
            <button
              className="mt-4 px-6 py-3 bg-white text-[#348393] rounded-xl font-semibold hover:scale-105 transition"
              onClick={() => setStep('choose')}
            >
              Starten
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
