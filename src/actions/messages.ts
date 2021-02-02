import { CREATE_MESSAGE, GET_ERRORS } from "./types";

export const createMessage = (msg: any) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

//errors return
export const returnErrors = (msg: any, status: any) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};