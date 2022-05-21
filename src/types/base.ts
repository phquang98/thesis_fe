import { HttpStatusCode } from "../utils";

export type TBaseResBody = {
  statusCode: HttpStatusCode;
  message: string;
  affectedResource: string;
};

// type TServerSuccess depends on API actions
// TODO: del this
export type TServerSuccess = TBaseResBody & {
  serverData: Record<string, unknown>;
};

export type TServerError = TBaseResBody & { name: "SimpleError" };
