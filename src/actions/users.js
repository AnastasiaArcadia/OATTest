export const LOAD_USERS_FAILED = "LOAD_USERS_FAILED";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_USER_FAILED = "LOAD_USER_FAILED";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";


export function loadUsersFailed(data) {
  return {
    type: LOAD_USERS_FAILED,
    payload: data
  };
}

export function loadUsersSuccess(data) {
  return {
    type: LOAD_USERS_SUCCESS,
    payload: data.data
  };
}

export function loadUserFailed(data) {
  return {
    type: LOAD_USER_FAILED,
    payload: data
  };
}

export function loadUserSuccess(data) {
  return {
    type: LOAD_USER_SUCCESS,
    payload: data.data
  };
}