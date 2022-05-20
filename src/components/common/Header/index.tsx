import { MouseEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledAnchor } from "../Anchor/styles";
import { MdLogout } from "react-icons/md";
// import { UAccAPI } from "../../api";

// import { useAuth } from "../../hooks/useAuth";
import { customTheme } from "../../../styles/index";

type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { className } = props;
  // const auth = useAuth();
  const navigate = useNavigate();

  const loggedIn = false;

  const btnClickLogoutHdlr: MouseEventHandler<HTMLButtonElement> = () => {
    // const foo = async () => {
    //   const serverRes = await UAccAPI.logout(auth.userData.userId);
    //   // if (serverRes.) TODO: them status code cho BE vao, dmm
    // };

    // auth.eraseLoggedInUser();
    navigate("/");
  };

  // if logged in
  if (loggedIn) {
    // if (auth.userData.sid !== "") {
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

  // if not logged in
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
