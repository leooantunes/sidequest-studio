/**
 * Conteúdo do site do MyPetMatch. Tudo aqui vem do app (leooantunes/petmatch):
 * APP_RULES.md, telas em app/screens e as funções em functions/index.js. Mudou lá, mude aqui.
 */
import { site as studio } from "@/lib/site";

export const site = {
  appName: "MyPetMatch",
  tagline: "Adoção de pets sem burocracia.",
  supportEmail: studio.privacyEmail as string | null,
  controllerName: studio.legalName as string | null,
  /** Links das lojas. Sem eles, os botões aparecem como "em breve". */
  appStoreUrl: null as string | null,
  playStoreUrl: null as string | null,
};

export const FEATURES = [
  { icon: "🐾", title: "Vitrine de pets", text: "Cães e gatos disponíveis, com fotos, idade, raça, cidade e um pouco da história de cada um." },
  { icon: "📸", title: "Galeria de fotos", text: "Cada anúncio pode ter várias fotos, para você conhecer o pet antes de conversar." },
  { icon: "💬", title: "WhatsApp em um toque", text: "Gostou? O app abre o WhatsApp do tutor com uma mensagem pronta para começar a conversa." },
  { icon: "✅", title: "Anúncios revisados", text: "Todo pet passa pela nossa equipe antes de aparecer. Quem anuncia é avisado quando o anúncio vai ao ar." },
  { icon: "📍", title: "Cidade automática", text: "Ao anunciar, um toque preenche a cidade pela localização. As coordenadas não são guardadas." },
  { icon: "🏠", title: "ONGs parceiras", text: "Conheça ONGs de proteção animal e ajude com Pix ou fale com elas pelo WhatsApp." },
];

export const ADOPT_STEPS = [
  { title: "Crie sua conta", text: "Com e-mail, Google ou Apple." },
  { title: "Encontre um pet", text: "Veja os cães e gatos disponíveis e abra o perfil de quem chamou sua atenção." },
  { title: "Fale com o tutor", text: "Toque em Entrar em contato e combine tudo pelo WhatsApp." },
];

export const DONATE_STEPS = [
  { title: "Tire as fotos", text: "Pelo menos uma. Quanto mais, melhor." },
  { title: "Conte sobre o pet", text: "Nome, idade, raça, se é castrado, cidade e uma descrição. Animal de rua também pode." },
  { title: "Espere a aprovação", text: "Nossa equipe revisa o anúncio e você recebe uma notificação quando ele for ao ar." },
];

export const AGES = ["0-1 ano", "1-3 anos", "4-6 anos", "7-9 anos", "10-12 anos", "13+ anos", "Idade desconhecida"];

export const PRIVACY_SUMMARY = [
  { icon: "🚫", text: "Não vendemos seus dados e o app não tem anúncios." },
  { icon: "📞", text: "Seu telefone só aparece para usuários logados, e só quando você tem um pet anunciado." },
  { icon: "📍", text: "A localização serve só para descobrir a cidade. As coordenadas não são guardadas." },
  { icon: "🗑️", text: "Você apaga a conta, os anúncios e as fotos pelo próprio app, quando quiser." },
];

/** Perguntas frequentes. Aceita **negrito** e {{email}}. */
export const FAQ = [
  {
    q: "O MyPetMatch é grátis?",
    a: "Sim. Anunciar um pet e procurar um pet para adotar não custa nada.",
  },
  {
    q: "Por que meu anúncio ainda não apareceu?",
    a: "Todo pet passa por uma revisão da nossa equipe antes de ir ao ar. Você recebe uma **notificação** quando o anúncio for aprovado ou recusado, com o motivo.",
  },
  {
    q: "Como falo com quem está doando?",
    a: "Abra o perfil do pet e toque em **Entrar em contato**. O app abre o WhatsApp do tutor com uma mensagem pronta.",
  },
  {
    q: "Quem vê meu telefone?",
    a: "Só usuários logados, e só enquanto você tiver um pet anunciado, para que interessados possam falar com você. Seu e-mail não aparece para ninguém.",
  },
  {
    q: "Posso anunciar um animal de rua?",
    a: "Pode. No cadastro do pet, escolha **Animal de rua**.",
  },
  {
    q: "Como excluo minha conta?",
    a: "No app, abra **Editar perfil → Excluir conta**. Seus anúncios e fotos são apagados junto.",
  },
  {
    q: "Não achei minha dúvida aqui.",
    a: "Escreva para {{email}}.",
  },
];
