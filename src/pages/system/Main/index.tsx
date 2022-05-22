import { useState } from "react";

import { StyledCard } from "../../../components/common/Card/styles";
import { StyledLoginForm } from "../../../components/LoginForm/styles";
import { StyledNews } from "../../../components/News/styles";
import { useAuth } from "../../../hooks/useAuth";
import { useAPI } from "../../../hooks/useAPI";
import { TLoginReqBody } from "../../../types/system/login.type";
import { mainPageData, yleNews } from "../../../utils";
import { systemAPI } from "../../../api/system";

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
  const submitInputCredsToServer = async (): Promise<void> => {
    const sendToServer: TLoginReqBody = {
      clientData: {
        accountName: inputAccName,
        accountPwd: inputAccPwd
      }
    };

    // TODO: wrap this inside useAPI
    const serverRes = await systemAPI.login(sendToServer);
    console.log("serverRes", serverRes);

    if ("serverData" in serverRes) {
      auth.setLoggedInUser({ userId: "123456", sid: "abcxyz" });
    }

    // if ("name" in serverRes) {
    //   cac;
    // }

    console.log("check if data ready to send", sendToServer);
    console.log("send login data to server");
    const serverReturnGoodData = true;
    if (serverReturnGoodData) {
      auth.setLoggedInUser({ userId: "123456", sid: "abcxyz" });
    }
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
              loginBtnFormClick={submitInputCredsToServer}
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
