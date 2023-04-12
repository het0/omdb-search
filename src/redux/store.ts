import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from '@/services/movies';
import uiReducer from '@/redux/reducres/ui/reducer';
import favoritesReducer, { favoritesSlice } from '@/redux/reducres/favorites/reducer';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    favorites: favoritesReducer,
    // Add the generated reducer as a specific top-level slice
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
