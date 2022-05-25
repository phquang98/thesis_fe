import { HttpStatusCode } from "../../utils";

export type TUserData = {
  userId: string;
  sid: string;
};

// TODO: tmp fix
type ExpectedServerData = {
  message: string;
  affectedResource: string;
  statusCode: HttpStatusCode;
  name?: "SimpleError";
  serverData?: Record<string, unknown>;
};

export type TAppCtx = {
  userData: TUserData;
  isLoggedIn: boolean;
  serverRes: ExpectedServerData;
  setLoggedInUser: (arg1: TUserData) => void;
  eraseLoggedInUser: () => void;
  setServerRes: React.Dispatch<React.SetStateAction<ExpectedServerData>>;
};
