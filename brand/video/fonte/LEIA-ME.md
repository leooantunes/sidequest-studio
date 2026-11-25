# Vídeo promocional — como gerar de novo

O vídeo `../sidequest-promo.mp4` (1920×1080, 30 fps, 34 s) é feito a partir destes arquivos:

- `stage.html`: as 8 cenas. A função `render(t)` desenha o quadro do segundo `t`. Textos, tempos e cores ficam aqui.
- `music.py`: a trilha 8-bit, sintetizada em Python (precisa de `numpy`). Gera `trilha.wav`.
- `frames.js`: abre o `stage.html` no Playwright e salva cada quadro em `frames/`.

Passo a passo, dentro desta pasta:

1. Rode o site (`npm run build && npx next start -p 3130`) e salve prints de página inteira, com 1440 px de largura, em `shots/`: `home.png` (`/`), `mypetmatch.png` (`/mypetmatch`) e `levelfit.png` (`/levelfit`).
2. Gere a trilha e os quadros:

```bash
python3 music.py
```

```bash
mkdir -p frames && for k in 0 1 2; do node frames.js $k 3 & done; wait
```

3. Junte tudo:

```bash
ffmpeg -y -framerate 30 -i frames/%05d.jpg -i trilha.wav -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 160k -shortest ../sidequest-promo.mp4
```
