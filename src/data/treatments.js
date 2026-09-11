export const CATEGORIES = [
  { id: 'todas', label: 'Todas', icon: 'sparkles' },
  { id: 'limpiezas', label: 'Limpiezas Faciales & Peelings', icon: 'sparkle' },
  { id: 'avanzados', label: 'Tratamientos Avanzados & Glow', icon: 'sun' },
  { id: 'cejas-pestanas', label: 'Cejas & Pestañas', icon: 'eye' },
  { id: 'asesorias', label: 'Asesorías', icon: 'heart' }
];

export const TREATMENTS = [
  {
    id: 'limpieza-profunda',
    title: 'Limpieza Facial Profunda',
    category: 'limpiezas',
    categoryLabel: 'Limpiezas Faciales & Peelings',
    description: 'Si nunca te realizaste un tratamiento es lo ideal para comenzar. Se eliminan células muertas y se realizan extracciones de lesiones.',
    badge: 'Ideal Principiantes',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/limpieza-profunda.png',
    includes: [
      'Doble higiene',
      'Exfoliación',
      'Microdermoabrasión (si lo requiere)',
      'Extracciones',
      'Alta frecuencia',
      'Descongestión',
      'Productos finales',
      'Armado de rutina y asesoramiento'
    ]
  },
  {
    id: 'limpieza-premium',
    title: 'Limpieza Profunda Premium',
    category: 'limpiezas',
    categoryLabel: 'Limpiezas Faciales & Peelings',
    description: 'Ideal para pieles con rosácea y acné. Se utilizan activos y técnicas específicas para mejorar la barrera cutánea y equilibrar la piel. Tiene una duración de 2hs.',
    badge: 'Rosácea & Acné',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '2 hs',
    image: 'assets/images/limpieza-premium.png',
    includes: [
      'Doble higiene',
      'Exfoliación',
      'Extracciones',
      'Alta frecuencia',
      'Electroporación con activos específicos',
      'Cabina led',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'yellow-peel',
    title: 'Yellow Peel',
    category: 'limpiezas',
    categoryLabel: 'Limpiezas Faciales & Peelings',
    description: 'Peeling descamativo que se utiliza para tratar manchas, marcas de acné, fotoenvejecimiento y textura irregular.',
    badge: 'Tratamiento Manchas',
    frequency: 'No se realiza en la primera sesión. Hay que dejar actuar entre 30 min y 1 hs',
    duration: '',
    image: 'assets/images/yellow-peel.png',
    includes: [
      'Doble higiene',
      'Peeling enzimático',
      'Yellow peel',
      'Extracciones (si lo requiere)',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'limpieza-peeling',
    title: 'Limpieza Profunda + Peeling',
    category: 'limpiezas',
    categoryLabel: 'Limpiezas Faciales & Peelings',
    description: 'Exfoliación química, se eligen los ácidos según las necesidades de la piel como manchas, hiperpigmentaciones post acné, líneas de expresión, deshidratación.',
    badge: 'Renovación Celular',
    frequency: 'Se recomienda realizar cada 30 días y para ver cambios 4 sesiones mínimo',
    duration: '',
    image: 'assets/images/limpieza-peeling.png',
    includes: [
      'Doble higiene',
      'Exfoliación suave',
      'Peeling',
      'Extracciones',
      'Descongestión',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'limpieza-dermaplaning',
    title: 'Limpieza Facial + Dermaplaning',
    category: 'limpiezas',
    categoryLabel: 'Limpiezas Faciales & Peelings',
    description: 'Método de exfoliación mecánica donde se utiliza bisturí para eliminar células muertas y vellos faciales. Deja la piel más luminosa y permeable a activos.',
    badge: 'Exfoliación Mecánica',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/6.png',
    includes: [
      'Doble higiene',
      'Dermaplaning',
      'Peeling hidratante',
      'Extracciones',
      'Alta frecuencia',
      'Descongestión',
      'Productos finales',
      'Armado de rutina y asesoramiento'
    ]
  },
  {
    id: 'hydrashock',
    title: 'Hydrashock',
    category: 'avanzados',
    categoryLabel: 'Tratamientos Avanzados & Glow',
    description: 'Tratamiento intensivo de hidratación profunda que devuelve a la piel su frescura, suavidad y luminosidad natural. Ideal para pieles deshidratadas y opacas.',
    badge: 'Hidratación Profunda',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/7.png',
    includes: [
      'Doble higiene',
      'Exfoliación',
      'Máscara desincrustante',
      'Extracciones',
      'Alta frecuencia',
      'Electroporación con activos concentrados',
      'Descongestión',
      'Productos finales',
      'Armado de rutina y asesoramiento'
    ]
  },
  {
    id: 'limpieza-microneedling',
    title: 'Limpieza Profunda + Microneedling',
    category: 'avanzados',
    categoryLabel: 'Tratamientos Avanzados & Glow',
    description: 'Técnica de inducción del colágeno por medio de un dispositivo que utiliza agujas finas. Ideal para tratar líneas de expresión, cicatrices de acné y luminosidad.',
    badge: 'Inducción de Colágeno',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/8.png',
    includes: [
      'Doble higiene',
      'Exfoliación',
      'Extracciones',
      'Alta frecuencia',
      'Microneedling con activos estériles',
      'Descongestión',
      'Cabina Led',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'limpieza-hydralips',
    title: 'Limpieza Profunda + Hydralips',
    category: 'avanzados',
    categoryLabel: 'Tratamientos Avanzados & Glow',
    description: 'Se realiza microneedling en los labios con aguja nano, con activos estériles específicos para hidratarlos en profundidad. Perfecto para labios muy secos.',
    badge: 'Hidratación Labial',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/9.png',
    includes: [
      'Doble higiene',
      'Exfoliación',
      'Extracciones',
      'Alta frecuencia',
      'Microneedling en labios',
      'Descongestión',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'limpieza-exosomas',
    title: 'Limpieza Profunda + Exosomas',
    category: 'avanzados',
    categoryLabel: 'Tratamientos Avanzados & Glow',
    description: 'Se aplican mediante la técnica de microneedling. Los exosomas son activos innovadores que ayudan a mejorar la apariencia de la piel, favoreciendo su regeneración, luminosidad y aspecto más uniforme.',
    badge: 'Regeneración Avanzada',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/10.png',
    includes: [
      'Doble higiene',
      'Exfoliación',
      'Extracciones',
      'Alta frecuencia',
      'Microneedling con exosomas',
      'Cabina led',
      'Descongestión',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'total-glow',
    title: 'Total Glow',
    category: 'avanzados',
    categoryLabel: 'Tratamientos Avanzados & Glow',
    description: 'Si querés tener la piel bien glowy, hidratada y suave previo a un evento, es tu elegido. Combina dermaplaning + microneedling.',
    badge: 'Piel Radiante / Pre Evento',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/11.png',
    includes: [
      'Doble higiene',
      'Dermaplaning',
      'Extracciones',
      'Microneedling con PDRN',
      'Cabina led',
      'Descongestión',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'radiant-skin',
    title: 'Radiant Skin',
    category: 'avanzados',
    categoryLabel: 'Tratamientos Avanzados & Glow',
    description: 'Tratamiento ideal para realizar previo a un evento. Combina peeling hidratante + cápsula de vit c + microneedling con exosomas.',
    badge: 'Vitamina C & Glow',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/12.png',
    includes: [
      'Doble higiene',
      'Peeling + cápsula de vit c',
      'Extracciones',
      'Microneedling + exosomas',
      'Cabina led',
      'Descongestión',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'limpieza-espalda',
    title: 'Limpieza Profunda Espalda',
    category: 'limpiezas',
    categoryLabel: 'Limpiezas Faciales & Peelings',
    description: 'Ideal para personas que sufren acné en la espalda y para mejorar marcas.',
    badge: 'Acné Corporal',
    frequency: 'Se recomienda realizar cada 30 días',
    duration: '',
    image: 'assets/images/13.png',
    includes: [
      'Doble higiene',
      'Máscara desincrustante/ ácidos',
      'Extracciones',
      'Alta frecuencia',
      'Descongestión',
      'Productos finales',
      'Asesoramiento y armado de rutina'
    ]
  },
  {
    id: 'asesoramiento-personalizado',
    title: 'Asesoramiento Personalizado',
    category: 'asesorias',
    categoryLabel: 'Asesorías',
    description: 'Si no tenés una rutina de skincare y no podés acercarte al gabinete. Entrevista 1:1, dura aprox 30 minutos y puede ser virtual o presencial.',
    badge: 'Rutina Skincare 1:1',
    frequency: '',
    duration: '30 min (Virtual o Presencial)',
    image: 'assets/images/14.png',
    includes: [
      'Evaluación de hábitos y cuidados actuales',
      'Diseño de rutina de skincare a medida',
      'Guía completa en formato PDF',
      'Entrevista 1:1 (dura aprox 30 minutos virtual o presencial)',
      'Explicación detallada de cada paso de la rutina',
      'Recomendación de productos y alternativas'
    ]
  },
  {
    id: 'perfilado-cejas',
    title: 'Perfilado de Cejas',
    category: 'cejas-pestanas',
    categoryLabel: 'Cejas & Pestañas',
    description: 'Se realiza con pinza y si es necesario se recorta con tijera.',
    badge: 'Diseño & Perfilado',
    frequency: '',
    duration: '',
    image: 'assets/images/15.png',
    includes: [
      'Diseño personalizado según visagismo',
      'Perfilado con pinza',
      'Recorte con tijera cosmiátrica (si se requiere)',
      'Peinado y fijado de cejas'
    ]
  },
  {
    id: 'lifting-pestanas',
    title: 'Lifting de Pestañas',
    category: 'cejas-pestanas',
    categoryLabel: 'Cejas & Pestañas',
    description: 'Para realzar la mirada, el servicio dura aproximadamente 2hs e incluye hidratación y botox en pestañas. Se puede incluir tinte.',
    badge: 'Arqueado & Botox',
    frequency: '',
    duration: '2 hs',
    image: 'assets/images/16.png',
    includes: [
      'Higiene y preparación del área ocular',
      'Arqueado de pestañas desde la raíz',
      'Hidratación profunda',
      'Botox nutritivo en pestañas',
      'Tinte opcional para mayor definición'
    ]
  },
  {
    id: 'laminado-cejas',
    title: 'Laminado de Cejas',
    category: 'cejas-pestanas',
    categoryLabel: 'Cejas & Pestañas',
    description: 'Técnica que ayuda a ordenar, definir y dar forma a las cejas, logrando un efecto más prolijo, natural y uniforme. Ideal para realzar la mirada y mantener las cejas peinadas por más tiempo.',
    badge: 'Cejas Orgánicas',
    frequency: '',
    duration: '',
    image: 'assets/images/17.png',
    includes: [
      'Diseño de visagismo',
      'Direccionamiento y fijación del pelo',
      'Efecto peinado natural y uniforme',
      'Nutrición con bálsamo/botox'
    ]
  }
];
