export default function CelebrationMotif({
  className = "",
  id = "celebration-motif",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      width="100%"
      height="100%"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={id}
          width="220"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          {/* eighth note */}
          <g fill="currentColor" transform="translate(10, 12)">
            <ellipse cx="8" cy="32" rx="8" ry="6" transform="rotate(-16 8 32)" />
            <rect x="15" y="2" width="3" height="31" />
            <path d="M18 2 C 30 6 32 17 21 22 C 25 15 20 9 18 2 Z" />
          </g>

          {/* clinking champagne coupes */}
          <g fill="currentColor" transform="translate(60, 10)">
            <path d="M0 0 L14 0 C 14 9 10 13 7 13 C 4 13 0 9 0 0 Z" />
            <rect x="5.5" y="13" width="3" height="18" />
            <ellipse cx="7" cy="33" rx="7" ry="2" />

            <g transform="rotate(24 32 8)">
              <path d="M25 0 L39 0 C 39 9 35 13 32 13 C 29 13 25 9 25 0 Z" />
              <rect x="30.5" y="13" width="3" height="18" />
              <ellipse cx="32" cy="33" rx="7" ry="2" />
            </g>
          </g>

          {/* bow tie */}
          <g fill="currentColor" transform="translate(112, 20)">
            <path d="M0 0 L20 9 L0 18 Z" />
            <path d="M50 0 L30 9 L50 18 Z" />
            <rect x="19" y="4.5" width="12" height="9" rx="2" />
          </g>

          {/* saxophone */}
          <g transform="translate(172, 4)">
            <path
              d="M9 0 C 6 12 6 24 11 32 C 16 40 24 38 27 46"
              fill="none"
              stroke="currentColor"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <ellipse
              cx="29"
              cy="50"
              rx="9.5"
              ry="10.5"
              fill="currentColor"
              transform="rotate(24 29 50)"
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
