import { healthCheck } from "./healthCheck";
import { login } from "./login";
import { register } from "./register";
import { logout } from "./logout";

export const systemAPI = {
  healthCheck,
  register,
  login,
  logout
};
