import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { VscClose } from "react-icons/vsc";
import {
  deleteTaskActionCreator,
  updateActiveTaskActionCreator,
  updateTaskDataActionCreator,
} from "../../store/actions/tasks";
import {
  updateTaskFormNameActionCreator,
  updateTaskFormDateActionCreator,
  updateTaskFormHourActionCreator,
  updateTaskFormStatusActionCreator,
} from "../../store/actions/taskForm";
import {
  deleteTaskFromDB,
  getListsFromDB,
  updateTaskOnDB,
} from "../../service/apiFunctions";
import ptBR from "date-fns/locale/pt-BR";
import { format, parseISO } from "date-fns";
import { FiTrash2 } from "react-icons/fi";

const OptionBar = (props) => {
  const {
    activeTaskData,
    activeListData,
    updateActiveTask,
    updateTaskData,
    deleteTask,
    formData,
    updateFormName,
    updateFormDate,
    updateFormHour,
    updateFormStatus,
  } = props;

  const { name, date, hour, status } = formData;
  const dateLocalTime = new Date(date);
  const formatedDate = date ? date.substring(0, 10) : "";
  const formatedHour = date ? hour : "";

  async function handleSubmit(
    event,
    listId,
    taskId,
    taskName,
    taskDate,
    taskHour,
    taskStatus,
    activeListData
  ) {
    event.preventDefault();

    const formatedDate = date
      ? `${taskDate.substring(0, 10)}T${taskHour}:00`
      : "";

    const body = {
      name: taskName,
      date: formatedDate || null,
      status: taskStatus,
    };

    const task = await updateTaskOnDB(listId, taskId, body);
    const lists = await getListsFromDB();

    const data = {
      activeList: activeListData,
      lists: lists.data.data,
      activeTask: task,
    };

    updateTaskData(data);
  }

  async function handleDeleteTask(listId, taskId, activeListData) {
    await deleteTaskFromDB(listId, taskId);
    const lists = await getListsFromDB();
    const data = {
      activeList: activeListData,
      lists: lists.data.data,
      activeTask: {},
    };
    deleteTask(data);
  }

  return (
    <Container visible={activeTaskData?.id && true}>
      <VscClose className="CloseButton" onClick={() => updateActiveTask({})} />
      <div className="wrapper">
        <form
          onSubmit={(e) => {
            handleSubmit(
              e,
              activeTaskData?.list_id,
              activeTaskData?.id,
              name,
              date,
              hour,
              status,
              activeListData
            );
          }}
        >
          <label htmlFor="taskName">Tarefa</label>
          <input
            type="text"
            name="taskName"
            value={name}
            onChange={(e) => updateFormName(e.target.value)}
          />
          <label htmlFor="taskDate">Data</label>
          <input
            type="date"
            name="taskDate"
            value={formatedDate}
            onChange={(e) => updateFormDate(e.target.value)}
          />
          <label htmlFor="taskDate">Hora</label>
          <input
            type="time"
            name="taskTime"
            value={formatedHour}
            onChange={(e) => updateFormHour(e.target.value)}
          />
          <button className="buttons btn-save" type="submit">
            Salvar
          </button>
        </form>
        <button
          className="buttons btn-delete"
          onClick={() =>
            handleDeleteTask(
              activeTaskData?.list_id,
              activeTaskData?.id,
              activeListData
            )
          }
        >
          <FiTrash2 />
        </button>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    activeTaskData: state.tasksReducer.activeTask,
    activeListData: state.listsReducer.activeList,
    formData: state.taskFormReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveTask(activeTask) {
      dispatch(updateActiveTaskActionCreator(activeTask));
    },
    updateFormName(formData) {
      dispatch(updateTaskFormNameActionCreator(formData));
    },
    updateFormDate(formData) {
      dispatch(updateTaskFormDateActionCreator(formData));
    },
    updateFormHour(formData) {
      dispatch(updateTaskFormHourActionCreator(formData));
    },
    updateFormStatus(formData) {
      dispatch(updateTaskFormStatusActionCreator(formData));
    },
    deleteTask(data) {
      dispatch(deleteTaskActionCreator(data));
    },
    updateTaskData(data) {
      dispatch(updateTaskDataActionCreator(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionBar);
