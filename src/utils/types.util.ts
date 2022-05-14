export type TUserData = {
  sid: string;
  userId: string;
};

export type TLoginData = {
  accNameIpt: string;
  accPwdIpt: string;
};

export type TAppCtx = {
  userData: TUserData;
  setLoggedInUser: (arg1: TUserData) => void;
  eraseLoggedInUser: () => void;
};

// --- API ---

export type TClientRequestRegister = {
  clientData: {
    name: string;
    email: string;
    account_name: string;
    account_pwd: string;
  };
};

export type TClientRequestLogin = {
  clientData: {
    account_name: string;
    account_pwd: string;
  };
};

export type TServerResponse = {
  statusCode: HTTPStatusCode;
  msg: string;
  affectedResource: string;
  serverData: Record<string, string>;
};

// TODO: lazy fix, bites your ass later
export type TServerResponseLogin = {
  msg: string;
  affectedResource: string;
  serverData: {
    user_id: string;
    sid: string;
  };
};

// TODO: lazy fix, BE dont return status code
export type TServerResponseWithStatus = TServerResponse & {
  status: number;
};

// TODO: lazy fix, BE dont return status code
export type TServerResponseLoginWithStatus = TServerResponseLogin & {
  status: number;
};

export enum HTTPStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404
}
