import Image from 'next/image';
import Link from 'next/link';

import { RichText } from '@/components/levelfit/RichText';
import { ScoreMock } from '@/components/levelfit/ScoreMock';
import { StoreButtons } from '@/components/levelfit/StoreButtons';
import { FAQ, FEATURES, HABITS, PACKS, PLANS, RANKS, SCORING, STEPS } from '@/content/levelfit/app';
import { SUMMARY } from '@/content/levelfit/privacySummary';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="baixar">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker kicker-light">Duelo de hábitos saudáveis</p>
            <h1>
              LEVEL <span>FIT</span>
            </h1>
            <p className="lead">
              Hábitos saudáveis viram uma luta. Desafie um amigo, poste a prova e ganhe o cinturão do dia, da semana e
              do mês.
            </p>
            <StoreButtons />
          </div>
          <div className="hero-art">
            <Image
              className="mascot"
              src="/apps/levelfit-brasa.png"
              alt="Brasa, o mascote do Level Fit: um lutador de fogo com luvas de boxe e cinturão de campeão"
              width={260}
              height={260}
              priority
            />
            <ScoreMock />
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="band">
        <div className="wrap">
          <p className="kicker">O app</p>
          <h2>Cada dia é um round</h2>
          <p className="sub">
            Você e seu rival escolhem as metas. Cada hábito cumprido vale pontos, mas só com prova. No fim do dia, da
            semana e do mês, quem somar mais leva a vitória.
          </p>
          <div className="grid-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="card feature">
                <div className="icon" aria-hidden>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metas */}
      <section id="metas" className="band band-canvas">
        <div className="wrap">
          <p className="kicker">Metas</p>
          <h2>15 hábitos, um placar</h2>
          <p className="sub">Cada hábito tem seu peso. Comece com um pacote pronto ou monte o seu.</p>
          <div className="packs">
            {PACKS.map((p) => (
              <div key={p.title} className="pack">
                <span className="pack-emoji" aria-hidden>
                  {p.emoji}
                </span>
                <div>
                  <b>{p.title}</b>
                  <span>{p.text}</span>
                </div>
              </div>
            ))}
          </div>
          <ul className="habit-chips">
            {HABITS.map((h) => (
              <li key={h.title}>
                <span aria-hidden>{h.emoji}</span> {h.title} <b>+{h.points}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="band">
        <div className="wrap split">
          <div>
            <p className="kicker">Como funciona</p>
            <h2>Do gongo ao cinturão</h2>
            <p className="sub">Em menos de um minuto você está no ringue.</p>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.title}>
                  <div>
                    <b>{s.title}</b>
                    {s.text}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="card night">
            <h3>Pontuação</h3>
            <ul className="score-list">
              {SCORING.map((s) => (
                <li key={s.label}>
                  <span className="score-val">{s.value}</span>
                  {s.label}
                </li>
              ))}
            </ul>
            <h3>Suba de nível</h3>
            <p className="ranks-intro">Cada ponto vira XP. Do primeiro check-in ao topo do ringue:</p>
            <ol className="ranks">
              {RANKS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
            <p className="ranks-intro">E 15 conquistas para desbloquear, de “Madrugador” a “Rei do mês”.</p>
          </div>
        </div>
      </section>

      {/* Privacidade */}
      <section id="privacidade" className="band band-canvas">
        <div className="wrap">
          <p className="kicker">Privacidade</p>
          <h2>Seus dados ficam no seu canto</h2>
          <div className="grid-4">
            {SUMMARY.map((s) => (
              <div key={s.text} className="card privacy-card">
                <span className="icon" aria-hidden>
                  {s.icon}
                </span>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="actions actions-top">
            <Link className="btn alt" href="/apps/levelfit/privacidade">
              Ler a política de privacidade
            </Link>
            <Link className="text-link" href="/apps/levelfit/excluir-conta">
              Como excluir minha conta →
            </Link>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="band">
        <div className="wrap">
          <p className="kicker">Planos</p>
          <h2>Grátis para lutar, Premium para dominar</h2>
          <p className="sub">O Level Fit é gratuito. O Premium libera duelos ilimitados ao mesmo tempo.</p>
          <div className="plans">
            <div className="card">
              <h3>Grátis</h3>
              <ul className="checks">
                {PLANS.free.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="card pro">
              <span className="badge">Level Fit Pro</span>
              <h3>Premium 🏆</h3>
              <ul className="checks">
                {PLANS.pro.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section id="suporte" className="band band-canvas">
        <div className="wrap faq-wrap">
          <p className="kicker">Suporte</p>
          <h2>Perguntas rápidas</h2>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>
                  <RichText text={f.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta">
        <div className="wrap cta-inner">
          <h2>
            Quem topa o <span>duelo</span>?
          </h2>
          <p>Chame um amigo e comece hoje. O primeiro round é agora.</p>
          <StoreButtons align="center" />
        </div>
      </section>
    </>
  );
}
