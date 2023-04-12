import React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@/components/Icons/SearchIcon';
import { useConnectedUIEntity } from '@/hooks/redux/useConnectedUIEntity';

const SearchInput = () => {
  const [value, setValue] = useConnectedUIEntity('searchInputValue', '');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box
      sx={(theme) => ({
        flexGrow: 1,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      })}
    >
      <Box
        sx={(theme) => ({
          p: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="Search…"
        value={value}
        onChange={handleSearchInputChange}
        inputProps={{ 'aria-label': 'search' }}
        sx={(theme) => ({
          color: 'inherit',
          width: '100%',
          '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, `calc(1em + ${theme.spacing(4)})`),
          },
        })}
      />
    </Box>
  );
};

export default SearchInput;
