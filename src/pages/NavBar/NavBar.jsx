import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, UserInfo } from "./styles";
import api from "../../service/api";
import { getListsFromDB, changeActiveList } from "../../store/actions/lists";
import GroupItem from "../../components/GroupItem/GroupItem";
import avatarImg from "../../assets/perfil.jpg";
import { updateTaskList } from "../../store/actions/tasks";

const NavBar = (props) => {
  const {
    lists,
    activeList,
    getLists,
    changeActiveList,
    createActionUpdateTaskList,
    createNewList,
  } = props;

  const start = useEffect(() => {
    getLists();
  }, []);

  const handleShowInput = useCallback(() => {
    const addListEl = [...document.getElementsByClassName("addList")][0];
    const inputEl = [...document.getElementsByClassName("listNameInput")][0];
    inputEl.classList.toggle("active");
    addListEl.classList.toggle("inactive");
  }, []);

  const handleSubmit = useCallback(async (newListName) => {
    await createNewList(newListName);
    await getLists();
    handleShowInput();
    setNewListName("");
  }, []);

  const [newListName, setNewListName] = useState("Teste");

  return (
    <Container>
      <div className="addList" onClick={() => handleShowInput()}>
        Nova Lista ➕
      </div>
      <div className="listNameInput">
        <form
          onSubmit={(e) => {
            e.preventDefault(0);
            handleSubmit(newListName);
          }}
        >
          <label htmlFor="inputListName">
            <input
              type="text"
              placeholder="Nome da Lista"
              name="inputListName"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
          </label>
          <button>➕</button>
        </form>
      </div>
      <h1 className="AppName">Training To Do</h1>
      <UserInfo>
        <img src={avatarImg} alt="Avatar" />
        <span className="Name">Fernando Quinhoneiro</span>
        <div className="Search">
          <span>🔎</span>
        </div>
      </UserInfo>
      {lists.map((list) => {
        if (list.type === "fixed") {
          return (
            <Link
              key={list.id}
              data_key={list.id}
              to={"/"}
              onClick={(e) => {
                e.preventDefault();
                changeActiveList(list);
                createActionUpdateTaskList(list);
              }}
            >
              <GroupItem
                active={activeList.name === list.name}
                icon={list.icon}
                name={list.name}
                qnt={list.tasks.length}
              />
            </Link>
          );
        }
      })}
      <div className="BottomBar">
        <div className="Bar"></div>
      </div>
      {lists.map((list) => {
        if (list.type === "list") {
          return (
            <Link
              key={list.id}
              data_key={list.id}
              to={"/"}
              onClick={(e) => {
                e.preventDefault();
                changeActiveList(list);
                createActionUpdateTaskList(list);
              }}
            >
              <GroupItem
                active={activeList.name === list.name}
                icon={list.icon}
                name={list.name}
                qnt={list.tasks.length}
              />
            </Link>
          );
        }
      })}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    activeList: state.lists.activeList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    async getLists() {
      const response = await api.get("lists");
      const action = getListsFromDB(response.data.data);
      dispatch(action);
    },
    changeActiveList(activeList) {
      const action = changeActiveList(activeList);
      dispatch(action);
    },
    createActionUpdateTaskList(activeList) {
      const taskList = activeList.tasks;
      const action = updateTaskList(taskList);
      dispatch(action);
    },
    async createNewList(listName) {
      const list = await api.post("lists", {
        name: listName,
        type: "list",
        icon: "✅",
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
