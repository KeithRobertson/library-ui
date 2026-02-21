import { useEffect, useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { Book } from '../types/Book';
import { fetchBooks } from '../services/bookService';
import { BookTable } from '../components/BookTable';

export const LibraryPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" sx={{ my: 4 }}>
        Library
      </Typography>
      <Box sx={{ height: 600, width: '100%' }}>
        <BookTable books={books} />
      </Box>
    </Container>
  );
};
