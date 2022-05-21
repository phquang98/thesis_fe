import { StyledCard } from "../../../components/common/Card/styles";
import { StyledLoginForm } from "../../../components/LoginForm/styles";
import { StyledNews } from "../../../components/News/styles";
import { mainPageData, yleNews } from "../../../utils";

type MainPageProps = {
  className?: string;
};

const newsDataObj = yleNews;

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;

  const foo = (): void => {
    console.log("send login data to server");
  };

  return (
    <>
      <div className={className}>
        {/* <div className="loginForm">
          <StyledLoginForm />
        </div> */}
        <div className="banner">
          <div className="bannerText">
            <p className="bannerTitle">{mainPageData.title}</p>
            <p className="bannerInfo">{mainPageData.info}</p>
          </div>
          <StyledCard className="bannerForm" styledHeight="10rem" styledWidth="10rem">
            <StyledLoginForm loginBtnFormClick={foo} />
          </StyledCard>
        </div>

        <StyledNews className="news" newData={newsDataObj} />
      </div>
    </>
  );
};

export default MainPage;
