import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, UserInfo } from "./styles";
import api from "../../service/api";
import GroupItem from "../../components/GroupItem/GroupItem";
import avatarImg from "../../assets/perfil.jpg";
import {
  updateActiveListActionCreator,
  updateListsActionCreator,
} from "../../store/actions/lists";
import { createListOnDB, getListsFromDB } from "../../service/apiFunctions";

const NavBar = (props) => {
  const { listsData, activeListData, updateActiveList, updateLists } = props;

  const handleShowInput = useCallback(() => {
    const addListEl = [...document.getElementsByClassName("addList")][0];
    const inputEl = [...document.getElementsByClassName("listNameInput")][0];
    inputEl.classList.toggle("active");
    addListEl.classList.toggle("inactive");
  }, []);

  const [newListName, setNewListName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await createListOnDB(newListName);
    const lists = await getListsFromDB();
    updateLists(lists.data.data);
    handleShowInput();
    setNewListName("");
  }

  return (
    <Container>
      <div className="addList" onClick={() => handleShowInput()}>
        Nova Lista ➕
      </div>
      <div className="listNameInput">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
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
      <div className="wrapper">
        {listsData.map((list) => {
          if (list.type === "fixed") {
            return (
              <Link
                key={list.id}
                data_key={list.id}
                to={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  updateActiveList(list, listsData);
                }}
              >
                <GroupItem
                  active={activeListData?.name === list.name}
                  icon={list.icon}
                  name={list.name}
                  qnt={list.tasks.length}
                />
              </Link>
            );
          }
        })}
      </div>
      <div className="BottomBar">
        <div className="Bar"></div>
      </div>
      {listsData.map((list) => {
        if (list.type === "list") {
          return (
            <Link
              key={list.id}
              data_key={list.id}
              to={"/"}
              onClick={() => {
                updateActiveList(list, listsData);
              }}
            >
              <GroupItem
                active={activeListData?.name === list.name}
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
    listsData: state.listsReducer.lists,
    activeListData: state.listsReducer.activeList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateActiveList(activeList, lists) {
      dispatch(updateActiveListActionCreator(activeList, lists));
    },
    updateLists(lists) {
      dispatch(updateListsActionCreator(lists));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
