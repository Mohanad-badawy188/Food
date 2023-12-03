import React from "react";
import styled from "styled-components/native";
import { AreaView } from "../components/GLobalStyles";
const Container = styled.View``;
const Header = styled.Text`
  font-size: 22px;
`;
export default function ScanScreen() {
  return (
    <AreaView>
      <Container>
        <Header>ScanScreen</Header>
      </Container>
    </AreaView>
  );
}
