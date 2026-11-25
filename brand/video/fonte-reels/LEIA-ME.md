# Reels — como gerar de novo

O vídeo `../sidequest-reels.mp4` (1080×1920, 30 fps, 30 s) é feito a partir destes arquivos:

- `stage.html`: as 7 cenas (PRESS START, diálogo, party, skills, conquistas, chefe final e "Aceitar a quest?"). A função `render(t)` desenha o quadro do segundo `t`.
- `music.py`: trilha 8-bit a 150 BPM com os efeitos sonoros sincronizados com as cenas (precisa de `numpy`).
- `frames.js`: salva cada quadro em `frames/` com o Playwright.

Imagens esperadas em `shots/`: `petmatch-pixel.png` e `levelfit-brasa.png` (de `public/apps/`), e prints do site em tela de celular (390×844, escala 3) de `/mypetmatch` e `/levelfit`, salvos como `m-mypetmatch.png` e `m-levelfit.png`.

Os textos ficam na faixa central (entre y=260 e y=1560), fora da área que o Instagram cobre com a legenda e os botões.

```bash
python3 music.py
```

```bash
mkdir -p frames && for k in 0 1 2; do node frames.js $k 3 & done; wait
```

```bash
ffmpeg -y -framerate 30 -i frames/%05d.jpg -i trilha.wav -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 192k -shortest ../sidequest-reels.mp4
```
