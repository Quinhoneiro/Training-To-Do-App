import { createStore, combineReducers } from "redux";
import listReducers from "./reducers/lists";
import taskReducers from "./reducers/task";
import applicationReducers from "./reducers/application";

const reducers = combineReducers({
  lists: listReducers,
  tasks: taskReducers,
  application: applicationReducers,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
