import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { useLazySearchMoviesQuery } from '@/services/movies';
import { useConnectedUIEntity } from '@/hooks/redux/useConnectedUIEntity';
import { useThrottledEffect } from '@/hooks/utils/useThrottledEffect';
import WaitForItemsLoading from '@/components/WaitForItemsLoading/WaitForItemsLoading';
import MovieItem from '@/components/MoviesList/MovieItem/MovieItem';
import MovieItemShimmer from '@/components/MoviesList/MovieItem/MovieItemShimmer';
import EmptyContent from '@/components/MoviesList/EmptyContent/EmptyContent';

function MoviesList() {
  const [value] = useConnectedUIEntity('searchInputValue', '');

  const [fetchMovies, { data, isFetching }] = useLazySearchMoviesQuery();

  const effectWillRun = useThrottledEffect(
    () => {
      if (value) {
        fetchMovies({
          s: value,
          page: '1',
        });
      }
    },
    2000,
    [value]
  );

  const movies = data?.Search;
  const error = data?.Error;
  const isEmpty = !movies || movies.length === 0;

  return (
    <Container
      sx={(theme) => ({
        height: '100%',
        py: theme.spacing(6),
      })}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          width: '100%',
          '&:hover > .cardBase::after': {
            opacity: 1,
          },
        }}
      >
        <WaitForItemsLoading empty={isEmpty} loading={effectWillRun || isFetching} count={9} EmptyRender={<EmptyContent title={error ?? ''} subTitle="Try typing :)" />} ShimmerComponent={MovieItemShimmer}>
          {movies && movies.map((item) => <MovieItem key={item.imdbID} {...item} />)}
        </WaitForItemsLoading>
      </Box>
    </Container>
  );
}

export default MoviesList;
