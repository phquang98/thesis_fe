import { useState } from "react";

import { StyledCard } from "../../../components/common/Card/styles";
import { StyledLoginForm } from "../../../components/LoginForm/styles";
import { StyledNews } from "../../../components/News/styles";
import { useAuth } from "../../../hooks/useAuth";
import { TLoginReqBody } from "../../../types/system/login.type";
import { mainPageData, yleNews } from "../../../utils";
import { systemAPI } from "../../../api/system";
import { useNavigate } from "react-router-dom";

type MainPageProps = {
  className?: string;
};

const newsDataObj = yleNews;

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();
  const navigate = useNavigate();

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

    try {
      const returnedCreds = await systemAPI.login(sendToServer);
      if ("serverData" in returnedCreds) {
        auth.setLoggedInUser({ userId: returnedCreds.serverData.userId, sid: returnedCreds.serverData.sid });
        auth.setServerRes(returnedCreds);
        navigate("/home");
      }
    } catch (error) {
      console.log("error", error);
      // auth.setServerRes(error);
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
