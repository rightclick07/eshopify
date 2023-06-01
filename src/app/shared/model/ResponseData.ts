export interface ResponseData<T> {
    httpStatusCode: number;
    message: string;
    payload: T;
  }