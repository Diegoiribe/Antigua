import { useState, useEffect, useRef } from 'react';
import type { Verb } from '../types/type-verbs';

interface Props {
  verb: Verb;
  tense: keyof Verb['forms'];
  onAnswer: (correct: boolean, correctAnswer: string) => void;
  onNext: () => void;
}

export const Card = ({ verb, tense, onAnswer, onNext }: Props) => {
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!answered) return;
    const timer = setTimeout(onNext, 2000);
    return () => clearTimeout(timer);
  }, [answered, onNext]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (answered) {
      onNext();
      return;
    }
    if (!input.trim()) return;
    const isCorrect =
      input.trim().toLowerCase() === verb.forms[tense].value.toLowerCase();
    setAnswered(true);
    onAnswer(isCorrect, verb.forms[tense].value);
  }

  const form = verb.forms[tense];
  const example = verb.examples.find((ex) => ex.type === tense);

  const formScore = form.stats.score;
  const scoreColor =
    formScore > 0 ? '#34C759' : formScore < 0 ? '#FF3B30' : '#000000';
  const scoreLabel = formScore > 0 ? `+${formScore}` : `${formScore}`;

  return (
    <div className="overflow-hidden ">
      {/* Header */}
      <div className="flex items-center justify-between pt-5">
        <span className="text-[13px] uppercase tracking-widest text-black">
          {tense}
        </span>
        <span
          className="text-[13px] font-semibold tabular-nums"
          style={{ color: scoreColor }}
        >
          {scoreLabel}
        </span>
      </div>

      {/* Main word */}
      <div className="pb-1 text-center pt-7">
        <p className="pb-4 text-6xl font-bold text-center text-black capitalize">
          {form.translation}
        </p>
      </div>

      {/* Example */}
      {example && (
        <div className=" mt-4 mb-5 border border-neutral-200 bg-black rounded-2xl px-4 py-3.5">
          <p className="text-[14px] font-medium text-white leading-snug">
            {example.sentence}
          </p>
          <p className="text-[13px] text-neutral-300 mt-1 leading-snug">
            {example.translation}
          </p>
        </div>
      )}

      {/* Input + actions */}
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              const val = e.target.value;
              setInput(val.charAt(0).toUpperCase() + val.slice(1));
            }}
            disabled={answered}
            autoComplete="off"
            placeholder="Type your answer here..."
            spellCheck={false}
            className="w-full text-center text-[32px] px-5 placeholder:text-[15px] py-4 text-black outline-none disabled:opacity-40 transition-opacity placeholder:text-black focus:placeholder:opacity-0 font-light"
            style={{ caretColor: '#000000' }}
          />
          <div className="flex justify-end w-full">
            {!answered ? (
              <button
                type="submit"
                className=" text-white uppercase rounded-full py-2 px-5 text-[13px] font-semibold active:opacity-80 transition-opacity cursor-pointer"
                style={{ background: '#000000' }}
              >
                Check
              </button>
            ) : (
              <button
                type="submit"
                className="text-white uppercase rounded-full py-2 px-5 text-[13px] font-semibold active:opacity-80 bg-black cursor-pointer transition-opacity"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
