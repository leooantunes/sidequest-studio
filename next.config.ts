import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // O site tem três layouts raiz (estúdio, Level Fit e MyPetMatch); a 404 geral fica em app/global-not-found.tsx.
    globalNotFound: true,
  },
  async redirects() {
    return [
      // A política e a exclusão de conta de cada app ficam num lugar só, em /apps/<app>/...
      { source: "/levelfit/privacidade", destination: "/apps/levelfit/privacidade", permanent: true },
      { source: "/levelfit/privacy", destination: "/apps/levelfit/privacidade", permanent: true },
      { source: "/levelfit/excluir-conta", destination: "/apps/levelfit/excluir-conta", permanent: true },
      { source: "/mypetmatch/privacidade", destination: "/apps/mypetmatch/privacidade", permanent: true },
      { source: "/mypetmatch/excluir-conta", destination: "/apps/mypetmatch/excluir-conta", permanent: true },
    ];
  },
};

export default nextConfig;
