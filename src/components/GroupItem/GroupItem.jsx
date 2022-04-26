import React from 'react';
import { Container } from './styles';

const GroupItem = props => {
  return (
    <Container active={props.active}>
      <span className="Icon">{props.icon}</span>
      <span className="Name">{props.name}</span>
      <p className="Info">{props.qnt}</p>
    </Container>
  );
};

export default GroupItem;
