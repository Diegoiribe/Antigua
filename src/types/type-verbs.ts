type VerbTense =
  | 'base'
  | 'present'
  | 'past'
  | 'participle'
  | 'ing'
  | 'infinitive';

interface VerbForm {
  value: string;
  type: VerbTense;
  translation: string;
  stats: VerbStats;
}

interface VerbExample {
  type: VerbTense;
  sentence: string;
  translation: string;
}

interface VerbStats {
  score: number; // +1 correcto, -1 incorrecto
  correct: number;
  incorrect: number;
  attempts: number;
}

export interface Verb {
  verb: string;

  forms: {
    base: VerbForm;
    present: VerbForm;
    past: VerbForm;
    participle: VerbForm;
    ing: VerbForm;
    infinitive: VerbForm;
  };

  examples: VerbExample[];
}
