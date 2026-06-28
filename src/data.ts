import { Benefit, FormationType, Stat, Testimonial, TeamMember, GalleryItem } from './types';

// Let's reference the local generated images as direct static paths
export const HERO_IMAGE = "/src/assets/images/driving_school_hero_1782674038829.jpg";
export const CLASSROOM_IMAGE = "/src/assets/images/driving_classroom_1782674054899.jpg";

export const BENEFITS: Benefit[] = [
  {
    id: 'moniteurs',
    title: 'Moniteurs Expérimentés',
    description: 'Des formateurs certifiés d\'État, patients et pédagogues pour un apprentissage en toute sérénité.',
    iconName: 'UserCheck',
  },
  {
    id: 'horaires',
    title: 'Horaires Flexibles',
    description: 'Planifiez vos leçons de conduite selon vos disponibilités, de 7h à 21h, 7j/7.',
    iconName: 'Clock',
  },
  {
    id: 'theorique',
    title: 'Formation Théorique',
    description: 'Cours de code de la route interactifs avec des simulations d\'examens récents.',
    iconName: 'BookOpen',
  },
  {
    id: 'pratique',
    title: 'Formation Pratique',
    description: 'Entraînement intensif sur circuit fermé et en conditions réelles de circulation.',
    iconName: 'Compass',
  },
  {
    id: 'vehicules',
    title: 'Véhicules Récents',
    description: 'Une flotte moderne de voitures climatisées et équipées de double commande pour votre sécurité.',
    iconName: 'Car',
  },
  {
    id: 'personnalise',
    title: 'Suivi Personnalisé',
    description: 'Un moniteur attitré qui suit votre progression pas à pas jusqu\'à l\'obtention du permis.',
    iconName: 'FileText',
  },
  {
    id: 'reussite',
    title: 'Taux de Réussite Élevé',
    description: 'Plus de 95% de réussite grâce à notre méthode pédagogique moderne et éprouvée.',
    iconName: 'TrendingUp',
  },
  {
    id: 'prix',
    title: 'Prix Accessibles',
    description: 'Des tarifs compétitifs avec des facilités de paiement en plusieurs mensualités.',
    iconName: 'DollarSign',
  },
];

export const STATS: Stat[] = [
  {
    id: 'eleves',
    label: 'Élèves Formés',
    value: 2450,
    suffix: '+',
    iconName: 'Users',
  },
  {
    id: 'experience',
    label: 'Années d\'Expérience',
    value: 12,
    suffix: ' ans',
    iconName: 'Award',
  },
  {
    id: 'reussite',
    label: 'Taux de Réussite',
    value: 96,
    suffix: '%',
    iconName: 'CheckCircle',
  },
  {
    id: 'vehicules',
    label: 'Véhicules en Flotte',
    value: 18,
    suffix: '',
    iconName: 'Shield',
  },
];

export const FORMATIONS: FormationType[] = [
  {
    id: 'permis-a',
    title: 'Permis A (Moto & Scooter)',
    description: 'Apprenez à maîtriser la conduite d\'un deux-roues en toute sécurité. Idéal pour circuler facilement à Mbacké et Touba.',
    duration: '2 à 4 semaines',
    conditions: [
      'Avoir au moins 18 ans',
      'Certificat d\'aptitude médicale',
      '2 photos d\'identité'
    ],
    price: 75000,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    category: 'permis',
  },
  {
    id: 'permis-b',
    title: 'Permis B (Véhicules Légers)',
    description: 'La formation phare pour la conduite automobile classique. Théorie complète et pratique intensive sur nos véhicules récents.',
    duration: '4 à 8 semaines',
    conditions: [
      'Avoir au moins 18 ans',
      'Certificat médical d\'aptitude',
      'Copie de la pièce d\'identité',
      '4 photos d\'identité'
    ],
    price: 130000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    category: 'permis',
  },
  {
    id: 'permis-c',
    title: 'Permis C (Poids Lourds)',
    description: 'Formation professionnelle pour la conduite de véhicules de transport de marchandises. Débouchés professionnels garantis.',
    duration: '6 à 10 semaines',
    conditions: [
      'Être titulaire du Permis B en cours de validité',
      'Avoir au moins 21 ans',
      'Visite médicale rigoureuse'
    ],
    price: 250000,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    category: 'permis',
  },
  {
    id: 'code-route',
    title: 'Cours de Code de la Route',
    description: 'Une maîtrise parfaite de la signalisation, des priorités et des règles de sécurité routière au Sénégal.',
    duration: 'Illimité jusqu\'à obtention',
    conditions: [
      'Pas de condition d\'âge',
      'Dossier d\'inscription complet'
    ],
    price: 35000,
    image: CLASSROOM_IMAGE,
    category: 'code',
  },
  {
    id: 'perfectionnement',
    title: 'Cours de Perfectionnement',
    description: 'Vous avez déjà le permis mais manquez d\'assurance ? Nos moniteurs vous aident à reprendre confiance en ville et sur autoroute.',
    duration: 'À l\'heure ou forfait (10h)',
    conditions: [
      'Être titulaire du Permis de conduire'
    ],
    price: 10000, // prix par heure
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    category: 'perfectionnement',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'm1',
    name: 'El Hadji Ndiouck',
    role: 'Fondateur & Moniteur Principal',
    experience: '15 ans d\'expérience',
    specialty: 'Permis B et C, Sécurité routière avancée',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm2',
    name: 'Dickel Sow',
    role: 'Directrice Pédagogique & Monitrice',
    experience: '12 ans d\'expérience',
    specialty: 'Code de la Route, Pédagogie de conduite stressée',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm3',
    name: 'Serigne Fallou Mbacké Diop',
    role: 'Moniteur Moto & Auto',
    experience: '8 ans d\'expérience',
    specialty: 'Permis A et B, Conduite défensive en milieu urbain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm4',
    name: 'Fatoumata Binetou Diallo',
    role: 'Conseillère Clientèle & Formatrice Code',
    experience: '5 ans d\'expérience',
    specialty: 'Réglementation nationale, Gestion administrative',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Abdoulaye Ndiaye',
    role: 'Commerçant à Mbacké',
    rating: 5,
    comment: 'Une auto-école d\'une patience et d\'un professionnalisme incroyables. J\'ai obtenu mon permis B du premier coup grâce aux conseils d\'El Hadji ! Je recommande vivement.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't2',
    name: 'Aminata Sylla',
    role: 'Étudiante à Touba',
    rating: 5,
    comment: 'Les cours de code avec Dickel sont passionnants et très clairs. Les explications en wolof et en français facilitent énormément la compréhension de la signalisation.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't3',
    name: 'Moustapha Diouf',
    role: 'Chauffeur de transport',
    rating: 5,
    comment: 'J\'ai passé mon Permis C (Poids lourds) ici. La formation pratique sur circuit est impeccable. Grâce à eux, j\'ai tout de suite trouvé un emploi de chauffeur.',
    avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't4',
    name: 'Mariama Sow',
    role: 'Mère de famille',
    rating: 5,
    comment: 'J\'avais très peur de conduire après un accident il y a quelques années. Les séances de perfectionnement m\'ont permis de surmonter ma peur et de reprendre le volant à Mbacké.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Notre voiture d\'apprentissage moderne',
    category: 'vehicles',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g2',
    title: 'Salle de cours interactive pour le code',
    category: 'classroom',
    image: CLASSROOM_IMAGE,
  },
  {
    id: 'g3',
    title: 'Session de conduite sur circuit',
    category: 'practice',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g4',
    title: 'Un élève concentré au volant',
    category: 'students',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g5',
    title: 'Remise officielle de permis de conduire',
    category: 'awards',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g6',
    title: 'Préparation avant le départ de l\'examen',
    category: 'exams',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g7',
    title: 'Flotte de motos pour le Permis A',
    category: 'vehicles',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g8',
    title: 'Explications techniques du moteur (Permis C)',
    category: 'practice',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
  },
];
