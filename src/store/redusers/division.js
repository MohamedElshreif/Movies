export const trandingFun = (data) => {
  const films = [...data];
  return films.filter((film) => film.trending === true);
};

export const moviesFun = (data) => {
  const films = [...data];
  return films.filter((film) => film.page === 'movies');
};

export const tvFun = (data) => {
  const films = [...data];
  return films.filter((film) => film.page === 'tv');
};

export const dataFilms = (data, payload) => {
  const data_films = [...payload.films];
  return {
    ...data,
    films: [...data.films, ...payload.films],
    actors: [...data.actors, ...payload.actors],
    tranding: [...data.tranding, ...trandingFun(data_films)],
    movies: [...data.movies, ...moviesFun(data_films)],
    tv: [...data.tv, ...tvFun(data_films)],
    loading: false,
    error: false,
  };
};
