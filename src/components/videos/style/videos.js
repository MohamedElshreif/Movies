import styled from 'styled-components/macro';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  padding: 0 50px;
  margin-right: -10px;
`;
export const Item = styled.div`
  width: calc(100% / 4);
  box-sizing: border-box;
  padding: 5px 10px;
`;
export const Title = styled.h3`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 0;
  min-height: 42px;
`;
export const Text = styled.p`
  color: #999;
  font-size: 14px;
  margin-top: 7px;
`;
export const Image = styled.div`
  img {
    width: 100%;
  }
`;
