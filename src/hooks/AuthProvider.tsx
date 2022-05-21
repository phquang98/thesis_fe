import { createContext, useEffect, useState } from "react";
import { TAppCtx, TUserData } from "../types/system/context.type";

type AuthProviderProps = {
  children: React.ReactNode;
};

// (1)
export const AppCtx = createContext<TAppCtx>({} as TAppCtx);

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  // (2)
  const [userData, setUserData] = useState<TUserData>({ userId: "", sid: "" });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // (3)
  const setLoggedInUser = (loggedInData: TUserData): void => {
    setUserData({ userId: loggedInData.userId, sid: loggedInData.sid });
    localStorage.setItem("userId", JSON.stringify(loggedInData.userId));
    localStorage.setItem("sid", JSON.stringify(loggedInData.sid));
  };

  // (4)
  const eraseLoggedInUser = (): void => {
    setUserData({ userId: "", sid: "" });
    localStorage.clear();
  };

  useEffect(() => {
    const checkLoggedInUser = (): void => {
      const userIdSuspect = localStorage.getItem("userId");
      const sidSuspect = localStorage.getItem("sid");
      if (userIdSuspect && sidSuspect) {
        setIsLoggedIn(true);
        return;
      }
      setIsLoggedIn(false);
    };
    checkLoggedInUser();
  }, [userData, isLoggedIn]);

  // (5)
  return (
    <>
      <AppCtx.Provider value={{ userData, isLoggedIn, setLoggedInUser, eraseLoggedInUser }}>{children}</AppCtx.Provider>
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
