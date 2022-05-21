import { TUAcc } from "../business";
import { TBaseResBody, TServerError } from "../base";

export type TLoginReqBody = { clientData: Pick<TUAcc, "accountName" | "accountPwd"> };

export type TLoginResSuccess = TBaseResBody & {
  serverData: {
    userId: string;
    sid: string;
  };
};

export type TLoginRes = TLoginResSuccess | TServerError;
