export type TUserData = {
  userId: string;
  username: string;
};

export type TLoginData = {
  account_name_login: string;
  account_pwd_login: string;
};

export type TAppCtx = {
  userData: TUserData;
  login: (arg1: TLoginData) => void;
  logout: () => void;
};
