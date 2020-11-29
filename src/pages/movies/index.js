import React from 'react';
import { useSelector } from 'react-redux';
import ContainerHeader from '../../containers/header';
import ContainerCarousel from '../../containers/carousel';
import LazyLoad from '../../lazyload/component';
import { random_Background } from '../../constant/randomBackground';
import { filter_films } from '../../constant/filterFilms';

export default function Movies() {
  const filmArray = useSelector((state) => state.movies);
  const movies = [...filmArray];
  return (
    <LazyLoad>
      <ContainerHeader film={random_Background(movies)} />
      <ContainerCarousel
        items={filter_films(movies, 'Popular Movies')}
        name='Popular Movies'
      />
      <ContainerCarousel
        items={filter_films(movies, 'Top Rated Movies')}
        name='Top Rated Movies'
      />
      <ContainerCarousel
        items={filter_films(movies, 'Upcoming Movies')}
        name='Upcoming Movies'
      />
      <ContainerCarousel
        items={filter_films(movies, 'Now Playing Movies')}
        name='Now Playing Movies'
      />
    </LazyLoad>
  );
}
