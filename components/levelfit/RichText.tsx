import { Fragment, type ReactNode } from 'react';

import { site } from '@/content/levelfit/site';

/** Campo ainda não configurado: destaque amarelo para não publicar com placeholder. */
function Placeholder({ label }: { label: string }) {
  return (
    <mark className="placeholder" title="Configure no .env antes de publicar">
      [{label}]
    </mark>
  );
}

function token(name: string, key: number): ReactNode {
  if (name === 'controller') {
    return site.controllerName ? (
      <Fragment key={key}>{site.controllerName}</Fragment>
    ) : (
      <Placeholder key={key} label="SEU NOME OU EMPRESA" />
    );
  }
  if (name === 'email') {
    return site.supportEmail ? (
      <a key={key} href={`mailto:${site.supportEmail}`}>
        {site.supportEmail}
      </a>
    ) : (
      <Placeholder key={key} label="E-MAIL DE SUPORTE" />
    );
  }
  return `{{${name}}}`;
}

/** Converte **negrito**, {{controller}} e {{email}} em JSX. Sem dangerouslySetInnerHTML. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\{\{\w+\}\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith('{{')) return token(part.slice(2, -2), i);
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
