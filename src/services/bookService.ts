import {Book} from '../types/Book';

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch('/api/library/books');
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
