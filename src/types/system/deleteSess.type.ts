import { TBaseResBody, TServerError } from "../base";

type TDeleteResSuccess = TBaseResBody;

export type TDeleteRes = TDeleteResSuccess | TServerError;
