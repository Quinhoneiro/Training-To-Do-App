import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "./styles";
import Checkbox from "@mui/material/Checkbox";
import { format } from "date-fns";
import { updateActiveTaskActionCreator } from "../../store/actions/tasks";

const TaskItem = (props) => {
  const { tasksViewData, updateActiveTask } = props;

  const [checked, setChecked] = React.useState(props.checked);
  const formatedDate = props.date && format(new Date(props.date), "dd/MM/yyyy");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function handleTaskClick(active) {
    active ? updateActiveTask({}) : updateActiveTask(props.data_key);
  }

  return (
    <Container
      onClick={() => handleTaskClick(props.active)}
      view={tasksViewData}
      active={props.active}
    >
      <Checkbox
        className="ckb"
        size="large"
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        onClick={() => console.log("Blatz")}
      />
      <h3>{props.name}</h3>
      <p>{formatedDate}</p>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    tasksViewData: state.applicationReducer.tasksView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveTask(activeTask) {
      dispatch(updateActiveTaskActionCreator(activeTask));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
