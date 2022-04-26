import { UPDATE_TASK_LIST, CHANGE_ACTIVE_TASK } from "./actionTypes";

export const updateTaskList = (taskList) => {
  return {
    type: UPDATE_TASK_LIST,
    payload: taskList,
  };
};

export const changeActiveTask = (activeTask) => {
  return {
    type: CHANGE_ACTIVE_TASK,
    payload: activeTask,
  };
};
