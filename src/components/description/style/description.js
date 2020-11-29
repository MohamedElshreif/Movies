import styled from 'styled-components/macro';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Facebook } from '@styled-icons/icomoon/Facebook';
import { Twitter } from '@styled-icons/icomoon/Twitter';
import { LogoInstagram } from '@styled-icons/ionicons-solid/LogoInstagram';
import { Imdb } from '@styled-icons/boxicons-logos/Imdb';
import { InsertLink } from '@styled-icons/material-outlined/InsertLink';
import { BrokenImage } from '@styled-icons/material/BrokenImage';

export const BrokenImageIcon = styled(BrokenImage)`
  width: 55px;
  color: #999;
`;
export const FacebookIcon = styled(Facebook)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;

export const TwitterIcon = styled(Twitter)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;
export const LogoInstagramIcon = styled(LogoInstagram)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;

export const ImdbIcon = styled(Imdb)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;

export const InsertLinkIcon = styled(InsertLink)`
  width: 28px;
  @media (max-width: 768px) {
    width: 23px;
  }
`;
export const LinkDesc = styled(Link)`
  color: #2196f3;
  text-decoration: none;
  margin-right: 4px;
`;

export const Container = styled.div``;

export const Group = styled.div``;

export const Content = styled(Box)`
  display: flex;
  padding: 0 50px;
  height: 444px;
  @media (max-width: 768px) {
    padding: 0 20px;
    display: block;
    height: max-content;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  margin-top: 0;
  letter-spacing: 2px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Desc = styled.p`
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  width: 100%;
  margin-top: 23px;
`;

export const Item = styled.li`
  margin-right: 20px;
  cursor: pointer;
  a {
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      color: dodgerblue;
    }
  }

  transition: color 0.5s ease-in-out;
`;

export const Info = styled.div`
  padding-left: 55px;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  width: 1033px;
  @media (max-width: 768px) {
    padding-left: 0;
    width: auto;
  }
`;

export const Table = styled.table`
  tr > {
    td {
      padding: 4px 0;
      vertical-align: baseline;
      &:last-child {
        padding-left: 40px;
      }
    }
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImageError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #202124;
`;
export const ImageContent = styled.div`
  width: 296px;
  height: 444px;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;
