import styled from "styled-components";

import MainPage from ".";

export const StyledMainPage = styled(MainPage)`
  & {
    min-height: 20rem;
    background-image: url("https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/493615/getty-stock-market-chart.jpg&w=2000&op=resize");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    .loginForm {
    }
  }
`;
