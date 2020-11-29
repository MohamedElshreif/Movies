import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Roboto', sans-serif;
  background : #141414;
  color:#fff;
  padding:0;
  padding-left: 6rem;
  margin:0;
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-bottom: 65px;
  }
}
`;
