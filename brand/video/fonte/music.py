import numpy as np, wave
SR = 44100
DUR = 34.0
N = int(SR * DUR)
mix = np.zeros(N)
BEAT = 0.5           # 120 BPM
S16 = BEAT / 4

def midi(n): return 440.0 * 2 ** ((n - 69) / 12)

def add(sig, start):
    i = int(start * SR)
    if i >= N: return
    j = min(N, i + len(sig))
    mix[i:j] += sig[: j - i]

def env(n, a=0.005, r=0.06):
    e = np.ones(n)
    na, nr = max(1, int(a * SR)), max(1, int(r * SR))
    e[:na] = np.linspace(0, 1, na)
    e[-nr:] *= np.linspace(1, 0, nr)
    return e

def pulse(freq, dur, duty=0.25, vol=0.1):
    t = np.arange(int(dur * SR)) / SR
    ph = (t * freq) % 1.0
    return np.where(ph < duty, 1.0, -1.0) * vol * env(len(t))

def tri(freq, dur, vol=0.2):
    t = np.arange(int(dur * SR)) / SR
    ph = (t * freq) % 1.0
    return (4 * np.abs(ph - 0.5) - 1) * vol * env(len(t), r=0.03)

def kick(vol=0.55):
    d = 0.18; t = np.arange(int(d * SR)) / SR
    f = 120 * np.exp(-t * 18) + 45
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 16) * vol

def snare(vol=0.18):
    d = 0.14; t = np.arange(int(d * SR)) / SR
    rng = np.random.default_rng(7)
    return rng.uniform(-1, 1, len(t)) * np.exp(-t * 28) * vol

def hat(vol=0.05):
    d = 0.04; t = np.arange(int(d * SR)) / SR
    rng = np.random.default_rng(3)
    n = rng.uniform(-1, 1, len(t)); n = np.diff(n, prepend=0)
    return n * np.exp(-t * 90) * vol

# Am – F – C – G (raiz em MIDI, oitava 2) e acordes para o arpejo
prog = [(45, [57, 60, 64]), (41, [53, 57, 60]), (48, [55, 60, 64]), (43, [55, 59, 62])]
bars = int(DUR // 2)
for b in range(bars):
    t0 = b * 2.0
    root, chord = prog[b % 4]
    last = b >= bars - 1
    # arpejo em semicolcheias (sobe e desce, uma oitava acima no fim)
    pattern = chord + [chord[0] + 12] + chord[::-1] + [chord[0] + 12]
    pattern = pattern * 2
    vol_arp = 0.045 if b < 2 else 0.06
    for k, n in enumerate(pattern[:16]):
        add(pulse(midi(n + 12), S16 * 0.9, 0.25, vol_arp), t0 + k * S16)
    if b >= 1:
        # baixo em colcheias
        for k in range(8):
            n = root if k % 4 != 3 else root + 12
            add(tri(midi(n), BEAT / 2 * 0.85, 0.22), t0 + k * BEAT / 2)
    if b >= 2 and not last:
        for k in range(4):
            add(kick(), t0 + k * BEAT if k % 2 == 0 else t0 + k * BEAT + 99)  # bumbo nos tempos 1 e 3
            if k % 2 == 1: add(snare(), t0 + k * BEAT)
        for k in range(8): add(hat(), t0 + k * BEAT / 2 + BEAT / 4)
    if b >= 4 and b % 4 in (0, 2) and not last:
        # melodia simples em onda quadrada 50%
        mel = [(69, 1), (72, 0.5), (71, 0.5), (69, 1), (67, 1)] if b % 4 == 0 else [(65, 1), (67, 0.5), (69, 0.5), (72, 1), (71, 1)]
        tt = t0
        for n, beats in mel:
            add(pulse(midi(n + 12), beats * BEAT * 0.9, 0.5, 0.035), tt); tt += beats * BEAT

def coin(start):
    add(pulse(midi(83), 0.07, 0.5, 0.09), start)
    add(pulse(midi(88), 0.28, 0.5, 0.09), start + 0.07)

def powerup(start):
    for k, n in enumerate([60, 64, 67, 72, 76, 79, 84]):
        add(pulse(midi(n + 12), 0.06, 0.5, 0.07), start + k * 0.05)

coin(1.3)          # o "!" do símbolo cai
powerup(29.6)      # entrada do encerramento
coin(31.2)

# final: acorde longo de lá menor
for n in [57, 60, 64, 69]:
    add(pulse(midi(n + 12), 1.8, 0.25, 0.04), 32.0)
add(tri(midi(45), 1.8, 0.2), 32.0)

# fade in curto e fade out
fi = int(0.3 * SR); mix[:fi] *= np.linspace(0, 1, fi)
fo = int(1.6 * SR); mix[-fo:] *= np.linspace(1, 0, fo)
mix = np.tanh(mix * 1.1) * 0.8
pcm = (mix * 32767).astype(np.int16)
stereo = np.column_stack([pcm, pcm]).ravel()
with wave.open("trilha.wav", "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(stereo.tobytes())
print("ok", len(pcm) / SR, "s, pico", float(np.abs(mix).max()))
