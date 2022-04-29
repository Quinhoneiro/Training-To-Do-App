import {
  UPDATE_TASK_FORM_NAME,
  UPDATE_TASK_FORM_DATE,
  UPDATE_TASK_FORM_HOUR,
  UPDATE_TASK_FORM_STATUS,
  UPDATE_ACTIVE_TASK,
  CREATE_NEW_TASK,
  UPDATE_ACTIVE_LIST,
  DELETE_TASK,
} from "../actions/actionTypes";

const initialState = {
  name: "",
  date: "",
  hour: "",
  status: "",
};

function getDateFormat(date) {
  return date ? date.substring(0, 10) : "";
}
function getHourFormat(date) {
  return date ? String(new Date(date)).substring(16, 21) : "";
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TASK_FORM_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_TASK_FORM_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case UPDATE_TASK_FORM_HOUR:
      return {
        ...state,
        hour: action.payload,
      };
    case UPDATE_TASK_FORM_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case UPDATE_ACTIVE_TASK:
      return {
        ...state,
        name: action.payload.name || "",
        date: getDateFormat(action.payload.date) || "",
        hour: getHourFormat(action.payload.date) || "",
        status: action.payload.status || "",
      };
    case CREATE_NEW_TASK:
      const { name, date, hour, status } = action.payload.activeTask;
      return {
        ...state,
        name: name || "",
        date: date || "",
        hour: hour || "",
        status: status || "",
      };
    case UPDATE_ACTIVE_LIST:
      return {
        ...state,
        name: "",
        date: "",
        hour: "",
        status: "",
      };
    case DELETE_TASK:
      return {
        ...state,
        name: "",
        date: "",
        hour: "",
        status: "",
      };
    default:
      return state;
  }
}
