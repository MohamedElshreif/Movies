import React from 'react';
import Nav from '../components/nav';

export default function ContainerNav({ ...restProps }) {
  return (
    <Nav {...restProps}>
      <Nav.List />
    </Nav>
  );
}
