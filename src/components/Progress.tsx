const GOALS = [5, 10, 25, 50, 100];

interface ProgressProps {
  count: number;
  goal: number;
  onGoalChange: (goal: number) => void;
}

export function Progress({ count, goal, onGoalChange }: ProgressProps) {
  const pct = Math.min((count / goal) * 100, 100);
  const done = count >= goal;

  return (
    <div className="flex items-center w-full gap-3 mb-10">
      <div
        className="flex-1 h-[3px] rounded-full overflow-hidden"
        style={{ background: 'rgba(0,0,0,0.08)' }}
      >
        <div
          className="h-full transition-all duration-500 rounded-full"
          style={{
            width: `${pct}%`,
            background: done ? '#34C759' : '#000000'
          }}
        />
      </div>

      <div className="relative flex items-center gap-1 cursor-pointer">
        <span
          className="text-[13px] font-light leading-none pointer-events-none"
          style={{ color: done ? '#34C759' : 'rgba(0,0,0)' }}
        >
          {goal}
        </span>
        <svg
          width="8"
          height="4"
          viewBox="0 0 8 4"
          fill="none"
          className="mt-[3px] pointer-events-none"
          style={{ color: done ? '#34C759' : 'rgba(0,0,0)' }}
        >
          <path
            d="M1 1l3 2 3-2"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <select
          value={goal}
          onChange={(e) => onGoalChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          {GOALS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
