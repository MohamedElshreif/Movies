import React from 'react';
import { useSelector } from 'react-redux';
import ContainerHeader from '../../containers/header';
import ContainerCarousel from '../../containers/carousel';
import LazyLoad from '../../lazyload/component';
import { random_Background } from '../../constant/randomBackground';
import { filter_films } from '../../constant/filterFilms';

export default function Tv() {
  const filmArray = useSelector((state) => state.tv);
  const tv = [...filmArray];
  return (
    <LazyLoad>
      <ContainerHeader film={random_Background(tv)} />
      <ContainerCarousel
        items={filter_films(tv, 'Popular')}
        name='Popular TV Shows'
      />
      <ContainerCarousel
        items={filter_films(tv, 'Top Rated')}
        name='Top Rated TV Shows'
      />
      <ContainerCarousel
        items={filter_films(tv, 'Currently Airing')}
        name='Currently Airing TV Shows'
      />
      <ContainerCarousel
        items={filter_films(tv, 'Today')}
        name='TV Shows Airing Today'
      />
    </LazyLoad>
  );
}
