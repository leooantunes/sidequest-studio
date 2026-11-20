/**
 * Conteúdo da página de apresentação. Números e listas vêm do app (leooantunes/levelfit):
 * src/domain/habits.ts, scoring.ts e progression.ts. Mudou lá, mude aqui.
 */

export const FEATURES = [
  { icon: '🎯', title: 'Metas sugeridas', text: 'Pacotes prontos ou monte o seu com 15 hábitos: água, leitura, dieta, treino, sono, passos, meditação e mais.' },
  { icon: '📸', title: 'Prova com foto', text: 'Cumpriu? Tire a foto. Seu rival pode reagir, ou contestar se achar que é migué.' },
  { icon: '⌚', title: 'Relógio conectado', text: 'Passos, treinos, sono e meditação viram prova automática pelo Apple Health ou Health Connect.' },
  { icon: '🏆', title: 'Ranking com festa', text: 'Placar diário, semanal e mensal, com pódio, troféu e confete para quem vencer.' },
  { icon: '⚡', title: 'Desafio do dia', text: 'Um hábito bônus fora das suas metas que vale o dobro. Os dois recebem o mesmo.' },
  { icon: '💸', title: 'Aposta', text: '“Quem perder paga o açaí.” A tela de vitória lembra quem está devendo.' },
  { icon: '😂', title: 'Reações', text: '🔥 💪 👏 😂 🤨 nas provas do rival. A zoeira faz parte do treino.' },
  { icon: '🔔', title: 'Lembretes', text: 'Um toque no almoço e outro no horário que você escolher à noite.' },
  { icon: '📱', title: 'Widget', text: 'O placar do dia na tela inicial e na tela de bloqueio, no iPhone e no Android.' },
];

export const HABITS = [
  { emoji: '🏋️', title: 'Treino de 30 min', points: 25 },
  { emoji: '📚', title: 'Ler 10 páginas', points: 15 },
  { emoji: '👟', title: '10 mil passos', points: 15 },
  { emoji: '🍭', title: 'Zero açúcar', points: 15 },
  { emoji: '😴', title: 'Dormir 7h+', points: 12 },
  { emoji: '💧', title: 'Beber 2L de água', points: 10 },
  { emoji: '🧘', title: 'Meditar 10 min', points: 10 },
  { emoji: '🍎', title: '3 porções de fruta/legume', points: 10 },
  { emoji: '📵', title: 'Sem tela antes de dormir', points: 10 },
  { emoji: '🌅', title: 'Acordar cedo', points: 10 },
  { emoji: '🧃', title: 'Zero álcool', points: 10 },
  { emoji: '🥗', title: 'Refeição da dieta (até 3/dia)', points: 8 },
  { emoji: '🤸', title: 'Alongamento', points: 8 },
  { emoji: '🌳', title: '20 min ao ar livre', points: 8 },
  { emoji: '✍️', title: 'Diário de gratidão', points: 8 },
];

export const PACKS = [
  { emoji: '⚖️', title: 'Equilíbrio', text: 'O clássico: corpo, mente e alimentação.' },
  { emoji: '🔥', title: 'Modo Shape', text: 'Foco total em treino e dieta.' },
  { emoji: '🧠', title: 'Mente Zen', text: 'Menos estresse, mais foco e descanso.' },
  { emoji: '🌱', title: 'Primeiros Passos', text: 'Leve e fácil de manter para começar.' },
];

export const STEPS = [
  { title: 'Crie sua conta', text: 'Escolha nome, avatar e a cor do seu canto.' },
  { title: 'Monte o duelo', text: 'Escolha as metas e, se quiser, uma aposta.' },
  { title: 'Chame seu rival', text: 'Mande o código de 6 letras. Quando ele entrar, a luta começa.' },
  { title: 'Poste as provas', text: 'Cada meta cumprida, com foto ou pelo relógio, soma pontos no placar.' },
  { title: 'Ganhe o cinturão', text: 'No fim de cada dia, semana e mês, o app anuncia o vencedor.' },
];

export const SCORING = [
  { value: '×1.1', label: '3 dias seguidos' },
  { value: '×1.25', label: '7 dias seguidos' },
  { value: '×1.5', label: '14 dias seguidos' },
  { value: '+30', label: 'Dia perfeito: todas as metas' },
  { value: '×2', label: 'Desafio do dia' },
];

export const RANKS = [
  'Saco de Pancada',
  'Novato',
  'Amador',
  'Peso-Pena',
  'Peso-Médio',
  'Peso-Pesado',
  'Campeão',
  'Lenda do Ringue',
];

export const PLANS = {
  free: ['1 duelo ativo por vez', 'Todas as metas, provas, rankings e conquistas', 'Relógio, widget e lembretes'],
  pro: ['Duelos ilimitados, cada um com um rival diferente', 'Planos mensal, anual ou vitalício', 'Preços na loja, em moeda local'],
};

/** Perguntas frequentes. Aceita **negrito** e {{email}} (veja RichText). */
export const FAQ = [
  {
    q: 'O Level Fit é grátis?',
    a: 'Sim. Você joga com tudo liberado em 1 duelo por vez. O Premium libera duelos ilimitados ao mesmo tempo.',
  },
  {
    q: 'Meu rival precisa ter o app?',
    a: 'Precisa. Cada duelo tem 2 jogadores: você cria, manda o código de 6 letras e seu rival entra pelo app dele, no iPhone ou no Android.',
  },
  {
    q: 'E se meu rival postar uma foto suspeita?',
    a: 'Toque na prova e **conteste**. Prova contestada não pontua até ser aceita. Se for algo impróprio, use **Denunciar** e, se quiser, bloqueie o rival.',
  },
  {
    q: 'Preciso de relógio?',
    a: 'Não. Toda meta pode ser provada com foto. O relógio só automatiza passos, treinos, sono, meditação e tempo ao ar livre, e é você quem decide ligar.',
  },
  {
    q: 'Como cancelo o Premium?',
    a: 'Nos ajustes da sua conta da App Store ou do Google Play, em **Assinaturas**.',
  },
  {
    q: 'Troquei de celular. Perco meus duelos?',
    a: 'Não. Tudo fica na nuvem. Entre com o mesmo e-mail e use **Restaurar compras** se você for Premium.',
  },
  {
    q: 'Não achei minha dúvida aqui.',
    a: 'Escreva para {{email}}. Respondemos em até 2 dias úteis.',
  },
];
