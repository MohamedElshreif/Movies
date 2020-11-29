import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0;
  overflow: hidden;
`;
export const Content = styled.div`
  margin-left: -4px;
  margin-right: -4px;
  display: flex;
  padding: 0 50px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const Title = styled.h2`
  font-size: 26px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 13px;
  letter-spacing: 1px;
  padding: 0 50px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0 20px;
  }
`;
export const ImageBackDrops = styled.div`
  width: calc(100% / 5);
  padding: 4px 4px;
  box-sizing: border-box;
  height: 152px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: calc(100% / 2);
    height: auto;
  }
`;
export const ImagePoster = styled.div`
  width: calc(100% / 6);
  padding: 4px 4px;
  box-sizing: border-box;
  position: relative;
  height: 340px;
  cursor: pointer;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: calc(100% / 3);
    height: auto;
  }
`;
