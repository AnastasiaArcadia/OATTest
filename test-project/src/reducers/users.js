import {LOAD_USERS_SUCCESS} from "../actions";

const initialState = {
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}