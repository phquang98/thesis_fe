import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { StyledAnchor } from "../Anchor/styles";
import { MdLogout } from "react-icons/md";
// import { UAccAPI } from "../../api";

import { useAuth } from "../../../hooks/useAuth";
import { systemAPI } from "../../../api/system";
import { TLogoutRes } from "../../../types/system/logout.type";

type HeaderProps = {
  className?: string;
  logoutFunc: (userIdHere: string) => Promise<void>;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { className, logoutFunc } = props;
  const { isLoggedIn, userData, eraseLoggedInUser } = useAuth();
  const navigate = useNavigate();

  const btnClickLogoutHdlr: MouseEventHandler<HTMLButtonElement> = () => {
    // const foo = async () => {
    //   const serverRes = await UAccAPI.logout(auth.userData.userId);
    //   // if (serverRes.) TODO: them status code cho BE vao, dmm
    // };

    logoutFunc(userData.userId);
  };

  // If localStorage contains userId && sid
  const cac = true;
  if (isLoggedIn) {
    return (
      <div className={className}>
        <StyledAnchor anchorArrival="/" displayText="Main" />

        <div className="navSection">
          <StyledAnchor anchorArrival="/home" displayText="Home" />
          <StyledAnchor anchorArrival="/profile" displayText="Profile" />
          <StyledAnchor anchorArrival="/statement" displayText="Statement" />
          <StyledAnchor anchorArrival="/transaction" displayText="Transaction" />
          <button onClick={btnClickLogoutHdlr} className="logoutBtn">
            <span className="logoutText">Logout</span>
            <span className="logoutIcon">
              <MdLogout />
            </span>
          </button>
        </div>
      </div>
    );
  }

  // If localStorage empty
  return (
    <>
      <div className={className}>
        <StyledAnchor anchorArrival="/" displayText="Main" />

        <div className="navSection">
          <StyledAnchor anchorArrival="/register" displayText={"Register"} />
        </div>
      </div>
    </>
  );
};

export default Header;
