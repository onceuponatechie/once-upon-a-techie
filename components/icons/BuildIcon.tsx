export default function BuildIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wrench-grad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e9d5ff" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="wrench-shadow" x1="24" y1="40" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A1A" stopOpacity="0.12" />
          <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="44" rx="14" ry="3" fill="url(#wrench-shadow)" />
      <path d="M34 10C30.5 6.5 25 6.5 21.5 10L14 17.5L30.5 34L38 26.5C41.5 23 41.5 17.5 38 14L34 10Z" fill="url(#wrench-grad)" />
      <path d="M14 17.5L10 34L17.5 30.5L14 17.5Z" fill="#7c3aed" />
      <path d="M26 14L34 22" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <rect x="11" y="32" width="5" height="5" rx="1" transform="rotate(-45 11 32)" fill="#5b21b6" />
    </svg>
  );
}
