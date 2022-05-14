import { MouseEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UAccAPI } from "../../api";

import { useAuth } from "../../hooks/useAuth";

type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();
  const navigate = useNavigate();

  const btnClickLogoutHdlr: MouseEventHandler<HTMLButtonElement> = () => {
    const foo = async () => {
      const serverRes = await UAccAPI.logout(auth.userData.userId);
      // if (serverRes.) TODO: them status code cho BE vao, dmm
    };

    auth.eraseLoggedInUser();
    navigate("/");
  };

  // if logged in
  if (auth.userData.sid !== "") {
    return (
      <div className={className}>
        <Link to="/">Main</Link>

        <div className="navSection">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/transaction">Transaction</Link>
          <Link to="/statement">Bank Statement</Link>
          <button onClick={btnClickLogoutHdlr}>Logout</button>
        </div>
      </div>
    );
  }

  // if not logged in
  return (
    <>
      <div className={className}>
        <Link to="/">Main</Link>

        <div className="navSection">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
