import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.aside`
  min-height: 100vh;
  background-color: #fff;
  border-left: 1px solid #d9dddc;
  transition: all 0.5s;
  width: 0;
  position: relative;
  display: flex;

  & .CloseButton {
    z-index: 1000;
    position: absolute;
    right: -10rem;
    top: 1rem;
    background-color: #d9dddc;
    padding: 0.5rem;
    font-size: 2.5rem;
    border-radius: 50%;
    color: #333;
    cursor: pointer;
    transition: all 0.4s;

    ${(props) =>
      props.visible &&
      css`
        right: 1rem;
      `};
  }

  & .wrapper {
    opacity: 0;
    transform: translateX(200%);
    transition: all 0.5s;

    & .buttons {
      background-color: #ddd;
      border: none;
      padding: 1rem 2rem;
      border-radius: 5px;
      transition: all 0.2s;
    }
    & .btn-save {
      background-color: #afdceced;
      font-weight: bold;
      &:hover {
        background-color: ${shade(0.1, "#afdceced")};
      }
    }
    & .btn-delete {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ddd;
      font-weight: bold;
      font-size: 2rem;
      padding: 1rem 1rem;
      border-radius: 50%;
      position: absolute;
      right: 1rem;
      bottom: 1.5rem;
      &:hover {
        background-color: ${shade(0.1, "#ddd")};
        transform: scale(103%);
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
      }
    }
  }

  ${(props) =>
    props.visible &&
    css`
      width: 27rem;
      & .wrapper {
        transform: translateX(0);
        opacity: 1;
      }
    `};

  & form {
    margin: 6rem 2rem;
    display: flex;
    flex-direction: column;

    & label {
      font-size: 1.4rem;
    }
    & input {
      padding: 1rem;
      padding-bottom: 0.5rem;
      font-size: 1.6rem;
      font-family: inherit;
      border: none;
      border-bottom: 1px solid #333;
      width: 100%;
      background-color: #d9dddc;
    }
    & input:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
