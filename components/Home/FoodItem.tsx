import React from "react";
import styled from "styled-components/native";
const ItemBody = styled.View``;
const UserInfo = styled.View``;
const UserImg = styled.Image``;
const UserName = styled.Text``;
const FoodImg = styled.Image``;
const FoodTitle = styled.Text``;
const FoodInfo = styled.View``;
const FoodType = styled.Text``;
const FoodDuration = styled.Text``;
const FoodItem = () => {
  return (
    <ItemBody>
      <UserInfo>
        <UserImg source={require("")} />
        <UserName></UserName>
      </UserInfo>
      <FoodImg source={require("")} />
      <FoodTitle></FoodTitle>
      <FoodInfo>
        <FoodType></FoodType>
        <FoodDuration></FoodDuration>
      </FoodInfo>
    </ItemBody>
  );
};

export default FoodItem;
