import { TUAcc } from "../business/UserAccount.type";
import { TUInfo } from "../business/UserInfo.type";

export type TRegisterReqBody = {
  clientData: Pick<TUAcc, "accountName" | "accountPwd"> & Pick<TUInfo, "email" | "name">;
};
