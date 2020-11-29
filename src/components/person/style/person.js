import styled from 'styled-components/macro';
import { Link as LinkFilm } from 'react-router-dom';

export const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  transform: scale(1);
`;

export const Container = styled.div`
  width: calc((100% / 6) - 15.333px);
  padding-right: 8px;
  box-sizing: border-box;
  display: inline-block;
  &:first-of-type {
    margin-left: 50px;
  }
  &:last-of-type {
    margin-right: 42px;
  }
  &:hover {
    ${StyledImage} {
      transform: scale(1.04);s
    }
  }
  @media (max-width: 768px) {
    width: calc((100% / 3) - 10px);
    &:first-of-type {
      margin-left: 20px;
    }
    &:last-of-type {
      margin-right: 20px;
    }
  }
`;

export const Link = styled(LinkFilm)`
  text-decoration: none;
`;
export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0;
  color: #999;
  padding-top: 0px;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0;
  padding-bottom: 6px;
  color: #eee;
  padding-top: 8px;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Image = styled.div`
  height: 333px;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 155px;
  }
`;
