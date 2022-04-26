import { GET_LISTS_FROM_DB, CHANGE_ACTIVE_LIST } from "./actionTypes";

export const getListsFromDB = (lists) => {
  return {
    type: GET_LISTS_FROM_DB,
    payload: lists,
  };
};

export const changeActiveList = (activeLists) => {
  return {
    type: CHANGE_ACTIVE_LIST,
    payload: activeLists,
  };
};
