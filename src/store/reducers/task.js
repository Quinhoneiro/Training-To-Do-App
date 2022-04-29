import {
  UPDATE_ACTIVE_LIST,
  UPDATE_ACTIVE_TASK,
  UPDATE_TASK_DATA,
  CREATE_NEW_TASK,
  DELETE_TASK,
} from "../actions/actionTypes";

const initialState = {
  tasks: [],
  activeTask: {},
};

function getTasksFromListsState({ activeList, lists }) {
  return lists?.filter((list) => list.id === activeList.id)[0].tasks;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ACTIVE_LIST:
      return {
        ...state,
        tasks: getTasksFromListsState(action.payload),
        activeTask: {},
      };
    case UPDATE_ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload,
      };
    case CREATE_NEW_TASK:
      return {
        ...state,
        tasks: getTasksFromListsState(action.payload),
        activeTask: action.payload.activeTask,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: getTasksFromListsState(action.payload),
        activeTask: action.payload.activeTask,
      };
    case UPDATE_TASK_DATA:
      return {
        ...state,
        tasks: getTasksFromListsState(action.payload),
        activeTask: action.payload.activeTask,
      };
    default:
      return state;
  }
}
