import React from 'react';
import { Container, Text, Icon, Head, Btn } from './style/error';

export default function Error({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Error.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Error.Head = function ({ children, ...restProps }) {
  return <Head {...restProps}>{children}</Head>;
};

Error.Icon = function ({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Error.Btn = function ({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
};
