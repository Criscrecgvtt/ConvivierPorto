'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StampCollectorProps {
  sections: Array<{ id: string; title: string; blurb: string }>;
}

export function StampCollector({ sections }: StampCollectorProps) {
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-stamp');
            if (id && !visited.includes(id)) {
              setVisited((current) => [...current, id]);
            }
          }
        });
      },
      { threshold: 0.45 }
    );

    const elements = document.querySelectorAll<HTMLElement>('[data-stamp]');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [visited]);

  const unlocked = visited.length === sections.length;

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden w-72 rounded-[1.5rem] border border-white/10 bg-[#131612]/90 p-4 shadow-soft backdrop-blur-xl lg:block">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.42em] text-gold">Explorer trail</p>
          <p className="mt-1 text-sm text-cream/80">{unlocked ? 'Explorer of Casa dos Livros unlocked' : 'Collect each room as you walk'}</p>
        </div>
        <motion.div
          animate={{ rotate: unlocked ? 360 : 0, scale: unlocked ? 1.05 : 1 }}
          transition={{ duration: 0.65 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-[#243226] text-lg"
        >
          ✦
        </motion.div>
      </div>
      <div className="mt-4 grid gap-2">
        {sections.map((section) => {
          const isVisited = visited.includes(section.id);
          return (
            <div key={section.id} className={`rounded-2xl border px-3 py-2 text-sm ${isVisited ? 'border-gold/40 bg-[#243226] text-cream' : 'border-white/10 bg-white/5 text-cream/60'}`}>
              <span className="mr-2 text-gold">{isVisited ? '●' : '○'}</span>
              {section.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
