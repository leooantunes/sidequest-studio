import numpy as np, wave
SR = 44100; DUR = 30.0; N = int(SR * DUR)
music = np.zeros(N); sfx = np.zeros(N)
BPM = 150; BEAT = 60 / BPM; BAR = BEAT * 4; S16 = BEAT / 4
rng = np.random.default_rng(11)

def midi(n): return 440.0 * 2 ** ((n - 69) / 12)
def add(buf, sig, start):
    i = int(start * SR)
    if i >= N or i < 0: return
    j = min(N, i + len(sig)); buf[i:j] += sig[: j - i]
def env(n, a=0.004, r=0.05):
    e = np.ones(n); na = min(n, max(1, int(a * SR))); nr = min(n - na, max(1, int(r * SR))) or 1
    e[:na] = np.linspace(0, 1, na); e[-nr:] *= np.linspace(1, 0, nr); return e
def sq(freq, dur, duty=0.5, vol=0.1, slide=0.0):
    t = np.arange(int(dur * SR)) / SR
    f = freq * (1 + slide * t / max(dur, 1e-6))
    ph = np.cumsum(f) / SR % 1.0
    return np.where(ph < duty, 1.0, -1.0) * vol * env(len(t))
def tri(freq, dur, vol=0.2):
    t = np.arange(int(dur * SR)) / SR; ph = (t * freq) % 1.0
    return (4 * np.abs(ph - 0.5) - 1) * vol * env(len(t), r=0.02)
def noise(dur, decay, vol):
    t = np.arange(int(dur * SR)) / SR
    return rng.uniform(-1, 1, len(t)) * np.exp(-t * decay) * vol
def kick(vol=0.6):
    d = 0.16; t = np.arange(int(d * SR)) / SR; f = 130 * np.exp(-t * 20) + 45
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 15) * vol

# ---------- música (Am – F – C – G, com variação no chefe) ----------
prog = [(45, [57, 60, 64]), (41, [53, 57, 60]), (48, [55, 60, 64]), (43, [55, 59, 62])]
lead_a = [(76, 1), (74, .5), (72, .5), (74, 1), (76, 1)]
lead_b = [(72, 1), (74, .5), (76, .5), (79, 1), (76, 1)]
t0 = 2.9
bar = 0
while t0 < 29.0:
    root, chord = prog[bar % 4]
    boss = 21.6 <= t0 < 24.9
    calm = 24.9 <= t0 < 25.8
    if not calm:
        pat = (chord + [chord[0] + 12]) * 4
        for k, n in enumerate(pat[:16]):
            add(music, sq(midi(n + 12), S16 * 0.8, 0.25, 0.04), t0 + k * S16)
        for k in range(8):
            n = root + (12 if k % 2 else 0) if not boss else root + (0, 12, 0, 13)[k % 4]
            add(music, tri(midi(n), BEAT / 2 * 0.8, 0.24), t0 + k * BEAT / 2)
        for k in range(4):
            add(music, kick(), t0 + k * BEAT)
            if k % 2 == 1: add(music, noise(0.12, 30, 0.16), t0 + k * BEAT)
            add(music, np.diff(noise(0.035, 90, 0.08), prepend=0), t0 + k * BEAT + BEAT / 2)
        if bar % 2 == 0 and t0 > 7:
            tt = t0
            for n, beats in (lead_a if bar % 4 == 0 else lead_b):
                add(music, sq(midi(n), beats * BEAT * 0.85, 0.5, 0.032), tt); tt += beats * BEAT
    t0 += BAR; bar += 1

# ---------- efeitos ----------
def start_sfx(t):
    for k, n in enumerate([60, 67, 72, 79, 84]): add(sfx, sq(midi(n), 0.07, 0.5, 0.1), t + k * 0.045)
def coin(t): add(sfx, sq(midi(83), 0.06, 0.5, 0.1), t); add(sfx, sq(midi(88), 0.25, 0.5, 0.1), t + 0.06)
def blip(t): add(sfx, sq(midi(84 + rng.integers(0, 5)), 0.03, 0.5, 0.045), t)
def whoosh(t): add(sfx, noise(0.3, 9, 0.12) * np.linspace(0.2, 1, int(0.3 * SR)), t)
def stamp(t):
    add(sfx, kick(0.9), t); add(sfx, noise(0.2, 18, 0.2), t)
    for n in [69, 72, 76]: add(sfx, sq(midi(n), 0.35, 0.25, 0.05), t + 0.02)
def levelup(t):
    for k, n in enumerate([72, 76, 79, 84]): add(sfx, sq(midi(n), 0.08, 0.5, 0.08), t + k * 0.06)
def achievement(t):
    for k, n in enumerate([76, 79, 83, 88]): add(sfx, sq(midi(n), 0.1 if k < 3 else 0.35, 0.25, 0.08), t + k * 0.09)
def hit(t):
    add(sfx, noise(0.18, 22, 0.35), t); add(sfx, sq(midi(40), 0.15, 0.5, 0.12, slide=-0.6), t)
def victory(t):
    seq = [(72, .1), (72, .1), (72, .1), (72, .3), (68, .3), (70, .3), (72, .15), (70, .1), (72, .6)]
    tt = t
    for n, d in seq: add(sfx, sq(midi(n), d * 0.95, 0.5, 0.09), tt); add(sfx, sq(midi(n - 12), d * 0.95, 0.25, 0.04), tt); tt += d
def select(t): add(sfx, sq(midi(79), 0.05, 0.5, 0.09), t); add(sfx, sq(midi(91), 0.12, 0.5, 0.08), t + 0.05)
def move(t): add(sfx, sq(midi(74), 0.04, 0.5, 0.07), t)

# PRESS START piscando: bipes graves
for k in range(4): add(sfx, sq(midi(57), 0.05, 0.5, 0.035), k * 0.35)
start_sfx(1.4); coin(1.95)
L1, L2 = "Você tem uma ideia de app...", "...e precisa de alguém pra tirar do papel?"
for i in range(0, len(L1), 2): blip(3.15 + (4.4 - 3.15) * i / len(L1))
for i in range(0, len(L2), 2): blip(4.8 + (6.3 - 4.8) * i / len(L2))
whoosh(7.55); whoosh(7.95); stamp(10.0)
for a in [12.2, 13.0, 13.8]: levelup(a)
achievement(16.0); whoosh(18.55); achievement(18.8)
for h in [22.6, 23.2, 23.8, 24.4]: hit(h)
victory(24.95)
move(26.2); select(26.6); move(26.75); select(26.95); coin(27.75)
for n in [57, 64, 69, 72]: add(music, sq(midi(n), 1.6, 0.25, 0.035), 28.3)
add(music, tri(midi(45), 1.6, 0.22), 28.3)

mix = music * 0.85 + sfx
fi = int(0.05 * SR); mix[:fi] *= np.linspace(0, 1, fi)
fo = int(0.8 * SR); mix[-fo:] *= np.linspace(1, 0, fo)
mix = np.tanh(mix * 1.1) * 0.82
pcm = (mix * 32767).astype(np.int16)
with wave.open("trilha.wav", "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(np.column_stack([pcm, pcm]).ravel().tobytes())
print("ok", len(pcm) / SR, "pico", round(float(np.abs(mix).max()), 2))
