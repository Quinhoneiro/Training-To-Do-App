import React, { useState } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { VscClose } from "react-icons/vsc";
import { changeActiveTask } from "../../store/actions/tasks";

const MainPage = (props) => {
  const { activeTask, createActionChangeActiveTask } = props;
  return (
    <Container visible={props.activeTask.id && true}>
      <VscClose onClick={(e) => createActionChangeActiveTask({})}></VscClose>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    activeTask: state.tasks.activeTask,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createActionChangeActiveTask(activeTask) {
      const action = changeActiveTask(activeTask);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
