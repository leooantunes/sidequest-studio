import { AppShowcase } from "@/components/AppShowcase";
import { Mark } from "@/components/Mark";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

const services = [
  {
    title: "Apps mobile",
    text: "iOS e Android com React Native e Expo. Login social, notificações, câmera, widgets, dados de saúde e assinaturas dentro do app.",
    tags: ["React Native", "Expo", "Widgets"],
  },
  {
    title: "Sites e sistemas web",
    text: "Sites rápidos, landing pages e painéis administrativos com Next.js, prontos para crescer junto com o produto.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Backend e integrações",
    text: "Banco de dados, autenticação, armazenamento de fotos, tempo real e pagamentos, com Firebase ou Supabase.",
    tags: ["Firebase", "Supabase", "RevenueCat"],
  },
];

const steps = [
  { title: "Briefing", text: "Entendemos o problema, quem vai usar e o que precisa estar pronto no lançamento." },
  { title: "Protótipo", text: "Telas navegáveis para você testar a ideia antes de escrever a primeira linha de código." },
  { title: "Desenvolvimento", text: "Entregas frequentes que você pode instalar e testar no próprio celular." },
  { title: "Lançamento", text: "Publicação na App Store e no Google Play, e acompanhamento depois que o app vai ao ar." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero__stage">
            <i className="corner corner--tl" /><i className="corner corner--tr" />
            <i className="corner corner--bl" /><i className="corner corner--br" />
            <p className="eyebrow eyebrow--dark">
              <span className="dot" /> ESTÚDIO DE SOFTWARE
            </p>
            <h1 className="hero__title">
              Software feito com <span className="hl-green">alma</span> de <span className="hl-purple">jogador</span>.
            </h1>
            <p className="hero__lede">
              Criamos apps e sistemas com o cuidado de quem faz todas as side quests antes do chefe final.
              Dois programadores apaixonados por jogos e animes, do protótipo até a loja.
            </p>
            <div className="hero__actions">
              <a href="#apps" className="btn btn--green">Ver nossos apps</a>
              <a href="#contato" className="btn btn--ghost">Começar um projeto</a>
            </div>
            <div className="hero__hud">
              <span>APPS NO PORTFÓLIO <b>{apps.length}</b></span>
              <span>PLATAFORMAS <b>iOS · Android · Web</b></span>
              <span>STATUS <b>Aceitando quests</b></span>
            </div>
            <Mark size={220} tone="dark" className="hero__mark" />
          </div>
        </div>
      </section>

      <section id="apps" className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">{"// quests concluídas"}</p>
            <h2>Nossos apps</h2>
            <p className="lede">
              Dois produtos completos, do zero até o celular. Cada um com identidade própria, porque cada quest tem o seu mundo.
            </p>
          </div>
          <div className="showcases">
            {apps.map((app, i) => (
              <AppShowcase key={app.slug} app={app} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="section section--alt">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">{"// o que fazemos"}</p>
            <h2>Classes disponíveis</h2>
          </div>
          <div className="services">
            {services.map((s) => (
              <article key={s.title} className="service">
                <span className="service__diamond" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="steps">
            <h3 className="steps__title">Como uma quest acontece</h3>
            <ol>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="steps__n">{String(i + 1).padStart(2, "0")}</span>
                  <b>{s.title}</b>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="party" className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">{"// seleção de personagem"}</p>
            <h2>A party</h2>
            <p className="lede">
              Somos melhores amigos e programadores. Os dois assinam cada projeto.
            </p>
          </div>
          <div className="party">
            <article className="player player--leo">
              <span className="player__tag">PLAYER 1 · COFUNDADOR</span>
              <h3>Leo</h3>
              <p>Desenvolvedor. Gosta de transformar uma ideia solta em app publicado.</p>
            </article>
            <article className="player player--radu">
              <span className="player__tag">PLAYER 2 · COFUNDADOR</span>
              <h3>Raduchiu</h3>
              <p>Desenvolvedor. Cuida para que cada detalhe funcione do jeito que o usuário espera.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contato" className="cta">
        <div className="wrap cta__inner">
          <div>
            <p className="eyebrow eyebrow--dark">{"// nova quest"}</p>
            <h2>Tem uma ideia? Vamos montar a party.</h2>
            <p className="cta__text">Conte o que você quer construir. A gente responde com os próximos passos e uma estimativa.</p>
          </div>
          <div className="cta__box">
            <span className="cta__label">ESCREVA PARA</span>
            <a href={`mailto:${site.email}?subject=Nova%20quest`} className="cta__mail">{site.email}</a>
            <a href={`mailto:${site.email}?subject=Nova%20quest`} className="btn btn--green">Mandar mensagem</a>
          </div>
        </div>
      </section>
    </>
  );
}
