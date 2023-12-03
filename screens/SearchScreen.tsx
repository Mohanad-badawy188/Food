import React from "react";
import styled from "styled-components/native";
import { AreaView } from "../components/GLobalStyles";
import SearchInput from "../components/SearchInput";
import Icon from "react-native-vector-icons/MaterialIcons";
import Filter from "../assets/Filter.png";
import PrevSearch from "../components/Search/PrevSearch";
import SuggestedSearch from "../components/Search/SuggestedSearch";

const Body = styled.View`
  background-color: white;
  flex: 1;
  padding: 25px 0px;
`;
const HeaderBar = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  align-self: center;
`;
const FilterImg = styled.Image`
  height: 24px;
  width: 24px;
`;

export default function SearchScreen({ navigation }: any) {
  return (
    <AreaView>
      <Body>
        <HeaderBar>
          <Icon
            name="arrow-back-ios"
            size={20}
            onPress={() => navigation.goBack()}
          />
          <SearchInput width={"75%"} />
          <FilterImg source={Filter} />
        </HeaderBar>
        <PrevSearch />
        <SuggestedSearch />
      </Body>
    </AreaView>
  );
}
