import { UPDATE_LISTS, UPDATE_ACTIVE_LIST } from "./actionTypes";

export const updateListsActionCreator = (lists) => {
  return {
    type: UPDATE_LISTS,
    payload: lists,
  };
};

export const updateActiveListActionCreator = (activeList, lists) => {
  return {
    type: UPDATE_ACTIVE_LIST,
    payload: { activeList, lists },
  };
};
