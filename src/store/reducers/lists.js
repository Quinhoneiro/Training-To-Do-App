import {
  UPDATE_LISTS,
  UPDATE_ACTIVE_LIST,
  CREATE_NEW_TASK,
  DELETE_TASK,
  UPDATE_TASK_DATA,
} from "../actions/actionTypes";

const initialState = {
  lists: [],
  activeList: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_LISTS:
      return {
        ...state,
        lists: action.payload,
      };
    case UPDATE_ACTIVE_LIST:
      return {
        ...state,
        activeList: action.payload.activeList,
      };
    case CREATE_NEW_TASK:
      return {
        ...state,
        lists: action.payload.lists,
      };
    case DELETE_TASK:
      return {
        ...state,
        lists: action.payload.lists,
      };
    case UPDATE_TASK_DATA:
      return {
        ...state,
        lists: action.payload.lists,
      };
    default:
      return state;
  }
}
