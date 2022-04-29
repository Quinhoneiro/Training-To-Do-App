import api from "./api";

export async function getListsFromDB() {
  return await api.get("lists");
}

export async function updateTaskOnDB(listId, taskId, body) {
  return await api.patch(`lists/${listId}/tasks/${taskId}`, body);
}

export async function createTaskOnDB(listId, body) {
  return await api.post(`lists/${listId}/tasks`, body);
}

export async function deleteTaskFromDB(listId, taskId) {
  return await api.delete(`lists/${listId}/tasks/${taskId}`);
}

export async function createListOnDB(listName) {
  const body = {
    name: listName,
    type: "list",
    icon: "✅",
  };
  return await api.post(`lists`, body);
}
