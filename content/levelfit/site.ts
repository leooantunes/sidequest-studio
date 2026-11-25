import { site as studio } from "@/lib/site";

/**
 * Dados do site do Level Fit, dentro do site da SideQuest Studio.
 * Responsável e e-mail vêm de lib/site.ts, para as políticas não ficarem com dados diferentes.
 */
export const site = {
  appName: "Level Fit",
  tagline: "Hábitos saudáveis viram uma luta.",
  controllerName: studio.legalName as string | null,
  supportEmail: studio.privacyEmail as string | null,
  /** Links das lojas. Sem eles, os botões aparecem como "em breve". */
  appStoreUrl: "https://apps.apple.com/br/app/level-fit-duelo-de-h%C3%A1bitos/id6837797590" as string | null,
  playStoreUrl: null as string | null,
};
