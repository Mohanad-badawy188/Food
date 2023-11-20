import React from "react";
import { Text } from "react-native/Libraries/Text/Text";
import styled from "styled-components/native";
const ItemBody = styled.View`
  margin: 10px 5px;
  height: 250px;
  width: 150px;
  display: flex;
  justify-content: center;
`;
const UserInfo = styled.View`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  margin-bottom: 8px;
`;
const UserImg = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  margin-right: 15px;
  margin-left: 5px;
`;
const UserName = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.5px;
  color: rgba(46, 62, 92, 1);
`;
const FoodImg = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 15px;
`;
const FoodTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: rgba(62, 84, 129, 1);
  margin-top: 5px;
`;
const FoodInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 5px;
`;
const FoodDescription = styled.Text`
  color: rgba(159, 165, 192, 1);
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-align: left;
  margin-right: 6px;
`;

interface item {
  item: {
    name: string;
    id: string;
    img: string;
    AVGTime: number;
    category: string;
    author: author;
  };
}
interface author {
  img: string;
  name: string;
}

export default function FoodItem({ item }: item) {
  return (
    // <Text></Text>
    <ItemBody>
      <UserInfo>
        <UserImg source={{ uri: item.author.img }} />
        <UserName>{item.author.name}</UserName>
      </UserInfo>
      <FoodImg source={{ uri: item.img }} />
      <FoodTitle>{item.name}</FoodTitle>
      <FoodInfo>
        <FoodDescription>{item.category}</FoodDescription>
        <FoodDescription> {item.AVGTime} mins</FoodDescription>
      </FoodInfo>
    </ItemBody>
  );
}
