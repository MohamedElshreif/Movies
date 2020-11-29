import React from 'react';
import Header from '../components/header';
import Feature from '../components/feature';

export default function ContainerHeader({ film = {}, ...restProps }) {
  const { background, name, desc, rating, review, info } = film;
  const { Released, Runtime } = { ...info };
  return (
    <Header {...restProps}>
      <Feature>
        <Feature.Content>
          <Feature.Title>{name}</Feature.Title>
          <Feature.Group>
            <Feature.Reviews>
              <Feature.Rating percentage={rating}>
                <Feature.Item />
                <Feature.Item />
                <Feature.Item />
                <Feature.Item />
                <Feature.Item />
              </Feature.Rating>
              {review} Reviews
            </Feature.Reviews>
            <Feature.Date>{Released}</Feature.Date>
            <Feature.Time>{Runtime}</Feature.Time>
          </Feature.Group>
          <Feature.Text>{desc}</Feature.Text>
          <Feature.Btn>Watch Trailer</Feature.Btn>
        </Feature.Content>
      </Feature>
      <Header.Background src={background} />
    </Header>
  );
}
