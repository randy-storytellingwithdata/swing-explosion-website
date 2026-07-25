export default function ArtDecoSunburst({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 16 });

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(200,200)">
        {rays.map((_, i) => {
          const angle = (i * 360) / rays.length;
          return (
            <rect
              key={i}
              x={-3}
              y={-200}
              width={6}
              height={90}
              fill="currentColor"
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle r={70} fill="none" stroke="currentColor" strokeWidth={2} />
        <circle r={90} fill="none" stroke="currentColor" strokeWidth={1} />
      </g>
    </svg>
  );
}
