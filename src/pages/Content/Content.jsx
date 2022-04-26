import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Container, Header, Tasks } from "./styles";
import TaskItem from "../../components/TaskItem/TaskItem";
import ToggleButtons from "../../components/ToggleButtons/ToggleButtons";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import api from "../../service/api";
import { getListsFromDB, changeActiveList } from "../../store/actions/lists";
import { changeActiveTask, updateTaskList } from "../../store/actions/tasks";

const Content = (props) => {
  const {
    lists,
    getOneList,
    activeList,
    tasks,
    activeTask,
    getLists,
    createActionUpdateTaskList,
    createActionChangeActiveTask,
    tasksView,
  } = props;

  const date = new Date();
  const formatedDate = format(new Date(), "'Dia' dd 'de' MMMM 'de' yyyy", {
    timeZone: "America/Sao_Paulo",
    locale: ptBR,
  });

  const createNewTask = useCallback(async (activeListData) => {
    const body = { name: "Nova Tarefa" };
    const newTask = await api.post(`lists/${activeListData.id}/tasks`, body);
    await getLists();
    const taskList = await getOneList(activeListData.id);
    createActionChangeActiveTask(newTask);
    createActionUpdateTaskList(taskList);
  }, []);

  return (
    <Container>
      <Header>
        <div className="GrupoAtivo">
          <span>{activeList.icon}</span>
          <strong>{activeList.name}</strong>
        </div>
        <span>{`${formatedDate}`}</span>
        {activeList.name ? (
          <div
            className="addTask"
            onClick={async (e) => {
              createNewTask(activeList);
            }}
          >
            ➕ Nova Tarefa
          </div>
        ) : (
          ""
        )}
      </Header>
      <Tasks view={tasksView}>
        <div className="SuperiorBar">
          <ToggleButtons></ToggleButtons>
        </div>
        <section>
          {tasks.map((task) => {
            return (
              <TaskItem
                active={activeTask.id === task.id ? true : false}
                key={task.id}
                data_key={task.id}
                name={task.name}
                date={task.date}
                checked={!!task.status}
              ></TaskItem>
            );
          })}
        </section>
      </Tasks>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    activeTask: state.tasks.activeTask,
    lists: state.lists.lists,
    activeList: state.lists.activeList,
    tasksView: state.application.tasksView,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    async getLists() {
      const response = await api.get("lists");
      const action = getListsFromDB(response.data.data);
      dispatch(action);
    },
    async getOneList(activeListId) {
      const response = await api.get(`lists/${activeListId}`);
      const action = changeActiveList(response.data.data);
      dispatch(action);
      return response.data.data;
    },
    createActionUpdateTaskList(activeList) {
      const taskList = activeList.tasks;
      const action = updateTaskList(taskList);
      dispatch(action);
    },
    createActionChangeActiveTask(activeTask) {
      const action = changeActiveTask(activeTask);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
