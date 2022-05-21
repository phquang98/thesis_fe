import { TBaseResBody } from "../base";

export type TUAcc = {
  accountName: string;
  accountPwd: string;
  isAdmin: boolean;
  user_id: string;
};

export type UAccResBody = Pick<TBaseResBody, "statusCode" | "message"> & {
  affectedResource: "User Account";
  serverData: Record<string, never>;
};
