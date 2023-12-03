import React from "react";
import styled from "styled-components/native";
const UserDataContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 30px;
`;
const Header = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(62, 84, 129, 1);
  margin-bottom: 5px;
`;
const SubHeader = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(159, 165, 192, 1);
`;
const UserDataItem = styled.View``;

interface data {
  recipeNumbers: number;
  following: number;
  followers: number;
}
export default function UserData({
  recipeNumbers,
  following,
  followers,
}: data) {
  return (
    <UserDataContainer>
      <UserDataItem>
        <Header>{recipeNumbers}</Header>
        <SubHeader>Recipes</SubHeader>
      </UserDataItem>
      <UserDataItem>
        <Header>{following}</Header>
        <SubHeader>Following</SubHeader>
      </UserDataItem>
      <UserDataItem>
        <Header>{followers.toLocaleString()}</Header>
        <SubHeader>Followers</SubHeader>
      </UserDataItem>
    </UserDataContainer>
  );
}
