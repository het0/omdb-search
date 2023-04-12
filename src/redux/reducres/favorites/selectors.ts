import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";

export const selectIsInFavoriteList = (id: string) => {
  return createSelector(
    (state: RootState) => state.favorites.favorites,
    (f) => f.find((i) => i.imdbID === id),
  );
};
