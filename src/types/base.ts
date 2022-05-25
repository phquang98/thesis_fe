import { HttpStatusCode } from "../utils";
import { ExpectedServerBody } from "./business/networkAction";

export type TBaseResBody = {
  statusCode: HttpStatusCode;
  message: string;
  affectedResource: string;
};

// type TServerSuccess depends on API actions
// TODO: del this
export type TServerSuccess = TBaseResBody & {
  serverData: ExpectedServerBody;
};

export type TServerError = TBaseResBody & { name: "SimpleError" };
