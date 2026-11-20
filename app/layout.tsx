import type { Metadata } from "next";
import { Bungee, Chakra_Petch, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Chakra_Petch({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Instrument_Sans({ variable: "--font-body", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });
const poster = Bungee({ variable: "--font-poster", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "SideQuest Studio · Software feito com alma de jogador",
    template: "%s · SideQuest Studio",
  },
  description:
    "Estúdio de software de Leo e Raduchiu. Criamos apps mobile, sites e sistemas com o cuidado de quem zera um jogo em 100%.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable} ${poster.variable}`}>
      <body>
        <a href="#conteudo" className="skip">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
