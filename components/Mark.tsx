type Props = {
  size?: number;
  /** "light" para fundo claro, "dark" para fundo escuro (roxo mais claro). */
  tone?: "light" | "dark";
  className?: string;
  title?: string;
};

/** Símbolo <!> da SideQuest Studio. O "!" usa currentColor. */
export function Mark({ size = 40, tone = "light", className, title }: Props) {
  const route = tone === "dark" ? "#A984FF" : "#7A3CF0";
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <polyline points="22,17 9,32 22,47" fill="none" stroke="#1FCB7E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="42,17 55,32 42,47" fill="none" stroke={route} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <g className="mark-bang" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M28.5 12 H35.5 L34.3 36 H29.7 Z" />
        <path d="M32 41 L36.5 45.5 L32 50 L27.5 45.5 Z" />
      </g>
    </svg>
  );
}

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className={`wordmark wordmark--${tone}`}>
      <Mark size={34} tone={tone} />
      <span className="wordmark__text">
        <span className="wordmark__name">
          Side<span className="wordmark__q">Quest</span>
        </span>
        <span className="wordmark__studio">STUDIO</span>
      </span>
    </span>
  );
}
