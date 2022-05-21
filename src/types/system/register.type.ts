import { TUAcc } from "../business/UserAccount.type";
import { TUInfo } from "../business/UserInfo.type";
import { TBaseResBody } from "../system";

export type TRegisterReqBody = {
  clientData: Pick<TUAcc, "accountName" | "accountPwd"> & Pick<TUInfo, "email" | "name">;
};

export type TLRegisterResSuccess = TBaseResBody;

export type TRegisterResFailure = TBaseResBody & {
  name: "SimpleError";
};

export type TRegisterRes = TLRegisterResSuccess | TRegisterResFailure;
