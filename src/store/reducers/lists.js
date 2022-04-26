import { GET_LISTS_FROM_DB, CHANGE_ACTIVE_LIST } from "../actions/actionTypes";

const initialState = {
  lists: [],
  activeList: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_FROM_DB:
      return {
        ...state,
        lists: action.payload,
      };
    case CHANGE_ACTIVE_LIST:
      return {
        ...state,
        activeList: action.payload,
      };
    default:
      return state;
  }
}
