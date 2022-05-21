export type TUserData = {
  userId: string;
  sid: string;
};

export type TAppCtx = {
  userData: TUserData;
  setLoggedInUser: (arg1: TUserData) => void;
  eraseLoggedInUser: () => void;
};
