import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { SiteFooter, SiteHeader } from "@/components/mypetmatch/Site";
import { site } from "@/content/mypetmatch/app";

import "./mypetmatch.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: `${site.appName} — ${site.tagline}`, template: `%s · ${site.appName}` },
  description:
    "MyPetMatch: encontre um cachorro ou gato para adotar perto de você e fale direto com quem está doando. Anúncios revisados, contato pelo WhatsApp e ONGs parceiras.",
  openGraph: { siteName: site.appName, images: ["/apps/petmatch-pixel.png"], locale: "pt_BR" },
};

export const viewport: Viewport = { themeColor: "#E9F5EA" };

export default function MyPetMatchLayout({ children }: LayoutProps<"/mypetmatch">) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <a href="#conteudo" className="pm-skip">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
