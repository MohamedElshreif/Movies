import styled from 'styled-components/macro';

export const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: ${({ background }) => background};
  z-index: 13;
`;
