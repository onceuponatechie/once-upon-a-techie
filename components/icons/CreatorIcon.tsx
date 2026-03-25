export default function CreatorIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bulb-grad" x1="16" y1="6" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d5ffd8" />
          <stop offset="1" stopColor="#86efac" />
        </linearGradient>
        <linearGradient id="bulb-shadow" x1="24" y1="40" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A1A" stopOpacity="0.12" />
          <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="44" rx="12" ry="2.5" fill="url(#bulb-shadow)" />
      <circle cx="24" cy="18" r="12" fill="url(#bulb-grad)" />
      <circle cx="24" cy="18" r="6" fill="white" opacity="0.4" />
      <rect x="20" y="30" width="8" height="8" rx="2" fill="#22c55e" />
      <rect x="21" y="32" width="6" height="1.5" rx="0.5" fill="white" opacity="0.3" />
      <rect x="21" y="35" width="6" height="1.5" rx="0.5" fill="white" opacity="0.3" />
      <path d="M20 30L18 24" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M28 30L30 24" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
