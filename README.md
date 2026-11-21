# SideQuest Studio — site

Site institucional da SideQuest Studio (Leo & Raduchiu), em Next.js 16 (App Router).

## Rodar

```bash
npm install
npm run dev
```

## Onde mexer

- `lib/site.ts` — e-mail de contato (contatosidequeststudio@gmail.com), GitHub e dados do responsável. Tudo no site lê daqui.
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

Os textos ficam em `components/legal/policies.tsx`. Antes de publicar, confira `legalName` e `cnpj` em `lib/site.ts`, e atualize `policyUpdated` sempre que mudar o texto.

## Sites dos produtos

Cada app tem o próprio site, com layout, fontes e CSS separados do site do estúdio (route groups com layouts raiz próprios):

| Rota | Origem | Arquivos |
|---|---|---|
| `/levelfit` | Trazido do repositório `levelfitweb` | `app/(levelfit)/levelfit/`, `components/levelfit/`, `content/levelfit/` |
| `/mypetmatch` | Criado no mesmo formato, com a identidade do app | `app/(mypetmatch)/mypetmatch/`, `components/mypetmatch/`, `content/mypetmatch/` |

A política e a exclusão de conta de cada app ficam só em `/apps/<app>/privacidade` e `/apps/<app>/excluir-conta`; `/levelfit/privacidade`, `/mypetmatch/privacidade` e as de exclusão redirecionam para lá (`next.config.ts`). Os links das lojas ficam em `content/levelfit/site.ts` e `content/mypetmatch/app.ts`; sem eles, os botões aparecem como "em breve".

### Logo em PNG

Em `brand/logo/png/`, com fundo transparente (exceto o ícone quadrado):

| Arquivo | Uso |
|---|---|
| `logo-horizontal.png` / `logo-horizontal-escuro.png` | Logo principal (2640×764), para fundo claro e para fundo escuro |
| `logo-vertical.png` / `logo-vertical-escuro.png` | Espaços quadrados (1860×1426) |
| `logo-vertical-fundo-escuro.png` | Logo vertical já com fundo Tinta (2048×2048, sem transparência): posts e capas |
| `simbolo.png` / `simbolo-escuro.png` | Só o símbolo `<!>` (1024×1024) |
| `icone-app.png` | Ícone com cantos arredondados (1024×1024): avatar, Discord, GitHub |
| `icone-app-quadrado.png` | Ícone sem transparência (1024×1024), para lojas e redes que arredondam sozinhas |
