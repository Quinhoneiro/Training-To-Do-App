import { UPDATE_TASK_LIST, CHANGE_ACTIVE_TASK } from "../actions/actionTypes";

const initialState = {
  tasks: [],
  activeTask: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TASK_LIST:
      return {
        ...state,
        tasks: action.payload,
      };
    case CHANGE_ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload,
      };
    default:
      return state;
  }
}
