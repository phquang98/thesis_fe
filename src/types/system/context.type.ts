export type TUserData = {
  userId: string;
  sid: string;
};

export type TAppCtx = {
  userData: TUserData;
  isLoggedIn: boolean;
  setLoggedInUser: (arg1: TUserData) => void;
  eraseLoggedInUser: () => void;
};
