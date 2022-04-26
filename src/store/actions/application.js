import { CHANGE_VIEW_TASK_LIST } from "./actionTypes";

export const changeViewTaskList = (tasksView) => {
  return {
    type: CHANGE_VIEW_TASK_LIST,
    payload: tasksView,
  };
};
