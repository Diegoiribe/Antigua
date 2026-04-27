import { type Verb } from '../types/type-verbs';

const s = { score: 0, correct: 0, incorrect: 0, attempts: 0 };

export const verbs: Verb[] = [
  {
    verb: 'go',
    forms: {
      base: { value: 'go', type: 'base', translation: 'ir', stats: { ...s } },
      present: {
        value: 'goes',
        type: 'present',
        translation: 'va',
        stats: { ...s }
      },
      past: {
        value: 'went',
        type: 'past',
        translation: 'fue',
        stats: { ...s }
      },
      participle: {
        value: 'gone',
        type: 'participle',
        translation: 'ido',
        stats: { ...s }
      },
      ing: {
        value: 'going',
        type: 'ing',
        translation: 'yendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to go',
        type: 'infinitive',
        translation: 'ir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- to the gym every day',
        translation: 'Voy al gimnasio todos los días'
      },
      {
        type: 'present',
        sentence: 'She ---- to work early',
        translation: 'Ella va al trabajo temprano'
      },
      {
        type: 'past',
        sentence: 'I ---- to the beach yesterday',
        translation: 'Fui a la playa ayer'
      },
      {
        type: 'participle',
        sentence: 'I have ---- there before',
        translation: 'He ido allí antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- to the store now',
        translation: 'Estoy yendo a la tienda ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- home',
        translation: 'Quiero ir a casa'
      }
    ]
  },
  {
    verb: 'eat',
    forms: {
      base: {
        value: 'eat',
        type: 'base',
        translation: 'comer',
        stats: { ...s }
      },
      present: {
        value: 'eats',
        type: 'present',
        translation: 'come',
        stats: { ...s }
      },
      past: {
        value: 'ate',
        type: 'past',
        translation: 'comió',
        stats: { ...s }
      },
      participle: {
        value: 'eaten',
        type: 'participle',
        translation: 'comido',
        stats: { ...s }
      },
      ing: {
        value: 'eating',
        type: 'ing',
        translation: 'comiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to eat',
        type: 'infinitive',
        translation: 'comer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- every day',
        translation: 'Como todos los días'
      },
      {
        type: 'present',
        sentence: 'She ---- fast',
        translation: 'Ella come rápido'
      },
      {
        type: 'past',
        sentence: 'I ---- pizza yesterday',
        translation: 'Comí pizza ayer'
      },
      {
        type: 'participle',
        sentence: 'I have ---- a lot',
        translation: 'He comido mucho'
      },
      {
        type: 'ing',
        sentence: 'I am ---- now',
        translation: 'Estoy comiendo ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I want ----',
        translation: 'Quiero comer'
      }
    ]
  },
  {
    verb: 'see',
    forms: {
      base: { value: 'see', type: 'base', translation: 'ver', stats: { ...s } },
      present: {
        value: 'sees',
        type: 'present',
        translation: 've',
        stats: { ...s }
      },
      past: { value: 'saw', type: 'past', translation: 'vio', stats: { ...s } },
      participle: {
        value: 'seen',
        type: 'participle',
        translation: 'visto',
        stats: { ...s }
      },
      ing: {
        value: 'seeing',
        type: 'ing',
        translation: 'viendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to see',
        type: 'infinitive',
        translation: 'ver',
        stats: { ...s }
      }
    },
    examples: [
      { type: 'base', sentence: 'I ---- you', translation: 'Te veo' },
      {
        type: 'present',
        sentence: 'She ---- everything',
        translation: 'Ella ve todo'
      },
      {
        type: 'past',
        sentence: 'I ---- him yesterday',
        translation: 'Lo vi ayer'
      },
      {
        type: 'participle',
        sentence: 'I have ---- that movie',
        translation: 'He visto esa película'
      },
      { type: 'ing', sentence: 'I am ---- him', translation: 'Estoy viéndolo' },
      {
        type: 'infinitive',
        sentence: 'I want ---- you',
        translation: 'Quiero verte'
      }
    ]
  },
  {
    verb: 'make',
    forms: {
      base: {
        value: 'make',
        type: 'base',
        translation: 'hacer',
        stats: { ...s }
      },
      present: {
        value: 'makes',
        type: 'present',
        translation: 'hace',
        stats: { ...s }
      },
      past: {
        value: 'made',
        type: 'past',
        translation: 'hizo',
        stats: { ...s }
      },
      participle: {
        value: 'made',
        type: 'participle',
        translation: 'hecho',
        stats: { ...s }
      },
      ing: {
        value: 'making',
        type: 'ing',
        translation: 'haciendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to make',
        type: 'infinitive',
        translation: 'hacer',
        stats: { ...s }
      }
    },
    examples: [
      { type: 'base', sentence: 'I ---- money', translation: 'Hago dinero' },
      {
        type: 'present',
        sentence: 'She ---- dinner',
        translation: 'Ella hace la cena'
      },
      {
        type: 'past',
        sentence: 'I ---- a mistake',
        translation: 'Hice un error'
      },
      {
        type: 'participle',
        sentence: 'I have ---- progress',
        translation: 'He hecho progreso'
      },
      {
        type: 'ing',
        sentence: 'I am ---- food',
        translation: 'Estoy haciendo comida'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- this',
        translation: 'Quiero hacer esto'
      }
    ]
  },
  {
    verb: 'take',
    forms: {
      base: {
        value: 'take',
        type: 'base',
        translation: 'tomar',
        stats: { ...s }
      },
      present: {
        value: 'takes',
        type: 'present',
        translation: 'toma',
        stats: { ...s }
      },
      past: {
        value: 'took',
        type: 'past',
        translation: 'tomó',
        stats: { ...s }
      },
      participle: {
        value: 'taken',
        type: 'participle',
        translation: 'tomado',
        stats: { ...s }
      },
      ing: {
        value: 'taking',
        type: 'ing',
        translation: 'tomando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to take',
        type: 'infinitive',
        translation: 'tomar',
        stats: { ...s }
      }
    },
    examples: [
      { type: 'base', sentence: 'I ---- notes', translation: 'Tomo notas' },
      {
        type: 'present',
        sentence: 'She ---- photos',
        translation: 'Ella toma fotos'
      },
      {
        type: 'past',
        sentence: 'I ---- your phone',
        translation: 'Tomé tu teléfono'
      },
      {
        type: 'participle',
        sentence: 'I have ---- many pictures',
        translation: 'He tomado muchas fotos'
      },
      {
        type: 'ing',
        sentence: 'I am ---- a break',
        translation: 'Estoy tomando un descanso'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- it',
        translation: 'Quiero tomarlo'
      }
    ]
  },
  {
    verb: 'come',
    forms: {
      base: {
        value: 'come',
        type: 'base',
        translation: 'venir',
        stats: { ...s }
      },
      present: {
        value: 'comes',
        type: 'present',
        translation: 'viene',
        stats: { ...s }
      },
      past: {
        value: 'came',
        type: 'past',
        translation: 'vino',
        stats: { ...s }
      },
      participle: {
        value: 'come',
        type: 'participle',
        translation: 'venido',
        stats: { ...s }
      },
      ing: {
        value: 'coming',
        type: 'ing',
        translation: 'viniendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to come',
        type: 'infinitive',
        translation: 'venir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- here often',
        translation: 'Vengo aquí con frecuencia'
      },
      {
        type: 'present',
        sentence: 'She ---- late',
        translation: 'Ella viene tarde'
      },
      { type: 'past', sentence: 'I ---- yesterday', translation: 'Vine ayer' },
      {
        type: 'participle',
        sentence: 'I have ---- back',
        translation: 'He vuelto'
      },
      {
        type: 'ing',
        sentence: 'I am ---- now',
        translation: 'Estoy viniendo ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I want ----',
        translation: 'Quiero venir'
      }
    ]
  },
  {
    verb: 'say',
    forms: {
      base: {
        value: 'say',
        type: 'base',
        translation: 'decir',
        stats: { ...s }
      },
      present: {
        value: 'says',
        type: 'present',
        translation: 'dice',
        stats: { ...s }
      },
      past: {
        value: 'said',
        type: 'past',
        translation: 'dijo',
        stats: { ...s }
      },
      participle: {
        value: 'said',
        type: 'participle',
        translation: 'dicho',
        stats: { ...s }
      },
      ing: {
        value: 'saying',
        type: 'ing',
        translation: 'diciendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to say',
        type: 'infinitive',
        translation: 'decir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- the truth',
        translation: 'Digo la verdad'
      },
      {
        type: 'present',
        sentence: 'She ---- hello every morning',
        translation: 'Ella dice hola cada mañana'
      },
      {
        type: 'past',
        sentence: 'He ---- nothing',
        translation: 'Él no dijo nada'
      },
      {
        type: 'participle',
        sentence: 'I have ---- enough',
        translation: 'He dicho suficiente'
      },
      {
        type: 'ing',
        sentence: 'I am ---- the truth',
        translation: 'Estoy diciendo la verdad'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- something',
        translation: 'Quiero decir algo'
      }
    ]
  },
  {
    verb: 'get',
    forms: {
      base: {
        value: 'get',
        type: 'base',
        translation: 'conseguir',
        stats: { ...s }
      },
      present: {
        value: 'gets',
        type: 'present',
        translation: 'consigue',
        stats: { ...s }
      },
      past: {
        value: 'got',
        type: 'past',
        translation: 'consiguió',
        stats: { ...s }
      },
      participle: {
        value: 'gotten',
        type: 'participle',
        translation: 'conseguido',
        stats: { ...s }
      },
      ing: {
        value: 'getting',
        type: 'ing',
        translation: 'consiguiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to get',
        type: 'infinitive',
        translation: 'conseguir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- up early',
        translation: 'Me levanto temprano'
      },
      {
        type: 'present',
        sentence: 'She ---- good grades',
        translation: 'Ella consigue buenas notas'
      },
      {
        type: 'past',
        sentence: 'I ---- a new job',
        translation: 'Conseguí un nuevo trabajo'
      },
      {
        type: 'participle',
        sentence: 'I have ---- better',
        translation: 'He mejorado'
      },
      {
        type: 'ing',
        sentence: 'I am ---- ready',
        translation: 'Me estoy preparando'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- there',
        translation: 'Necesito llegar allí'
      }
    ]
  },
  {
    verb: 'know',
    forms: {
      base: {
        value: 'know',
        type: 'base',
        translation: 'saber',
        stats: { ...s }
      },
      present: {
        value: 'knows',
        type: 'present',
        translation: 'sabe',
        stats: { ...s }
      },
      past: {
        value: 'knew',
        type: 'past',
        translation: 'supo',
        stats: { ...s }
      },
      participle: {
        value: 'known',
        type: 'participle',
        translation: 'sabido',
        stats: { ...s }
      },
      ing: {
        value: 'knowing',
        type: 'ing',
        translation: 'sabiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to know',
        type: 'infinitive',
        translation: 'saber',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- the answer',
        translation: 'Sé la respuesta'
      },
      {
        type: 'present',
        sentence: 'She ---- everyone here',
        translation: 'Ella conoce a todos aquí'
      },
      {
        type: 'past',
        sentence: 'I ---- that already',
        translation: 'Ya lo sabía'
      },
      {
        type: 'participle',
        sentence: 'I have ---- him for years',
        translation: 'Lo he conocido por años'
      },
      {
        type: 'ing',
        sentence: 'Not ---- is okay',
        translation: 'No saber está bien'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- more',
        translation: 'Quiero saber más'
      }
    ]
  },
  {
    verb: 'think',
    forms: {
      base: {
        value: 'think',
        type: 'base',
        translation: 'pensar',
        stats: { ...s }
      },
      present: {
        value: 'thinks',
        type: 'present',
        translation: 'piensa',
        stats: { ...s }
      },
      past: {
        value: 'thought',
        type: 'past',
        translation: 'pensó',
        stats: { ...s }
      },
      participle: {
        value: 'thought',
        type: 'participle',
        translation: 'pensado',
        stats: { ...s }
      },
      ing: {
        value: 'thinking',
        type: 'ing',
        translation: 'pensando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to think',
        type: 'infinitive',
        translation: 'pensar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- it is true',
        translation: 'Creo que es verdad'
      },
      {
        type: 'present',
        sentence: 'She ---- too much',
        translation: 'Ella piensa demasiado'
      },
      {
        type: 'past',
        sentence: 'I ---- about you',
        translation: 'Pensé en ti'
      },
      {
        type: 'participle',
        sentence: 'I have ---- about it',
        translation: 'He pensado en ello'
      },
      {
        type: 'ing',
        sentence: 'I am ---- of a plan',
        translation: 'Estoy pensando en un plan'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- clearly',
        translation: 'Necesito pensar con claridad'
      }
    ]
  },
  {
    verb: 'look',
    forms: {
      base: {
        value: 'look',
        type: 'base',
        translation: 'mirar',
        stats: { ...s }
      },
      present: {
        value: 'looks',
        type: 'present',
        translation: 'mira',
        stats: { ...s }
      },
      past: {
        value: 'looked',
        type: 'past',
        translation: 'miró',
        stats: { ...s }
      },
      participle: {
        value: 'looked',
        type: 'participle',
        translation: 'mirado',
        stats: { ...s }
      },
      ing: {
        value: 'looking',
        type: 'ing',
        translation: 'mirando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to look',
        type: 'infinitive',
        translation: 'mirar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- at the sky',
        translation: 'Miro el cielo'
      },
      {
        type: 'present',
        sentence: 'She ---- happy today',
        translation: 'Ella parece feliz hoy'
      },
      {
        type: 'past',
        sentence: 'I ---- everywhere',
        translation: 'Miré por todas partes'
      },
      {
        type: 'participle',
        sentence: 'I have ---- for it',
        translation: 'Lo he buscado'
      },
      {
        type: 'ing',
        sentence: 'I am ---- for you',
        translation: 'Te estoy buscando'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- at this',
        translation: 'Quiero ver esto'
      }
    ]
  },
  {
    verb: 'want',
    forms: {
      base: {
        value: 'want',
        type: 'base',
        translation: 'querer',
        stats: { ...s }
      },
      present: {
        value: 'wants',
        type: 'present',
        translation: 'quiere',
        stats: { ...s }
      },
      past: {
        value: 'wanted',
        type: 'past',
        translation: 'quiso',
        stats: { ...s }
      },
      participle: {
        value: 'wanted',
        type: 'participle',
        translation: 'querido',
        stats: { ...s }
      },
      ing: {
        value: 'wanting',
        type: 'ing',
        translation: 'queriendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to want',
        type: 'infinitive',
        translation: 'querer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- more time',
        translation: 'Quiero más tiempo'
      },
      {
        type: 'present',
        sentence: 'She ---- to travel',
        translation: 'Ella quiere viajar'
      },
      { type: 'past', sentence: 'I ---- to help', translation: 'Quise ayudar' },
      {
        type: 'participle',
        sentence: 'I have always ---- this',
        translation: 'Siempre he querido esto'
      },
      {
        type: 'ing',
        sentence: 'I am ---- nothing more',
        translation: 'No quiero nada más'
      },
      {
        type: 'infinitive',
        sentence: 'I continue ---- more',
        translation: 'Sigo queriendo más'
      }
    ]
  },
  {
    verb: 'give',
    forms: {
      base: {
        value: 'give',
        type: 'base',
        translation: 'dar',
        stats: { ...s }
      },
      present: {
        value: 'gives',
        type: 'present',
        translation: 'da',
        stats: { ...s }
      },
      past: {
        value: 'gave',
        type: 'past',
        translation: 'dio',
        stats: { ...s }
      },
      participle: {
        value: 'given',
        type: 'participle',
        translation: 'dado',
        stats: { ...s }
      },
      ing: {
        value: 'giving',
        type: 'ing',
        translation: 'dando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to give',
        type: 'infinitive',
        translation: 'dar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- you a gift',
        translation: 'Te doy un regalo'
      },
      {
        type: 'present',
        sentence: 'She ---- advice',
        translation: 'Ella da consejos'
      },
      {
        type: 'past',
        sentence: 'I ---- him money',
        translation: 'Le di dinero'
      },
      {
        type: 'participle',
        sentence: 'I have ---- everything',
        translation: 'He dado todo'
      },
      {
        type: 'ing',
        sentence: 'I am ---- up',
        translation: 'Me estoy rindiendo'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- you this',
        translation: 'Quiero darte esto'
      }
    ]
  },
  {
    verb: 'find',
    forms: {
      base: {
        value: 'find',
        type: 'base',
        translation: 'encontrar',
        stats: { ...s }
      },
      present: {
        value: 'finds',
        type: 'present',
        translation: 'encuentra',
        stats: { ...s }
      },
      past: {
        value: 'found',
        type: 'past',
        translation: 'encontró',
        stats: { ...s }
      },
      participle: {
        value: 'found',
        type: 'participle',
        translation: 'encontrado',
        stats: { ...s }
      },
      ing: {
        value: 'finding',
        type: 'ing',
        translation: 'encontrando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to find',
        type: 'infinitive',
        translation: 'encontrar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- it easy',
        translation: 'Lo encuentro fácil'
      },
      {
        type: 'present',
        sentence: 'She ---- joy in music',
        translation: 'Ella encuentra alegría en la música'
      },
      {
        type: 'past',
        sentence: 'I ---- my keys',
        translation: 'Encontré mis llaves'
      },
      {
        type: 'participle',
        sentence: 'I have ---- the answer',
        translation: 'He encontrado la respuesta'
      },
      {
        type: 'ing',
        sentence: 'I am ---- it hard',
        translation: 'Lo estoy encontrando difícil'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- a solution',
        translation: 'Necesito encontrar una solución'
      }
    ]
  },
  {
    verb: 'tell',
    forms: {
      base: {
        value: 'tell',
        type: 'base',
        translation: 'contar',
        stats: { ...s }
      },
      present: {
        value: 'tells',
        type: 'present',
        translation: 'cuenta',
        stats: { ...s }
      },
      past: {
        value: 'told',
        type: 'past',
        translation: 'contó',
        stats: { ...s }
      },
      participle: {
        value: 'told',
        type: 'participle',
        translation: 'contado',
        stats: { ...s }
      },
      ing: {
        value: 'telling',
        type: 'ing',
        translation: 'contando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to tell',
        type: 'infinitive',
        translation: 'contar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- stories',
        translation: 'Cuento historias'
      },
      {
        type: 'present',
        sentence: 'She ---- the truth',
        translation: 'Ella dice la verdad'
      },
      {
        type: 'past',
        sentence: 'I ---- him the news',
        translation: 'Le conté las noticias'
      },
      {
        type: 'participle',
        sentence: 'I have ---- you before',
        translation: 'Te lo he dicho antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- you now',
        translation: 'Te lo estoy diciendo ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- you something',
        translation: 'Quiero contarte algo'
      }
    ]
  },
  {
    verb: 'ask',
    forms: {
      base: {
        value: 'ask',
        type: 'base',
        translation: 'preguntar',
        stats: { ...s }
      },
      present: {
        value: 'asks',
        type: 'present',
        translation: 'pregunta',
        stats: { ...s }
      },
      past: {
        value: 'asked',
        type: 'past',
        translation: 'preguntó',
        stats: { ...s }
      },
      participle: {
        value: 'asked',
        type: 'participle',
        translation: 'preguntado',
        stats: { ...s }
      },
      ing: {
        value: 'asking',
        type: 'ing',
        translation: 'preguntando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to ask',
        type: 'infinitive',
        translation: 'preguntar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- questions',
        translation: 'Hago preguntas'
      },
      {
        type: 'present',
        sentence: 'She ---- for help',
        translation: 'Ella pide ayuda'
      },
      {
        type: 'past',
        sentence: 'I ---- him directly',
        translation: 'Le pregunté directamente'
      },
      {
        type: 'participle',
        sentence: 'I have ---- many times',
        translation: 'He preguntado muchas veces'
      },
      {
        type: 'ing',
        sentence: 'I am ---- for a favor',
        translation: 'Estoy pidiendo un favor'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- for help',
        translation: 'Necesito pedir ayuda'
      }
    ]
  },
  {
    verb: 'feel',
    forms: {
      base: {
        value: 'feel',
        type: 'base',
        translation: 'sentir',
        stats: { ...s }
      },
      present: {
        value: 'feels',
        type: 'present',
        translation: 'siente',
        stats: { ...s }
      },
      past: {
        value: 'felt',
        type: 'past',
        translation: 'sintió',
        stats: { ...s }
      },
      participle: {
        value: 'felt',
        type: 'participle',
        translation: 'sentido',
        stats: { ...s }
      },
      ing: {
        value: 'feeling',
        type: 'ing',
        translation: 'sintiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to feel',
        type: 'infinitive',
        translation: 'sentir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- tired today',
        translation: 'Me siento cansado hoy'
      },
      {
        type: 'present',
        sentence: 'She ---- nervous',
        translation: 'Ella se siente nerviosa'
      },
      {
        type: 'past',
        sentence: 'I ---- so happy',
        translation: 'Me sentí muy feliz'
      },
      {
        type: 'participle',
        sentence: 'I have ---- this before',
        translation: 'He sentido esto antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- better now',
        translation: 'Me estoy sintiendo mejor'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- free',
        translation: 'Quiero sentirme libre'
      }
    ]
  },
  {
    verb: 'try',
    forms: {
      base: {
        value: 'try',
        type: 'base',
        translation: 'intentar',
        stats: { ...s }
      },
      present: {
        value: 'tries',
        type: 'present',
        translation: 'intenta',
        stats: { ...s }
      },
      past: {
        value: 'tried',
        type: 'past',
        translation: 'intentó',
        stats: { ...s }
      },
      participle: {
        value: 'tried',
        type: 'participle',
        translation: 'intentado',
        stats: { ...s }
      },
      ing: {
        value: 'trying',
        type: 'ing',
        translation: 'intentando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to try',
        type: 'infinitive',
        translation: 'intentar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my best',
        translation: 'Hago mi mejor esfuerzo'
      },
      {
        type: 'present',
        sentence: 'She ---- every day',
        translation: 'Ella intenta cada día'
      },
      {
        type: 'past',
        sentence: 'I ---- to call you',
        translation: 'Intenté llamarte'
      },
      {
        type: 'participle',
        sentence: 'I have ---- everything',
        translation: 'Lo he intentado todo'
      },
      {
        type: 'ing',
        sentence: 'I am ---- to help',
        translation: 'Estoy intentando ayudar'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- again',
        translation: 'Quiero intentarlo de nuevo'
      }
    ]
  },
  {
    verb: 'leave',
    forms: {
      base: {
        value: 'leave',
        type: 'base',
        translation: 'dejar',
        stats: { ...s }
      },
      present: {
        value: 'leaves',
        type: 'present',
        translation: 'deja',
        stats: { ...s }
      },
      past: {
        value: 'left',
        type: 'past',
        translation: 'dejó',
        stats: { ...s }
      },
      participle: {
        value: 'left',
        type: 'participle',
        translation: 'dejado',
        stats: { ...s }
      },
      ing: {
        value: 'leaving',
        type: 'ing',
        translation: 'dejando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to leave',
        type: 'infinitive',
        translation: 'dejar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- early',
        translation: 'Me voy temprano'
      },
      {
        type: 'present',
        sentence: 'She ---- work at five',
        translation: 'Ella sale del trabajo a las cinco'
      },
      {
        type: 'past',
        sentence: 'I ---- without saying goodbye',
        translation: 'Me fui sin despedirme'
      },
      {
        type: 'participle',
        sentence: 'I have ---- already',
        translation: 'Ya me he ido'
      },
      {
        type: 'ing',
        sentence: 'I am ---- now',
        translation: 'Me estoy yendo ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- soon',
        translation: 'Necesito irme pronto'
      }
    ]
  },
  {
    verb: 'call',
    forms: {
      base: {
        value: 'call',
        type: 'base',
        translation: 'llamar',
        stats: { ...s }
      },
      present: {
        value: 'calls',
        type: 'present',
        translation: 'llama',
        stats: { ...s }
      },
      past: {
        value: 'called',
        type: 'past',
        translation: 'llamó',
        stats: { ...s }
      },
      participle: {
        value: 'called',
        type: 'participle',
        translation: 'llamado',
        stats: { ...s }
      },
      ing: {
        value: 'calling',
        type: 'ing',
        translation: 'llamando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to call',
        type: 'infinitive',
        translation: 'llamar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my mom daily',
        translation: 'Llamo a mi mamá a diario'
      },
      {
        type: 'present',
        sentence: 'She ---- me every night',
        translation: 'Ella me llama cada noche'
      },
      {
        type: 'past',
        sentence: 'I ---- you yesterday',
        translation: 'Te llamé ayer'
      },
      {
        type: 'participle',
        sentence: 'I have ---- three times',
        translation: 'He llamado tres veces'
      },
      {
        type: 'ing',
        sentence: 'I am ---- right now',
        translation: 'Estoy llamando ahora mismo'
      },
      {
        type: 'infinitive',
        sentence: 'I forgot ---- you',
        translation: 'Se me olvidó llamarte'
      }
    ]
  },
  {
    verb: 'keep',
    forms: {
      base: {
        value: 'keep',
        type: 'base',
        translation: 'mantener',
        stats: { ...s }
      },
      present: {
        value: 'keeps',
        type: 'present',
        translation: 'mantiene',
        stats: { ...s }
      },
      past: {
        value: 'kept',
        type: 'past',
        translation: 'mantuvo',
        stats: { ...s }
      },
      participle: {
        value: 'kept',
        type: 'participle',
        translation: 'mantenido',
        stats: { ...s }
      },
      ing: {
        value: 'keeping',
        type: 'ing',
        translation: 'manteniendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to keep',
        type: 'infinitive',
        translation: 'mantener',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my promises',
        translation: 'Mantengo mis promesas'
      },
      {
        type: 'present',
        sentence: 'She ---- smiling',
        translation: 'Ella sigue sonriendo'
      },
      {
        type: 'past',
        sentence: 'I ---- quiet',
        translation: 'Me mantuve en silencio'
      },
      {
        type: 'participle',
        sentence: 'I have ---- going',
        translation: 'He seguido adelante'
      },
      {
        type: 'ing',
        sentence: 'I am ---- the secret',
        translation: 'Estoy guardando el secreto'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- trying',
        translation: 'Quiero seguir intentando'
      }
    ]
  },
  {
    verb: 'bring',
    forms: {
      base: {
        value: 'bring',
        type: 'base',
        translation: 'traer',
        stats: { ...s }
      },
      present: {
        value: 'brings',
        type: 'present',
        translation: 'trae',
        stats: { ...s }
      },
      past: {
        value: 'brought',
        type: 'past',
        translation: 'trajo',
        stats: { ...s }
      },
      participle: {
        value: 'brought',
        type: 'participle',
        translation: 'traído',
        stats: { ...s }
      },
      ing: {
        value: 'bringing',
        type: 'ing',
        translation: 'trayendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to bring',
        type: 'infinitive',
        translation: 'traer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- food to work',
        translation: 'Traigo comida al trabajo'
      },
      {
        type: 'present',
        sentence: 'She ---- joy to everyone',
        translation: 'Ella trae alegría a todos'
      },
      {
        type: 'past',
        sentence: 'I ---- a gift',
        translation: 'Traje un regalo'
      },
      {
        type: 'participle',
        sentence: 'I have ---- everything needed',
        translation: 'He traído todo lo necesario'
      },
      {
        type: 'ing',
        sentence: 'I am ---- good news',
        translation: 'Estoy trayendo buenas noticias'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- my bag',
        translation: 'Necesito traer mi bolsa'
      }
    ]
  },
  {
    verb: 'run',
    forms: {
      base: {
        value: 'run',
        type: 'base',
        translation: 'correr',
        stats: { ...s }
      },
      present: {
        value: 'runs',
        type: 'present',
        translation: 'corre',
        stats: { ...s }
      },
      past: {
        value: 'ran',
        type: 'past',
        translation: 'corrió',
        stats: { ...s }
      },
      participle: {
        value: 'run',
        type: 'participle',
        translation: 'corrido',
        stats: { ...s }
      },
      ing: {
        value: 'running',
        type: 'ing',
        translation: 'corriendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to run',
        type: 'infinitive',
        translation: 'correr',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- every morning',
        translation: 'Corro cada mañana'
      },
      {
        type: 'present',
        sentence: 'She ---- five miles a day',
        translation: 'Ella corre cinco millas al día'
      },
      {
        type: 'past',
        sentence: 'I ---- a marathon',
        translation: 'Corrí un maratón'
      },
      {
        type: 'participle',
        sentence: 'I have ---- this route before',
        translation: 'He corrido esta ruta antes'
      },
      { type: 'ing', sentence: 'I am ---- late', translation: 'Voy tarde' },
      {
        type: 'infinitive',
        sentence: 'I love ----',
        translation: 'Me encanta correr'
      }
    ]
  },
  {
    verb: 'write',
    forms: {
      base: {
        value: 'write',
        type: 'base',
        translation: 'escribir',
        stats: { ...s }
      },
      present: {
        value: 'writes',
        type: 'present',
        translation: 'escribe',
        stats: { ...s }
      },
      past: {
        value: 'wrote',
        type: 'past',
        translation: 'escribió',
        stats: { ...s }
      },
      participle: {
        value: 'written',
        type: 'participle',
        translation: 'escrito',
        stats: { ...s }
      },
      ing: {
        value: 'writing',
        type: 'ing',
        translation: 'escribiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to write',
        type: 'infinitive',
        translation: 'escribir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- every day',
        translation: 'Escribo cada día'
      },
      {
        type: 'present',
        sentence: 'She ---- novels',
        translation: 'Ella escribe novelas'
      },
      {
        type: 'past',
        sentence: 'I ---- a letter',
        translation: 'Escribí una carta'
      },
      {
        type: 'participle',
        sentence: 'I have ---- ten pages',
        translation: 'He escrito diez páginas'
      },
      {
        type: 'ing',
        sentence: 'I am ---- my essay',
        translation: 'Estoy escribiendo mi ensayo'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- a book',
        translation: 'Quiero escribir un libro'
      }
    ]
  },
  {
    verb: 'sit',
    forms: {
      base: {
        value: 'sit',
        type: 'base',
        translation: 'sentarse',
        stats: { ...s }
      },
      present: {
        value: 'sits',
        type: 'present',
        translation: 'se sienta',
        stats: { ...s }
      },
      past: {
        value: 'sat',
        type: 'past',
        translation: 'se sentó',
        stats: { ...s }
      },
      participle: {
        value: 'sat',
        type: 'participle',
        translation: 'sentado',
        stats: { ...s }
      },
      ing: {
        value: 'sitting',
        type: 'ing',
        translation: 'sentándose',
        stats: { ...s }
      },
      infinitive: {
        value: 'to sit',
        type: 'infinitive',
        translation: 'sentarse',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- by the window',
        translation: 'Me siento junto a la ventana'
      },
      {
        type: 'present',
        sentence: 'She ---- at the front',
        translation: 'Ella se sienta al frente'
      },
      {
        type: 'past',
        sentence: 'I ---- for hours',
        translation: 'Me senté por horas'
      },
      {
        type: 'participle',
        sentence: 'I have ---- here all day',
        translation: 'He estado sentado aquí todo el día'
      },
      {
        type: 'ing',
        sentence: 'I am ---- down now',
        translation: 'Me estoy sentando ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- down',
        translation: 'Necesito sentarme'
      }
    ]
  },
  {
    verb: 'speak',
    forms: {
      base: {
        value: 'speak',
        type: 'base',
        translation: 'hablar',
        stats: { ...s }
      },
      present: {
        value: 'speaks',
        type: 'present',
        translation: 'habla',
        stats: { ...s }
      },
      past: {
        value: 'spoke',
        type: 'past',
        translation: 'habló',
        stats: { ...s }
      },
      participle: {
        value: 'spoken',
        type: 'participle',
        translation: 'hablado',
        stats: { ...s }
      },
      ing: {
        value: 'speaking',
        type: 'ing',
        translation: 'hablando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to speak',
        type: 'infinitive',
        translation: 'hablar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- three languages',
        translation: 'Hablo tres idiomas'
      },
      {
        type: 'present',
        sentence: 'She ---- very clearly',
        translation: 'Ella habla muy claramente'
      },
      {
        type: 'past',
        sentence: 'I ---- at the meeting',
        translation: 'Hablé en la reunión'
      },
      {
        type: 'participle',
        sentence: 'I have ---- to him',
        translation: 'He hablado con él'
      },
      {
        type: 'ing',
        sentence: 'I am ---- too fast',
        translation: 'Estoy hablando demasiado rápido'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- English better',
        translation: 'Quiero hablar inglés mejor'
      }
    ]
  },
  {
    verb: 'read',
    forms: {
      base: {
        value: 'read',
        type: 'base',
        translation: 'leer',
        stats: { ...s }
      },
      present: {
        value: 'reads',
        type: 'present',
        translation: 'lee',
        stats: { ...s }
      },
      past: {
        value: 'read',
        type: 'past',
        translation: 'leyó',
        stats: { ...s }
      },
      participle: {
        value: 'read',
        type: 'participle',
        translation: 'leído',
        stats: { ...s }
      },
      ing: {
        value: 'reading',
        type: 'ing',
        translation: 'leyendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to read',
        type: 'infinitive',
        translation: 'leer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- every night',
        translation: 'Leo cada noche'
      },
      {
        type: 'present',
        sentence: 'She ---- the news',
        translation: 'Ella lee las noticias'
      },
      {
        type: 'past',
        sentence: 'I ---- that book',
        translation: 'Leí ese libro'
      },
      {
        type: 'participle',
        sentence: 'I have ---- it twice',
        translation: 'Lo he leído dos veces'
      },
      {
        type: 'ing',
        sentence: 'I am ---- right now',
        translation: 'Estoy leyendo ahora mismo'
      },
      {
        type: 'infinitive',
        sentence: 'I love ---- fiction',
        translation: 'Me encanta leer ficción'
      }
    ]
  },
  {
    verb: 'hear',
    forms: {
      base: {
        value: 'hear',
        type: 'base',
        translation: 'oír',
        stats: { ...s }
      },
      present: {
        value: 'hears',
        type: 'present',
        translation: 'oye',
        stats: { ...s }
      },
      past: {
        value: 'heard',
        type: 'past',
        translation: 'oyó',
        stats: { ...s }
      },
      participle: {
        value: 'heard',
        type: 'participle',
        translation: 'oído',
        stats: { ...s }
      },
      ing: {
        value: 'hearing',
        type: 'ing',
        translation: 'oyendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to hear',
        type: 'infinitive',
        translation: 'oír',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- a noise',
        translation: 'Oigo un ruido'
      },
      {
        type: 'present',
        sentence: 'She ---- everything',
        translation: 'Ella oye todo'
      },
      {
        type: 'past',
        sentence: 'I ---- the music',
        translation: 'Oí la música'
      },
      {
        type: 'participle',
        sentence: 'I have ---- that song',
        translation: 'He oído esa canción'
      },
      {
        type: 'ing',
        sentence: 'I am ---- you',
        translation: 'Te estoy escuchando'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- your voice',
        translation: 'Quiero oír tu voz'
      }
    ]
  },
  {
    verb: 'put',
    forms: {
      base: {
        value: 'put',
        type: 'base',
        translation: 'poner',
        stats: { ...s }
      },
      present: {
        value: 'puts',
        type: 'present',
        translation: 'pone',
        stats: { ...s }
      },
      past: {
        value: 'put',
        type: 'past',
        translation: 'puso',
        stats: { ...s }
      },
      participle: {
        value: 'put',
        type: 'participle',
        translation: 'puesto',
        stats: { ...s }
      },
      ing: {
        value: 'putting',
        type: 'ing',
        translation: 'poniendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to put',
        type: 'infinitive',
        translation: 'poner',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- it on the table',
        translation: 'Lo pongo en la mesa'
      },
      {
        type: 'present',
        sentence: 'She ---- effort into it',
        translation: 'Ella le pone esfuerzo'
      },
      {
        type: 'past',
        sentence: 'I ---- the keys here',
        translation: 'Puse las llaves aquí'
      },
      {
        type: 'participle',
        sentence: 'I have ---- it away',
        translation: 'Lo he guardado'
      },
      {
        type: 'ing',
        sentence: 'I am ---- it together',
        translation: 'Lo estoy armando'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- this down',
        translation: 'Necesito anotar esto'
      }
    ]
  },
  {
    verb: 'let',
    forms: {
      base: {
        value: 'let',
        type: 'base',
        translation: 'dejar',
        stats: { ...s }
      },
      present: {
        value: 'lets',
        type: 'present',
        translation: 'deja',
        stats: { ...s }
      },
      past: {
        value: 'let',
        type: 'past',
        translation: 'dejó',
        stats: { ...s }
      },
      participle: {
        value: 'let',
        type: 'participle',
        translation: 'dejado',
        stats: { ...s }
      },
      ing: {
        value: 'letting',
        type: 'ing',
        translation: 'dejando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to let',
        type: 'infinitive',
        translation: 'dejar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- him decide',
        translation: 'Lo dejo decidir'
      },
      {
        type: 'present',
        sentence: 'She ---- me in',
        translation: 'Ella me deja entrar'
      },
      { type: 'past', sentence: 'I ---- it go', translation: 'Lo dejé ir' },
      {
        type: 'participle',
        sentence: 'I have ---- him know',
        translation: 'Le he hecho saber'
      },
      {
        type: 'ing',
        sentence: 'I am ---- you choose',
        translation: 'Te estoy dejando elegir'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- go of this',
        translation: 'Necesito soltar esto'
      }
    ]
  },
  {
    verb: 'be',
    forms: {
      base: {
        value: 'be',
        type: 'base',
        translation: 'ser/estar',
        stats: { ...s }
      },
      present: {
        value: 'is',
        type: 'present',
        translation: 'es/está',
        stats: { ...s }
      },
      past: {
        value: 'was',
        type: 'past',
        translation: 'era/estaba',
        stats: { ...s }
      },
      participle: {
        value: 'been',
        type: 'participle',
        translation: 'sido/estado',
        stats: { ...s }
      },
      ing: {
        value: 'being',
        type: 'ing',
        translation: 'siendo/estando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to be',
        type: 'infinitive',
        translation: 'ser/estar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I want ---- honest',
        translation: 'Quiero ser honesto'
      },
      {
        type: 'present',
        sentence: 'She ---- very kind',
        translation: 'Ella es muy amable'
      },
      {
        type: 'past',
        sentence: 'I ---- tired yesterday',
        translation: 'Estaba cansado ayer'
      },
      {
        type: 'participle',
        sentence: 'I have ---- here before',
        translation: 'He estado aquí antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- careful',
        translation: 'Estoy siendo cuidadoso'
      },
      {
        type: 'infinitive',
        sentence: 'I try ---- on time',
        translation: 'Intento ser puntual'
      }
    ]
  },
  {
    verb: 'have',
    forms: {
      base: {
        value: 'have',
        type: 'base',
        translation: 'tener',
        stats: { ...s }
      },
      present: {
        value: 'has',
        type: 'present',
        translation: 'tiene',
        stats: { ...s }
      },
      past: {
        value: 'had',
        type: 'past',
        translation: 'tuvo',
        stats: { ...s }
      },
      participle: {
        value: 'had',
        type: 'participle',
        translation: 'tenido',
        stats: { ...s }
      },
      ing: {
        value: 'having',
        type: 'ing',
        translation: 'teniendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to have',
        type: 'infinitive',
        translation: 'tener',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- two cats',
        translation: 'Tengo dos gatos'
      },
      {
        type: 'present',
        sentence: 'She ---- a great idea',
        translation: 'Ella tiene una gran idea'
      },
      {
        type: 'past',
        sentence: 'I ---- a good time',
        translation: 'Lo pasé bien'
      },
      {
        type: 'participle',
        sentence: 'I have ---- enough',
        translation: 'He tenido suficiente'
      },
      {
        type: 'ing',
        sentence: 'I am ---- fun',
        translation: 'Me estoy divirtiendo'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- more time',
        translation: 'Quiero tener más tiempo'
      }
    ]
  },
  {
    verb: 'do',
    forms: {
      base: {
        value: 'do',
        type: 'base',
        translation: 'hacer',
        stats: { ...s }
      },
      present: {
        value: 'does',
        type: 'present',
        translation: 'hace',
        stats: { ...s }
      },
      past: {
        value: 'did',
        type: 'past',
        translation: 'hizo',
        stats: { ...s }
      },
      participle: {
        value: 'done',
        type: 'participle',
        translation: 'hecho',
        stats: { ...s }
      },
      ing: {
        value: 'doing',
        type: 'ing',
        translation: 'haciendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to do',
        type: 'infinitive',
        translation: 'hacer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my homework',
        translation: 'Hago mi tarea'
      },
      {
        type: 'present',
        sentence: 'She ---- her best',
        translation: 'Ella hace su mejor esfuerzo'
      },
      {
        type: 'past',
        sentence: 'I ---- it myself',
        translation: 'Lo hice yo mismo'
      },
      {
        type: 'participle',
        sentence: 'I have ---- that before',
        translation: 'He hecho eso antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- the dishes',
        translation: 'Estoy lavando los platos'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- this now',
        translation: 'Necesito hacer esto ahora'
      }
    ]
  },
  {
    verb: 'work',
    forms: {
      base: {
        value: 'work',
        type: 'base',
        translation: 'trabajar',
        stats: { ...s }
      },
      present: {
        value: 'works',
        type: 'present',
        translation: 'trabaja',
        stats: { ...s }
      },
      past: {
        value: 'worked',
        type: 'past',
        translation: 'trabajó',
        stats: { ...s }
      },
      participle: {
        value: 'worked',
        type: 'participle',
        translation: 'trabajado',
        stats: { ...s }
      },
      ing: {
        value: 'working',
        type: 'ing',
        translation: 'trabajando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to work',
        type: 'infinitive',
        translation: 'trabajar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- from home',
        translation: 'Trabajo desde casa'
      },
      {
        type: 'present',
        sentence: 'She ---- very hard',
        translation: 'Ella trabaja muy duro'
      },
      {
        type: 'past',
        sentence: 'I ---- all weekend',
        translation: 'Trabajé todo el fin de semana'
      },
      {
        type: 'participle',
        sentence: 'I have ---- here for years',
        translation: 'He trabajado aquí por años'
      },
      {
        type: 'ing',
        sentence: 'I am ---- on a project',
        translation: 'Estoy trabajando en un proyecto'
      },
      {
        type: 'infinitive',
        sentence: 'I love ---- with people',
        translation: 'Me encanta trabajar con personas'
      }
    ]
  },
  {
    verb: 'play',
    forms: {
      base: {
        value: 'play',
        type: 'base',
        translation: 'jugar',
        stats: { ...s }
      },
      present: {
        value: 'plays',
        type: 'present',
        translation: 'juega',
        stats: { ...s }
      },
      past: {
        value: 'played',
        type: 'past',
        translation: 'jugó',
        stats: { ...s }
      },
      participle: {
        value: 'played',
        type: 'participle',
        translation: 'jugado',
        stats: { ...s }
      },
      ing: {
        value: 'playing',
        type: 'ing',
        translation: 'jugando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to play',
        type: 'infinitive',
        translation: 'jugar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- soccer on weekends',
        translation: 'Juego fútbol los fines de semana'
      },
      {
        type: 'present',
        sentence: 'She ---- the piano',
        translation: 'Ella toca el piano'
      },
      {
        type: 'past',
        sentence: 'I ---- all day',
        translation: 'Jugué todo el día'
      },
      {
        type: 'participle',
        sentence: 'I have ---- this game before',
        translation: 'He jugado este juego antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- outside',
        translation: 'Estoy jugando afuera'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- again',
        translation: 'Quiero jugar de nuevo'
      }
    ]
  },
  {
    verb: 'live',
    forms: {
      base: {
        value: 'live',
        type: 'base',
        translation: 'vivir',
        stats: { ...s }
      },
      present: {
        value: 'lives',
        type: 'present',
        translation: 'vive',
        stats: { ...s }
      },
      past: {
        value: 'lived',
        type: 'past',
        translation: 'vivió',
        stats: { ...s }
      },
      participle: {
        value: 'lived',
        type: 'participle',
        translation: 'vivido',
        stats: { ...s }
      },
      ing: {
        value: 'living',
        type: 'ing',
        translation: 'viviendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to live',
        type: 'infinitive',
        translation: 'vivir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- in the city',
        translation: 'Vivo en la ciudad'
      },
      {
        type: 'present',
        sentence: 'She ---- alone',
        translation: 'Ella vive sola'
      },
      {
        type: 'past',
        sentence: 'I ---- in Spain for two years',
        translation: 'Viví en España dos años'
      },
      {
        type: 'participle',
        sentence: 'I have ---- here all my life',
        translation: 'He vivido aquí toda mi vida'
      },
      {
        type: 'ing',
        sentence: 'I am ---- my dream',
        translation: 'Estoy viviendo mi sueño'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- abroad',
        translation: 'Quiero vivir en el extranjero'
      }
    ]
  },
  {
    verb: 'show',
    forms: {
      base: {
        value: 'show',
        type: 'base',
        translation: 'mostrar',
        stats: { ...s }
      },
      present: {
        value: 'shows',
        type: 'present',
        translation: 'muestra',
        stats: { ...s }
      },
      past: {
        value: 'showed',
        type: 'past',
        translation: 'mostró',
        stats: { ...s }
      },
      participle: {
        value: 'shown',
        type: 'participle',
        translation: 'mostrado',
        stats: { ...s }
      },
      ing: {
        value: 'showing',
        type: 'ing',
        translation: 'mostrando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to show',
        type: 'infinitive',
        translation: 'mostrar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- you how',
        translation: 'Te muestro cómo'
      },
      {
        type: 'present',
        sentence: 'She ---- great courage',
        translation: 'Ella muestra gran valentía'
      },
      {
        type: 'past',
        sentence: 'I ---- him the way',
        translation: 'Le mostré el camino'
      },
      {
        type: 'participle',
        sentence: 'I have ---- my work',
        translation: 'He mostrado mi trabajo'
      },
      {
        type: 'ing',
        sentence: 'I am ---- you something',
        translation: 'Te estoy mostrando algo'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- you this',
        translation: 'Quiero mostrarte esto'
      }
    ]
  },
  {
    verb: 'lose',
    forms: {
      base: {
        value: 'lose',
        type: 'base',
        translation: 'perder',
        stats: { ...s }
      },
      present: {
        value: 'loses',
        type: 'present',
        translation: 'pierde',
        stats: { ...s }
      },
      past: {
        value: 'lost',
        type: 'past',
        translation: 'perdió',
        stats: { ...s }
      },
      participle: {
        value: 'lost',
        type: 'participle',
        translation: 'perdido',
        stats: { ...s }
      },
      ing: {
        value: 'losing',
        type: 'ing',
        translation: 'perdiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to lose',
        type: 'infinitive',
        translation: 'perder',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my keys often',
        translation: 'Pierdo mis llaves a menudo'
      },
      {
        type: 'present',
        sentence: 'She ---- hope sometimes',
        translation: 'Ella pierde la esperanza a veces'
      },
      {
        type: 'past',
        sentence: 'I ---- the game',
        translation: 'Perdí el juego'
      },
      {
        type: 'participle',
        sentence: 'I have ---- my way',
        translation: 'Me he perdido'
      },
      {
        type: 'ing',
        sentence: 'I am ---- weight',
        translation: 'Estoy perdiendo peso'
      },
      {
        type: 'infinitive',
        sentence: 'I hate ---- time',
        translation: 'Odio perder el tiempo'
      }
    ]
  },
  {
    verb: 'pay',
    forms: {
      base: {
        value: 'pay',
        type: 'base',
        translation: 'pagar',
        stats: { ...s }
      },
      present: {
        value: 'pays',
        type: 'present',
        translation: 'paga',
        stats: { ...s }
      },
      past: {
        value: 'paid',
        type: 'past',
        translation: 'pagó',
        stats: { ...s }
      },
      participle: {
        value: 'paid',
        type: 'participle',
        translation: 'pagado',
        stats: { ...s }
      },
      ing: {
        value: 'paying',
        type: 'ing',
        translation: 'pagando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to pay',
        type: 'infinitive',
        translation: 'pagar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- the bill',
        translation: 'Pago la cuenta'
      },
      {
        type: 'present',
        sentence: 'She ---- attention in class',
        translation: 'Ella presta atención en clase'
      },
      {
        type: 'past',
        sentence: 'I ---- in cash',
        translation: 'Pagué en efectivo'
      },
      {
        type: 'participle',
        sentence: 'I have ---- already',
        translation: 'Ya he pagado'
      },
      {
        type: 'ing',
        sentence: 'I am ---- by card',
        translation: 'Estoy pagando con tarjeta'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- the rent',
        translation: 'Necesito pagar el alquiler'
      }
    ]
  },
  {
    verb: 'meet',
    forms: {
      base: {
        value: 'meet',
        type: 'base',
        translation: 'conocer',
        stats: { ...s }
      },
      present: {
        value: 'meets',
        type: 'present',
        translation: 'conoce',
        stats: { ...s }
      },
      past: {
        value: 'met',
        type: 'past',
        translation: 'conoció',
        stats: { ...s }
      },
      participle: {
        value: 'met',
        type: 'participle',
        translation: 'conocido',
        stats: { ...s }
      },
      ing: {
        value: 'meeting',
        type: 'ing',
        translation: 'conociendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to meet',
        type: 'infinitive',
        translation: 'conocer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- new people easily',
        translation: 'Conozco gente nueva fácilmente'
      },
      {
        type: 'present',
        sentence: 'She ---- clients every day',
        translation: 'Ella se reúne con clientes cada día'
      },
      {
        type: 'past',
        sentence: 'I ---- him at a party',
        translation: 'Lo conocí en una fiesta'
      },
      {
        type: 'participle',
        sentence: 'I have ---- her before',
        translation: 'La he conocido antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- you tomorrow',
        translation: 'Me reuniré contigo mañana'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- your family',
        translation: 'Quiero conocer a tu familia'
      }
    ]
  },
  {
    verb: 'learn',
    forms: {
      base: {
        value: 'learn',
        type: 'base',
        translation: 'aprender',
        stats: { ...s }
      },
      present: {
        value: 'learns',
        type: 'present',
        translation: 'aprende',
        stats: { ...s }
      },
      past: {
        value: 'learned',
        type: 'past',
        translation: 'aprendió',
        stats: { ...s }
      },
      participle: {
        value: 'learned',
        type: 'participle',
        translation: 'aprendido',
        stats: { ...s }
      },
      ing: {
        value: 'learning',
        type: 'ing',
        translation: 'aprendiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to learn',
        type: 'infinitive',
        translation: 'aprender',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- something new every day',
        translation: 'Aprendo algo nuevo cada día'
      },
      {
        type: 'present',
        sentence: 'She ---- very quickly',
        translation: 'Ella aprende muy rápido'
      },
      {
        type: 'past',
        sentence: 'I ---- from my mistakes',
        translation: 'Aprendí de mis errores'
      },
      {
        type: 'participle',
        sentence: 'I have ---- a lot',
        translation: 'He aprendido mucho'
      },
      {
        type: 'ing',
        sentence: 'I am ---- English',
        translation: 'Estoy aprendiendo inglés'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- to cook',
        translation: 'Quiero aprender a cocinar'
      }
    ]
  },
  {
    verb: 'change',
    forms: {
      base: {
        value: 'change',
        type: 'base',
        translation: 'cambiar',
        stats: { ...s }
      },
      present: {
        value: 'changes',
        type: 'present',
        translation: 'cambia',
        stats: { ...s }
      },
      past: {
        value: 'changed',
        type: 'past',
        translation: 'cambió',
        stats: { ...s }
      },
      participle: {
        value: 'changed',
        type: 'participle',
        translation: 'cambiado',
        stats: { ...s }
      },
      ing: {
        value: 'changing',
        type: 'ing',
        translation: 'cambiando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to change',
        type: 'infinitive',
        translation: 'cambiar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my mind often',
        translation: 'Cambio de opinión a menudo'
      },
      {
        type: 'present',
        sentence: 'Everything ---- with time',
        translation: 'Todo cambia con el tiempo'
      },
      {
        type: 'past',
        sentence: 'I ---- my job last year',
        translation: 'Cambié de trabajo el año pasado'
      },
      {
        type: 'participle',
        sentence: 'I have ---- a lot',
        translation: 'He cambiado mucho'
      },
      {
        type: 'ing',
        sentence: 'I am ---- my habits',
        translation: 'Estoy cambiando mis hábitos'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- my approach',
        translation: 'Necesito cambiar mi enfoque'
      }
    ]
  },
  {
    verb: 'understand',
    forms: {
      base: {
        value: 'understand',
        type: 'base',
        translation: 'entender',
        stats: { ...s }
      },
      present: {
        value: 'understands',
        type: 'present',
        translation: 'entiende',
        stats: { ...s }
      },
      past: {
        value: 'understood',
        type: 'past',
        translation: 'entendió',
        stats: { ...s }
      },
      participle: {
        value: 'understood',
        type: 'participle',
        translation: 'entendido',
        stats: { ...s }
      },
      ing: {
        value: 'understanding',
        type: 'ing',
        translation: 'entendiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to understand',
        type: 'infinitive',
        translation: 'entender',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- the problem',
        translation: 'Entiendo el problema'
      },
      {
        type: 'present',
        sentence: 'She ---- me well',
        translation: 'Ella me entiende bien'
      },
      {
        type: 'past',
        sentence: 'I ---- everything',
        translation: 'Entendí todo'
      },
      {
        type: 'participle',
        sentence: 'I have ---- the rules',
        translation: 'He entendido las reglas'
      },
      {
        type: 'ing',
        sentence: 'I am ---- better now',
        translation: 'Estoy entendiendo mejor ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- you',
        translation: 'Quiero entenderte'
      }
    ]
  },
  {
    verb: 'watch',
    forms: {
      base: {
        value: 'watch',
        type: 'base',
        translation: 'ver',
        stats: { ...s }
      },
      present: {
        value: 'watches',
        type: 'present',
        translation: 've',
        stats: { ...s }
      },
      past: {
        value: 'watched',
        type: 'past',
        translation: 'vio',
        stats: { ...s }
      },
      participle: {
        value: 'watched',
        type: 'participle',
        translation: 'visto',
        stats: { ...s }
      },
      ing: {
        value: 'watching',
        type: 'ing',
        translation: 'viendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to watch',
        type: 'infinitive',
        translation: 'ver',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- movies on weekends',
        translation: 'Veo películas los fines de semana'
      },
      {
        type: 'present',
        sentence: 'She ---- TV every night',
        translation: 'Ella ve la tele cada noche'
      },
      {
        type: 'past',
        sentence: 'I ---- a great film',
        translation: 'Vi una gran película'
      },
      {
        type: 'participle',
        sentence: 'I have ---- that series',
        translation: 'He visto esa serie'
      },
      {
        type: 'ing',
        sentence: 'I am ---- you',
        translation: 'Te estoy observando'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- something fun',
        translation: 'Quiero ver algo divertido'
      }
    ]
  },
  {
    verb: 'stop',
    forms: {
      base: {
        value: 'stop',
        type: 'base',
        translation: 'parar',
        stats: { ...s }
      },
      present: {
        value: 'stops',
        type: 'present',
        translation: 'para',
        stats: { ...s }
      },
      past: {
        value: 'stopped',
        type: 'past',
        translation: 'paró',
        stats: { ...s }
      },
      participle: {
        value: 'stopped',
        type: 'participle',
        translation: 'parado',
        stats: { ...s }
      },
      ing: {
        value: 'stopping',
        type: 'ing',
        translation: 'parando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to stop',
        type: 'infinitive',
        translation: 'parar',
        stats: { ...s }
      }
    },
    examples: [
      { type: 'base', sentence: 'I ---- here', translation: 'Me paro aquí' },
      {
        type: 'present',
        sentence: 'The bus ---- at noon',
        translation: 'El autobús para al mediodía'
      },
      {
        type: 'past',
        sentence: 'I ---- eating sugar',
        translation: 'Dejé de comer azúcar'
      },
      {
        type: 'participle',
        sentence: 'I have ---- smoking',
        translation: 'He dejado de fumar'
      },
      {
        type: 'ing',
        sentence: 'I am ---- now',
        translation: 'Estoy parando ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- worrying',
        translation: 'Necesito dejar de preocuparme'
      }
    ]
  },
  {
    verb: 'help',
    forms: {
      base: {
        value: 'help',
        type: 'base',
        translation: 'ayudar',
        stats: { ...s }
      },
      present: {
        value: 'helps',
        type: 'present',
        translation: 'ayuda',
        stats: { ...s }
      },
      past: {
        value: 'helped',
        type: 'past',
        translation: 'ayudó',
        stats: { ...s }
      },
      participle: {
        value: 'helped',
        type: 'participle',
        translation: 'ayudado',
        stats: { ...s }
      },
      ing: {
        value: 'helping',
        type: 'ing',
        translation: 'ayudando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to help',
        type: 'infinitive',
        translation: 'ayudar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my friends',
        translation: 'Ayudo a mis amigos'
      },
      {
        type: 'present',
        sentence: 'She ---- others every day',
        translation: 'Ella ayuda a otros cada día'
      },
      {
        type: 'past',
        sentence: 'I ---- him move',
        translation: 'Lo ayudé a mudarse'
      },
      {
        type: 'participle',
        sentence: 'I have ---- before',
        translation: 'He ayudado antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- you now',
        translation: 'Te estoy ayudando ahora'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- as much as possible',
        translation: 'Quiero ayudar lo más posible'
      }
    ]
  },
  {
    verb: 'start',
    forms: {
      base: {
        value: 'start',
        type: 'base',
        translation: 'empezar',
        stats: { ...s }
      },
      present: {
        value: 'starts',
        type: 'present',
        translation: 'empieza',
        stats: { ...s }
      },
      past: {
        value: 'started',
        type: 'past',
        translation: 'empezó',
        stats: { ...s }
      },
      participle: {
        value: 'started',
        type: 'participle',
        translation: 'empezado',
        stats: { ...s }
      },
      ing: {
        value: 'starting',
        type: 'ing',
        translation: 'empezando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to start',
        type: 'infinitive',
        translation: 'empezar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- work at nine',
        translation: 'Empiezo a trabajar a las nueve'
      },
      {
        type: 'present',
        sentence: 'The class ---- at eight',
        translation: 'La clase empieza a las ocho'
      },
      {
        type: 'past',
        sentence: 'I ---- a new hobby',
        translation: 'Empecé un nuevo pasatiempo'
      },
      {
        type: 'participle',
        sentence: 'I have ---- already',
        translation: 'Ya he empezado'
      },
      {
        type: 'ing',
        sentence: 'I am ---- over',
        translation: 'Estoy empezando de nuevo'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- now',
        translation: 'Necesito empezar ahora'
      }
    ]
  },
  {
    verb: 'sleep',
    forms: {
      base: {
        value: 'sleep',
        type: 'base',
        translation: 'dormir',
        stats: { ...s }
      },
      present: {
        value: 'sleeps',
        type: 'present',
        translation: 'duerme',
        stats: { ...s }
      },
      past: {
        value: 'slept',
        type: 'past',
        translation: 'durmió',
        stats: { ...s }
      },
      participle: {
        value: 'slept',
        type: 'participle',
        translation: 'dormido',
        stats: { ...s }
      },
      ing: {
        value: 'sleeping',
        type: 'ing',
        translation: 'durmiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to sleep',
        type: 'infinitive',
        translation: 'dormir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- eight hours a night',
        translation: 'Duermo ocho horas por noche'
      },
      {
        type: 'present',
        sentence: 'She ---- very well',
        translation: 'Ella duerme muy bien'
      },
      {
        type: 'past',
        sentence: 'I ---- late today',
        translation: 'Dormí hasta tarde hoy'
      },
      {
        type: 'participle',
        sentence: 'I have ---- all morning',
        translation: 'He dormido toda la mañana'
      },
      {
        type: 'ing',
        sentence: 'I am ---- early tonight',
        translation: 'Me iré a dormir temprano esta noche'
      },
      {
        type: 'infinitive',
        sentence: 'I need ---- more',
        translation: 'Necesito dormir más'
      }
    ]
  },
  {
    verb: 'buy',
    forms: {
      base: {
        value: 'buy',
        type: 'base',
        translation: 'comprar',
        stats: { ...s }
      },
      present: {
        value: 'buys',
        type: 'present',
        translation: 'compra',
        stats: { ...s }
      },
      past: {
        value: 'bought',
        type: 'past',
        translation: 'compró',
        stats: { ...s }
      },
      participle: {
        value: 'bought',
        type: 'participle',
        translation: 'comprado',
        stats: { ...s }
      },
      ing: {
        value: 'buying',
        type: 'ing',
        translation: 'comprando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to buy',
        type: 'infinitive',
        translation: 'comprar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- groceries on Sundays',
        translation: 'Compro víveres los domingos'
      },
      {
        type: 'present',
        sentence: 'She ---- everything online',
        translation: 'Ella compra todo en línea'
      },
      {
        type: 'past',
        sentence: 'I ---- a new phone',
        translation: 'Compré un teléfono nuevo'
      },
      {
        type: 'participle',
        sentence: 'I have ---- too much',
        translation: 'He comprado demasiado'
      },
      {
        type: 'ing',
        sentence: 'I am ---- a gift for her',
        translation: 'Estoy comprando un regalo para ella'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- a house',
        translation: 'Quiero comprar una casa'
      }
    ]
  },
  {
    verb: 'build',
    forms: {
      base: {
        value: 'build',
        type: 'base',
        translation: 'construir',
        stats: { ...s }
      },
      present: {
        value: 'builds',
        type: 'present',
        translation: 'construye',
        stats: { ...s }
      },
      past: {
        value: 'built',
        type: 'past',
        translation: 'construyó',
        stats: { ...s }
      },
      participle: {
        value: 'built',
        type: 'participle',
        translation: 'construido',
        stats: { ...s }
      },
      ing: {
        value: 'building',
        type: 'ing',
        translation: 'construyendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to build',
        type: 'infinitive',
        translation: 'construir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- things with my hands',
        translation: 'Construyo cosas con mis manos'
      },
      {
        type: 'present',
        sentence: 'She ---- websites',
        translation: 'Ella construye sitios web'
      },
      {
        type: 'past',
        sentence: 'I ---- a table',
        translation: 'Construí una mesa'
      },
      {
        type: 'participle',
        sentence: 'I have ---- a strong team',
        translation: 'He construido un equipo sólido'
      },
      {
        type: 'ing',
        sentence: 'I am ---- my future',
        translation: 'Estoy construyendo mi futuro'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- something great',
        translation: 'Quiero construir algo grandioso'
      }
    ]
  },
  {
    verb: 'walk',
    forms: {
      base: {
        value: 'walk',
        type: 'base',
        translation: 'caminar',
        stats: { ...s }
      },
      present: {
        value: 'walks',
        type: 'present',
        translation: 'camina',
        stats: { ...s }
      },
      past: {
        value: 'walked',
        type: 'past',
        translation: 'caminó',
        stats: { ...s }
      },
      participle: {
        value: 'walked',
        type: 'participle',
        translation: 'caminado',
        stats: { ...s }
      },
      ing: {
        value: 'walking',
        type: 'ing',
        translation: 'caminando',
        stats: { ...s }
      },
      infinitive: {
        value: 'to walk',
        type: 'infinitive',
        translation: 'caminar',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- to work every day',
        translation: 'Camino al trabajo cada día'
      },
      {
        type: 'present',
        sentence: 'She ---- her dog at night',
        translation: 'Ella pasea a su perro por la noche'
      },
      {
        type: 'past',
        sentence: 'I ---- for an hour',
        translation: 'Caminé durante una hora'
      },
      {
        type: 'participle',
        sentence: 'I have ---- this path before',
        translation: 'He caminado por este camino antes'
      },
      {
        type: 'ing',
        sentence: 'I am ---- home',
        translation: 'Estoy caminando a casa'
      },
      {
        type: 'infinitive',
        sentence: 'I prefer ---- over driving',
        translation: 'Prefiero caminar en lugar de manejar'
      }
    ]
  },
  {
    verb: 'fall',
    forms: {
      base: {
        value: 'fall',
        type: 'base',
        translation: 'caer',
        stats: { ...s }
      },
      present: {
        value: 'falls',
        type: 'present',
        translation: 'cae',
        stats: { ...s }
      },
      past: {
        value: 'fell',
        type: 'past',
        translation: 'cayó',
        stats: { ...s }
      },
      participle: {
        value: 'fallen',
        type: 'participle',
        translation: 'caído',
        stats: { ...s }
      },
      ing: {
        value: 'falling',
        type: 'ing',
        translation: 'cayendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to fall',
        type: 'infinitive',
        translation: 'caer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- asleep quickly',
        translation: 'Me quedo dormido rápido'
      },
      {
        type: 'present',
        sentence: 'The rain ---- hard',
        translation: 'La lluvia cae fuerte'
      },
      {
        type: 'past',
        sentence: 'I ---- off my bike',
        translation: 'Me caí de la bicicleta'
      },
      {
        type: 'participle',
        sentence: 'I have ---- in love',
        translation: 'Me he enamorado'
      },
      {
        type: 'ing',
        sentence: 'I am ---- behind',
        translation: 'Me estoy quedando atrás'
      },
      {
        type: 'infinitive',
        sentence: 'I do not want ---- again',
        translation: 'No quiero caer de nuevo'
      }
    ]
  },
  {
    verb: 'grow',
    forms: {
      base: {
        value: 'grow',
        type: 'base',
        translation: 'crecer',
        stats: { ...s }
      },
      present: {
        value: 'grows',
        type: 'present',
        translation: 'crece',
        stats: { ...s }
      },
      past: {
        value: 'grew',
        type: 'past',
        translation: 'creció',
        stats: { ...s }
      },
      participle: {
        value: 'grown',
        type: 'participle',
        translation: 'crecido',
        stats: { ...s }
      },
      ing: {
        value: 'growing',
        type: 'ing',
        translation: 'creciendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to grow',
        type: 'infinitive',
        translation: 'crecer',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- as a person',
        translation: 'Crezco como persona'
      },
      {
        type: 'present',
        sentence: 'She ---- her own food',
        translation: 'Ella cultiva su propia comida'
      },
      {
        type: 'past',
        sentence: 'I ---- up in a small town',
        translation: 'Crecí en un pueblo pequeño'
      },
      {
        type: 'participle',
        sentence: 'I have ---- so much',
        translation: 'He crecido mucho'
      },
      {
        type: 'ing',
        sentence: 'I am ---- stronger',
        translation: 'Estoy creciendo más fuerte'
      },
      {
        type: 'infinitive',
        sentence: 'I want ---- every day',
        translation: 'Quiero crecer cada día'
      }
    ]
  },
  {
    verb: 'choose',
    forms: {
      base: {
        value: 'choose',
        type: 'base',
        translation: 'elegir',
        stats: { ...s }
      },
      present: {
        value: 'chooses',
        type: 'present',
        translation: 'elige',
        stats: { ...s }
      },
      past: {
        value: 'chose',
        type: 'past',
        translation: 'eligió',
        stats: { ...s }
      },
      participle: {
        value: 'chosen',
        type: 'participle',
        translation: 'elegido',
        stats: { ...s }
      },
      ing: {
        value: 'choosing',
        type: 'ing',
        translation: 'eligiendo',
        stats: { ...s }
      },
      infinitive: {
        value: 'to choose',
        type: 'infinitive',
        translation: 'elegir',
        stats: { ...s }
      }
    },
    examples: [
      {
        type: 'base',
        sentence: 'I ---- my own path',
        translation: 'Elijo mi propio camino'
      },
      {
        type: 'present',
        sentence: 'She ---- carefully',
        translation: 'Ella elige con cuidado'
      },
      {
        type: 'past',
        sentence: 'I ---- the wrong option',
        translation: 'Elegí la opción incorrecta'
      },
      {
        type: 'participle',
        sentence: 'I have ---- already',
        translation: 'Ya he elegido'
      },
      {
        type: 'ing',
        sentence: 'I am ---- between two jobs',
        translation: 'Estoy eligiendo entre dos trabajos'
      },
      {
        type: 'infinitive',
        sentence: 'I get ---- what I want',
        translation: 'Puedo elegir lo que quiero'
      }
    ]
  }
];
