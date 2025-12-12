export default function Icon({ name, className = "w-5 h-5" }) {
  switch (name) {
    case "calendar":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "clock":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 15" />
        </svg>
      );
    case "money":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "check":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    default:
      return null;
  }
}