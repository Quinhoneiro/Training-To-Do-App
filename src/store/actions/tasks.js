import {
  UPDATE_ACTIVE_TASK,
  UPDATE_TASK_DATA,
  CREATE_NEW_TASK,
  DELETE_TASK,
} from "../actions/actionTypes";

export const updateActiveTaskActionCreator = (activeTask) => {
  return {
    type: UPDATE_ACTIVE_TASK,
    payload: activeTask,
  };
};

export const updateTaskDataActionCreator = (data) => {
  return {
    type: UPDATE_TASK_DATA,
    payload: data,
  };
};

export const createNewTaskActionCreator = (data) => {
  return {
    type: CREATE_NEW_TASK,
    payload: data,
  };
};

export const deleteTaskActionCreator = (data) => {
  return {
    type: DELETE_TASK,
    payload: data,
  };
};
