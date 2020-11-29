import React from 'react';
import {
  Container,
  Content,
  Item,
  Title,
  Text,
  Image,
} from './style/videos.js';

export default function Videos({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Videos.Content = function VideosContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Videos.Item = function VideosItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Videos.Image = function VideosImage({ src, ...restProps }) {
  return (
    <Image {...restProps}>
      <img src={src} alt={src} />
    </Image>
  );
};

Videos.Title = function VideosTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Videos.Text = function VideosText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
