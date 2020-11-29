import styled from 'styled-components/macro';
import { ChevronCompactLeft } from '@styled-icons/bootstrap/ChevronCompactLeft';
import { ChevronCompactRight } from '@styled-icons/bootstrap/ChevronCompactRight';

export const BtnRight = styled(ChevronCompactRight)`
  color: #fff;
  width: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BtnLeft = styled(ChevronCompactLeft)`
  color: #fff;
  width: 28px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Container = styled.div`
  width: 100%;
  margin-top: 55px;
  min-height: 438px;
  @media (max-width: 768px) {
    margin-top: 20px;
    min-height: 204px;
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-left: 50px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 17px;
    margin-left: 20px;
  }
`;
export const Slider = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const SliderContent = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  scroll-padding: 50px;
  box-sizing: border-box;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Btn = styled.button`
  position: absolute;
  top: 0;
  right: ${({ dir }) => (dir === 'right' ? '0' : '')};
  left: ${({ dir }) => (dir === 'left' ? '0' : '')};
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: #fff;
  width: 50px;
  z-index: 11;
  font-size: 34px;
  cursor: pointer;
  outline: none;
  bottom: 48px;
  @media (max-width: 768px) {
    display: none !important;
  }
`;
