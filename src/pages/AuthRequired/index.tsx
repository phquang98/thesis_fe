import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

type FailedAuthProps = {
  children: JSX.Element;
};

const AuthRequired = ({ children }: FailedAuthProps): JSX.Element => {
  const auth = useAuth();
  const navigate = useNavigate();

  const btnClickGoToLoginPageHdlr: MouseEventHandler<HTMLButtonElement> = () => {
    navigate("/login");
  };

  if (auth && auth.userData.sid === "") {
    console.log("ki vay authrequired", auth);
    return (
      <>
        <div>
          <p>You must login to access this page</p>
          <button onClick={btnClickGoToLoginPageHdlr}>Go to login</button>
        </div>
      </>
    );
  }

  return children;
};

export default AuthRequired;

// Wrap this outside every protected page. If dont have login proof, render a small page that user will redirect to login form
