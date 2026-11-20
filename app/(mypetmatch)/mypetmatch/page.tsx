import Image from "next/image";
import Link from "next/link";

import { PetMock, RichText, StoreButtons } from "@/components/mypetmatch/Site";
import { ADOPT_STEPS, AGES, DONATE_STEPS, FAQ, FEATURES, PRIVACY_SUMMARY } from "@/content/mypetmatch/app";

export default function MyPetMatchHome() {
  return (
    <>
      {/* Abertura */}
      <section className="pm-hero" id="baixar">
        <div className="pm-wrap pm-hero__grid">
          <div className="pm-hero__text">
            <p className="pm-kicker">Adoção de cães e gatos</p>
            <h1>
              Seu novo melhor amigo está <span>a uma conversa</span> de distância.
            </h1>
            <p className="pm-lead">
              O MyPetMatch conecta quem precisa doar um pet a quem quer adotar. Encontre um cachorro ou gato perto de
              você e fale direto com o tutor pelo WhatsApp.
            </p>
            <StoreButtons />
          </div>
          <div className="pm-hero__art">
            <div className="pm-sticker">
              <Image
                src="/apps/petmatch-pixel.png"
                alt="Ilustração em pixel art de um gato cinza e um cachorro caramelo, o símbolo do MyPetMatch"
                width={200}
                height={200}
                priority
              />
            </div>
            <PetMock />
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="pm-band">
        <div className="pm-wrap">
          <p className="pm-kicker">O app</p>
          <h2>Tudo para o match dar certo</h2>
          <p className="pm-sub">Simples para quem anuncia, seguro para quem adota.</p>
          <div className="pm-grid-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="pm-card">
                <span className="pm-card__icon" aria-hidden>
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="pm-band pm-band--white">
        <div className="pm-wrap">
          <p className="pm-kicker">Como funciona</p>
          <h2>Dois caminhos, o mesmo final feliz</h2>
          <div className="pm-paths">
            <div className="pm-path">
              <span className="pm-path__tag">Quero adotar</span>
              <ol className="pm-steps">
                {ADOPT_STEPS.map((s) => (
                  <li key={s.title}>
                    <b>{s.title}</b>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="pm-path pm-path--donate">
              <span className="pm-path__tag">Quero doar</span>
              <ol className="pm-steps">
                {DONATE_STEPS.map((s) => (
                  <li key={s.title}>
                    <b>{s.title}</b>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="pm-ages">
            <span className="pm-ages__label">Faixas de idade no anúncio</span>
            <div className="pm-chips pm-chips--outline">
              {AGES.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ONGs */}
      <section id="ongs" className="pm-band">
        <div className="pm-wrap pm-ongs">
          <div>
            <p className="pm-kicker">ONGs parceiras</p>
            <h2>Não pode adotar agora? Ajude quem cuida.</h2>
            <p className="pm-sub">
              O app tem uma página com ONGs de proteção animal. Copie a chave Pix para doar ou abra o WhatsApp para
              conversar com elas sobre voluntariado.
            </p>
          </div>
          <div className="pm-ong-card" aria-hidden>
            <span className="pm-ong-card__label">Pix para doações</span>
            <span className="pm-ong-card__key">chave@ong.org</span>
            <div className="pm-actions">
              <span className="pm-btn pm-btn--sm">Copiar chave Pix</span>
              <span className="pm-btn pm-btn--sm pm-btn--alt">WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacidade */}
      <section id="privacidade" className="pm-band pm-band--white">
        <div className="pm-wrap">
          <p className="pm-kicker">Privacidade</p>
          <h2>Seus dados, do seu jeito</h2>
          <div className="pm-grid-4">
            {PRIVACY_SUMMARY.map((s) => (
              <div key={s.text} className="pm-card pm-card--soft">
                <span className="pm-card__icon" aria-hidden>
                  {s.icon}
                </span>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="pm-actions pm-actions--top">
            <Link className="pm-btn pm-btn--alt" href="/apps/mypetmatch/privacidade">
              Ler a política de privacidade
            </Link>
            <Link className="pm-text-link" href="/apps/mypetmatch/excluir-conta">
              Como excluir minha conta →
            </Link>
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section id="suporte" className="pm-band">
        <div className="pm-wrap pm-faq-wrap">
          <p className="pm-kicker">Suporte</p>
          <h2>Perguntas rápidas</h2>
          <div className="pm-faq">
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

      {/* Chamada final */}
      <section className="pm-cta">
        <div className="pm-wrap pm-cta__inner">
          <h2>
            Tem um pet esperando por <span>você</span>.
          </h2>
          <p>Baixe o MyPetMatch e encontre o seu match.</p>
          <StoreButtons align="center" />
        </div>
      </section>
    </>
  );
}
