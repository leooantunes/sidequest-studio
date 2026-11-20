import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { site } from "@/content/mypetmatch/app";

const ICON = "/apps/petmatch-pixel.png";

export function Wordmark() {
  return (
    <span className="pm-wordmark">
      My<span>Pet</span>Match
    </span>
  );
}

const SECTIONS = [
  { href: "/mypetmatch#recursos", label: "Recursos" },
  { href: "/mypetmatch#como-funciona", label: "Como funciona" },
  { href: "/mypetmatch#ongs", label: "ONGs" },
  { href: "/mypetmatch#suporte", label: "Suporte" },
];

export function SiteHeader() {
  return (
    <header className="pm-header">
      <div className="pm-wrap pm-header__inner">
        <Link href="/mypetmatch" className="pm-brand" aria-label="MyPetMatch, página inicial">
          <Image src={ICON} alt="" width={40} height={40} priority />
          <Wordmark />
        </Link>
        <nav aria-label="Principal">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.href} className="pm-nav-section">
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/mypetmatch#baixar" className="pm-btn pm-btn--sm">
                Baixar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="pm-footer">
      <div className="pm-wrap pm-footer__grid">
        <div className="pm-footer__brand">
          <Wordmark />
          <p>{site.tagline}</p>
        </div>
        <nav aria-label="Rodapé" className="pm-footer__links">
          <Link href="/mypetmatch#recursos">Recursos</Link>
          <Link href="/mypetmatch#suporte">Suporte</Link>
          <Link href="/apps/mypetmatch/privacidade">Política de Privacidade</Link>
          <Link href="/apps/mypetmatch/excluir-conta">Excluir conta</Link>
          {site.supportEmail && <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>}
        </nav>
        <p className="pm-footer__copy">
          © 2026 {site.controllerName} · {site.appName} · <Link href="/">Um app da SideQuest Studio</Link>
        </p>
      </div>
    </footer>
  );
}

/** Botões das lojas. Sem URL configurada, aparecem desativados com "em breve". */
export function StoreButtons({ align = "start" }: { align?: "start" | "center" }) {
  const stores = [
    { label: "App Store", icon: "🍎", url: site.appStoreUrl, cls: "pm-btn" },
    { label: "Google Play", icon: "▶", url: site.playStoreUrl, cls: "pm-btn pm-btn--alt" },
  ];
  const anyMissing = stores.some((s) => !s.url);
  return (
    <div className={`pm-stores pm-stores--${align}`}>
      <div className="pm-actions">
        {stores.map((s) =>
          s.url ? (
            <a key={s.label} className={s.cls} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.icon && <span aria-hidden>{s.icon}</span>} {s.label}
            </a>
          ) : (
            <span key={s.label} className={`${s.cls} is-disabled`} aria-disabled="true">
              {s.icon && <span aria-hidden>{s.icon}</span>} {s.label}
            </span>
          ),
        )}
      </div>
      <p className="pm-soon">{anyMissing ? "Em breve para iPhone e Android." : "Disponível para iPhone e Android."}</p>
    </div>
  );
}

/** Ilustração da tela de detalhes do pet, no estilo do app. Decorativa. */
export function PetMock() {
  return (
    <div className="pm-phone" aria-hidden>
      <div className="pm-phone__screen">
        <div className="pm-phone__photo">
          <Image src={ICON} alt="" width={520} height={520} />
        </div>
        <div className="pm-phone__dots">
          <i className="is-on" />
          <i />
          <i />
        </div>
        <div className="pm-phone__title">
          <div>
            <b>Paçoca</b>
            <span>Vira-lata</span>
          </div>
          <span className="pm-badge">Disponível</span>
        </div>
        <div className="pm-chips">
          <span>1-3 anos</span>
          <span>Castrado</span>
          <span>Aracaju</span>
        </div>
        <p className="pm-phone__about">Brincalhão, adora correr no quintal e já sabe pedir a patinha.</p>
        <span className="pm-phone__cta">Entrar em contato</span>
      </div>
    </div>
  );
}

/** Converte **negrito** e {{email}} em JSX. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\{\{\w+\}\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part === "{{email}}")
          return site.supportEmail ? (
            <a key={i} href={`mailto:${site.supportEmail}`}>
              {site.supportEmail}
            </a>
          ) : (
            <Fragment key={i}>o e-mail de suporte</Fragment>
          );
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
