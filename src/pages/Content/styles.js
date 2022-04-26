import styled, { css } from "styled-components";
import backGroundImg from "../../assets/landscape.jpg";

export const Container = styled.section`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  color: #016064;
  width: 100%;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-end;

  padding-left: 2rem;
  padding-bottom: 1.5rem;

  background-image: linear-gradient(to bottom, #afdceced, #afdceced),
    url(${backGroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;

  & .addTask {
    font-size: 1.4rem;
    position: absolute;
    bottom: 15px;
    right: 15px;
    padding: 0.5em 1.5rem;
    border-radius: 5px;
    background-color: #ddd;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(103%);
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
    }
    &:active {
      transform: scale(100%);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  & span {
    font-size: 2rem;
  }

  & .GrupoAtivo {
    padding-bottom: 0.5rem;

    & span {
      font-size: 3rem;
    }
    & strong {
      margin-left: 0.5rem;
      font-size: 3rem;
      font-weight: 500;
    }
  }

  & .NovaTarefa {
    display: inline-block;
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 3px 4px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease-in-out;
    transform-origin: center center;
    &:hover {
      transform: scale(102%);
      box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(101%);
      box-shadow: 3px 4px 2px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const Tasks = styled.div`
  background-color: #fff;
  padding: 3rem;
  padding-top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100% - 15rem);

  & .SuperiorBar {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 1.5rem 0;
  }

  & section {
    overflow-y: auto;

    ${(props) =>
      props.view == "list" &&
      css`
        display: flex;
        flex-direction: column;
      `}
    ${(props) =>
      props.view == "module" &&
      css`
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
        /* align-items: start;
        justify-items: center;
        justify-content: start;
        grid-auto-rows: auto; */
      `};
  }
`;
