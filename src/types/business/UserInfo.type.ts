import { TBaseResBody } from "../system";

export type TUInfo = {
  id: string;
  name: string;
  email: string;
  age?: number;
  address?: string;
  gender?: string;
  pnum?: string;
};

export type UInfoResBody = TBaseResBody & {
  serverData: Record<string, never> | TUInfo;
};
