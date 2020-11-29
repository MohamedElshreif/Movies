import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from '../../lazyload/image';
import {
  Container,
  Content,
  Title,
  ImageBackDrops,
  ImagePoster,
} from './style/photo';

export default function Photo({ value, index, children, ...restProps }) {
  return (
    <Container
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...restProps}
    >
      {value === index && <>{children}</>}
    </Container>
  );
}
Photo.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

Photo.Content = function PhotoContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Photo.Title = function PhotoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Photo.BackDrops = function PhotoBackDrops({ src, ...restProps }) {
  return (
    <ImageBackDrops {...restProps}>
      <LazyImage background='#141414'>
        <img
          src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2/${src}.jpg`}
          alt={src}
        />
      </LazyImage>
    </ImageBackDrops>
  );
};

Photo.Poster = function PhotoPoster({ src, ...restProps }) {
  return (
    <ImagePoster {...restProps}>
      <LazyImage background='#141414'>
        <img
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${src}.jpg`}
          alt={src}
        />
      </LazyImage>
    </ImagePoster>
  );
};
