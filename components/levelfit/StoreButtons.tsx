import { site } from '@/content/levelfit/site';

/** Botões das lojas. Sem URL configurada, aparecem desativados com "em breve". */
export function StoreButtons({ align = 'start' }: { align?: 'start' | 'center' }) {
  const stores = [
    { label: 'App Store', icon: '🍎', url: site.appStoreUrl, cls: 'btn' },
    { label: 'Google Play', icon: '▶', url: site.playStoreUrl, cls: 'btn alt' },
  ];
  const anyMissing = stores.some((s) => !s.url);
  return (
    <div className={`stores stores-${align}`}>
      <div className="actions">
        {stores.map((s) =>
          s.url ? (
            <a key={s.label} className={s.cls} href={s.url} target="_blank" rel="noopener noreferrer">
              <span aria-hidden>{s.icon}</span> {s.label}
            </a>
          ) : (
            <span key={s.label} className={`${s.cls} disabled`} aria-disabled="true">
              <span aria-hidden>{s.icon}</span> {s.label}
            </span>
          ),
        )}
      </div>
      <p className="soon">{anyMissing ? 'Em breve para iPhone e Android.' : 'Disponível para iPhone e Android.'}</p>
    </div>
  );
}
