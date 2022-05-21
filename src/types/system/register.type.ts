import { TUAcc, TUInfo } from "../business";
import { TBaseResBody, TServerError } from "../base";

export type TRegisterReqBody = {
  clientData: Pick<TUAcc, "accountName" | "accountPwd"> & Pick<TUInfo, "email" | "name">;
};

type TRegisterResSuccess = TBaseResBody;

export type TRegisterRes = TRegisterResSuccess | TServerError;
