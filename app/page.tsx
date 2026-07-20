'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { BookCard } from '@/components/BookCard';
import { BookModal } from '@/components/BookModal';
import { HouseScene } from '@/components/HouseScene';
import { StampCollector } from '@/components/StampCollector';
import { books, roomCards, sections } from '@/lib/content';
import type { Book } from '@/lib/content';

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smoothWheel: true });
    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = window.requestAnimationFrame(raf);
    };

    animationFrame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!selectedBook) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedBook]);

  return (
    <main className="relative overflow-hidden bg-[#11130f] text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,143,74,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,59,45,0.6),transparent_40%)]" />

      <header className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 text-sm uppercase tracking-[0.36em] text-cream/70">
          <span>Conviver</span>
          <span>Casa dos Livros</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="max-w-2xl">
            <p className="text-[0.72rem] uppercase tracking-[0.45em] text-gold">Palacete Burmester • Porto</p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
              Stay. Read. Breathe.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/75 sm:text-xl">
              Enter a suspended, luminous house where architecture, archives and reading become one slow, breathing ritual.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#entrance" className="rounded-full border border-gold/40 bg-[#243226] px-5 py-3 text-sm uppercase tracking-[0.28em] text-cream transition hover:bg-[#2f4531]">
                Begin the walk
              </a>
              <a href="#books" className="rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-[0.28em] text-cream/80 transition hover:bg-white/5">
                Open the books
              </a>
            </div>
          </div>
          <HouseScene />
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-cream/70">
          <p>Slowly approaching the house, one page at a time.</p>
          <p className="uppercase tracking-[0.34em] text-gold">Immersive digital humanities</p>
        </div>
      </header>

      <StampCollector sections={sections} />

      <section id="entrance" data-stamp="entrance" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-8 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">Entrance</p>
              <h2 className="section-title mt-4">The threshold opens softly.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/80">
                Step into a world where the architecture itself curves around memory, slowing the pace until the act of looking becomes an act of breathing.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#151913]/80 p-6 text-sm leading-7 text-cream/80">
              The house is not merely a backdrop. It is a participant. As you move through its rooms, collections and stories, the building responds with quiet depth and gentle cinematic rhythm.
            </div>
          </div>
        </motion.div>
      </section>

      <section id="house" data-stamp="house" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#161812]/70 p-8 shadow-soft sm:p-10">
            <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">The House</p>
            <h2 className="section-title mt-4">A building that leans towards stories.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/80">
              The house feels like a living manuscript. Walls are warm, shadows are generous and the passage between rooms is never abrupt.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#1a271d]/70 p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cream/70">Atmosphere</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Slow camera movement', 'Soft particles', 'Volumetric lighting', 'Dust in motion'].map((item) => (
                <span key={item} className="rounded-full border border-gold/30 px-3 py-2 text-sm text-cream/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="rooms" data-stamp="rooms" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">The Rooms</p>
            <h2 className="section-title mt-3">Walking through memory.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-cream/70">Each chamber opens with a different pace, from hush to wonder, from intimacy to ceremony.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {roomCards.map((room, index) => (
            <motion.article key={room.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-white/10 bg-[#151813]/80 p-6 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-[#243226] text-sm text-gold">0{index + 1}</div>
              <h3 className="mt-4 font-display text-2xl text-cream">{room.title}</h3>
              <p className="mt-3 leading-7 text-cream/70">{room.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="collections" data-stamp="collections" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-8 sm:p-10 lg:p-14">
          <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">The Collections</p>
          <h2 className="section-title mt-4">Objects gathered into an atmosphere of care.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/80">
            Photographs, letters and small traces become luminous presences. The collection is less a cabinet than a living companionship.
          </p>
        </motion.div>
      </section>

      <section id="digital" data-stamp="digital" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#171b13]/80 p-8 sm:p-10">
            <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">Digital Humanities</p>
            <h2 className="section-title mt-4">A public archive shaped by research and wonder.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/80">
              The project is conceived as a gentle form of mediation where scholarship, storytelling and experience meet without losing their dignity.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#1c281e]/80 p-8 sm:p-10 text-sm leading-7 text-cream/80">
            Research, interpretation and preservation are treated as acts of hospitality. Each encounter with the archive is designed to feel intimate, precise and welcoming.
          </div>
        </motion.div>
      </section>

      <section id="books" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">Books</p>
            <h2 className="section-title mt-3">Interactive books, each one a doorway.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-cream/70">Open a volume to reveal its images, metadata, quotes, related authors and a living timeline.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onOpen={setSelectedBook} />
          ))}
        </div>
      </section>

      <section id="podcast" data-stamp="podcast" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-8 sm:p-10 lg:p-14">
          <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">Podcast</p>
          <h2 className="section-title mt-4">Voices from the corridors.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/80">
            A slowly unfolding soundscape in which readers, researchers and visitors speak with the house itself.
          </p>
        </motion.div>
      </section>

      <section id="events" data-stamp="events" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#171b13]/80 p-8 sm:p-10">
            <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">Events</p>
            <h2 className="section-title mt-4">Gatherings shaped by reading.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/80">
              Workshops, talks and intimate gatherings bring the archive into public conversation without ever losing its softness.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#1c281e]/80 p-8 sm:p-10 text-sm leading-7 text-cream/80">
            Every event is designed to feel calm and ceremonial, like stepping into a quiet chamber before a conversation begins.
          </div>
        </motion.div>
      </section>

      <section id="visit" data-stamp="visit" className="relative mx-auto max-w-7xl px-6 pb-32 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-8 sm:p-10 lg:p-14">
          <p className="text-[0.7rem] uppercase tracking-[0.42em] text-gold">Visit</p>
          <h2 className="section-title mt-4">Come as a guest. Leave as a witness.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/80">
            Discover Casa dos Livros by walking slowly through light, paper and memory. The house is open to those who linger.
          </p>
        </motion.div>
      </section>

      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </main>
  );
}
