import { TBaseResBody } from "../base";

export type TUInfo = {
  id: string;
  name: string;
  email: string;
  age?: number;
  address?: string;
  gender?: string;
  pnum?: string;
};

export type UInfoClientBody = { clientData: TUInfo };

export type UInfoServerRes = Pick<TBaseResBody, "statusCode" | "message"> & {
  affectedResource: "User Information";
  serverData: Record<string, never> | TUInfo;
};
