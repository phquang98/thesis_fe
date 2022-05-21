import { TBaseResBody } from "../system";

export type TUAcc = {
  accountName: string;
  accountPwd: string;
  isAdmin: boolean;
  user_id: string;
};

type UAccResBody = TBaseResBody & {
  serverData: Record<string, never>;
};
