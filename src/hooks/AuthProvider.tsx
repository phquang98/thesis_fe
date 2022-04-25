import { createContext, useState } from "react";
import { TAppCtx, TLoginData, TUserData } from "../utils/types.util";

type AuthProviderProps = {
  children: React.ReactNode;
};

// (1)
export const AppCtx = createContext<TAppCtx>({} as TAppCtx);

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  // (2)
  const [userData, setUserData] = useState<TUserData>({ userId: "", username: "" });

  // (3)
  const login = (loginInput: TLoginData): void => {
    setUserData({ userId: "123", username: loginInput.account_name_login });
  };

  // (4)
  const logout = (): void => {
    setUserData({ userId: "", username: "" });
  };

  // (5)
  return (
    <>
      <AppCtx.Provider value={{ userData, login, logout }}>{children}</AppCtx.Provider>
    </>
  );
};

export default AuthProvider;

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context
// 1: not safe cause using `as`, but tmp fix so that not spam auth?. everywhere
// 2: the data that will be received from BE, this must be known in the whole app -> reason using Context API
// 3: use axios in here, to give loginUserIpt to BE and receive (1)
// 4: just erase the state of the data === not logged in
// 5: Probably use in 1 place (App.tsx) -> wraps the whole app -> whole app get access to the AppCtx props
