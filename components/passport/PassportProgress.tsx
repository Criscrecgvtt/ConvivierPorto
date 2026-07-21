'use client';

import { useEffect, useMemo, useState } from 'react';
import { passportLocations, rewardTiers } from '@/content/passport';
import { trackEvent } from '@/lib/analytics';

const key = 'conviver-passport-demo-stamps';

export function PassportProgress() {
  const [stamps, setStamps] = useState<string[]>([]);

  useEffect(() => {
    setStamps(JSON.parse(localStorage.getItem(key) ?? '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(stamps));
  }, [stamps]);

  const nextLocation = useMemo(() => passportLocations.find((location) => !stamps.includes(location.slug)), [stamps]);

  function addDemoStamp() {
    if (!nextLocation) return;
    setStamps((current) => [...current, nextLocation.slug]);
    trackEvent('passport_demo_stamp', { location: nextLocation.slug });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="border border-line bg-warm-white p-6">
        <p className="eyebrow">Prototype mode</p>
        <h2 className="mt-3 font-display text-4xl text-ink">Collect demo stamps</h2>
        <p className="mt-4 leading-7 text-soft-ink">
          This localStorage demo is intentionally transparent. Future QR claims should use server-side token validation at routes such as <code>/passport/claim?location=casa-dos-livros&amp;token=...</code>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-primary" onClick={addDemoStamp} disabled={!nextLocation}>Add demo stamp</button>
          <button className="btn-secondary" onClick={() => setStamps([])}>Reset progress</button>
        </div>
      </div>
      <div className="border border-line bg-parchment p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {passportLocations.slice(0, 12).map((location) => {
            const collected = stamps.includes(location.slug);
            return (
              <div key={location.slug} className={`min-h-28 border p-4 ${collected ? 'border-forest bg-forest text-warm-white' : 'border-line bg-warm-white text-soft-ink'}`}>
                <p className="text-xs uppercase tracking-[0.18em]">{collected ? 'Stamped' : location.partnerStatus}</p>
                <p className="mt-3 font-display text-xl">{location.name}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 border-t border-line pt-5">
          <p className="font-semibold text-ink">Proposed pilot reward model</p>
          <ul className="mt-3 grid gap-2 text-sm text-soft-ink sm:grid-cols-2">
            {rewardTiers.map((tier) => <li key={tier.stamps}>{tier.stamps} stamps: {tier.reward}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
