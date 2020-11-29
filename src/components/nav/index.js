import React from 'react';
import { ShowSearch } from '../../store/actions';
import { useDispatch } from 'react-redux';
import {
  Container,
  List,
  Item,
  Icon,
  Btn,
  NavTv,
  NavMovies,
  NavSearch,
  NavHome,
} from './style/nav';

export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Nav.List = function NavList({ children, ...restProps }) {
  const dispatch = useDispatch();
  return (
    <List {...restProps}>
      <Item>
        <Icon to='/' exact>
          <NavHome />
        </Icon>
      </Item>
      <Item>
        <Icon to='/movies'>
          <NavMovies />
        </Icon>
      </Item>
      <Item>
        <Icon to='/tv'>
          <NavTv />
        </Icon>
      </Item>
      <Item>
        <Btn onClick={() => dispatch(ShowSearch())}>
          <NavSearch />
        </Btn>
      </Item>
    </List>
  );
};
