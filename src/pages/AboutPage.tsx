import { Typography, Container, Box } from '@mui/material';

export const AboutPage = () => {
  return (
      <Container maxWidth="md">
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About
          </Typography>

          <Typography>
            Welcome to the Library Management System. This application helps you manage
            and browse your book collection with ease.
          </Typography>

          <Typography>
            The frontend is built with React, TypeScript, and Material-UI, demonstrating
            modern web development practices and clean architecture.
          </Typography>

          <Typography>
            The backend is built with Go and Postgres.
          </Typography>

          <Typography>
            Use the navigation above to explore the library and view the available books.
          </Typography>
        </Box>
      </Container>
  );
};
