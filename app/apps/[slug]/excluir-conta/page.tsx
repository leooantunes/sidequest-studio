import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LegalPage } from "@/components/legal/LegalPage";
import { getPolicies } from "@/components/legal/policies";
import { apps, getApp } from "@/lib/apps";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/apps/[slug]/excluir-conta">): Promise<Metadata> {
  const { slug } = await props.params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: `Excluir conta do ${app.name}`,
    description: `Como excluir sua conta do ${app.name} e quais dados são apagados.`,
  };
}

export default function DeletionPage(props: PageProps<"/apps/[slug]/excluir-conta">) {
  return (
    <Suspense fallback={<div className="legal__loading" />}>
      <Content params={props.params} />
    </Suspense>
  );
}

async function Content({ params }: { params: PageProps<"/apps/[slug]/excluir-conta">["params"] }) {
  const { slug } = await params;
  const app = getApp(slug);
  const policy = getPolicies(slug);
  if (!app || !policy) notFound();

  const sections = [
    ...policy.deletion.sections,
    {
      id: "mais",
      title: "Mais informações",
      content: (
        <p>
          Veja a <Link href={`/apps/${app.slug}/privacidade`}>Política de Privacidade do {app.name}</Link> para saber
          tudo sobre os dados que o app trata.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      tone={app.slug}
      eyebrow={`// ${app.name}`}
      title={`Excluir conta do ${app.name}`}
      intro={policy.deletion.intro}
      sections={sections}
      back={{ href: `/apps/${app.slug}`, label: app.name }}
    />
  );
}
