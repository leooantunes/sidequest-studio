import type { Metadata } from "next";
import { Chakra_Petch, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({ variable: "--font-display", subsets: ["latin"], weight: ["700"] });
const body = Instrument_Sans({ variable: "--font-body", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Página não encontrada · SideQuest Studio",
};

/** 404 para endereços que não existem. O site tem três layouts raiz (estúdio, Level Fit e MyPetMatch), então ele fica aqui. */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <main className="hero notfound">
          <div className="wrap notfound__inner">
            <p className="eyebrow eyebrow--dark">ERRO 404</p>
            <h1 className="hero__title">Essa quest não existe.</h1>
            <p className="hero__lede">O endereço pode ter mudado ou estar digitado errado.</p>
            <div className="hero__actions">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- página fora do roteador */}
              <a href="/" className="btn btn--green">Voltar para o início</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
