export const filter_films = (data, type) => {
  const view = type === 'tv' || type === 'movies' ? 'page' : 'display';
  const allFilms = [...data],
    filterFilms = allFilms.filter((item) => item[view] === type);
  return filterFilms;
};
