import styled from 'styled-components/macro';
import { Star } from '@styled-icons/bootstrap/Star';
import { Play } from '@styled-icons/fa-solid/Play';
import { StarFill } from '@styled-icons/bootstrap/StarFill';

export const ListStarsFill = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: ${({ width }) => (width ? `${width}%` : '0')};
  overflow: hidden;
`;

export const RatingPercentage = styled.div`
  margin-right: 10px;
  position: relative;
  @media (max-width: 768px) {
    margin-right: 3px;
  }
`;
export const StarsFill = styled.li`
  margin-right: 3px;
`;

export const StarFillIcon = styled(StarFill)`
  color: dodgerblue;
`;

export const StarIcon = styled(Star)`
  color: dodgerblue;
`;

export const PlayIcon = styled(Play)`
  color: #fff;
  width: 13px;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 40%;
  z-index: 2;
  display: flex;
  align-items: center;
  padding-left: 50px;
  @media (max-width: 768px) {
    position: relative;
    order: 2;
    padding-bottom: 15px;
    width: 100%;
    height: max-content;
    padding-left: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 20px;
    width: 303px;
    white-space: normal;
    margin-bottom: 11px;
  }
`;
export const Item = styled.li`
  margin-right: 3px;
  color: dodgerblue;
  @media (max-width: 768px) {
    height: max-content;
    display: flex;
    flex-direction: column;
  }
`;

export const Reviews = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: flex-end;
  color: #999;
  font-size: ${({ small }) => (small ? '12px' : '14px')};
  ${StarFillIcon} , ${StarIcon} {
    width: ${({ small }) => (small ? '13px' : '18px')};
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 13px;
    margin-bottom: 13px;
    ${StarFillIcon} , ${StarIcon} {
      width: 16px;
    }
    display: ${({ small }) => (small ? 'none' : 'flex')};
  }
`;

export const Text = styled.p`
  margin: 18px 0;
  font-size: 15px;
  width: 92%;
  margin-bottom: 30px;
  line-height: 1.5;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 46px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Btn = styled.button`
  border: 0;
  background: #202124;
  color: #fff;
  padding: 14px 35px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Time = styled.span``;

export const Date = styled.span`
  margin-right: 12px;
`;

export const Group = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 400;
  color: #999;
  font-size: 14px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    font-size: 13px;
  }
`;

export const Rating = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

export const Content = styled.div``;

export const PlayBtn = styled.span`
  margin-right: 7px;
`;
