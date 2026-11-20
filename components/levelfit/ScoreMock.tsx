/** Ilustração do placar do duelo, no estilo da tela "Hoje" do app. Decorativa. */
export function ScoreMock() {
  const red = 86;
  const blue = 64;
  const share = Math.round((red / (red + blue)) * 100);
  const habits = [
    { emoji: '🏋️', title: 'Treino de 30 min', pts: 25, done: true },
    { emoji: '💧', title: 'Beber 2L de água', pts: 10, done: true },
    { emoji: '📚', title: 'Ler 10 páginas', pts: 15, done: false },
  ];
  return (
    <div className="phone" aria-hidden>
      <div className="phone-screen">
        <p className="phone-kicker">Hoje · Round 12</p>
        <div className="vs-row">
          <div className="fighter red">
            <span className="avatar">🦊</span>
            <b>Ana</b>
            <span className="pts">{red}</span>
          </div>
          <span className="vs">VS</span>
          <div className="fighter blue">
            <span className="avatar">🐼</span>
            <b>Léo</b>
            <span className="pts">{blue}</span>
          </div>
        </div>
        <div className="vs-bar">
          <span style={{ width: `${share}%` }} />
        </div>
        <p className="combo">🔥 Combo de 7 dias · ×1.25</p>
        <ul className="mock-habits">
          {habits.map((h) => (
            <li key={h.title} className={h.done ? 'done' : ''}>
              <span>{h.emoji}</span>
              <span className="h-title">{h.title}</span>
              <span className="h-pts">{h.done ? '✓' : `+${h.pts}`}</span>
            </li>
          ))}
        </ul>
        <p className="challenge">⚡ Desafio do dia: Alongamento ×2</p>
      </div>
    </div>
  );
}
