import { createStore, combineReducers } from "redux";
import listReducers from "./reducers/lists";
import taskReducers from "./reducers/task";
import applicationReducers from "./reducers/application";
import taskFormReducers from "./reducers/taskForm";

const reducers = combineReducers({
  listsReducer: listReducers,
  tasksReducer: taskReducers,
  applicationReducer: applicationReducers,
  taskFormReducer: taskFormReducers,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
