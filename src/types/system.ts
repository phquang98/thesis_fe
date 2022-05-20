export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHENTICATED = 401,
  UNAUTHORIZED = 403,
  NOT_FOUND = 404
}

export type TServerError = {
  message: string;
  affectedResource: string;
  statusCode: HttpStatusCode;
};
