'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { Book } from '@/lib/content';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

export function BookModal({ book, onClose }: BookModalProps) {
  return (
    <AnimatePresence>
      {book ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f130f]/80 px-4 py-8 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="glass-panel relative max-h-[90vh] w-full max-w-5xl overflow-y-auto p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -top-10 right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(184,143,74,0.18),transparent_55%)] blur-3xl" />
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1 text-sm text-cream/70 transition hover:text-cream"
            >
              Close
            </button>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.42em] text-gold">{book.category}</p>
                <h3 className="mt-3 font-display text-3xl text-cream sm:text-4xl">{book.title}</h3>
                <p className="mt-3 text-base text-cream/80">{book.subtitle}</p>
                <div className="relative mt-6 h-72 w-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 text-sm text-cream/80">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Metadata</h4>
                  <ul className="mt-2 space-y-1">
                    {book.metadata.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Story</h4>
                  <p className="mt-2 leading-7">{book.story}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Quotes</h4>
                  <ul className="mt-2 space-y-2">
                    {book.quotes.map((quote) => (
                      <li key={quote} className="border-l border-gold/40 pl-3 italic text-cream/70">{quote}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Related authors</h4>
                <ul className="mt-2 space-y-1">
                  {book.relatedAuthors.map((author) => (
                    <li key={author}>{author}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Timeline</h4>
                <ul className="mt-2 space-y-1">
                  {book.timeline.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Related places</h4>
                <ul className="mt-2 space-y-1">
                  {book.relatedPlaces.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
