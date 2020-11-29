import styled from 'styled-components/macro';

export const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImageContent = styled.div`
  transition: transform 0.5s ease-in-out;
  transform: scale(1);
  height: 333px;
  @media (max-width: 768px) {
    height: 163px;
  }
`;

export const Container = styled.div`
  width: ${({ type }) =>
    type ? 'calc(100% / 6)' : 'calc((100% / 6) - 15.333px)'};
  padding-right: 8px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  margin-bottom: ${({ type }) => (type ? '25px' : '0')};
  &:first-of-type {
    margin-left: ${({ type }) => (type ? '0' : '50px')};
  }
  &:last-of-type {
    margin-right: ${({ type }) => (type ? '0' : '42px')};
  }
  &:hover {
    ${ImageContent} {
      transform: scale(1.04);
    }
  }
  @media (max-width: 768px) {
    width: ${({ type }) =>
      type ? 'calc(100% / 3)' : 'calc((100% / 3) - 10px)'};
    margin-bottom: 0;
    &:first-of-type {
      margin-left: ${({ type }) => (type ? '0' : '20px')};
    }
    &:last-of-type {
      margin-right: ${({ type }) => (type ? '0' : '20px')};
    }
  }
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0;
  padding-bottom: 6px;
  color: #eee;
  padding-top: 10px;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.div`
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ImageExplore = styled.div`
  height: 333px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202124;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    height: 163px;
    font-size: 12px;
  }
`;
