import {
  LOAD_USERS_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USERS_FAILED,
  LOAD_USER_FAILED
} from "../actions/users";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {users: action.payload});

    case LOAD_USER_SUCCESS:
      return Object.assign({}, state, {user: action.payload});

    case LOAD_USERS_FAILED:
      return Object.assign({}, state, {error: action.payload});

    case LOAD_USER_FAILED:
      return Object.assign({}, state, {error: action.payload});

    default:
      return state;
  }
}