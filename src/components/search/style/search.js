import styled from 'styled-components/macro';

export const Container = styled.div`
  padding-top: 135px;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Head = styled.h1`
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const Content = styled.div``;
