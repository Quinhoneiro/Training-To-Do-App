import React from "react";
import Content from "../Content/Content";
import NavBar from "../NavBar/NavBar";
import OptionBar from "../OptionBar/OptionBar";
import { Container } from "./styles";

const MainPage = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <Content></Content>
      <OptionBar></OptionBar>
    </Container>
  );
};

export default MainPage;
