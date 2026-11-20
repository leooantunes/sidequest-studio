import Image from "next/image";

function Phone({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`phone ${className ?? ""}`}>
      <div className="phone__notch" aria-hidden="true" />
      <div className="phone__screen">{children}</div>
    </div>
  );
}

const pets = [
  { name: "Mingau", left: "-4%", chips: ["2 anos", "SRD", "Aracaju"], about: "Calmo, adora colo e janela com sol." },
  { name: "Paçoca", left: "-92%", chips: ["Filhote", "Vira-lata", "Aracaju"], about: "Brincalhão, já sabe pedir a patinha." },
];

export function PetMatchPhone() {
  return (
    <Phone className="phone--pet">
      <div className="pm">
        <div className="pm__top">
          <span>Pets para adoção</span>
          <span className="pm__count">2 perto de você</span>
        </div>
        {pets.map((p) => (
          <article className="pm__card" key={p.name}>
            <div className="pm__photo">
              <Image src="/apps/petmatch-pixel.png" alt="" width={520} height={520} className="pm__img" style={{ left: p.left }} />
            </div>
            <div className="pm__body">
              <b>{p.name}</b>
              <div className="pm__chips">
                {p.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <p>{p.about}</p>
            </div>
          </article>
        ))}
        <div className="pm__tabs">
          <span className="is-on">Home</span>
          <span>Novo pet</span>
          <span>Perfil</span>
        </div>
      </div>
    </Phone>
  );
}

const habits = [
  { name: "Treino de 30 min", done: true },
  { name: "2L de água", done: true },
  { name: "Ler 10 páginas", done: false },
  { name: "Dormir 7h+", done: false },
];

export function LevelFitPhone() {
  return (
    <Phone className="phone--lf">
      <div className="lf">
        <div className="lf__top">
          <span className="lf__logo">LEVEL <em>FIT</em></span>
          <span className="lf__round">ROUND 12</span>
        </div>
        <div className="lf__vs">
          <div className="lf__players">
            <span><i>🦊</i> Leo <b>120</b></span>
            <span className="lf__badge">VS</span>
            <span><b>95</b> Rad <i>🐼</i></span>
          </div>
          <div className="lf__bar"><span style={{ width: "56%" }} /></div>
        </div>
        <div className="lf__label">SEUS GOLPES DE HOJE</div>
        {habits.map((h) => (
          <div className={`lf__habit ${h.done ? "is-done" : ""}`} key={h.name}>
            <span>{h.name}</span>
            <span className="lf__check">{h.done ? "✓" : "+"}</span>
          </div>
        ))}
        <div className="lf__habit lf__habit--bonus">
          <span>⚡ Desafio do dia: meditar</span>
          <span className="lf__x2">2x</span>
        </div>
        <div className="lf__brasa">
          <Image src="/apps/levelfit-brasa.png" alt="" width={72} height={72} />
          <span>Combo de 7 dias: pontos x1.25</span>
        </div>
      </div>
    </Phone>
  );
}
