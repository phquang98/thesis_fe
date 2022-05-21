import { TUAcc } from "..";
import { TBaseResBody } from "../system";

export type TLoginReqBody = { clientData: Pick<TUAcc, "accountName" | "accountPwd"> };

export type TLoginResSuccess = TBaseResBody & {
  serverData: {
    userId: string;
    sid: string;
  };
};

export type TLoginResFailure = TBaseResBody & {
  name: "SimpleError";
};

export type TLoginRes = TLoginResSuccess | TLoginResFailure;
