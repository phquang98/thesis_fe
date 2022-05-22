import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  },
  withCredentials: true // CORS
});

// export * from "./system/index";
// export * from "./business/index";

// NOTE: use this if want to mimic delay in requests
// const sleep = (ms: number): Promise<unknown> => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
// await sleep(2000);
// NOTE: example using fetch <https://kentcdodds.com/blog/using-fetch-with-type-script>
