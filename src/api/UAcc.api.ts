import { axiosInstance } from ".";
import {
  TClientRequestLogin,
  TServerResponse,
  TServerResponseLogin,
  TServerResponseLoginWithStatus
} from "../utils/types.util";

const login = async (payload: TClientRequestLogin): Promise<TServerResponseLoginWithStatus> => {
  const { data, status } = await axiosInstance.post<TServerResponseLogin>("/login", JSON.stringify(payload));
  return { ...data, status };
};

const logout = async (userId: string): Promise<TServerResponse> => {
  const { data } = await axiosInstance.post<TServerResponse>(`${userId}/logout`);
  return data;
};

// Increase the `expire` prop of the session record amounting to `cookie.maxAge` in BE (e.g keeps Client logged -in another 10 mins )
const reload = async (userId: string): Promise<TServerResponse> => {
  const { data } = await axiosInstance.post<TServerResponse>(`${userId}/reload`);
  return data;
};

export const UAccAPI = {
  login,
  logout,
  reload
};

// NOTE: use this if want to mimic delay in requests
// const sleep = (ms: number): Promise<unknown> => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
// await sleep(2000);
// NOTE: example using fetch <https://kentcdodds.com/blog/using-fetch-with-type-script>
