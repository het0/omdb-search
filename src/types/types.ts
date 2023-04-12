export type SearchResultsItem = {
  Title: string;
  Year: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;
  imdbID: string;
};

export type SearchResultsQuery = {
  Search?: SearchResultsItem[];
  totalResults: string;
  Error?: string;
  Response: 'True' | 'False';
};

export type SearchResultsQueryVariables = {
  s: string;
  page?: string;
};
