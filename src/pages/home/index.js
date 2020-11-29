import React from 'react';
import ContainerCarousel from '../../containers/carousel';
import ContainerHeader from '../../containers/header';
import { useSelector } from 'react-redux';
import LazyLoad from '../../lazyload/component';
import { random_Background } from '../../constant/randomBackground';
import { filter_films } from '../../constant/filterFilms';

export default function Home() {
  const filmArray = useSelector((state) => state.tranding);
  const filmsItems = [...filmArray];
  return (
    <LazyLoad>
      <ContainerHeader film={random_Background(filmsItems)} />
      <ContainerCarousel
        items={filter_films(filmsItems, 'movies')}
        name='Trending Movies'
      />
      <ContainerCarousel
        items={filter_films(filmsItems, 'tv')}
        name='Trending TV Shows'
      />
    </LazyLoad>
  );
}
