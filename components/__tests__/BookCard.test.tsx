import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BookCard } from '../BookCard';
import type { Book } from '@/lib/content';

const book: Book = {
  id: 'test-book',
  title: 'Test Book',
  subtitle: 'A quiet study',
  category: 'Memory',
  image: 'https://example.com/cover.jpg',
  metadata: ['First edition', 'Archive'],
  story: 'The story lives in fragments.',
  quotes: ['“A room can remember.”'],
  relatedAuthors: ['Author'],
  timeline: ['1910'],
  relatedPlaces: ['Porto'],
};

describe('BookCard', () => {
  it('renders the book title and opens the modal on click', () => {
    const onOpen = vi.fn();
    render(<BookCard book={book} onOpen={onOpen} />);

    expect(screen.getByRole('button')).toHaveTextContent('Test Book');
    expect(screen.getByRole('button')).toHaveTextContent('Memory');
  });
});
