import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import LocalStorage from "@/utils/localStorage";

import {
  FavoritesState,
  IFavoritesActionPayload,
} from './types';

const SLICE_BASE_NAME = 'favorites';

const initialState: FavoritesState = {
  favorites: LocalStorage.get('favorites') ?? [],
};

export const favoritesSlice = createSlice({
  name: SLICE_BASE_NAME,
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IFavoritesActionPayload>) => {
      state.favorites.push(action.payload.favorite);
      LocalStorage.set('favorites', state.favorites);
    },
    removeFavorite: (state, action: PayloadAction<IFavoritesActionPayload>) => {
      state.favorites = state.favorites.filter((item) => (item.imdbID !== action.payload.favorite.imdbID));
      LocalStorage.set('favorites', state.favorites);
    },
  }
})

export const {
  addFavorite,
  removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
