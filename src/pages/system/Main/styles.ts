import styled from "styled-components";

import MainPage from ".";

export const StyledMainPage = styled(MainPage)`
  & {
    .banner {
      padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
      margin-bottom: 2rem;
      min-height: 20rem;
      background-image: url("https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/493615/getty-stock-market-chart.jpg&w=2000&op=resize");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;

      display: flex;
      justify-content: space-between;

      .bannerText {
        color: ${(props) => props.theme.light.text};

        .bannerTitle {
          font-weight: bold;
          font-size: 1.75rem;
        }

        .bannerInfo {
        }
      }

      .bannerForm {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }

    .news {
      padding-bottom: ${(props) => props.theme.defaultPadTop};
    }
  }
`;
