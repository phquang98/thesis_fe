import { ExpectedServerBody } from "../business/networkAction";

export type TUserData = {
  userId: string;
  sid: string;
};

export type TAppCtx = {
  userData: TUserData;
  isLoggedIn: boolean;
  // serverRes: ExpectedServerBody;
  setLoggedInUser: (arg1: TUserData) => void;
  eraseLoggedInUser: () => void;
  // setServerRes: React.Dispatch<React.SetStateAction<ExpectedServerBody>>;
};
