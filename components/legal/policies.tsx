import Link from "next/link";
import { ControllerBlock, LegalTable, PrivacyMail, RightsBlock, type LegalSection } from "./LegalPage";

type Policy = { intro: React.ReactNode; sections: LegalSection[] };

/* ------------------------------------------------------------------ */
/* MyPetMatch                                                          */
/* ------------------------------------------------------------------ */

const petmatchPrivacy: Policy = {
  intro: (
    <p>
      O MyPetMatch conecta quem precisa doar um cachorro ou gato a quem quer adotar. Esta política explica quais dados
      pessoais o app coleta, por que coleta, com quem compartilha, por quanto tempo guarda e como você controla esses
      dados. Ela vale para o app no iPhone (App Store) e no Android (Google Play).
    </p>
  ),
  sections: [
    { id: "responsavel", title: "Quem é o responsável", content: <ControllerBlock appName="MyPetMatch" /> },
    {
      id: "dados",
      title: "Dados que coletamos",
      content: (
        <>
          <LegalTable
            head={["Dado", "Quando é coletado", "Obrigatório?"]}
            rows={[
              ["Nome, e-mail e senha", "Ao criar a conta. A senha fica criptografada no Firebase Authentication e nós não temos acesso a ela.", "Sim"],
              ["Nome e e-mail da conta Google ou Apple", "Se você escolher entrar com Google ou Apple. Com a Apple, você pode ocultar seu e-mail.", "Só se usar esse login"],
              ["Telefone celular e cidade", "No cadastro, para que interessados possam falar com você.", "Sim"],
              ["Idade e foto de perfil", "Quando você edita o perfil.", "Não"],
              ["Dados e fotos dos pets", "Quando você anuncia um pet: nome, idade, raça, descrição, cidade e fotos.", "Só para anunciar"],
              ["Localização aproximada", "Só quando você toca para preencher a cidade do pet. Usamos a localização para descobrir o nome da cidade e não guardamos as coordenadas.", "Não"],
              ["Token de notificação", "Se você permitir notificações, para avisar sobre seus anúncios.", "Não"],
              ["Denúncias e bloqueios", "Quando você denuncia um anúncio ou bloqueia um anunciante.", "Não"],
            ]}
          />
          <p>
            O app não coleta dados de pagamento, contatos da agenda, histórico de navegação nem identificadores de
            publicidade.
          </p>
        </>
      ),
    },
    {
      id: "finalidades",
      title: "Para que usamos e com qual base legal",
      content: (
        <LegalTable
          head={["Finalidade", "Base legal (LGPD, art. 7º)"]}
          rows={[
            ["Criar e manter sua conta e permitir o login", "Execução de contrato (inciso V)"],
            ["Publicar pets para adoção depois da análise da nossa equipe", "Execução de contrato (inciso V)"],
            ["Mostrar seu nome e telefone a interessados no seu anúncio", "Execução de contrato (inciso V)"],
            ["Preencher a cidade do pet a partir da localização", "Consentimento (inciso I), dado pela permissão do celular"],
            ["Enviar notificações sobre seus anúncios", "Consentimento (inciso I), dado pela permissão do celular"],
            ["Moderar conteúdo, analisar denúncias e prevenir fraudes e abusos", "Legítimo interesse (inciso IX)"],
            ["Guardar registros exigidos por lei e responder a autoridades", "Cumprimento de obrigação legal (inciso II)"],
          ]}
        />
      ),
    },
    {
      id: "visibilidade",
      title: "O que outros usuários veem",
      content: (
        <>
          <p>
            Pets aprovados ficam visíveis para todos os usuários com conta no app. Para que interessados possam falar
            com você pelo WhatsApp, <b>seu nome e seu telefone ficam visíveis para outros usuários logados</b> quando
            você tem um anúncio publicado.
          </p>
          <p>
            Seu e-mail, sua idade e os demais dados da conta não são mostrados a outros usuários. Não coloque no
            anúncio informações que você não queira tornar públicas.
          </p>
        </>
      ),
    },
    {
      id: "compartilhamento",
      title: "Com quem compartilhamos",
      content: (
        <>
          <p>Não vendemos seus dados. Só compartilhamos com os serviços abaixo, para o app funcionar:</p>
          <LegalTable
            head={["Serviço", "O que recebe", "Para quê"]}
            rows={[
              ["Google Firebase (Google LLC)", "Dados da conta, perfil, anúncios e fotos", "Login, banco de dados e armazenamento de fotos"],
              ["Expo (650 Industries, Inc.)", "Token de notificação e texto do aviso", "Entrega das notificações push"],
              ["Google e Apple", "Dados do login social", "Só se você escolher entrar com essas contas"],
              ["WhatsApp (Meta)", "O número de quem você vai contatar", "Só quando você mesmo toca para abrir a conversa"],
            ]}
          />
          <p>
            Esses fornecedores tratam os dados apenas para prestar o serviço ao MyPetMatch, seguindo nossas instruções e
            com proteção equivalente à desta política. Também podemos compartilhar dados quando a lei ou uma ordem
            judicial exigir.
          </p>
        </>
      ),
    },
    {
      id: "transferencia",
      title: "Transferência internacional",
      content: (
        <p>
          Os servidores do Firebase e da Expo podem ficar fora do Brasil, principalmente nos Estados Unidos. Essas
          transferências seguem o art. 33 da LGPD, com cláusulas contratuais de proteção de dados oferecidas por esses
          fornecedores.
        </p>
      ),
    },
    {
      id: "permissoes",
      title: "Permissões do celular",
      content: (
        <ul>
          <li><b>Câmera e fotos:</b> só quando você escolhe fotos para um anúncio ou para o perfil.</li>
          <li><b>Localização:</b> só quando você toca para preencher a cidade do pet. O app não acompanha sua localização em segundo plano.</li>
          <li><b>Notificações:</b> para avisos sobre seus anúncios.</li>
        </ul>
      ),
    },
    {
      id: "publicidade",
      title: "Publicidade e rastreamento",
      content: (
        <p>
          O MyPetMatch não mostra anúncios publicitários, não usa ferramentas de análise de terceiros e não rastreia
          você em outros apps ou sites. Seus dados não são usados para publicidade.
        </p>
      ),
    },
    {
      id: "retencao",
      title: "Por quanto tempo guardamos",
      content: (
        <ul>
          <li>Os dados da conta, do perfil e dos anúncios ficam guardados enquanto sua conta existir.</li>
          <li>Quando você exclui um anúncio, as fotos dele são apagadas dos servidores.</li>
          <li>Quando você troca a foto de perfil, a anterior é apagada.</li>
          <li>Quando você exclui a conta, apagamos perfil, anúncios, fotos e lista de bloqueios.</li>
          <li>Denúncias podem ser mantidas depois da exclusão da conta pelo tempo necessário para a segurança do app e para cumprir obrigações legais.</li>
        </ul>
      ),
    },
    {
      id: "seguranca",
      title: "Segurança",
      content: (
        <p>
          Os dados trafegam com criptografia (HTTPS) e ficam no Firebase, com regras de acesso que impedem um usuário
          de ler ou alterar dados de outro. Senhas são guardadas pelo Firebase Authentication e nunca ficam visíveis
          para nós. Nenhum sistema é totalmente imune a falhas. Se acontecer um incidente que possa trazer risco a
          você, avisaremos você e a ANPD.
        </p>
      ),
    },
    {
      id: "direitos",
      title: "Seus direitos",
      content: (
        <RightsBlock inApp={<p>Você mesmo corrige seus dados em <b>Editar perfil</b>, a qualquer momento.</p>} />
      ),
    },
    {
      id: "exclusao",
      title: "Como excluir sua conta",
      content: (
        <>
          <p>
            No app, abra <b>Editar perfil → Excluir conta</b> e confirme. A exclusão é imediata e não pode ser desfeita.
          </p>
          <p>
            Se você não tem mais o app instalado, peça a exclusão pela página{" "}
            <Link href="/apps/mypetmatch/excluir-conta">Excluir conta do MyPetMatch</Link>.
          </p>
        </>
      ),
    },
    {
      id: "criancas",
      title: "Crianças e adolescentes",
      content: (
        <p>
          O MyPetMatch não é direcionado a crianças. A adoção de um animal deve ser feita por um adulto responsável.
          Se soubermos que uma conta pertence a uma criança, ela será excluída.
        </p>
      ),
    },
    {
      id: "mudancas",
      title: "Mudanças nesta política",
      content: (
        <p>
          Quando esta política mudar, atualizamos a data no topo da página. Se a mudança for relevante, avisamos também
          dentro do app.
        </p>
      ),
    },
    {
      id: "contato",
      title: "Contato",
      content: (
        <p>
          Dúvidas, pedidos sobre seus dados ou denúncias: <PrivacyMail subject="MyPetMatch — privacidade" />.
        </p>
      ),
    },
  ],
};

const petmatchDeletion: Policy = {
  intro: (
    <p>
      Esta página explica como excluir sua conta do <b>MyPetMatch</b>, app da SideQuest Studio, e o que acontece com
      seus dados.
    </p>
  ),
  sections: [
    {
      id: "no-app",
      title: "Pelo app",
      content: (
        <ol>
          <li>Abra o MyPetMatch e entre na sua conta.</li>
          <li>Toque em <b>Perfil</b> e depois em <b>Editar perfil</b>.</li>
          <li>Toque em <b>Excluir conta</b> e confirme.</li>
        </ol>
      ),
    },
    {
      id: "por-email",
      title: "Sem o app instalado",
      content: (
        <>
          <p>
            Envie um e-mail para <PrivacyMail subject="Excluir conta — MyPetMatch" /> com o assunto{" "}
            <b>Excluir conta — MyPetMatch</b>, a partir do e-mail cadastrado na sua conta. Se você entrou com Apple e
            ocultou o e-mail, informe o nome e o telefone da conta.
          </p>
          <p>Podemos pedir uma confirmação para ter certeza de que o pedido é seu. A conta é excluída em até 15 dias.</p>
        </>
      ),
    },
    {
      id: "apagado",
      title: "O que é apagado",
      content: (
        <ul>
          <li>Conta de login (e-mail e senha, ou vínculo com Google ou Apple).</li>
          <li>Perfil: nome, telefone, cidade, idade e foto.</li>
          <li>Todos os seus anúncios de pets, com as fotos.</li>
          <li>Sua lista de bloqueios e o token de notificação.</li>
        </ul>
      ),
    },
    {
      id: "mantido",
      title: "O que pode ser mantido",
      content: (
        <p>
          Denúncias feitas por você ou contra seus anúncios podem ser mantidas pelo tempo necessário para a segurança do
          app e para cumprir obrigações legais.
        </p>
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Level Fit                                                           */
/* ------------------------------------------------------------------ */

const levelfitPrivacy: Policy = {
  intro: (
    <p>
      O Level Fit é um app de duelos de hábitos saudáveis entre duas pessoas. Esta política explica quais dados
      pessoais o app coleta, por que coleta, com quem compartilha, por quanto tempo guarda e como você controla esses
      dados. Ela vale para o app no iPhone (App Store) e no Android (Google Play), incluindo os widgets.
    </p>
  ),
  sections: [
    { id: "responsavel", title: "Quem é o responsável", content: <ControllerBlock appName="Level Fit" /> },
    {
      id: "dados",
      title: "Dados que coletamos",
      content: (
        <>
          <LegalTable
            head={["Dado", "Quando é coletado", "Obrigatório?"]}
            rows={[
              ["E-mail e senha", "Ao criar a conta. A senha fica criptografada no Supabase e nós não temos acesso a ela.", "Sim"],
              ["Nome ou apelido, avatar e cor", "Ao criar a conta e quando você edita o perfil.", "Sim"],
              ["Duelos", "Nome do duelo, metas escolhidas, aposta (texto livre) e rival.", "Sim, para usar o app"],
              ["Provas", "Fotos tiradas ou escolhidas por você, legenda opcional, data, reações e contestações.", "Sim, para pontuar"],
              ["Dados de saúde", "Só se você ligar o relógio. Veja a seção sobre dados de saúde.", "Não"],
              ["Assinatura", "Se você assinar o Level Fit Pro: status, plano e validade, recebidos da loja pelo RevenueCat.", "Só para assinantes"],
              ["Denúncias e bloqueios", "Quando você denuncia uma prova ou bloqueia alguém.", "Não"],
            ]}
          />
          <p>
            O app não coleta sua localização, seus contatos, dados de cartão, histórico de navegação nem identificadores
            de publicidade.
          </p>
        </>
      ),
    },
    {
      id: "saude",
      title: "Dados de saúde (Apple Health e Health Connect)",
      content: (
        <>
          <p>
            Só se você ligar <b>Relógio</b> em Minha conta, o app lê do Apple Health (iPhone) ou do Health Connect
            (Android) os seguintes tipos de dado: passos, treinos, sono, meditação e tempo ao ar livre. O app não
            grava nada no Apple Health nem no Health Connect.
          </p>
          <p>
            A leitura acontece no seu celular. Quando você bate uma meta, só o resultado daquele dia (por exemplo,
            &quot;10.432 passos&quot;) é enviado ao servidor como prova e fica visível para o seu rival naquele duelo.
            Não guardamos o histórico de saúde.
          </p>
          <p>Os dados de saúde:</p>
          <ul>
            <li>são usados só para validar metas dentro do app;</li>
            <li>não são usados para publicidade, marketing ou perfis de consumo;</li>
            <li>não são vendidos nem compartilhados com terceiros, nem com corretores de dados;</li>
            <li>não são usados para decidir crédito, seguro ou emprego.</li>
          </ul>
          <p>
            Você desliga o relógio em Minha conta quando quiser e pode revogar a permissão nos ajustes do app Saúde ou
            do Health Connect. O uso de dados recebidos do Health Connect segue a Política de Permissões do Health
            Connect, incluindo os requisitos de uso limitado.
          </p>
        </>
      ),
    },
    {
      id: "finalidades",
      title: "Para que usamos e com qual base legal",
      content: (
        <LegalTable
          head={["Finalidade", "Base legal (LGPD)"]}
          rows={[
            ["Criar e manter sua conta e permitir o login", "Execução de contrato (art. 7º, V)"],
            ["Mostrar duelos, placar, provas e rankings para você e seu rival", "Execução de contrato (art. 7º, V)"],
            ["Validar metas com dados do relógio", "Consentimento específico (art. 11, I), que você dá ao ligar o relógio"],
            ["Liberar o Level Fit Pro", "Execução de contrato (art. 7º, V)"],
            ["Lembretes diários", "Consentimento (art. 7º, I), dado pela permissão do celular"],
            ["Analisar denúncias, aplicar bloqueios e prevenir abusos", "Legítimo interesse (art. 7º, IX)"],
            ["Guardar registros exigidos por lei e responder a autoridades", "Cumprimento de obrigação legal (art. 7º, II)"],
          ]}
        />
      ),
    },
    {
      id: "visibilidade",
      title: "O que outros usuários veem",
      content: (
        <>
          <p>
            Seu nome, avatar, cor, pontos e provas aparecem só para quem participa do mesmo duelo que você. As fotos
            ficam num armazenamento privado e são exibidas com links temporários.
          </p>
          <p>Se uma prova for denunciada, a equipe do Level Fit pode vê-la para analisar a denúncia.</p>
        </>
      ),
    },
    {
      id: "compartilhamento",
      title: "Com quem compartilhamos",
      content: (
        <>
          <p>Não vendemos seus dados. Só compartilhamos com os serviços abaixo, para o app funcionar:</p>
          <LegalTable
            head={["Serviço", "O que recebe", "Para quê"]}
            rows={[
              ["Supabase", "Conta, perfil, duelos, provas e fotos", "Login, banco de dados, armazenamento e atualização em tempo real"],
              ["RevenueCat", "Um identificador da sua conta e o status da compra", "Gerenciar a assinatura Level Fit Pro"],
              ["Apple e Google", "Dados da compra, tratados pelas lojas", "Cobrança da assinatura. Não recebemos dados do cartão"],
              ["Instagram (Meta)", "A imagem de comemoração que você escolher postar", "Só quando você toca em Postar no Story"],
            ]}
          />
          <p>
            Esses fornecedores tratam os dados apenas para prestar o serviço ao Level Fit, com proteção equivalente à
            desta política. Dados de saúde nunca são enviados a eles, exceto o resultado do dia guardado como prova no
            Supabase. Também podemos compartilhar dados quando a lei ou uma ordem judicial exigir.
          </p>
        </>
      ),
    },
    {
      id: "transferencia",
      title: "Transferência internacional",
      content: (
        <p>
          Os servidores do Supabase e do RevenueCat podem ficar fora do Brasil. Essas transferências seguem o art. 33
          da LGPD, com cláusulas contratuais de proteção de dados oferecidas por esses fornecedores.
        </p>
      ),
    },
    {
      id: "permissoes",
      title: "Permissões do celular",
      content: (
        <ul>
          <li><b>Câmera e fotos:</b> só quando você registra uma prova.</li>
          <li><b>Saúde (Apple Health ou Health Connect):</b> só se você ligar o relógio.</li>
          <li><b>Notificações:</b> lembretes criados no próprio aparelho, que você desliga em Minha conta.</li>
        </ul>
      ),
    },
    {
      id: "publicidade",
      title: "Publicidade e rastreamento",
      content: (
        <p>
          O Level Fit não mostra anúncios publicitários, não usa ferramentas de análise de terceiros e não rastreia você
          em outros apps ou sites.
        </p>
      ),
    },
    {
      id: "retencao",
      title: "Por quanto tempo guardamos",
      content: (
        <ul>
          <li>Os dados da conta, dos duelos e das provas ficam guardados enquanto sua conta existir.</li>
          <li>Quando você exclui uma prova, a foto é apagada.</li>
          <li>Quando você bloqueia alguém, suas provas naquele duelo são apagadas.</li>
          <li>Quando você exclui a conta, apagamos conta, perfil, provas, fotos e os duelos em que você joga sozinho.</li>
          <li>Denúncias ficam guardadas depois da exclusão da conta, sem vínculo com você, para a segurança do app.</li>
          <li>Registros de compra são guardados pela Apple, pelo Google e pelo RevenueCat pelo prazo que a lei fiscal exige.</li>
        </ul>
      ),
    },
    {
      id: "seguranca",
      title: "Segurança",
      content: (
        <p>
          Os dados trafegam com criptografia (HTTPS). No banco de dados, regras de acesso por linha garantem que cada
          pessoa só veja os próprios duelos. As fotos ficam num armazenamento privado. Nenhum sistema é totalmente imune
          a falhas. Se acontecer um incidente que possa trazer risco a você, avisaremos você e a ANPD.
        </p>
      ),
    },
    {
      id: "direitos",
      title: "Seus direitos",
      content: <RightsBlock inApp={<p>Você mesmo corrige seu perfil em <b>Minha conta</b>, a qualquer momento.</p>} />,
    },
    {
      id: "exclusao",
      title: "Como excluir sua conta",
      content: (
        <>
          <p>
            No app, abra <b>Minha conta → Excluir minha conta</b> e confirme. A exclusão é imediata e não pode ser
            desfeita. Se você assina o Level Fit Pro, cancele a assinatura na App Store ou no Google Play, porque excluir
            a conta não cancela a cobrança da loja.
          </p>
          <p>
            Se você não tem mais o app instalado, peça a exclusão pela página{" "}
            <Link href="/apps/levelfit/excluir-conta">Excluir conta do Level Fit</Link>.
          </p>
        </>
      ),
    },
    {
      id: "criancas",
      title: "Crianças e adolescentes",
      content: (
        <p>
          O Level Fit não é destinado a menores de 13 anos. Se soubermos que uma conta pertence a uma criança com menos
          de 13 anos, ela será excluída.
        </p>
      ),
    },
    {
      id: "mudancas",
      title: "Mudanças nesta política",
      content: (
        <p>
          Quando esta política mudar, atualizamos a data no topo da página. Se a mudança for relevante, avisamos também
          dentro do app.
        </p>
      ),
    },
    {
      id: "contato",
      title: "Contato",
      content: (
        <p>
          Dúvidas, pedidos sobre seus dados ou denúncias: <PrivacyMail subject="Level Fit — privacidade" />.
        </p>
      ),
    },
  ],
};

const levelfitDeletion: Policy = {
  intro: (
    <p>
      Esta página explica como excluir sua conta do <b>Level Fit</b>, app da SideQuest Studio, e o que acontece com seus
      dados.
    </p>
  ),
  sections: [
    {
      id: "no-app",
      title: "Pelo app",
      content: (
        <ol>
          <li>Abra o Level Fit e entre na sua conta.</li>
          <li>Na tela inicial, toque em <b>Minha conta</b>.</li>
          <li>Toque em <b>Excluir minha conta</b> e confirme.</li>
        </ol>
      ),
    },
    {
      id: "por-email",
      title: "Sem o app instalado",
      content: (
        <>
          <p>
            Envie um e-mail para <PrivacyMail subject="Excluir conta — Level Fit" /> com o assunto{" "}
            <b>Excluir conta — Level Fit</b>, a partir do e-mail cadastrado na sua conta.
          </p>
          <p>Podemos pedir uma confirmação para ter certeza de que o pedido é seu. A conta é excluída em até 15 dias.</p>
        </>
      ),
    },
    {
      id: "assinatura",
      title: "Se você assina o Level Fit Pro",
      content: (
        <p>
          Excluir a conta não cancela a cobrança da loja. Cancele a assinatura antes nos Ajustes do iPhone (seu nome →
          Assinaturas) ou no Google Play (Pagamentos e assinaturas → Assinaturas).
        </p>
      ),
    },
    {
      id: "apagado",
      title: "O que é apagado",
      content: (
        <ul>
          <li>Conta de login (e-mail e senha).</li>
          <li>Perfil: nome, avatar e cor.</li>
          <li>Todas as suas provas, com as fotos e os resultados vindos do relógio.</li>
          <li>Os duelos em que você joga sozinho. Nos duelos com outra pessoa, você sai do duelo e suas provas são apagadas.</li>
          <li>Sua lista de bloqueios.</li>
        </ul>
      ),
    },
    {
      id: "mantido",
      title: "O que pode ser mantido",
      content: (
        <ul>
          <li>Denúncias feitas por você ou contra suas provas, sem vínculo com a sua conta, para a segurança do app.</li>
          <li>Registros de compra da assinatura, guardados pela Apple, pelo Google e pelo RevenueCat pelo prazo que a lei fiscal exige.</li>
        </ul>
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* TrocaíTcg                                                           */
/* ------------------------------------------------------------------ */

const trocaitcgPrivacy: Policy = {
  intro: (
    <>
      <p>
        O TrocaíTcg ajuda colecionadores de Pokémon TCG da mesma cidade ou loja a trocar cartas. Você cadastra as cartas
        que tem repetidas e as que procura, o app cruza as listas e mostra quem tem o que você quer. Esta política
        explica quais dados pessoais o app coleta, por que coleta, com quem compartilha, por quanto tempo guarda e como
        você controla esses dados. Ela vale para o app no iPhone (App Store) e no Android (Google Play).
      </p>
      <p>
        O TrocaíTcg é um app de fãs, sem vínculo com Nintendo, Creatures, GAME FREAK ou The Pokémon Company.
      </p>
    </>
  ),
  sections: [
    { id: "responsavel", title: "Quem é o responsável", content: <ControllerBlock appName="TrocaíTcg" /> },
    {
      id: "dados",
      title: "Dados que coletamos",
      content: (
        <>
          <LegalTable
            head={["Dado", "Quando é coletado", "Obrigatório?"]}
            rows={[
              ["E-mail e senha", "Ao criar a conta. A senha fica criptografada no Supabase e nós não temos acesso a ela.", "Sim"],
              ["Nome de exibição e cidade", "No cadastro, para mostrar você a colecionadores perto de você.", "Sim"],
              ["Bairro e loja onde você joga", "No cadastro, se você quiser informar.", "Não"],
              ["Suas listas de cartas", "Cartas que você tem repetidas e cartas que procura, com quantidade, estado e idioma.", "Sim, para usar o app"],
              ["Trocas e mensagens", "Propostas de troca, cartas envolvidas, status, local de encontro combinado e mensagens do chat.", "Só se você trocar"],
              ["Token de notificação", "Se você permitir notificações, para avisar sobre mensagens e propostas.", "Não"],
              ["Denúncias e bloqueios", "Quando você denuncia ou bloqueia alguém: motivo e detalhes que você escrever.", "Não"],
            ]}
          />
          <p>
            O app <b>não usa a localização do celular</b>: a cidade, o bairro e a loja são digitados por você. O app também
            não coleta fotos, contatos, dados de pagamento, histórico de navegação nem identificadores de publicidade.
          </p>
        </>
      ),
    },
    {
      id: "finalidades",
      title: "Para que usamos e com qual base legal",
      content: (
        <LegalTable
          head={["Finalidade", "Base legal (LGPD, art. 7º)"]}
          rows={[
            ["Criar e manter sua conta e permitir o login", "Execução de contrato (inciso V)"],
            ["Cruzar suas listas com as de outros colecionadores da mesma cidade ou loja", "Execução de contrato (inciso V)"],
            ["Criar propostas de troca e o chat entre os dois participantes", "Execução de contrato (inciso V)"],
            ["Enviar notificações de mensagens e propostas", "Consentimento (inciso I), dado pela permissão do celular"],
            ["Analisar denúncias, aplicar bloqueios e limitar propostas para evitar spam", "Legítimo interesse (inciso IX)"],
            ["Guardar registros exigidos por lei e responder a autoridades", "Cumprimento de obrigação legal (inciso II)"],
          ]}
        />
      ),
    },
    {
      id: "visibilidade",
      title: "O que outros usuários veem",
      content: (
        <>
          <p>
            Para o cruzamento funcionar, usuários logados podem ver <b>seu nome de exibição, sua cidade, seu bairro e sua
            loja</b> (se informados) e <b>suas listas de cartas</b>.
          </p>
          <p>
            Propostas, cartas de uma troca, local de encontro e mensagens do chat só aparecem para as duas pessoas da troca.
            Seu e-mail não é mostrado a ninguém. Quem você bloqueia deixa de ver você nos matches e não pode mais trocar
            mensagens com você.
          </p>
          <p>
            Trocas presenciais são combinadas entre os usuários. Prefira lugares públicos, como a loja onde vocês jogam, e
            não compartilhe no chat dados que você não quer tornar conhecidos.
          </p>
        </>
      ),
    },
    {
      id: "compartilhamento",
      title: "Com quem compartilhamos",
      content: (
        <>
          <p>Não vendemos seus dados. Só compartilhamos com os serviços abaixo, para o app funcionar:</p>
          <LegalTable
            head={["Serviço", "O que recebe", "Para quê"]}
            rows={[
              ["Supabase", "Conta, perfil, listas, trocas, mensagens, denúncias e bloqueios", "Login, banco de dados e chat em tempo real"],
              ["Expo (650 Industries, Inc.)", "Token de notificação, nome de quem enviou e início da mensagem (até 180 caracteres)", "Entrega das notificações push"],
              ["Apple e Google", "O conteúdo da notificação, repassado pela Expo", "Mostrar a notificação no seu celular"],
              ["TCGdex", "Dados técnicos do acesso, como o endereço IP, quando o app carrega a imagem de uma carta", "Imagens das cartas do catálogo"],
            ]}
          />
          <p>
            Esses fornecedores tratam os dados apenas para prestar o serviço ao TrocaíTcg, com proteção equivalente à desta
            política. Também podemos compartilhar dados quando a lei ou uma ordem judicial exigir.
          </p>
        </>
      ),
    },
    {
      id: "transferencia",
      title: "Transferência internacional",
      content: (
        <p>
          Os servidores do Supabase, da Expo e do TCGdex podem ficar fora do Brasil. Essas transferências seguem o art. 33
          da LGPD, com cláusulas contratuais de proteção de dados oferecidas por esses fornecedores.
        </p>
      ),
    },
    {
      id: "permissoes",
      title: "Permissões do celular",
      content: (
        <p>
          O TrocaíTcg só pede uma permissão: <b>notificações</b>, para avisar sobre mensagens e propostas de troca. Você
          pode negar ou desligar nos ajustes do celular e continuar usando o app. Quando você sai da conta, o aparelho
          deixa de receber as notificações dela.
        </p>
      ),
    },
    {
      id: "publicidade",
      title: "Publicidade e rastreamento",
      content: (
        <p>
          O TrocaíTcg não mostra anúncios publicitários, não usa ferramentas de análise de terceiros e não rastreia você
          em outros apps ou sites.
        </p>
      ),
    },
    {
      id: "retencao",
      title: "Por quanto tempo guardamos",
      content: (
        <ul>
          <li>Os dados da conta, do perfil e das listas ficam guardados enquanto sua conta existir.</li>
          <li>Quando você remove uma carta da lista, ela é apagada.</li>
          <li>
            Quando você exclui a conta, apagamos o login, o perfil, as listas, os bloqueios, as denúncias feitas por você
            ou contra você, os tokens de notificação e todas as trocas de que você participou, com os itens e as mensagens.
          </li>
        </ul>
      ),
    },
    {
      id: "seguranca",
      title: "Segurança",
      content: (
        <p>
          Os dados trafegam com criptografia (HTTPS). No banco de dados, regras de acesso por linha garantem que trocas e
          mensagens só sejam lidas pelos dois participantes, e o token de notificação não pode ser lido por nenhum usuário.
          Para evitar spam, cada conta pode fazer até 20 propostas de troca a cada 24 horas. Nenhum sistema é totalmente
          imune a falhas. Se acontecer um incidente que possa trazer risco a você, avisaremos você e a ANPD.
        </p>
      ),
    },
    {
      id: "denuncias",
      title: "Denúncias e bloqueios",
      content: (
        <p>
          No perfil de um match ou numa conversa, toque em <b>Bloquear ou denunciar</b>. Denunciar também bloqueia a pessoa
          na hora. As denúncias vão para a nossa equipe, que analisa cada caso e pode remover contas que desrespeitem
          outros usuários.
        </p>
      ),
    },
    {
      id: "direitos",
      title: "Seus direitos",
      content: <RightsBlock />,
    },
    {
      id: "exclusao",
      title: "Como excluir sua conta",
      content: (
        <>
          <p>
            No app, abra a aba <b>Perfil</b>, toque em <b>Excluir conta</b> e confirme. A exclusão é imediata e não pode ser
            desfeita.
          </p>
          <p>
            Se você não tem mais o app instalado, peça a exclusão pela página{" "}
            <Link href="/apps/trocaitcg/excluir-conta">Excluir conta do TrocaíTcg</Link>.
          </p>
        </>
      ),
    },
    {
      id: "criancas",
      title: "Crianças e adolescentes",
      content: (
        <p>
          O TrocaíTcg não é destinado a menores de 13 anos. Como as trocas podem envolver encontros presenciais, quem tem
          entre 13 e 17 anos deve usar o app e combinar encontros com o acompanhamento de um responsável. Se soubermos que
          uma conta pertence a uma criança com menos de 13 anos, ela será excluída.
        </p>
      ),
    },
    {
      id: "mudancas",
      title: "Mudanças nesta política",
      content: (
        <p>
          Quando esta política mudar, atualizamos a data no topo da página. Se a mudança for relevante, avisamos também
          dentro do app.
        </p>
      ),
    },
    {
      id: "contato",
      title: "Contato",
      content: (
        <p>
          Dúvidas, pedidos sobre seus dados ou denúncias: <PrivacyMail subject="TrocaíTcg — privacidade" />.
        </p>
      ),
    },
  ],
};

const trocaitcgDeletion: Policy = {
  intro: (
    <p>
      Esta página explica como excluir sua conta do <b>TrocaíTcg</b>, app da SideQuest Studio, e o que acontece com seus
      dados.
    </p>
  ),
  sections: [
    {
      id: "no-app",
      title: "Pelo app",
      content: (
        <ol>
          <li>Abra o TrocaíTcg e entre na sua conta.</li>
          <li>Toque na aba <b>Perfil</b>.</li>
          <li>Toque em <b>Excluir conta</b> e confirme.</li>
        </ol>
      ),
    },
    {
      id: "por-email",
      title: "Sem o app instalado",
      content: (
        <>
          <p>
            Envie um e-mail para <PrivacyMail subject="Excluir conta — TrocaíTcg" /> com o assunto{" "}
            <b>Excluir conta — TrocaíTcg</b>, a partir do e-mail cadastrado na sua conta.
          </p>
          <p>Podemos pedir uma confirmação para ter certeza de que o pedido é seu. A conta é excluída em até 15 dias.</p>
        </>
      ),
    },
    {
      id: "apagado",
      title: "O que é apagado",
      content: (
        <ul>
          <li>Conta de login (e-mail e senha).</li>
          <li>Perfil: nome de exibição, cidade, bairro e loja.</li>
          <li>Suas listas de cartas repetidas e procuradas.</li>
          <li>
            Todas as trocas de que você participou, com as cartas, o local de encontro e as mensagens. Elas somem também
            para a outra pessoa da troca.
          </li>
          <li>Bloqueios, denúncias feitas por você ou contra você e os tokens de notificação dos seus aparelhos.</li>
        </ul>
      ),
    },
    {
      id: "mantido",
      title: "O que pode ser mantido",
      content: (
        <p>
          Nada fica ligado à sua conta depois da exclusão. Só guardamos algum dado se a lei ou uma ordem judicial exigir,
          pelo prazo que ela determinar.
        </p>
      ),
    },
  ],
};

type PolicyApp = { slug: string; name: string; privacy: Policy; deletion: Policy; /** Sem data própria, vale a de lib/site.ts. */ updated?: string };

/** Apps com política de privacidade publicada. A vitrine do site (lib/apps.ts) pode ter menos apps que esta lista. */
export const POLICY_APPS: PolicyApp[] = [
  { slug: "mypetmatch", name: "MyPetMatch", privacy: petmatchPrivacy, deletion: petmatchDeletion },
  { slug: "levelfit", name: "Level Fit", privacy: levelfitPrivacy, deletion: levelfitDeletion },
  { slug: "trocaitcg", name: "TrocaíTcg", privacy: trocaitcgPrivacy, deletion: trocaitcgDeletion, updated: "27 de novembro de 2026" },
];

export function getPolicies(slug: string) {
  return POLICY_APPS.find((a) => a.slug === slug);
}
