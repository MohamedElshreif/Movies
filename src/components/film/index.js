import React from 'react';
import LazyImage from '../../lazyload/image';
import {
  Container,
  Title,
  Image,
  StyledImage,
  ImageExplore,
  ImageContent,
} from './style/film';

export default function Film({ type, children, ...restProps }) {
  return (
    <Container {...restProps} type={type}>
      {children}
    </Container>
  );
}

Film.Title = function FilmTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Film.Image = function FilmImage({ src, children, ...restProps }) {
  return (
    <>
      {src ? (
        <Image {...restProps}>
          <ImageContent>
            <LazyImage background='#202124'>
              <StyledImage
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${src}.jpg`}
                alt={src}
              />
            </LazyImage>
          </ImageContent>
        </Image>
      ) : (
        <ImageExplore>{children}</ImageExplore>
      )}
    </>
  );
};
