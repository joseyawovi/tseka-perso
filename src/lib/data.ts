import { Book, Testimonial, Formation, ConsultingService, Project, GalleryItem, BlogPost, SocialLink } from './types';

export const books: Book[] = [
  {
    id: '1',
    title: 'L\'Art de la Communication Authentique',
    coverImage: '/images/AuthenticCommunication.jpg',
    summary: 'Un guide pratique pour développer une communication sincère et efficace dans tous les domaines de la vie.',
    buyLink: 'https://example.com/buy-book1',
  },
  {
    id: '2',
    title: 'Réinventer Son Parcours Professionnel',
    coverImage: '/images/CareerReinvention.jpg',
    summary: 'Comment embrasser la multipotentialité et construire une carrière épanouissante à travers différentes disciplines.',
    buyLink: 'https://example.com/buy-book2',
  },
  {
    id: '3',
    title: 'Leadership Éthique au 21e Siècle',
    coverImage: '/images/EthicalLeadership.jpg',
    summary: 'Une exploration des principes du leadership responsable dans un monde en constante évolution.',
    buyLink: 'https://example.com/buy-book3',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    role: 'Directrice Marketing, Groupe Accor',
    text: 'Un ouvrage révolutionnaire qui a transformé ma vision du leadership et de la communication d\'entreprise.',
  },
  {
    id: '2',
    name: 'Thomas Dubois',
    role: 'Entrepreneur',
    text: 'Cette lecture a été le déclencheur d\'une profonde remise en question de ma carrière, pour le meilleur.',
  },
  {
    id: '3',
    name: 'Marie Leroy',
    role: 'Professeure, Université de Lyon',
    text: 'Je recommande cet ouvrage à tous mes étudiants comme référence en matière de communication éthique.',
  },
];

export const formations: Formation[] = [
  {
    id: '1',
    title: 'Communication de Crise',
    description: 'Apprenez à gérer efficacement les situations de crise et à préserver l\'image de votre organisation.',
    objectives: [
      'Comprendre les mécanismes d\'une crise médiatique',
      'Élaborer un plan de communication d\'urgence',
      'Maîtriser les techniques de prise de parole sous pression',
      'Reconstruire l\'image après une crise'
    ],
    price: 890,
    duration: '2 jours (14 heures)',
    image: '/images/crisismanagement.jpg',
  },
  {
    id: '2',
    title: 'Leadership Inspirant',
    description: 'Développez votre capacité à inspirer et à mobiliser vos équipes vers l\'excellence.',
    objectives: [
      'Définir votre style de leadership authentique',
      'Construire une vision mobilisatrice',
      'Développer votre intelligence émotionnelle',
      'Créer une culture d\'innovation et d\'engagement'
    ],
    price: 1290,
    duration: '3 jours (21 heures)',
    image: '/images/Leadership.jpg',
  },
  {
    id: '3',
    title: 'Prise de Parole en Public',
    description: 'Transformez votre communication orale et captivez votre audience en toutes circonstances.',
    objectives: [
      'Maîtriser les techniques vocales et corporelles',
      'Structurer un discours impactant',
      'Gérer le trac et les imprévus',
      'Adapter son message à différents publics'
    ],
    price: 690,
    duration: '2 jours (14 heures)',
    image: '/images/PublicSpeaking.jpg',
  },
];

export const consultingServices: ConsultingService[] = [
  {
    id: '1',
    title: 'Stratégie de Communication',
    description: 'Élaboration de stratégies de communication alignées avec vos objectifs et valeurs organisationnelles.',
    icon: 'strategy',
  },
  {
    id: '2',
    title: 'Gestion de l\'Image',
    description: 'Construction et protection de votre image personnelle ou de celle de votre organisation.',
    icon: 'image',
  },
  {
    id: '3',
    title: 'Accompagnement Médiatique',
    description: 'Préparation aux interviews, débats télévisés et interactions avec la presse.',
    icon: 'media',
  },
  {
    id: '4',
    title: 'Communication Politique',
    description: 'Conseil stratégique pour les campagnes électorales et la communication publique.',
    icon: 'politics',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Incubateur d\'Entreprises Sociales',
    category: 'business',
    description: 'Création d\'un espace dédié à l\'accompagnement de jeunes entrepreneurs développant des projets à impact social positif.',
    image: '/images/incubator.jpg',
    link: 'https://example.com/incubateur',
  },
  {
    id: '2',
    title: 'Commission Citoyenne pour la Transition Écologique',
    category: 'politique',
    description: 'Initiative visant à impliquer les citoyens dans l\'élaboration de politiques environnementales locales.',
    image: '/images/Literacy.jpg',
  },
  {
    id: '3',
    title: 'Association "Les Mots Partagés"',
    category: 'social',
    description: 'Projet d\'alphabétisation et d\'accès à la culture pour les populations défavorisées.',
    image: '/images/Literacy.jpg',
    link: 'https://example.com/mots-partages',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Aurore sur le Mont Blanc',
    category: 'Voyages',
    type: 'image',
    src: '/images/MontBlanc.jpg',
  },
  {
    id: '2',
    title: 'Marchés de Marrakech',
    category: 'Voyages',
    type: 'image',
    src: '/images/MarrakechMarket.jpg',
  },
  {
    id: '3',
    title: 'En coulisses avant une conférence',
    category: 'Backstage',
    type: 'image',
    src: '/images/Backstage.jpg',
  },
  {
    id: '4',
    title: 'Interview télévisée',
    category: 'Backstage',
    type: 'video',
    src: 'https://www.youtube.com/embed/EXAMPLE1',
    thumbnail: '/images/Interview.jpg',
  },
  {
    id: '5',
    title: 'Bibliothèque personnelle',
    category: 'Inspiration',
    type: 'image',
    src: '/images/PersonalLibrary.jpg',
  },
  {
    id: '6',
    title: 'Atelier d\'écriture en nature',
    category: 'Inspiration',
    type: 'image',
    src: '/images/NatureWriting.jpg',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'L\'importance de la vulnérabilité en leadership',
    excerpt: 'Pourquoi montrer ses faiblesses peut devenir une force dans l\'exercice du leadership moderne.',
    content: `
      # L'importance de la vulnérabilité en leadership
      
      Dans un monde professionnel longtemps dominé par l'image du leader infaillible, montrer sa vulnérabilité était perçu comme un signe de faiblesse. Pourtant, les recherches récentes en psychologie et en management démontrent le contraire.
      
      ## Un nouveau paradigme
      
      La vulnérabilité authentique crée un climat de confiance au sein des équipes. Lorsqu'un leader reconnaît ses limites, ses erreurs ou ses incertitudes, il autorise implicitement les autres à faire de même. Cette dynamique favorise l'innovation, la prise d'initiative et la résolution collaborative des problèmes.
      
      ## Comment cultiver cette vulnérabilité constructive ?
      
      1. **Abandonner le masque de la perfection** : Personne n'y croit vraiment, et son maintien épuise inutilement.
      2. **Partager ses apprentissages** : Transformer les échecs en occasions d'apprentissage collectif.
      3. **Poser des questions** : Ne pas prétendre tout savoir et solliciter l'intelligence du groupe.
      4. **Déléguer avec confiance** : Reconnaître que d'autres peuvent exceller là où nous sommes moins compétents.
      
      La vulnérabilité n'est pas synonyme de faiblesse, mais de courage et d'authenticité. Dans un environnement professionnel en quête de sens, elle devient un puissant vecteur de connexion humaine et d'efficacité collective.
    `,
    category: 'Leadership',
    image: '/images/Vulnerability.jpg',
    author: 'Tcheka Malou',
    date: '15/05/2023',
    slug: 'importance-vulnerabilite-leadership',
  },
  {
    id: '2',
    title: 'Communication politique : au-delà des éléments de langage',
    excerpt: 'Comment renouer avec une parole politique authentique dans l\'ère de la défiance.',
    content: `
      # Communication politique : au-delà des éléments de langage
      
      La communication politique traverse une crise profonde. Face à des citoyens de plus en plus méfiants et des médias toujours plus vigilants, les éléments de langage standardisés et les formules toutes faites ne suffisent plus.
      
      ## La défiance comme point de départ
      
      Les sondages le confirment année après année : la confiance envers la parole politique s'érode. Cette défiance n'est pas une fatalité, mais le résultat d'une communication souvent déconnectée des préoccupations réelles et perçue comme artificielle.
      
      ## Vers une nouvelle éloquence politique
      
      Pour reconquérir cette confiance perdue, plusieurs pistes se dessinent :
      
      1. **Assumer la complexité** : Expliquer plutôt que simplifier à l'extrême.
      2. **Cultiver sa singularité** : Développer une voix authentique plutôt que de réciter des messages formatés.
      3. **Raconter des histoires vraies** : Illustrer les politiques publiques par des exemples concrets et vérifiables.
      4. **Accepter le dialogue** : Considérer les objections comme légitimes et y répondre sincèrement.
      
      La communication politique de demain sera authentique ou ne sera pas. Dans un monde saturé d'informations, seule la sincérité parvient encore à capter l'attention et à susciter l'adhésion.
    `,
    category: 'Politique',
    image: '/images/Authenticity.jpg',
    author: 'Tcheka Malou',
    date: '03/07/2023',
    slug: 'communication-politique-authenticite',
  },
  {
    id: '3',
    title: 'L\'art de la reconversion professionnelle réussie',
    excerpt: 'Changer de métier n\'est plus l\'exception mais devient progressivement la norme. Comment naviguer ce tournant avec sérénité ?',
    content: `
      # L'art de la reconversion professionnelle réussie
      
      Dans un marché du travail en constante mutation, la carrière linéaire devient l'exception plutôt que la règle. De plus en plus de professionnels envisagent ou vivent une reconversion, par choix ou par nécessité.
      
      ## Pourquoi changer de voie ?
      
      Les motivations sont multiples : quête de sens, évolution technologique rendant certains métiers obsolètes, découverte de nouvelles passions, recherche d'équilibre personnel... Le changement professionnel répond souvent à une aspiration profonde.
      
      ## Les étapes clés d'une reconversion réussie
      
      1. **L'introspection** : Identifier ses compétences transférables, ses valeurs et ses aspirations profondes.
      2. **L'exploration** : Rencontrer des professionnels du secteur visé, tester avant de s'engager.
      3. **La formation** : Acquérir les compétences nécessaires, sans nécessairement tout recommencer à zéro.
      4. **La transition** : Gérer la période d'entre-deux, souvent déstabilisante mais riche d'apprentissages.
      
      La reconversion n'est pas un échec mais une adaptation. Dans un monde où l'apprentissage tout au long de la vie devient nécessaire, savoir se réinventer constitue une compétence précieuse.
    `,
    category: 'Carrière',
    image: '/images/CareerTransition.jpg',
    author: 'Tcheka Malou',
    date: '22/09/2023',
    slug: 'reconversion-professionnelle-reussie',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/example',
    icon: 'linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/example',
    icon: 'twitter',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/example',
    icon: 'instagram',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/c/example',
    icon: 'youtube',
  },
];