import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "./styles";
import Checkbox from "@mui/material/Checkbox";
import { format } from "date-fns";
import {
  updateActiveTaskActionCreator,
  updateTaskDataActionCreator,
} from "../../store/actions/tasks";
import { getListsFromDB, updateTaskOnDB } from "../../service/apiFunctions";

const TaskItem = (props) => {
  const { tasksViewData, activeListData, updateActiveTask, updateTaskData } =
    props;

  const [checked, setChecked] = React.useState(props.checked);
  const formatedDate = props.date && format(new Date(props.date), "dd/MM/yyyy");

  const handleChange = async (event) => {
    setChecked(event.target.checked);
  };

  async function handleStatusChange(status, task, activeListData) {
    const body = {
      status,
    };
    const updatedTask = await updateTaskOnDB(task.list_id, task.id, body);
    const lists = await getListsFromDB();
    const data = {
      activeList: activeListData,
      lists: lists.data.data,
      activeTask: {},
    };
    updateTaskData(data);
  }

  function handleTaskClick(active) {
    active ? updateActiveTask({}) : updateActiveTask(props.data_key);
  }

  return (
    <Container
      onClick={() => {
        handleTaskClick(props.active);
      }}
      view={tasksViewData}
      active={props.active}
    >
      <Checkbox
        className="ckb"
        size="large"
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        onClick={(e) => {
          handleStatusChange(e.target.checked, props.data_key, activeListData);
          e.stopPropagation();
        }}
      />
      <h3>{props.name}</h3>
      <p>{formatedDate}</p>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    tasksViewData: state.applicationReducer.tasksView,
    activeListData: state.listsReducer.activeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveTask(activeTask) {
      dispatch(updateActiveTaskActionCreator(activeTask));
    },
    updateTaskData(data) {
      dispatch(updateTaskDataActionCreator(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
