import styled, { css } from "styled-components";

export const Container = styled.aside`
  min-height: 100vh;
  background-color: #fff;
  border-left: 1px solid #d9dddc;
  transition: all 0.5s;
  width: 0;
  ${(props) =>
    props.visible &&
    css`
      width: 27rem;
    `};
`;
