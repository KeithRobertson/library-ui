import { AppBar, Toolbar, Typography, Button, Box, CssBaseline } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="sticky" sx={{ top: 0 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Library App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              About
            </Button>
            <Button color="inherit" component={Link} to="/library">
              Library
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
