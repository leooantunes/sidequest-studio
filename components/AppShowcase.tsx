import Image from "next/image";
import Link from "next/link";
import type { ShowcaseApp } from "@/lib/apps";
import { LevelFitPhone, PetMatchPhone } from "./PhoneMocks";

export function AppShowcase({ app, flip = false }: { app: ShowcaseApp; flip?: boolean }) {
  return (
    <article className={`showcase showcase--${app.slug} ${flip ? "showcase--flip" : ""}`}>
      <div className="showcase__text">
        <div className="showcase__id">
          <Image src={app.icon} alt="" width={56} height={56} className="showcase__icon" />
          <div>
            <h3 className="showcase__name">{app.name}</h3>
            <span className="showcase__meta">{app.category} · {app.platforms}</span>
          </div>
        </div>
        <p className="showcase__tagline">{app.tagline}</p>
        <p className="showcase__summary">{app.summary}</p>
        <ul className="showcase__features">
          {app.features.slice(0, 4).map((f) => (
            <li key={f.title}>
              <b>{f.title}.</b> {f.text}
            </li>
          ))}
        </ul>
        <div className="showcase__stack">
          {app.stack.slice(0, 4).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <Link href={`/apps/${app.slug}`} className="showcase__link">
          Ver o case completo <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="showcase__visual">
        {app.slug === "mypetmatch" ? <PetMatchPhone /> : <LevelFitPhone />}
      </div>
    </article>
  );
}
