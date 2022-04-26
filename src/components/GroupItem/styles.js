import { shade } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  height: 4rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  position: relative;

  ${(props) =>
    props.active &&
    css`
      &::before {
        content: "";
        position: absolute;
        width: 5px;
        height: 100%;
        background-color: #63c5da;
        top: 0;
        left: 0;
      }
    `}

  &:hover {
    background-color: ${shade(0.05, "#fff")};
    & .Name {
      transform: translateX(5px);
    }
  }

  & .Icon {
    font-size: 2.2rem;
    margin-left: 2rem;
  }

  & .Name {
    transition: all 0.2s ease-in-out;
    margin-left: 1.5rem;
  }

  & .Info {
    flex: 1;
    text-align: right;
    margin-right: 2.5rem;
    color: #999;
  }
`;
