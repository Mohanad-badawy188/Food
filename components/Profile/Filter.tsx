import React from "react";
import styled from "styled-components/native";
const FilterByContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const FilterBy = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 60px;
  border-bottom-width: ${(props) => (props.active ? "3px" : "1px")};
  border-bottom-color: ${(props) =>
    props.active ? "rgba(31, 204, 121, 1)" : "rgba(208, 219, 234, 1)"};
`;
const FilterByText = styled.Text<{ active: boolean }>`
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: ${(props) =>
    props.active ? "rgba(62, 84, 129, 1)" : "rgba(159, 165, 192, 1)"};
`;
interface filters {
  filterBy: string;
  setFilterBy: any;
}
export default function Filter({ filterBy, setFilterBy }: filters) {
  return (
    <FilterByContainer>
      <FilterBy
        onPress={() => setFilterBy("Recipes")}
        active={filterBy === "Recipes"}>
        <FilterByText active={filterBy === "Recipes"}>Recipes</FilterByText>
      </FilterBy>
      <FilterBy
        onPress={() => setFilterBy("Liked")}
        active={filterBy === "Liked"}>
        <FilterByText active={filterBy === "Liked"}>Liked</FilterByText>
      </FilterBy>
    </FilterByContainer>
  );
}
