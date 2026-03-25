export default function StorytellingIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pen-grad" x1="10" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="pen-shadow" x1="24" y1="40" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A1A" stopOpacity="0.12" />
          <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="44" rx="14" ry="3" fill="url(#pen-shadow)" />
      <rect x="20" y="8" width="8" height="28" rx="2" fill="url(#pen-grad)" />
      <path d="M20 36L24 44L28 36H20Z" fill="#E8703A" />
      <rect x="20" y="8" width="8" height="6" rx="1" fill="#1A1A1A" opacity="0.15" />
      <rect x="22" y="12" width="4" height="18" rx="1" fill="white" opacity="0.25" />
    </svg>
  );
}
