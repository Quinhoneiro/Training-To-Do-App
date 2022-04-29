import {
  UPDATE_TASK_FORM_NAME,
  UPDATE_TASK_FORM_DATE,
  UPDATE_TASK_FORM_HOUR,
  UPDATE_TASK_FORM_STATUS,
} from "../actions/actionTypes";

export const updateTaskFormNameActionCreator = (newData) => {
  return {
    type: UPDATE_TASK_FORM_NAME,
    payload: newData,
  };
};

export const updateTaskFormDateActionCreator = (newData) => {
  return {
    type: UPDATE_TASK_FORM_DATE,
    payload: newData,
  };
};

export const updateTaskFormHourActionCreator = (newData) => {
  return {
    type: UPDATE_TASK_FORM_HOUR,
    payload: newData,
  };
};

export const updateTaskFormStatusActionCreator = (newData) => {
  return {
    type: UPDATE_TASK_FORM_STATUS,
    payload: newData,
  };
};
