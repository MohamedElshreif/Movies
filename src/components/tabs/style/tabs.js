import styled from 'styled-components/macro';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const Container = styled.div``;

export const Bar = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 45px;
  width: max-content !important;
  .jss3,
  .PrivateTabIndicator-colorSecondary-3,
  .MuiTabs-indicator {
    background-color: #fff !important;
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 20px;
    width: 100% !important;
    .jss3,
    .PrivateTabIndicator-colorSecondary-3 {
      width: 33.333% !important;
    }
  }
`;
export const Header = styled(Tabs)``;

export const Head = styled(Tab)`
  text-transform: capitalize !important;
  font-size: 23px !important;
  @media (max-width: 768px) {
    width: 33.333%;
    font-size: 16px !important;
    font-weight: 500 !important;
  }
`;
