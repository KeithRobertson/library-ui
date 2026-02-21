import { Book } from '../types/Book';

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch('/library/books');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
