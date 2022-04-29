import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  background-color: #ddd;
  transition: all 0.3s;
  cursor: pointer;

  & .ckb {
    z-index: 1000;
  }

  &:hover {
    background-color: ${shade(0.1, "#ddd")};
  }
  &:active {
    background-color: ${shade(0.2, "#ddd")};
  }

  & h3 {
    font-weight: normal;
    font-size: 1.8rem;
    margin-left: 4px;
  }

  & p {
    font-size: 1.4rem;
    color: #777;
    margin-left: 1rem;
  }

  ${(props) =>
    props.view == "list" &&
    css`
      padding: 1rem;
      width: 100%;
      height: 6rem;

      display: flex;
      align-items: center;

      margin-top: 5px;
    `}
  ${(props) =>
    props.view == "module" &&
    css`
      padding: 1rem;
      min-width: 20rem;
      max-width: 100%;
      min-height: 20rem;
      max-height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-top: 0px;

      & h3 {
        font-weight: normal;
        font-size: 1.8rem;
        margin-left: 0;
        margin-bottom: 5px;
        text-align: center;
      }
    `}


  ${(props) =>
    props.active &&
    css`
      background-color: ${shade(0.1, "#ddd")};
      border: 1px solid #aaa;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
      color: #000;
    `}
`;
