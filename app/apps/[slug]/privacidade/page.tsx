import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LegalPage } from "@/components/legal/LegalPage";
import { getPolicies } from "@/components/legal/policies";
import { apps, getApp } from "@/lib/apps";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/apps/[slug]/privacidade">): Promise<Metadata> {
  const { slug } = await props.params;
  const app = getApp(slug);
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
  const app = getApp(slug);
  const policy = getPolicies(slug);
  if (!app || !policy) notFound();

  return (
    <LegalPage
      tone={app.slug}
      eyebrow={`// ${app.name}`}
      title={`Política de Privacidade do ${app.name}`}
      intro={policy.privacy.intro}
      sections={policy.privacy.sections}
      back={{ href: `/apps/${app.slug}`, label: app.name }}
    />
  );
}
