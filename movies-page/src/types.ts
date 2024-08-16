export interface Movie {
  genre_ids: number[];
  id: number;
  release_date: string;
  title: string;
  vote_average: number;
  poster_path: string;
  quantity: number;
  price: number
}

export interface Genre {
  id: string;
  name: string
}

