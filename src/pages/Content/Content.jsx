import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Container, Header, Tasks } from "./styles";
import TaskItem from "../../components/TaskItem/TaskItem";
import ToggleButtons from "../../components/ToggleButtons/ToggleButtons";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { createTaskOnDB, getListsFromDB } from "../../service/apiFunctions";
import { createNewTaskActionCreator } from "../../store/actions/tasks";

const Content = (props) => {
  const {
    activeListData,
    tasksViewData,
    tasksData,
    activeTaskData,
    createNewTask,
  } = props;

  const date = new Date();
  const formatedDate = format(new Date(), "'Dia' dd 'de' MMMM 'de' yyyy", {
    timeZone: "America/Sao_Paulo",
    locale: ptBR,
  });

  async function handleCreateTask(listId, activeListData) {
    const task = await createTaskOnDB(listId, { name: "Nova Tarefa" });
    const lists = await getListsFromDB();
    const data = {
      activeList: activeListData,
      lists: lists.data.data,
      activeTask: task.data.data,
    };
    createNewTask(data);
  }

  return (
    <Container>
      <Header>
        <div className="GrupoAtivo">
          <span>{activeListData.icon}</span>
          <strong>{activeListData.name}</strong>
        </div>
        <span>{`${formatedDate}`}</span>
        {activeListData.name ? (
          <div
            className="addTask"
            onClick={(e) => handleCreateTask(activeListData.id, activeListData)}
          >
            Nova Tarefa ➕
          </div>
        ) : (
          ""
        )}
      </Header>
      <Tasks view={tasksViewData}>
        <div className="SuperiorBar">
          <ToggleButtons></ToggleButtons>
        </div>
        <section>
          {tasksData.map((task) => {
            return (
              <TaskItem
                active={activeTaskData?.id === task.id ? true : false}
                key={task.id}
                data_key={task}
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
    activeListData: state.listsReducer.activeList,
    tasksViewData: state.applicationReducer.tasksView,
    tasksData: state.tasksReducer.tasks,
    activeTaskData: state.tasksReducer.activeTask,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewTask(data) {
      dispatch(createNewTaskActionCreator(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
