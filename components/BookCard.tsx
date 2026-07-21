'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Book } from '@/lib/content';

interface BookCardProps {
  book: Book;
  onOpen: (book: Book) => void;
}

export function BookCard({ book, onOpen }: BookCardProps) {
  return (
    <motion.button
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(book)}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1b201a] text-left shadow-soft"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute left-8 top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(184,143,74,0.18),transparent_50%)] blur-3xl opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e120d] via-[#0e120d]/40 to-transparent" />
      <div className="relative flex min-h-[220px] flex-col justify-end p-6">
        <p className="text-[0.65rem] uppercase tracking-[0.42em] text-gold">{book.category}</p>
        <h3 className="mt-3 font-display text-2xl text-cream">{book.title}</h3>
        <p className="mt-2 max-w-sm text-sm text-cream/80">{book.subtitle}</p>
        <div className="mt-4 flex gap-2">
          {book.metadata.slice(0, 2).map((item) => (
            <span key={item} className="rounded-full border border-gold/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-gold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
