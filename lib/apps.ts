export type AppFeature = { title: string; text: string };

export type ShowcaseApp = {
  slug: "mypetmatch" | "levelfit";
  name: string;
  tagline: string;
  summary: string;
  category: string;
  platforms: string;
  icon: string;
  repo: string;
  /** Site do produto, quando existe. */
  site?: string;
  stats: { value: string; label: string }[];
  features: AppFeature[];
  stack: string[];
  challenge: string;
  build: string;
};

export const apps: ShowcaseApp[] = [
  {
    slug: "mypetmatch",
    name: "MyPetMatch",
    tagline: "Adoção de pets sem burocracia.",
    summary:
      "Conecta quem quer adotar a quem precisa doar um cachorro ou gato. Cada anúncio passa por aprovação antes de aparecer, e a conversa vai direto para o WhatsApp do responsável.",
    category: "Adoção de animais",
    platforms: "iOS e Android",
    icon: "/apps/petmatch-pixel.png",
    repo: "https://github.com/leooantunes/petmatch",
    site: "/mypetmatch",
    stats: [
      { value: "3", label: "formas de login: e-mail, Google e Apple" },
      { value: "100%", label: "dos anúncios moderados antes de ir ao ar" },
      { value: "1 toque", label: "para falar com o tutor no WhatsApp" },
    ],
    features: [
      { title: "Vitrine de pets", text: "Lista com fotos, idade, raça e cidade de cada animal disponível." },
      { title: "Anúncio completo", text: "Várias fotos por pet, raças de cães e gatos e localização automática." },
      { title: "Aprovação de anúncios", text: "Todo pet entra como pendente e só aparece depois da revisão de um admin." },
      { title: "Contato pelo WhatsApp", text: "Quem quer adotar fala direto com o responsável, sem chat intermediário." },
      { title: "ONGs parceiras", text: "Página das ONGs com Pix e WhatsApp para doações e voluntariado." },
      { title: "Notificações push", text: "O tutor é avisado quando o anúncio é aprovado ou recusado." },
    ],
    stack: ["React Native", "Expo", "Expo Router", "Firebase Auth", "Firestore", "Firebase Storage", "Cloud Functions", "Expo Notifications"],
    challenge:
      "Adoção pela internet costuma acontecer em grupos e posts soltos, sem filtro e sem contato fácil. O app precisava ser simples para quem anuncia e seguro para quem adota.",
    build:
      "Um app nativo para iOS e Android com login social, fluxo de aprovação com painel de admin, upload de várias fotos e modo escuro, tudo em Firebase.",
  },
  {
    slug: "levelfit",
    name: "Level Fit",
    tagline: "Hábitos saudáveis viram uma luta.",
    summary:
      "Um duelo de hábitos entre duas pessoas. Cada meta cumprida é provada com foto, os pontos viram placar e o vencedor do dia, da semana e do mês ganha uma comemoração com troféu e confete.",
    category: "Saúde e hábitos",
    platforms: "iOS e Android, com widget",
    icon: "/apps/levelfit-icon.png",
    repo: "https://github.com/leooantunes/levelfit",
    site: "/levelfit",
    stats: [
      { value: "15", label: "hábitos prontos para montar as metas" },
      { value: "3", label: "rankings: diário, semanal e mensal" },
      { value: "15", label: "conquistas e ranks de lutador" },
    ],
    features: [
      { title: "Duelo 1 contra 1", text: "Crie um duelo, escolha as metas e mande o código de 6 letras para o rival." },
      { title: "Prova com foto", text: "Toda meta precisa de foto. O rival pode reagir ou contestar uma prova suspeita." },
      { title: "Desafio do dia", text: "Um hábito bônus que vale 2x, sorteado igual nos dois celulares." },
      { title: "Combo e aposta", text: "Sequências de 3, 7 e 14 dias multiplicam os pontos. Quem perde paga a aposta." },
      { title: "Widget e relógio", text: "Placar na tela inicial e metas validadas pelo Apple Health ou Health Connect." },
      { title: "Level Fit Pro", text: "Assinatura com duelos ilimitados, comprada pela loja com RevenueCat." },
    ],
    stack: ["React Native", "Expo SDK 58", "Supabase", "Postgres + RLS", "Realtime", "RevenueCat", "SwiftUI widget", "Jetpack Compose widget"],
    challenge:
      "Apps de hábito são fáceis de abandonar na segunda semana. A ideia era trocar a disciplina solitária pela vontade de ganhar de um amigo.",
    build:
      "Placar sempre recalculado a partir das provas, para os dois celulares chegarem ao mesmo resultado. Funciona sem internet com fila de sincronização, tem widgets nativos e integração com dados de saúde.",
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
