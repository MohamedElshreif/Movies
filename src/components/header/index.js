import React from 'react';
import LazyImage from '../../lazyload/image';
import { Container, Background, Image } from './style/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Background = function HeaderBackground({ src, ...restProps }) {
  return (
    <Background {...restProps}>
      <LazyImage background='#000'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${src}.jpg`}
          alt={src}
        />
      </LazyImage>
    </Background>
  );
};
