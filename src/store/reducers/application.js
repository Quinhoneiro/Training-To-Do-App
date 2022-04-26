import { CHANGE_VIEW_TASK_LIST } from "../actions/actionTypes";

const initialState = {
  tasksView: "list",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW_TASK_LIST:
      return {
        ...state,
        tasksView: action.payload,
      };
    default:
      return state;
  }
}
