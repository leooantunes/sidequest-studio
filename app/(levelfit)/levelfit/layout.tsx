import type { Metadata, Viewport } from "next";
import { Bungee, Rubik } from "next/font/google";

import { SiteFooter, SiteHeader } from "@/components/levelfit/SiteChrome";
import { site } from "@/content/levelfit/site";

import "./levelfit.css";

const bungee = Bungee({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const rubik = Rubik({ weight: ["400", "500", "600", "800"], subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: `${site.appName} — ${site.tagline}`, template: `%s · ${site.appName}` },
  description:
    "Level Fit: desafie um amigo num duelo de hábitos saudáveis. Poste a prova, some pontos e ganhe o cinturão do dia, da semana e do mês.",
  openGraph: { siteName: site.appName, images: ["/apps/levelfit-icon.png"], locale: "pt_BR" },
};

export const viewport: Viewport = { themeColor: "#FFF3E3" };

export default function LevelFitLayout({ children }: LayoutProps<"/levelfit">) {
  return (
    <html lang="pt-BR" className={`${bungee.variable} ${rubik.variable}`}>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
