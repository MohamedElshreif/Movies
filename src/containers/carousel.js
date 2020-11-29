import React from 'react';
import Carousel from '../components/carousel';
import ContainerFilm from './film';
import Film from '../components/film';
import { v4 as uuidv4 } from 'uuid';

export default function ContainerCarousel({
  idCarousel,
  items,
  name,
  ...restProps
}) {
  return (
    <Carousel {...restProps}>
      <Carousel.Title>{name}</Carousel.Title>
      <Carousel.Content id={idCarousel}>
        {items.map((item) => {
          return <ContainerFilm key={uuidv4()} item={item} id={item.id} />;
        })}
        <Film page='movies'>
          <Film.Image>Explore All</Film.Image>
        </Film>
      </Carousel.Content>
    </Carousel>
  );
}
