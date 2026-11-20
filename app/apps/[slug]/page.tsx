import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LevelFitPhone, PetMatchPhone } from "@/components/PhoneMocks";
import { apps, getApp } from "@/lib/apps";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/apps/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const app = getApp(slug);
  if (!app) return {};
  return { title: app.name, description: app.summary };
}

export default function AppPage(props: PageProps<"/apps/[slug]">) {
  return (
    <Suspense fallback={<CaseLoading />}>
      <CaseContent params={props.params} />
    </Suspense>
  );
}

function CaseLoading() {
  return (
    <section className="case__hero case__hero--loading" aria-busy="true">
      <div className="wrap">
        <p className="eyebrow">Carregando quest…</p>
      </div>
    </section>
  );
}

async function CaseContent({ params }: { params: PageProps<"/apps/[slug]">["params"] }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const other = apps.find((a) => a.slug !== app.slug)!;

  return (
    <div className={`case case--${app.slug}`}>
      <section className="case__hero">
        <div className="wrap case__hero-inner">
          <div className="case__intro">
            <Link href="/#apps" className="case__back">← Todos os apps</Link>
            <div className="showcase__id">
              <Image src={app.icon} alt="" width={64} height={64} className="showcase__icon" />
              <span className="showcase__meta">{app.category} · {app.platforms}</span>
            </div>
            <h1 className="case__name">{app.name}</h1>
            <p className="case__tagline">{app.tagline}</p>
            <p className="case__summary">{app.summary}</p>
            <a href={app.repo} target="_blank" rel="noreferrer" className="case__repo">Ver código no GitHub ↗</a>
            <div className="case__legal">
              <Link href={`/apps/${app.slug}/privacidade`}>Política de Privacidade</Link>
              <Link href={`/apps/${app.slug}/excluir-conta`}>Excluir conta</Link>
            </div>
          </div>
          <div className="case__visual">
            {app.slug === "mypetmatch" ? <PetMatchPhone /> : <LevelFitPhone />}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="case__stats">
            {app.stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="case__story">
            <div>
              <p className="eyebrow">{"// o desafio"}</p>
              <p>{app.challenge}</p>
            </div>
            <div>
              <p className="eyebrow">{"// o que construímos"}</p>
              <p>{app.build}</p>
            </div>
          </div>

          <h2 className="case__h2">Funcionalidades</h2>
          <div className="case__features">
            {app.features.map((f) => (
              <article key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>

          <h2 className="case__h2">Tecnologias</h2>
          <div className="tags tags--lg">
            {app.stack.map((s) => <span key={s}>{s}</span>)}
          </div>

          <Link href={`/apps/${other.slug}`} className="case__next">
            <span className="eyebrow">{"// próxima quest"}</span>
            <span className="case__next-name">{other.name} →</span>
            <span>{other.tagline}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
