import React from 'react';
import LazyLoad from 'react-lazyload';
import { Container, Title, Image, StyledImage, Text } from './style/person';

export default function Person({ id, children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Person.Title = function PersonTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Person.Text = function PersonText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Person.Image = function PersonImage({ src, ...restProps }) {
  return (
    <Image {...restProps}>
      <LazyLoad>
        <StyledImage
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${src}.jpg`}
          alt={src}
        />
      </LazyLoad>
    </Image>
  );
};
