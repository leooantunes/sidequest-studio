import Link from "next/link";
import { Wordmark } from "./Mark";

export function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="header__brand" aria-label="SideQuest Studio, início">
          <Wordmark tone="dark" />
        </Link>
        <nav className="header__nav" aria-label="Principal">
          <Link href="/#apps">Apps</Link>
          <Link href="/#servicos">Serviços</Link>
          <Link href="/#party">Quem somos</Link>
          <Link href="/#contato" className="header__cta">Começar projeto</Link>
        </nav>
      </div>
    </header>
  );
}
