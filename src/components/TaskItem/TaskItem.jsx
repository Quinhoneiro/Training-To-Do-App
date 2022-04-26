import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "./styles";
import Checkbox from "@mui/material/Checkbox";
import { format } from "date-fns";
import { changeActiveTask } from "../../store/actions/tasks";

const TaskItem = (props) => {
  const { tasksView, activeTask, createActionChangeActiveTask } = props;
  const [checked, setChecked] = React.useState(props.checked);
  const formatedDate = props.date && format(new Date(props.date), "dd/MM/yyyy");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleTaskClick = (active) => {
    active
      ? createActionChangeActiveTask({})
      : createActionChangeActiveTask({ id: props.data_key });
  };

  return (
    <Container
      view={tasksView}
      active={props.active}
      onClick={(e) => handleTaskClick(props.active)}
    >
      <Checkbox
        size="large"
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <h3>{props.name}</h3>
      <p>{formatedDate}</p>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTask: state.tasks.activeTask,
    tasksView: state.application.tasksView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createActionChangeActiveTask(activeTask) {
      const action = changeActiveTask(activeTask);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
