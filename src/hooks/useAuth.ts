import { useContext } from "react";

import { TAppCtx } from "../types/system/context.type";
import { AppCtx } from "./AuthProvider";

export const useAuth = (): TAppCtx => {
  return useContext(AppCtx);
};

// Just a wrapper func that syntax is recommended online
