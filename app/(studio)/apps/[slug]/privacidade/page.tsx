import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LegalPage } from "@/components/legal/LegalPage";
import { getPolicies, POLICY_APPS } from "@/components/legal/policies";
import { getApp } from "@/lib/apps";

export function generateStaticParams() {
  return POLICY_APPS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/apps/[slug]/privacidade">): Promise<Metadata> {
  const { slug } = await props.params;
  const app = getPolicies(slug);
  if (!app) return {};
  return {
    title: `Política de Privacidade do ${app.name}`,
    description: `Quais dados o ${app.name} coleta, para que usa, com quem compartilha e como exercer seus direitos.`,
  };
}

export default function PrivacyPage(props: PageProps<"/apps/[slug]/privacidade">) {
  return (
    <Suspense fallback={<div className="legal__loading" />}>
      <Content params={props.params} />
    </Suspense>
  );
}

async function Content({ params }: { params: PageProps<"/apps/[slug]/privacidade">["params"] }) {
  const { slug } = await params;
  const policy = getPolicies(slug);
  if (!policy) notFound();
  const app = { slug: policy.slug, name: policy.name };
  // Só os apps da vitrine têm página de case; os outros voltam para a lista de políticas.
  const back = getApp(slug) ? { href: `/apps/${slug}`, label: app.name } : { href: "/privacidade", label: "Privacidade" };

  return (
    <LegalPage
      tone={app.slug}
      eyebrow={`// ${app.name}`}
      title={`Política de Privacidade do ${app.name}`}
      intro={policy.privacy.intro}
      sections={policy.privacy.sections}
      back={back}
      updated={policy.updated}
    />
  );
}
