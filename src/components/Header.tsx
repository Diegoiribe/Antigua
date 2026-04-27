interface HeaderProps {
  streak: number;
}

export const Header = ({ streak }: HeaderProps) => {
  return (
    <div className="w-full mb-6">
      <div className="flex items-center gap-1.5">
        <span className="text-[15px]">🔥</span>
        <span
          className="text-[15px] font-medium tabular-nums"
          style={{
            color: streak > 0 ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.25)'
          }}
        >
          {streak}
        </span>
      </div>
    </div>
  );
};
