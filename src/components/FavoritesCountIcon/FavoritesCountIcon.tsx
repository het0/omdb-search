import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import FavoriteIcon from '@/components/Icons/FavoriteIcon';
import { RootState } from '@/redux/store';
import FavoritesDrawer from '@/components/FavoritesDrawer/FavoritesDrawer';

function FavoritesCountIcon() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const value = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton size="large" aria-label="Show drawers favorites" color="inherit" onClick={() => setIsDrawerOpened(true)}>
        <Badge badgeContent={value.length} color="error">
          <FavoriteIcon />
        </Badge>
      </IconButton>
      <FavoritesDrawer open={isDrawerOpened} onClose={() => setIsDrawerOpened(false)} />
    </Box>
  );
}

export default FavoritesCountIcon;
