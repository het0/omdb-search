import { SearchResultsItem } from "@/types/types";

export type FavoritesState = {
  favorites: SearchResultsItem[];
};

export type IFavoritesActionPayload = {
  favorite: SearchResultsItem;
};
