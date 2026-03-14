export default function GiftBox({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="10" width="18" height="11" rx="2" stroke="#E8703A" strokeWidth="1.5" />
      <rect x="1" y="6" width="22" height="5" rx="2" stroke="#E8703A" strokeWidth="1.5" />
      <path d="M12 6V21" stroke="#E8703A" strokeWidth="1.5" />
      <path d="M12 6C12 6 9 3 7 3C5 3 4 4.5 5 5.5C6 6.5 12 6 12 6Z" stroke="#E8703A" strokeWidth="1.5" fill="none" />
      <path d="M12 6C12 6 15 3 17 3C19 3 20 4.5 19 5.5C18 6.5 12 6 12 6Z" stroke="#E8703A" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
