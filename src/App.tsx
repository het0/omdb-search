import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

import { store } from '@/redux/store';
import { theme } from '@/theme/theme';
import Logo from '@/components/Logo/Logo';
import SearchInput from '@/components/SearchInput/SearchInput';
import MoviesList from '@/components/MoviesList/MoviesList';
import FavoritesCountIcon from '@/components/FavoritesCountIcon/FavoritesCountIcon';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Logo />
              <SearchInput />
              <FavoritesCountIcon />
            </Toolbar>
          </AppBar>
          <MoviesList />
        </Box>
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
