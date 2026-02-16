export const clinic = {
  name: "Clínica Alén fisioterapia y readaptación",
  logo: "/images/logo.png",
  tagline: "Fisioterapia avanzada y readaptación en A Coruña",
  description: "Clínica Alén es tu centro de fisioterapia y readaptación en A Coruña, especializado en tratamientos personalizados con tecnología exclusiva. Contamos con profesionales altamente cualificados que dedican el tiempo necesario a cada paciente. Tratamos desde lesiones deportivas y postquirúrgicas hasta dolor crónico, con seguimiento continuo y ejercicios personalizados para tu recuperación completa.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "641 02 65 02",
  whatsapp: "+34641026502",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Rúa Alfredo Vicenti, 31, 15004 A Coruña, España",
    city: "A Coruña",
    province: "Álava",
    postalCode: "15004",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=7793988111961161225&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Cl%C3%ADnica%20Al%C3%A9n%20fisioterapia%20y%20readaptaci%C3%B3n%20%4043.3669%2C-8.41236&z=16&output=embed",
  coordinates: {
    lat: 43.3669,
    lng: -8.41236
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–21:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.9,
    count: 21,
    url: "https://maps.google.com/?cid=7793988111961161225&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Raquel P",
        rating: 5,
        text: "Alén no es una clínica cualquiera, es sin duda la mejor de La Coruña.\nCuenta con tratamientos y máquinas exclusivas. Iago es un verdadero profesional, totalmente cualificado. Se toma el tiempo que necesite con cada cliente, te explica todo perfectamente y te manda ejercicios para fortalecer en casa. Se lo recomiendo a todo el mundo que conozco. Las instalaciones son excelentes. Sin duda alguna es mi clínica de confianza. Gracias Iago!!!!!!",
        date: "Hace 5 meses"
      },
      {
        author: "Yago de Luz Fernández",
        rating: 5,
        text: "Encantado con la atención, en general, y con Iago (el director de la clínica), en particular. Acudí por una cirugía reciente en la mano (en concreto, en el pulgar) y después de tan sólo una sesión conseguimos una mayor movilidad. Son profesionales muy atentos, claros, transparentes y ejecutivos.",
        date: "Hace un año"
      },
      {
        author: "monica villamisar",
        rating: 5,
        text: "Todo en la clínica es bueno , las instalaciones , el trato, la amabilidad , los tratamientos, viene a ella recomendada por otro paciente , pero mi experiencia en solo 3 sesiones ya veo una mejoría q ni me lo creo ! Por eso le doy mi sobresaliente! Gracias !",
        date: "Hace 1 mes"
      },
      {
        author: "Lourdes Vila",
        rating: 5,
        text: "La atención fue un 10/10. Tratamiento individualizado y buen seguimiento. Tratan a los pacientes con cariño e implicación. Muy recomendable!",
        date: "Hace 7 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por profesionales altamente cualificados. Tratamos cada caso de forma individualizada, dedicando el tiempo necesario para lograr resultados visibles desde la primera sesión. Perfecta para dolor articular, contracturas y limitaciones de movilidad.",
      benefits: [
        "Mayor movilidad desde la primera sesión",
        "Alivio efectivo del dolor muscular y articular",
        "Tratamiento personalizado según tu patología"
      ],
      icon: "Hand"
    },
    {
      id: "readaptacion-postquirurgica",
      name: "Readaptación Postquirúrgica",
      description: "Especialistas en recuperación tras cirugías ortopédicas y traumatológicas. Tratamos intervenciones de mano, pulgar, hombro, rodilla y otras articulaciones con protocolos específicos. Conseguimos recuperar movilidad y funcionalidad de forma progresiva y segura.",
      benefits: [
        "Recuperación más rápida tras la cirugía",
        "Mejora notable de la movilidad articular",
        "Seguimiento personalizado en cada fase"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Tratamiento y prevención de lesiones deportivas con técnicas avanzadas de readaptación. Diseñamos programas específicos para que vuelvas a tu actividad deportiva en óptimas condiciones. Incluye trabajo de fortalecimiento y prevención de recaídas.",
      benefits: [
        "Vuelta segura a tu deporte",
        "Prevención de futuras lesiones",
        "Mejora del rendimiento físico"
      ],
      icon: "Dumbbell"
    },
    {
      id: "tratamientos-tecnologia-exclusiva",
      name: "Tratamientos con Tecnología Exclusiva",
      description: "Disponemos de máquinas y equipamiento de última generación no disponibles en otros centros de A Coruña. Tecnología avanzada que acelera tu recuperación y potencia los resultados del tratamiento manual. Tratamientos innovadores para casos complejos.",
      benefits: [
        "Acceso a tecnología no disponible en otros centros",
        "Recuperación más rápida y efectiva",
        "Tratamiento de patologías complejas"
      ],
      icon: "Zap"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Técnica especializada para eliminar puntos gatillo miofasciales causantes de dolor crónico y contracturas persistentes. Especialmente efectiva en dolores que no responden a otros tratamientos. Aplicada por fisioterapeutas expertos con formación específica.",
      benefits: [
        "Eliminación de contracturas crónicas",
        "Alivio inmediato del dolor miofascial",
        "Solución para dolores persistentes"
      ],
      icon: "Target"
    },
    {
      id: "rehabilitacion-personalizada",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu lesión o patología. Incluye ejercicios personalizados para realizar en casa que complementan las sesiones en clínica. Te explicamos cada ejercicio y su objetivo para que entiendas tu proceso de recuperación.",
      benefits: [
        "Plan adaptado a tu ritmo de vida",
        "Ejercicios para continuar en casa",
        "Explicación detallada de cada fase"
      ],
      icon: "Activity"
    },
    {
      id: "electroterapia",
      name: "Electroterapia Avanzada",
      description: "Aplicación de corrientes eléctricas terapéuticas con equipos de última generación para acelerar la recuperación tisular. Efectiva para reducir inflamación, aliviar dolor y mejorar la circulación. Complemento ideal a la terapia manual.",
      benefits: [
        "Reducción de inflamación y edema",
        "Aceleración del proceso de curación",
        "Alivio del dolor sin medicación"
      ],
      icon: "Zap"
    },
    {
      id: "tratamiento-dolor-cronico",
      name: "Tratamiento de Dolor Crónico",
      description: "Abordaje integral para dolores persistentes que afectan tu calidad de vida. Combinamos diferentes técnicas y tecnologías para identificar la causa y tratarla de raíz. Nuestros pacientes experimentan mejorías significativas en pocas sesiones.",
      benefits: [
        "Mejora notable en pocas sesiones",
        "Tratamiento de la causa, no solo el síntoma",
        "Recuperación de tu calidad de vida"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 641 02 65 02 o escríbenos por WhatsApp. Te atenderemos personalmente para entender tu caso y agendar tu cita de valoración en el horario que mejor te venga."
    },
    {
      step: 2,
      title: "Valoración Completa Personalizada",
      description: "Realizamos una evaluación exhaustiva de tu estado físico, movilidad y dolor. Te explicamos con claridad qué está causando tu problema y diseñamos un plan de tratamiento específico para tu caso, con objetivos claros y tiempos estimados."
    },
    {
      step: 3,
      title: "Tratamiento Individualizado",
      description: "Aplicamos las técnicas manuales y tecnología exclusiva más adecuadas para tu recuperación. Dedicamos el tiempo necesario en cada sesión, sin prisas. Te enseñamos ejercicios personalizados para fortalecer en casa y acelerar tu mejoría."
    },
    {
      step: 4,
      title: "Seguimiento hasta tu Recuperación Total",
      description: "Hacemos seguimiento continuo de tu evolución, ajustando el tratamiento según tus progresos. No terminamos hasta que hayas recuperado completamente tu funcionalidad y te sientas preparado para retomar tu vida normal sin molestias."
    }
  ],
  whyUs: [
    {
      title: "Valorados con 4.9★ en Google",
      description: "21 reseñas reales de pacientes que destacan nuestra atención personalizada, instalaciones excelentes y resultados visibles desde las primeras sesiones. La confianza de quienes ya se han recuperado con nosotros es nuestra mejor carta de presentación.",
      icon: "Award"
    },
    {
      title: "Tecnología Exclusiva en A Coruña",
      description: "Contamos con máquinas y equipamiento de última generación no disponibles en otros centros de fisioterapia de la ciudad. Esta tecnología avanzada acelera tu recuperación y nos permite tratar casos complejos con mayor efectividad.",
      icon: "Zap"
    },
    {
      title: "Atención Individualizada y Sin Prisas",
      description: "Dedicamos el tiempo que necesite cada paciente, sin sesiones masificadas. Te explicamos todo perfectamente, desde el diagnóstico hasta cada ejercicio. Tratamiento personalizado con seguimiento continuo hasta tu recuperación completa.",
      icon: "Heart"
    },
    {
      title: "Profesionales Altamente Cualificados",
      description: "Equipo de fisioterapeutas expertos con formación especializada y años de experiencia. Nuestros pacientes destacan la profesionalidad, claridad en las explicaciones y la implicación personal en cada caso. Tratamos a cada paciente con cariño y compromiso real con su recuperación.",
      icon: "Users"
    }
  ],
  team: [
    {
      name: "Iago",
      role: "Director y Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clínica Alén fisioterapia y readaptación nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "Clínica Alén fisioterapia y readaptación - Imagen 9"
    }
  ],
  faq: [
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "En Clínica Alén cada caso es único y requiere una valoración personalizada. Muchos de nuestros pacientes experimentan mejorías notables desde la primera sesión, especialmente en movilidad articular. Durante tu valoración inicial te explicaremos con transparencia cuántas sesiones estimamos necesarias según tu patología y objetivos. Siempre adaptamos el plan según tu evolución real."
    },
    {
      question: "¿Qué hace diferente a Clínica Alén de otros centros?",
      answer: "Contamos con tecnología y máquinas exclusivas no disponibles en otros centros de A Coruña. Nuestros profesionales se toman el tiempo que necesite cada paciente, sin prisas ni sesiones masificadas. Te explicamos todo perfectamente y te damos ejercicios personalizados para casa. Con 4.9 estrellas sobre 5 en Google y 21 reseñas, nuestros pacientes destacan la atención individualizada, las instalaciones excelentes y los resultados visibles en pocas sesiones."
    },
    {
      question: "¿Tratáis recuperaciones postquirúrgicas?",
      answer: "Sí, somos especialistas en readaptación postquirúrgica. Tratamos recuperaciones de cirugías de mano, pulgar, hombro, rodilla y otras intervenciones ortopédicas. Nuestros pacientes consiguen mayor movilidad desde la primera sesión tras la cirugía. Diseñamos protocolos específicos según tu tipo de intervención y fase de recuperación, con seguimiento continuo hasta tu recuperación completa."
    },
    {
      question: "¿Cómo solicito una cita en Clínica Alén?",
      answer: "Puedes llamarnos directamente al 641 02 65 02 o escribirnos por WhatsApp al mismo número. Te atenderemos personalmente para entender tu caso y agendarte en el horario que mejor te convenga. Estamos en A Coruña y trabajamos con cita previa para garantizar atención individualizada sin esperas."
    },
    {
      question: "¿Ofrecéis ejercicios para hacer en casa?",
      answer: "Sí, es una parte fundamental de nuestro tratamiento. Te mandamos ejercicios personalizados para fortalecer en casa y acelerar tu recuperación. Te explicamos perfectamente cómo hacer cada ejercicio, su objetivo y frecuencia. Este seguimiento continuo entre sesiones es clave para conseguir resultados duraderos y prevenir recaídas."
    },
    {
      question: "¿Qué tecnología exclusiva tenéis en la clínica?",
      answer: "Disponemos de equipamiento y máquinas de última generación no disponibles en otros centros de fisioterapia de A Coruña. Esta tecnología avanzada nos permite tratar patologías complejas y acelerar procesos de recuperación. Durante tu valoración te explicaremos qué tecnologías son las más adecuadas para tu caso específico y cómo complementan el tratamiento manual."
    },
    {
      question: "¿Tratáis lesiones deportivas?",
      answer: "Sí, la fisioterapia deportiva es una de nuestras especialidades. Tratamos todo tipo de lesiones deportivas con técnicas avanzadas de readaptación funcional. Diseñamos programas específicos para que vuelvas a tu actividad deportiva de forma segura, incluyendo trabajo de fortalecimiento y prevención. Te acompañamos en todo el proceso hasta que estés preparado para rendir al máximo nivel."
    },
    {
      question: "¿Qué opinan vuestros pacientes de Clínica Alén?",
      answer: "Tenemos una valoración de 4.9 estrellas sobre 5 en Google con 21 reseñas. Nuestros pacientes destacan la atención personalizada, las instalaciones excelentes, la profesionalidad del equipo y sobre todo los resultados: mejorías notables en pocas sesiones. Muchos nos recomiendan como la mejor clínica de fisioterapia de A Coruña. Puedes leer todas las opiniones reales en nuestro perfil de Google."
    }
  ],
  seo: {
    titleTemplate: "%s | Clínica Alén fisioterapia y readaptación",
    defaultTitle: "Clínica Alén - Fisioterapia y Readaptación en A Coruña",
    defaultDescription: "Fisioterapia avanzada en A Coruña con tecnología exclusiva. Especialistas en readaptación postquirúrgica, lesiones deportivas y dolor crónico. Valorados 4.9★. Pide cita: 641 02 65 02",
    keywords: [
      "fisioterapia A Coruña",
      "Clínica Alén",
      "readaptación A Coruña",
      "fisioterapia deportiva A Coruña",
      "recuperación postquirúrgica A Coruña",
      "fisioterapeuta A Coruña",
      "punción seca A Coruña",
      "tratamiento dolor crónico A Coruña",
      "clínica fisioterapia A Coruña",
      "rehabilitación A Coruña",
      "fisioterapia manual A Coruña",
      "mejor fisioterapia A Coruña"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Clínica Alén fisioterapia y readaptación",
    cif: "",
    registeredAddress: "Rúa Alfredo Vicenti, 31, 15004 A Coruña, España, A Coruña, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en A Coruña"
  ],
  heroDescription: "En Clínica Alén combinamos fisioterapia avanzada con tecnología exclusiva para tu recuperación. Nuestro equipo se toma el tiempo que necesites, te explica cada paso del tratamiento y te acompaña con ejercicios personalizados para fortalecer en casa. Instalaciones excelentes y atención individualizada que marca la diferencia.",
  specialty: "Readaptación Funcional Avanzada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu movilidad y bienestar?",
  ctaDescription: "Solicita tu cita de valoración y descubre cómo nuestros tratamientos personalizados pueden ayudarte. Primera sesión con evaluación completa y plan de recuperación adaptado a ti.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
