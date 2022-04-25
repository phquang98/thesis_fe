import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  }
});
