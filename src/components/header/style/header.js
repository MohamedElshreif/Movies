import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 593px;
  background: #000;
  @media (max-width: 768px) {
    height: max-content;
    display: flex;
    flex-direction: column;
  }
`;
export const Background = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-size: cover;
  width: 71%;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 12;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      #000 0,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0)
    );
  }
  @media (max-width: 768px) {
    order: 1;
    position: relative;
    width: 100%;
    height: 215px;
    &::before {
      background-image: linear-gradient(
        0deg,
        #000 0,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.1)
      );
    }
  }
`;
export const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 10;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
