import { useState } from "react";
import { StyledCard } from "../../../components/common/Card/styles";
import { StyledLoginForm } from "../../../components/LoginForm/styles";
import { StyledNews } from "../../../components/News/styles";
import { useAuth } from "../../../hooks/useAuth";
import { useAPI } from "../../../hooks/useFetch";
import { TLoginReqBody } from "../../../types/system/login.type";
import { mainPageData, yleNews } from "../../../utils";

type MainPageProps = {
  className?: string;
};

const newsDataObj = yleNews;

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();

  const [inputAccName, setInputAccName] = useState<string>("");
  const [inputAccPwd, setInputAccPwd] = useState<string>("");

  // (1)
  const foo = (): void => {
    const clientData: TLoginReqBody = {
      clientData: {
        accountName: inputAccName,
        accountPwd: inputAccPwd
      }
    };
    console.log("check if data ready to send", clientData);
    console.log("send login data to server");
    const serverReturnGoodData = true;
    if (serverReturnGoodData) {
      auth.setLoggedInUser({ userId: "123456", sid: "abcxyz" });
    }
    console.log("userID should be in cookie and localstorage, sid should be in localstorage");
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
            <StyledLoginForm
              changeStateLoginAccName={setInputAccName}
              changeStateLoginAccPass={setInputAccPwd}
              loginBtnFormClick={foo}
            />
          </StyledCard>
        </div>

        <StyledNews className="news" newData={newsDataObj} />
      </div>
    </>
  );
};

export default MainPage;

// Explain (1):
// - after extract account name and acc pwd from login form, form those into an json ready for send
// - then send to the server using useAPI
// - if hook goods -> navigate
// - if hook bad -> put error in error noti
