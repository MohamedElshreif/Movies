import React from 'react';
import { Container, Head, Content } from './style/search';

export default function Search({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Search.Head = function ({ children, ...restProps }) {
  return <Head {...restProps}>{children}</Head>;
};

Search.Content = function ({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
