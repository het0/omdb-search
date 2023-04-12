import React from 'react';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

const MovieItemShimmer = () => {
  return (
    <Card elevation={4}>
      <Skeleton variant="rectangular" height="340px"/>
    </Card>
  );
};

export default MovieItemShimmer;
