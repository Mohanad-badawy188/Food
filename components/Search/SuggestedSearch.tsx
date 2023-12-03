import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 30px 25px;
`;
const Header = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: rgba(62, 84, 129, 1);
  margin-bottom: 20px;
`;
const SuggestionContainer = styled.View`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: row;
`;
const SuggesttedItem = styled.Text`
  margin: 15px;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(62, 84, 129, 1);
  background-color: rgba(244, 245, 247, 1);
  padding: 15px 24px;
  width: fit-content;
  border-radius: 32px;
`;
export default function SuggestedSearch() {
  return (
    <Container>
      <Header>Search suggestions</Header>
      <SuggestionContainer>
        <SuggesttedItem>Sushi</SuggesttedItem>
        <SuggesttedItem>Sandwich</SuggesttedItem>
      </SuggestionContainer>
      <SuggestionContainer>
        <SuggesttedItem>Seafood</SuggesttedItem>
        <SuggesttedItem>Fried rice</SuggesttedItem>
      </SuggestionContainer>
    </Container>
  );
}
