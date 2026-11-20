import Image from 'next/image';
import Link from 'next/link';

import { site } from '@/content/levelfit/site';

export function Wordmark() {
  return (
    <span className="wordmark">
      LEVEL <span>FIT</span>
    </span>
  );
}

const SECTIONS = [
  { href: '/levelfit#recursos', label: 'Recursos' },
  { href: '/levelfit#como-funciona', label: 'Como funciona' },
  { href: '/levelfit#planos', label: 'Planos' },
  { href: '/levelfit#suporte', label: 'Suporte' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/levelfit" className="brand" aria-label="Level Fit, página inicial">
          <Image src="/apps/levelfit-icon.png" alt="" width={36} height={36} priority />
          <Wordmark />
        </Link>
        <nav aria-label="Principal">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.href} className="nav-section">
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/levelfit#baixar" className="btn btn-sm">
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
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Wordmark />
          <p>{site.tagline}</p>
        </div>
        <nav aria-label="Rodapé" className="footer-links">
          <Link href="/levelfit#recursos">Recursos</Link>
          <Link href="/levelfit#planos">Planos</Link>
          <Link href="/levelfit#suporte">Suporte</Link>
          <Link href="/apps/levelfit/privacidade">Política de Privacidade</Link>
          <Link href="/apps/levelfit/excluir-conta">Excluir conta</Link>
          {site.supportEmail && <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>}
        </nav>
        <p className="copy">
          © 2026 {site.controllerName ?? '[SEU NOME OU EMPRESA]'} · {site.appName} ·{' '}
          <Link href="/">Um app da SideQuest Studio</Link>
        </p>
      </div>
    </footer>
  );
}
