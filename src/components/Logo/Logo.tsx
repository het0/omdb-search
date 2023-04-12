import React from 'react';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      OMDB Search
    </Typography>
  );
};

export default Logo;
