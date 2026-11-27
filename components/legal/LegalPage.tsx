import Link from "next/link";
import { site } from "@/lib/site";

export type LegalSection = { id: string; title: string; content: React.ReactNode };

type Props = {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  sections: LegalSection[];
  back?: { href: string; label: string };
  tone?: string;
  /** Data da última atualização. Sem ela, vale a data geral de lib/site.ts. */
  updated?: string;
};

export function LegalPage({ eyebrow, title, intro, sections, back, tone, updated }: Props) {
  return (
    <article className={`legal ${tone ? `legal--${tone}` : ""}`}>
      <header className="legal__head">
        <div className="wrap legal__head-inner">
          {back && (
            <Link href={back.href} className="case__back">
              ← {back.label}
            </Link>
          )}
          {!back && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p className="legal__updated">Última atualização: {updated ?? site.policyUpdated}</p>
        </div>
      </header>
      <div className="wrap legal__layout">
        <nav className="legal__toc" aria-label="Nesta página">
          <p className="legal__toc-title">Nesta página</p>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="legal__body">
          <div className="legal__intro">{intro}</div>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="legal__section">
              <h2>
                <span className="legal__n">{i + 1}.</span> {s.title}
              </h2>
              {s.content}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

/** Tabela com rolagem horizontal própria, para não alargar a página no celular. */
export function LegalTable({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="legal__table">
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PrivacyMail({ subject }: { subject?: string }) {
  const href = `mailto:${site.privacyEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return <a href={href}>{site.privacyEmail}</a>;
}

/** Quem é o controlador dos dados. Igual em todas as políticas. */
export function ControllerBlock({ appName }: { appName?: string }) {
  return (
    <>
      <p>
        {appName ? <>O {appName} é desenvolvido e mantido pela </> : <>Este site é mantido pela </>}
        <b>{site.legalName}</b>
        {site.cnpj ? <>, inscrita no CNPJ {site.cnpj}</> : null}, que é a controladora dos dados pessoais
        tratados {appName ? "no app" : "aqui"}, nos termos da Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).
      </p>
      <p>
        Canal de atendimento ao titular e contato do encarregado pelo tratamento de dados: <PrivacyMail subject="Privacidade" />.
      </p>
    </>
  );
}

/** Direitos do titular (LGPD, art. 18). Igual em todas as políticas. */
export function RightsBlock({ inApp }: { inApp?: React.ReactNode }) {
  return (
    <>
      <p>Pela LGPD, você pode pedir a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
        <li>portabilidade dos dados para outro fornecedor;</li>
        <li>eliminação dos dados tratados com base no seu consentimento;</li>
        <li>informação sobre com quem compartilhamos seus dados;</li>
        <li>informação sobre a possibilidade de não dar consentimento e o que acontece se você não der;</li>
        <li>revogação do consentimento;</li>
        <li>revisão de decisões tomadas apenas com base em tratamento automatizado.</li>
      </ul>
      {inApp}
      <p>
        Para os demais pedidos, escreva para <PrivacyMail subject="Pedido LGPD" /> a partir do e-mail da sua conta.
        Respondemos em até 15 dias. Se não ficar satisfeito com a resposta, você também pode procurar a Autoridade
        Nacional de Proteção de Dados (ANPD).
      </p>
    </>
  );
}
