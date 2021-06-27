import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <Container>
      <Label>© Souleimane Kouygou 2021</Label>
    </Container>
  );
};

const Label = styled.Text`
  font-size: 11px;
  font-weight: 600;
  text-align: center;
`;

const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  align-items: center;
`;

export default Copyright;
