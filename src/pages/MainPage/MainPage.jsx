import React, { useEffect } from "react";
import Content from "../Content/Content";
import NavBar from "../NavBar/NavBar";
import OptionBar from "../OptionBar/OptionBar";
import { Container } from "./styles";
import { updateListsActionCreator } from "../../store/actions/lists";
import { connect } from "react-redux";
import { getListsFromDB } from "../../service/apiFunctions";

const MainPage = (props) => {
  const { updateList } = props;

  useEffect(() => {
    async function getStart() {
      const lists = await getListsFromDB();
      updateList(lists.data.data);
    }
    getStart();
  }, []);

  console.log(
    "Este componente nunca deve ser renderizado após a inicialização..."
  );

  return (
    <Container>
      <NavBar></NavBar>
      <Content></Content>
      <OptionBar></OptionBar>
    </Container>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    updateList(lists) {
      const action = updateListsActionCreator(lists);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
