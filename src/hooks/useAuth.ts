import { useContext } from "react";
import { TAppCtx } from "../utils/types.util";

import { AppCtx } from "./AuthProvider";

export const useAuth = (): TAppCtx => {
  return useContext(AppCtx);
};

// Just a wrapper func that syntax is recommended online
