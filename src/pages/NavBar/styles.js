import styled from "styled-components";

export const Container = styled.nav`
  width: 27rem;
  min-height: 100vh;
  background-color: #fff;
  border-right: 1px solid #d9dddc;
  position: relative;

  & .listNameInput {
    font-size: 1.4rem;
    position: absolute;
    bottom: 15px;
    right: 15px;
    padding: 0.5em 1.5rem;
    border-radius: 5px;
    background-color: #ddd;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
    display: flex;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transform: scale(10%);

    & input {
      border: none;
      background-color: #eee;
      padding: 3px;
      margin-right: 1rem;
      color: #333;
    }
    & button {
      border: none;
      background-color: transparent;
      &:hover {
        transform: scale(105%);
      }
    }
  }

  & .active {
    z-index: 1;
    opacity: 1;
    transform: scale(100%) translateY(-115%);
  }
  & .inactive {
    opacity: 0.5;
  }

  & .addList {
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

  & a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }

  & .AppName {
    font-size: 1.6rem;
    font-weight: normal;
    margin-left: 2rem;
    padding-top: 1rem;
    color: #999;
    display: inline-block;
  }

  & .BottomBar {
    display: flex;
    height: 5px;
    margin: 1rem 0;
    justify-content: center;

    & .Bar {
      height: 5px;
      width: 85%;
      border-bottom: 1px solid #d9dddc;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 2rem;
  & img {
    width: 3rem;
    border-radius: 50%;
  }

  & .Name {
    margin-left: 1rem;
    padding-bottom: 0.4rem;
    align-self: flex-end;
  }

  & .Search {
    flex: 1;
    text-align: right;
    display: inline-block;

    & span {
      display: inline-block;
      transition: all 0.2s ease-in-out;
      transform-origin: center center;
      cursor: pointer;

      &:hover {
        transform: scale(120%);
      }
      &:active {
        transform: scale(110%);
      }
    }
  }
`;
