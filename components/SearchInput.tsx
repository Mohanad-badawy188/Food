import React, { useState } from "react";
import styled from "styled-components/native";
import { useRoute } from "@react-navigation/native";
import SearchIcon from "../assets/search.png";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View<{ width: string }>`
  text-align: center;
  width: ${(props) => props.width || "50px"};
`;
const InputBody = styled.View`
  height: 55px;
  width: 100%;

  border-radius: 32px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 25px;
  background-color: rgba(244, 245, 247, 1);
`;
const LoginInput = styled.TextInput`
  color: rgba(159, 165, 192, 1);
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding: 0px 15px;
  height: 100%;
  font-size: 15px;
  width: 100%;
  font-weight: 500;
  line-height: 18px;
  color: rgba(159, 165, 192, 1);
`;

const Icon = styled.Image`
  height: 25px;
  width: 25px;
`;

export default function SearchInput({ width }: any) {
  const route = useRoute();
  const navigation: any = useNavigation();
  console.log(route.name);
  return (
    <Container width={width}>
      <InputBody>
        <Icon source={SearchIcon} />
        <LoginInput
          placeholder={"Search"}
          onFocus={() => {
            if (route.name !== "Search") {
              navigation.navigate("Search");
            }
          }}
          onChangeText={(newText) => {}}
        />
      </InputBody>
    </Container>
  );
}
