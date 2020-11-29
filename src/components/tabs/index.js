import React from 'react';
import { Container, Header, Head, Bar } from './style/tabs';

export default function Tabs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Tabs.Bar = function ({ children, ...restProps }) {
  return (
    <Bar position='static' {...restProps}>
      {children}
    </Bar>
  );
};

Tabs.Content = function ({ handleChange, value, children, ...restProps }) {
  return (
    <Header
      value={value}
      onChange={handleChange}
      aria-label='simple tabs example'
      {...restProps}
    >
      {children}
    </Header>
  );
};

Tabs.Tab = function ({ label, ...restProps }) {
  return <Head label={label} {...restProps} />;
};
