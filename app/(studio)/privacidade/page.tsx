import type { Metadata } from "next";
import Link from "next/link";
import { ControllerBlock, LegalPage, PrivacyMail, RightsBlock } from "@/components/legal/LegalPage";
import { POLICY_APPS } from "@/components/legal/policies";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Política de privacidade do site da SideQuest Studio e links para as políticas de cada app.",
};

export default function SitePrivacyPage() {
  return (
    <LegalPage
      eyebrow="// privacidade"
      title="Privacidade na SideQuest Studio"
      intro={
        <>
          <p>
            Cada app da SideQuest Studio tem a sua própria política de privacidade, porque cada um trata dados
            diferentes. Escolha o app abaixo. Mais adiante está a política deste site.
          </p>
          <div className="legal__apps">
            {POLICY_APPS.map((a) => (
              <div key={a.slug} className="legal__app">
                <b>{a.name}</b>
                <Link href={`/apps/${a.slug}/privacidade`}>Política de Privacidade</Link>
                <Link href={`/apps/${a.slug}/excluir-conta`}>Excluir conta</Link>
              </div>
            ))}
          </div>
        </>
      }
      sections={[
        { id: "responsavel", title: "Quem é o responsável", content: <ControllerBlock /> },
        {
          id: "dados",
          title: "Dados tratados neste site",
          content: (
            <>
              <p>
                Este site não tem cadastro, formulários, cookies de rastreamento nem ferramentas de análise ou
                publicidade.
              </p>
              <p>
                Como qualquer site, o servidor de hospedagem registra dados técnicos de cada acesso, como endereço IP,
                navegador e páginas visitadas. Esses registros servem para manter o site no ar e protegê-lo contra
                ataques, com base no legítimo interesse (LGPD, art. 7º, IX), e são apagados automaticamente pelo
                provedor de hospedagem.
              </p>
              <p>
                Se você nos escrever por e-mail, usamos seu endereço e sua mensagem só para responder e conversar sobre o
                seu projeto.
              </p>
            </>
          ),
        },
        { id: "direitos", title: "Seus direitos", content: <RightsBlock /> },
        {
          id: "contato",
          title: "Contato",
          content: (
            <p>
              Dúvidas sobre privacidade: <PrivacyMail subject="Privacidade" />.
            </p>
          ),
        },
      ]}
    />
  );
}
