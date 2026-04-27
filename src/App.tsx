import './App.css';
import { useState, useEffect } from 'react';
import { verbs as initialVerbs } from './data/verbs';
import type { Verb } from './types/type-verbs';
import { Card } from './components/Card';
import { Progress } from './components/Progress';

const STORAGE_KEY = 'oldtown-verbs';
const DAILY_KEY = 'oldtown-daily';

interface DailyData {
  date: string;
  count: number;
  goal: number;
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function loadDaily(): DailyData {
  try {
    const saved = localStorage.getItem(DAILY_KEY);
    if (saved) {
      const data = JSON.parse(saved) as DailyData;
      if (data.date === todayStr()) return data;
      return { date: todayStr(), count: 0, goal: data.goal };
    }
  } catch {
    console.log(
      'Failed to load daily data from localStorage, using initial data.'
    );
  }
  return { date: todayStr(), count: 0, goal: 10 };
}

function loadVerbs(): Verb[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as Verb[];
  } catch {
    console.log('Failed to load verbs from localStorage, using initial data.');
  }
  return initialVerbs;
}

type FormKey = keyof Verb['forms'];
const TENSES: FormKey[] = [
  'base',
  'present',
  'past',
  'participle',
  'ing',
  'infinitive'
];

interface Current {
  verbIndex: number;
  tense: FormKey;
}

function getNext(verbs: Verb[], recentShown: string[]): Current {
  const all = verbs.flatMap((verb, verbIndex) =>
    TENSES.map((tense) => ({
      verbIndex,
      tense,
      score: verb.forms[tense].stats.score,
      key: `${verbIndex}:${tense}`
    }))
  );

  const candidates = all
    .filter((item) => !recentShown.includes(item.key))
    .sort((a, b) => a.score - b.score);

  const pool =
    candidates.length > 0
      ? candidates
      : [...all].sort((a, b) => a.score - b.score);

  const minScore = pool[0].score;
  const lowestGroup = pool.filter((c) => c.score === minScore);
  const picked = lowestGroup[Math.floor(Math.random() * lowestGroup.length)];
  return { verbIndex: picked.verbIndex, tense: picked.tense };
}

function App() {
  const [verbs, setVerbs] = useState<Verb[]>(loadVerbs);
  const [current, setCurrent] = useState<Current>(() =>
    getNext(loadVerbs(), [])
  );
  const [recentShown, setRecentShown] = useState<string[]>([]);
  const [round, setRound] = useState(0);
  const [toast, setToast] = useState<{
    correct: boolean;
    answer: string;
  } | null>(null);
  const [daily, setDaily] = useState<DailyData>(loadDaily);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(verbs));
  }, [verbs]);

  useEffect(() => {
    localStorage.setItem(DAILY_KEY, JSON.stringify(daily));
  }, [daily]);

  function handleAnswer(correct: boolean, correctAnswer: string) {
    setVerbs((prev) =>
      prev.map((v, i) =>
        i !== current.verbIndex
          ? v
          : {
              ...v,
              forms: {
                ...v.forms,
                [current.tense]: {
                  ...v.forms[current.tense],
                  stats: {
                    score:
                      v.forms[current.tense].stats.score + (correct ? 1 : -1),
                    correct:
                      v.forms[current.tense].stats.correct + (correct ? 1 : 0),
                    incorrect:
                      v.forms[current.tense].stats.incorrect +
                      (correct ? 0 : 1),
                    attempts: v.forms[current.tense].stats.attempts + 1
                  }
                }
              }
            }
      )
    );
    setToast({ correct, answer: correctAnswer });
    setDaily((d) => ({ ...d, count: d.count + 1 }));
  }

  function handleNext() {
    setToast(null);
    const currentKey = `${current.verbIndex}:${current.tense}`;
    const newRecent = [...recentShown.slice(-1), currentKey];
    setRecentShown(newRecent);
    setCurrent(getNext(verbs, newRecent));
    setRound((r) => r + 1);
  }

  return (
    <div className="flex justify-center p-4">
      {toast && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-3 py-1 rounded-full text-[14px]  whitespace-nowrap"
          style={{
            background: toast.correct
              ? 'rgba(52,199,89,0.15)'
              : 'rgba(255,59,48,0.12)',
            color: toast.correct ? '#34C759' : '#FF3B30'
          }}
        >
          {toast.correct ? 'Correct!' : `${toast.answer}`}
        </div>
      )}
      <div className="w-full px-8 mt-15">
        <Progress
          count={daily.count}
          goal={daily.goal}
          onGoalChange={(goal) => setDaily((d) => ({ ...d, goal }))}
        />
        <Card
          key={round}
          verb={verbs[current.verbIndex]}
          tense={current.tense}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

export default App;
