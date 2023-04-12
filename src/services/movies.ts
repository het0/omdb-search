import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { SearchResultsQuery, SearchResultsQueryVariables } from '@/types/types';

const BASE_URL = 'https://www.omdbapi.com/';

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    searchMovies: builder.query<SearchResultsQuery, SearchResultsQueryVariables>({
      query: (params) => ({
        url: '',
        method: 'GET',
        params: {
          apikey: import.meta.env.VITE_OMDBAPI_KEY,
          ...params,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useSearchMoviesQuery,
  useLazySearchMoviesQuery,
  endpoints: { searchMovies },
} = moviesApi;
