import { Outlet, useNavigate } from "react-router-dom";
import { systemAPI } from "../api/system";
import { StyledErrorNoti } from "../components/common/ErrorNoti/styles";
import { StyledFooter } from "../components/common/Footer/styles";
import { StyledHeader } from "../components/common/Header/styles";
import { useAuth } from "../hooks/useAuth";
import { TLogoutRes } from "../types/system/logout.type";

type LayoutProps = {
  className?: string;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();
  const navigate = useNavigate();

  const logoutFunc = async (userIdHere: string): Promise<void> => {
    try {
      const logoutRes = await systemAPI.logout(userIdHere);
      if (!("name" in logoutRes)) {
        auth.eraseLoggedInUser();
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // const { isLoading, isSuccess, isFailure, serverRes, serverErr } = useAPI();

  // useEffect(() => {
  //   if (isLoading) {
  //     setServerInfo(null);
  //   }
  //   if (isSuccess) {
  //     setServerInfo(serverRes);
  //   }
  //   if (isFailure) {
  //     setServerInfo(serverErr);
  //   }
  // }, [isLoading, isSuccess, isFailure, serverRes, serverErr]);

  return (
    <>
      <div className={className}>
        <StyledHeader logoutFunc={logoutFunc} />
        <StyledErrorNoti />

        {/* {isLoading && <StyledErrorNoti serverInfoDisplay={null} />}
        {isSuccess && <StyledErrorNoti serverInfoDisplay={serverRes} />}
        {isFailure && <StyledErrorNoti serverInfoDisplay={serverErr} />} */}

        <Outlet />
        <StyledFooter />
      </div>
    </>
  );
};

export default Layout;
