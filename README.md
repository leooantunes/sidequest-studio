# SideQuest Studio — site

Site institucional da SideQuest Studio (Leo & Raduchiu), em Next.js 16 (App Router).

## Rodar

```bash
npm install
npm run dev
```

## Onde mexer

- `lib/site.ts` — e-mail de contato e GitHub (troque pelo e-mail real antes de publicar).
- `lib/apps.ts` — textos, funcionalidades e tecnologias dos apps da vitrine.
- `components/PhoneMocks.tsx` — as telas ilustradas do MyPetMatch e do Level Fit.
- `app/globals.css` — tokens da identidade visual (Verde Leo, Roxo Raduchiu, Tinta, Pergaminho, Ouro XP).

Páginas: `/` (início) e `/apps/mypetmatch`, `/apps/levelfit` (cases).

## Identidade visual

`brand/identidade-visual.html` é o manual de marca (abra no navegador) e `brand/logo/` tem os SVGs do símbolo `<!>`.

## Privacidade e exclusão de conta (para as lojas)

| Página | Onde usar |
|---|---|
| `/apps/mypetmatch/privacidade` | App Store Connect e Google Play: URL da política de privacidade do MyPetMatch |
| `/apps/levelfit/privacidade` | App Store Connect e Google Play: URL da política de privacidade do Level Fit |
| `/apps/mypetmatch/excluir-conta` | Google Play → Segurança dos dados: URL para excluir a conta |
| `/apps/levelfit/excluir-conta` | Google Play → Segurança dos dados: URL para excluir a conta |
| `/privacidade` | Política do próprio site, com links para as dos apps |

Os textos ficam em `components/legal/policies.tsx`. Antes de publicar, preencha `legalName`, `cnpj` e `privacyEmail` em `lib/site.ts`, e atualize `policyUpdated` sempre que mudar o texto.
