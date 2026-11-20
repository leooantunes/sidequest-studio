import Link from "next/link";
import { Wordmark } from "./Mark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <Wordmark tone="dark" />
        <nav className="footer__nav" aria-label="Rodapé">
          <Link href="/apps/mypetmatch">MyPetMatch</Link>
          <Link href="/apps/levelfit">Level Fit</Link>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
        <p className="footer__copy">
          <span lang="ja">サイドクエスト・スタジオ</span> · Leo &amp; Raduchiu · 2026
        </p>
      </div>
    </footer>
  );
}
