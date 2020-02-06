export const LOAD_USERS_START = "LOAD_USERS_START";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";


export function loadUsersStart() {
  return {
    type: LOAD_USERS_START
  };
}

export function loadUsersSuccess(data) {
  return {
    type: LOAD_USERS_SUCCESS,
    payload: data.data
  };
}