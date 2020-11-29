import styled from 'styled-components/macro';
import { NavLink as NavLinkIcon } from 'react-router-dom';
import { Tv } from '@styled-icons/boxicons-regular/Tv';
import { Movie } from '@styled-icons/material-outlined/Movie';
import { Home } from '@styled-icons/octicons/Home';
import { Search } from '@styled-icons/ionicons-outline/Search';

export const NavTv = styled(Tv)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;
export const NavMovies = styled(Movie)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;
export const NavHome = styled(Home)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;
export const NavSearch = styled(Search)`
  width: 29px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  height: 100%;
  z-index: 100;
  width: 6rem;
  @media (max-width: 768px) {
    bottom: 0;
    top: auto;
    height: max-content;
    width: 100%;
    left: 0;
  }
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;
export const Item = styled.li``;

export const Icon = styled(NavLinkIcon)`
  font-size: 31px;
  cursor: pointer;
  display: flex;
  color: #eee;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99px;
  &.active {
    color: #2196f3;
  }
  @media (max-width: 768px) {
    height: 50px;
  }
`;
export const Btn = styled.button`
  font-size: 31px;
  cursor: pointer;
  color: #fff;
  border: none;
  align-items: center;
  justify-content: center;
  background: transparent;
  display: flex;
  width: 100%;
  height: 99px;
  outline: none;
  @media (max-width: 768px) {
    height: 50px;
  }
`;
