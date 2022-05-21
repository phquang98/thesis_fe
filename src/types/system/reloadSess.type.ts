import { TBaseResBody, TServerError } from "../base";

type TReloadResSuccess = TBaseResBody & {
  serverData: {
    userId: string;
    sid: string;
  };
};

export type TReloadRes = TReloadResSuccess | TServerError;
